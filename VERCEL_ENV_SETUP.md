# Vercel Environment Variables Configuration

This document provides the exact environment variables needed to deploy the contact form email functionality on Vercel.

## Environment Variables Required

The following environment variables must be added to your Vercel project:

| Variable Name | Description | Example Value | Required |
|---|---|---|---|
| `GODADDY_SMTP_HOST` | GoDaddy SMTP server hostname | `smtp.godaddy.com` | Yes |
| `GODADDY_SMTP_PORT` | GoDaddy SMTP server port | `465` | Yes |
| `GODADDY_SMTP_USER` | Authenticated SMTP email address | `management@estatement.in` | Yes |
| `GODADDY_SMTP_PASS` | GoDaddy SMTP account password | Your password here | Yes |
| `RECEIVER_EMAIL` | Email address to receive inquiries | `management@estatement.in` | Yes |

## How to Add Environment Variables to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project (Estatement Realty website)
3. Navigate to **Settings** → **Environment Variables**
4. Click **Add New** for each variable:
   - **Name**: `GODADDY_SMTP_HOST`
   - **Value**: `smtp.godaddy.com`
   - **Environments**: Select all (Development, Preview, Production)
5. Repeat for each of the 5 variables listed above

### Method 2: Via Vercel CLI

If you have Vercel CLI installed:

```bash
vercel env add GODADDY_SMTP_HOST
vercel env add GODADDY_SMTP_PORT
vercel env add GODADDY_SMTP_USER
vercel env add GODADDY_SMTP_PASS
vercel env add RECEIVER_EMAIL
```

## Variable Details

### GODADDY_SMTP_HOST
- **Purpose**: SMTP server address for sending emails
- **Value**: `smtp.godaddy.com`
- **Port**: `465` (secure/TLS) or `587` (TLS)
- **Obtain from**: GoDaddy control panel or hosting documentation

### GODADDY_SMTP_PORT
- **Purpose**: SMTP server port
- **Value**: `465` (recommended for security)
- **Alternative**: `587`
- **Note**: Port 465 requires secure connection (SSL/TLS)

### GODADDY_SMTP_USER
- **Purpose**: Email address used to authenticate with SMTP server
- **Value**: Your email address (e.g., `management@estatement.in`)
- **Note**: This email will appear as the sender in all emails sent through this system

### GODADDY_SMTP_PASS
- **Purpose**: Password for SMTP authentication
- **Value**: Your GoDaddy email account password
- **Security**: ⚠️ Keep this confidential. Never commit to version control.
- **Obtain from**: GoDaddy control panel
- **Note**: This may differ from your website login password

### RECEIVER_EMAIL
- **Purpose**: Email address where website inquiries are received
- **Value**: `management@estatement.in`
- **Note**: Can be different from GODADDY_SMTP_USER if desired

## Environment Deployment Strategy

### Recommended Configuration

Set all variables to all environments for consistent functionality:

| Environment | Enabled |
|---|---|
| Production | ✓ Yes |
| Preview | ✓ Yes |
| Development | ✓ Yes |

This ensures:
- Production: Live website uses real SMTP credentials
- Preview: Vercel preview deployments can test the full email workflow
- Development: Local testing with `.env.local` file

## Local Development Setup

For local development, create a `.env.local` file in your project root:

```
GODADDY_SMTP_HOST=smtp.godaddy.com
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=management@estatement.in
GODADDY_SMTP_PASS=your-password-here
RECEIVER_EMAIL=management@estatement.in
```

⚠️ **Important**: `.env.local` is in `.gitignore` and will NOT be committed to Git.

## Email Flow After Setup

Once variables are configured:

1. **Visitor submits contact form** → Data sent to `/api/contact` endpoint
2. **Server validates** → Checks required fields and email format
3. **Management email sent** → Inquiry details sent to `RECEIVER_EMAIL`
4. **Confirmation email sent** → Customer confirmation sent from `GODADDY_SMTP_USER`
5. **Response to user** → Success message displayed in browser

## Testing the Configuration

### Test on Vercel Preview

1. Make a test commit and push to GitHub
2. Vercel automatically creates a Preview deployment
3. Submit the contact form on the preview site
4. Check inbox for emails from `GODADDY_SMTP_USER`

### Test Locally

1. Update `.env.local` with test credentials
2. Run `npm run dev`
3. Submit form at `http://localhost:5173`
4. Check inbox for test emails

## Troubleshooting

### Emails Not Sending

1. **Verify SMTP credentials** are correct in Vercel
2. **Check email limits** - GoDaddy may have sending limits
3. **Enable less secure apps** - Some email providers require this
4. **Check spam folder** - Emails might be filtered
5. **Review server logs** - Check Vercel function logs for errors

### SMTP Connection Errors

- Verify `GODADDY_SMTP_PORT` matches your provider (usually 465 or 587)
- Ensure `GODADDY_SMTP_HOST` is correct (usually `smtp.godaddy.com`)
- Check firewall/network settings aren't blocking the port

### Authentication Failures

- Verify `GODADDY_SMTP_USER` is the full email address
- Verify `GODADDY_SMTP_PASS` is correct (check for extra spaces)
- Reset password on GoDaddy if unsure

## Security Best Practices

1. ✓ Never commit `.env.local` to Git (already in `.gitignore`)
2. ✓ Use separate SMTP credentials for production
3. ✓ Rotate passwords periodically
4. ✓ Use Vercel's built-in environment encryption
5. ✓ Never prefix SMTP variables with `NEXT_PUBLIC_` (would expose them)
6. ✓ Verify sender domain in email client settings if available

## Support

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/environment-variables
- **GoDaddy SMTP**: https://www.godaddy.com/help/send-an-email-using-your-godaddyhosted-website-12055
- **Nodemailer Docs**: https://nodemailer.com/

## API Endpoint Details

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Content-Type**: application/json
- **Expected Payload**:
  ```json
  {
    "name": "Customer Name",
    "email": "customer@example.com",
    "phone": "+91-1234567890",
    "interest": "buying",
    "message": "Customer message here"
  }
  ```

- **Success Response** (200 OK):
  ```json
  {
    "success": true,
    "message": "Your inquiry has been successfully submitted..."
  }
  ```

- **Error Response** (400/500):
  ```json
  {
    "error": "User-friendly error message"
  }
  ```
