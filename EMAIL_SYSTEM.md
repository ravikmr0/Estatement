# Contact Form Email System Implementation

This document describes the secure, production-ready email system implemented for the Estatement Realty website's contact form.

## Architecture Overview

### Technology Stack
- **Framework**: React 18 + Vite
- **Hosting**: Vercel (Serverless Functions)
- **Email Service**: GoDaddy SMTP (via Nodemailer)
- **Language**: TypeScript + JavaScript

### Email Workflow

```
User Submits Contact Form
         ↓
   /api/contact (Server-side API)
         ↓
    ┌─────┴─────┐
    ↓           ↓
Management   Customer
Email        Confirmation
```

## Project Structure

```
Estatement/
├── api/
│   └── contact.ts                 # Serverless API endpoint for email handling
├── src/
│   ├── pages/
│   │   └── Contact.tsx            # Updated contact form component
│   └── pages/
│       └── pages.css              # Updated styles with loading/error states
├── .env.local                     # Local development environment variables (gitignored)
├── .env.example                   # Example environment variables template
├── VERCEL_ENV_SETUP.md            # Vercel environment setup instructions
├── vercel.json                    # Updated Vercel configuration
├── package.json                   # Updated dependencies
└── tsconfig.json                  # TypeScript configuration
```

## Key Features

### 1. Server-Side Security
- ✓ SMTP credentials never exposed to frontend
- ✓ All validation performed on server
- ✓ Input sanitization to prevent injection attacks
- ✓ Secure environment variable handling

### 2. Email Validation
- Client-side: Quick feedback for user
- Server-side: Comprehensive validation before sending
- Email format validation
- Message length validation (min 10 characters)

### 3. Dual Email System
- **Management Email**: Receives full inquiry details
  - From: `GODADDY_SMTP_USER` (authenticated sender)
  - To: `RECEIVER_EMAIL` (management@estatement.in)
  - Contains all form data with timestamp
  
- **Customer Confirmation Email**: Professional acknowledgment
  - From: `GODADDY_SMTP_USER` (same authenticated sender)
  - To: Customer's submitted email address
  - Confirms receipt and sets expectations

### 4. Error Handling
- Graceful fallback messages
- SMTP connection verification
- Failed email detection with proper response codes
- User-friendly error messages (no internal details exposed)

### 5. User Experience
- **Loading State**: Disabled form + spinner during submission
- **Success Message**: Displays for 10 seconds then auto-clears
- **Error Handling**: Users can retry after failure
- **Form Reset**: Only resets after successful submission

## Installation & Deployment

### 1. Install Dependencies
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

### 2. Local Development
Create `.env.local`:
```
GODADDY_SMTP_HOST=smtp.godaddy.com
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=management@estatement.in
GODADDY_SMTP_PASS=your-password
RECEIVER_EMAIL=management@estatement.in
```

### 3. Vercel Deployment
Add these environment variables in Vercel Dashboard:
- `GODADDY_SMTP_HOST`
- `GODADDY_SMTP_PORT`
- `GODADDY_SMTP_USER`
- `GODADDY_SMTP_PASS`
- `RECEIVER_EMAIL`

See [VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md) for detailed instructions.

## API Endpoint: `/api/contact`

### Request Format
- **Method**: POST
- **Content-Type**: application/json
- **Path**: `/api/contact`

### Payload
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+91-1234567890",
  "interest": "buying",
  "message": "I am interested in buying a property in Noida"
}
```

### Response: Success (200)
```json
{
  "success": true,
  "message": "Your inquiry has been successfully submitted. Please check your email for confirmation."
}
```

### Response: Error (400/500)
```json
{
  "error": "User-friendly error message"
}
```

## Security Considerations

### Environment Variables
- **Never commit `.env.local`** to Git (in `.gitignore`)
- Use Vercel's built-in encryption for production variables
- Rotate SMTP passwords periodically
- Use separate credentials for development/production if possible

### SMTP Credentials
- `GODADDY_SMTP_USER`: Must be the full email address
- `GODADDY_SMTP_PASS`: Keep confidential, never hardcode
- `GODADDY_SMTP_PORT`: Use 465 (secure) when possible

### Frontend Validation
- Client-side validation for UX only
- Server-side validation is required and enforced
- Email addresses validated before sending confirmation

### Data Protection
- Form data not logged/stored (only sent via email)
- No database persistence of inquiries (per requirements)
- SMTP errors don't expose internal details to users

## HTML Email Templates

### Management Email Template
Located in: `api/contact.ts` → `createManagementEmailHTML()`

Includes:
- Customer Name
- Email Address
- Phone Number
- Interest/Requirement
- Message/Query
- Submission Date & Time (IST timezone)

### Customer Confirmation Email Template
Located in: `api/contact.ts` → `createCustomerConfirmationEmailHTML()`

Includes:
- Personalized greeting
- Confirmation of successful submission
- Contact information for urgent matters
- Company contact details
- Professional signature

## Environment Variable Requirements

| Variable | Required | Type | Example |
|----------|----------|------|---------|
| `GODADDY_SMTP_HOST` | Yes | String | `smtp.godaddy.com` |
| `GODADDY_SMTP_PORT` | Yes | Number | `465` |
| `GODADDY_SMTP_USER` | Yes | String | `management@estatement.in` |
| `GODADDY_SMTP_PASS` | Yes | String | `[password]` |
| `RECEIVER_EMAIL` | Yes | String | `management@estatement.in` |

## Testing

### Local Testing
1. Update `.env.local` with test credentials
2. Run `npm run dev`
3. Access contact form at `http://localhost:5173`
4. Submit test form
5. Check inbox for emails

### Vercel Preview Testing
1. Commit and push changes
2. Vercel automatically creates preview deployment
3. Test contact form on preview URL
4. Verify emails received

### Production Testing
1. Deploy to production
2. Submit real inquiry form
3. Verify:
   - Management receives inquiry email
   - Customer receives confirmation email
   - Both emails have correct sender
   - Timestamps are accurate

## Monitoring & Troubleshooting

### Common Issues

**Problem**: Form submission hangs or times out
- Check Vercel serverless function logs
- Verify SMTP credentials are correct
- Check SMTP port (465 vs 587)

**Problem**: Emails not received
- Check RECEIVER_EMAIL configuration
- Verify GODADDY_SMTP_USER is correct
- Check email spam/junk folder
- Verify GoDaddy account allows SMTP access

**Problem**: SMTP authentication fails
- Verify GODADDY_SMTP_PASS is correct (no extra spaces)
- Check if GoDaddy requires "less secure apps" setting
- Ensure GODADDY_SMTP_USER is full email address

### Logs
- Vercel Logs: Dashboard → Project → Logs → Function Logs
- Local Logs: Console output when running `npm run dev`
- API Errors: Check browser DevTools Network tab

## Performance Considerations

- API response time: ~2-3 seconds (SMTP latency)
- Serverless cold start: ~1-2 seconds (first request)
- Form validation: <50ms (client-side)
- Email delivery: Usually <1 minute

## Future Enhancements

Possible improvements for future versions:
- Database storage of inquiries
- Admin dashboard to view inquiries
- Email delivery confirmation/status tracking
- Multiple email recipients
- Custom email templates per inquiry type
- Scheduled email reminders for management
- CRM integration

## Support & Documentation

- **Vercel Serverless Functions**: https://vercel.com/docs/concepts/functions/serverless-functions
- **Nodemailer**: https://nodemailer.com/
- **GoDaddy SMTP**: https://www.godaddy.com/help/send-an-email-using-your-godaddyhosted-website-12055
- **Environment Variables**: See [VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md)

## File Manifest

### Created Files
- `api/contact.ts` - Serverless API endpoint
- `.env.local` - Local development environment variables
- `.env.example` - Environment variables template
- `VERCEL_ENV_SETUP.md` - Vercel configuration guide
- `EMAIL_SYSTEM.md` - This documentation file

### Modified Files
- `src/pages/Contact.tsx` - Updated with API integration and UX improvements
- `src/pages/pages.css` - Added loading spinner, error message styles
- `vercel.json` - Updated to properly handle API routes
- `package.json` - Added nodemailer dependency

## Deployment Checklist

Before deploying to production:

- [ ] Verify all 5 environment variables added to Vercel
- [ ] Test locally with `.env.local`
- [ ] Test on Vercel Preview deployment
- [ ] Check both management and customer emails are received
- [ ] Verify email formatting in actual email client
- [ ] Test error handling (simulate SMTP failure)
- [ ] Test with different email providers (Gmail, Outlook, etc.)
- [ ] Verify sender address shows correctly
- [ ] Check mobile/responsive form behavior
- [ ] Review Vercel function logs for any errors
- [ ] Confirm no sensitive data in error messages

---

**Last Updated**: 2026-09-02
**Version**: 1.0
**Status**: Ready for Production
