# EmailJS Setup Guide

Follow these steps to enable the contact form to send emails directly to your inbox!

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up using your email or Google account

## Step 2: Add Email Service

1. After logging in, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
3. Connect your email account
4. Give your service a name (e.g., "Portfolio Contact")
5. **Save the Service ID** - you'll need this!

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template structure:

**Subject:**
```
New Message from {{from_name}} - {{subject}}
```

**Content:**
```
You have received a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **Save the Template ID** - you'll need this!

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the sidebar
2. Find your **"Public Key"** (it looks like: `abcD1234EfG5678`)
3. **Copy this key**

## Step 5: Add Credentials to Your Website

1. Open **`script.js`** file
2. Find lines 355-357 (near the top of the Contact Form section)
3. Replace the placeholder values:

```javascript
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key_here';
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
```

**Example:**
```javascript
const EMAILJS_PUBLIC_KEY = 'abcD1234EfG5678';
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
```

## Step 6: Test Your Contact Form

1. Save your changes
2. Open your portfolio website
3. Fill out the contact form
4. Submit it
5. Check your email inbox - you should receive the message!

## Troubleshooting

### Form shows "EmailJS not configured"
- Make sure you replaced all three placeholder values in script.js
- Check that there are no typos in your credentials
- Refresh your webpage after making changes

### Email not received
- Check your spam/junk folder
- Verify that your service is connected properly in EmailJS dashboard
- Make sure you're within the free tier limit (200 emails/month)
- Check the browser console for error messages

### Template variables not working
- Make sure your template uses exactly these variable names:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`
  - `{{to_name}}`

## Security Note

Your EmailJS public key is safe to include in client-side JavaScript. It's designed to be public and only allows sending emails through your pre-configured template.

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- Your email: isurindurathmal@gmail.com
- Test the form after setup to make sure everything works!

---

**That's it! Your contact form is now ready to send emails directly to your inbox! 🎉**
