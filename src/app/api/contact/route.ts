import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
      const { firstName, lastName, email, subject, message, location } = await request.json();

    // Create a transporter using Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,  // Your main workspace email
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
        from: {
          name: 'Atomic Burger Contact Form',
          address: 'contact@theatomicburger.com'
        },
        to: [
          process.env.GMAIL_USER as string       // Main email
          // Third email
        // Add more recipients as needed
      ],
      replyTo: email,
      subject: `Website Contact Form: ${subject}`,
        text: `
New message from the website contact form:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}
Location: ${location || "Not Specified"}

Message:
${message}

---
This email was sent from the Atomic Burger website contact form.
      `,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Website Contact Form Submission</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
    </tr>
      <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${location || "Not Specified"}</td>
    </tr>
  </table>
  <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
    <h3 style="margin-top: 0;">Message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
  <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
  <p style="color: #666; font-size: 12px;">This email was sent from the Atomic Burger website contact form.</p>
</div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}