import nodemailer from 'nodemailer';

// Types for the request body
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

// Create HTML email for management
function createManagementEmailHTML(data: ContactFormData, submittedAt: string): string {
  const interest = data.interest || 'Not specified';
  const phone = data.phone ? sanitizeInput(data.phone) : 'Not provided';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
          .field-label { font-weight: bold; color: #1a1a1a; }
          .field-value { color: #555; margin-top: 5px; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Website Inquiry</h2>
          </div>
          <div class="content">
            <p>A new inquiry has been received through the website contact form.</p>
            
            <div class="field">
              <div class="field-label">Customer Name</div>
              <div class="field-value">${sanitizeInput(data.name)}</div>
            </div>

            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">${sanitizeInput(data.email)}</div>
            </div>

            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone}</div>
            </div>

            <div class="field">
              <div class="field-label">Interest / Requirement</div>
              <div class="field-value">${sanitizeInput(interest)}</div>
            </div>

            <div class="field">
              <div class="field-label">Message / Query</div>
              <div class="field-value">${sanitizeInput(data.message).replace(/\n/g, '<br>')}</div>
            </div>

            <div class="field">
              <div class="field-label">Submission Date & Time</div>
              <div class="field-value">${submittedAt}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent automatically from the Estatement Realty website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Create HTML email for customer confirmation
function createCustomerConfirmationEmailHTML(customerName: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; line-height: 1.6; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
          .signature { margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Query Received</h2>
          </div>
          <div class="content">
            <p>Dear ${sanitizeInput(customerName)},</p>

            <p>Thank you for reaching out to us! We have successfully received your inquiry.</p>

            <p>Our team at Estatement Realty Private Limited will carefully review your requirements and will get back to you shortly with the most relevant next steps tailored to your goals.</p>

            <p>If you have any urgent matters, please feel free to contact us directly:</p>
            <ul>
              <li><strong>Phone:</strong> +91-8750080023</li>
              <li><strong>Email:</strong> info@estatement.in | ajay@estatement.in</li>
              <li><strong>Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM IST</li>
            </ul>

            <div class="signature">
              <p>Best regards,</p>
              <p><strong>Estatement Realty Private Limited</strong></p>
              <p>A-74A, Sector 136, Noida, Gautam Buddha Nagar, Uttar Pradesh 201305, India</p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export default async function handler(
  req: any,
  res: any
): Promise<void> {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Extract and validate environment variables
    const smtpHost = process.env.GODADDY_SMTP_HOST;
    const smtpPort = process.env.GODADDY_SMTP_PORT;
    const smtpUser = process.env.GODADDY_SMTP_USER;
    const smtpPass = process.env.GODADDY_SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
      console.error('Missing SMTP configuration environment variables');
      res.status(500).json({
        error: 'Server configuration error. Please try again later.',
      });
      return;
    }

    // Parse and validate request body
    const body: ContactFormData = req.body;

    // Validate required fields
    if (!body.name || typeof body.name !== 'string') {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!body.email || typeof body.email !== 'string') {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    if (!body.message || typeof body.message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      res.status(400).json({ error: 'Message must be at least 10 characters long' });
      return;
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      res.status(500).json({
        error: 'Email service temporarily unavailable. Please try again later.',
      });
      return;
    }

    // Format submission date and time
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Send inquiry email to management
    const managementEmailHTML = createManagementEmailHTML(body, submittedAt);

    try {
      await transporter.sendMail({
        from: smtpUser,
        to: receiverEmail,
        subject: `New Website Inquiry – ${sanitizeInput(body.name)}`,
        html: managementEmailHTML,
        replyTo: body.email,
      });
    } catch (sendError) {
      console.error('Failed to send management email:', sendError);
      res.status(500).json({
        error: 'Failed to process your inquiry. Please try again later.',
      });
      return;
    }

    // Send confirmation email to customer
    const customerEmailHTML = createCustomerConfirmationEmailHTML(body.name);

    try {
      await transporter.sendMail({
        from: smtpUser,
        to: body.email,
        subject: 'Successfully Submitted – Your Query Has Been Received',
        html: customerEmailHTML,
      });
    } catch (sendError) {
      console.error('Failed to send customer confirmation email:', sendError);
      // Log the error but don't fail the entire request since the inquiry was sent
      // The customer can still check their email or contact directly
    }

    // Close transporter connection
    transporter.close();

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully submitted. Please check your email for confirmation.',
    });
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    res.status(500).json({
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
}
