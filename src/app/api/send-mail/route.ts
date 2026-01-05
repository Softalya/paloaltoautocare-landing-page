import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, message, name, email, captchaToken } = body;

    // Validate inputs
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, or message" },
        { status: 400 }
      );
    }

    // Verify CAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: "CAPTCHA token is missing" },
        { status: 400 }
      );
    }

    const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const verificationResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'}&response=${captchaToken}`,
    });

    const verificationResult = await verificationResponse.json();
    if (!verificationResult.success) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed", details: verificationResult["error-codes"] },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name || 'Contact Form'}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: to,
      replyTo: email || undefined,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${body.phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Message</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f4f4f4; }
              .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { background-color: #e11d48; padding: 30px; text-align: center; }
              .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; }
              .content { padding: 40px; }
              .field { margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
              .label { font-weight: bold; color: #e11d48; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; display: block; }
              .value { font-size: 16px; color: #333; }
              .message-box { background-color: #f9f9f9; border-left: 4px solid #e11d48; padding: 20px; margin-top: 10px; border-radius: 0 4px 4px 0; font-style: italic; }
              .footer { background-color: #1a1a1a; color: #888; padding: 20px; text-align: center; font-size: 12px; }
              .footer p { margin: 5px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Palo Alto Auto Care</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Gönderen</span>
                  <div class="value">${name || 'Belirtilmedi'}</div>
                </div>
                <div class="field">
                  <span class="label">E-posta</span>
                  <div class="value">${email || 'Belirtilmedi'}</div>
                </div>
                <div class="field">
                  <span class="label">Telefon</span>
                  <div class="value">${body.phone || 'Belirtilmedi'}</div>
                </div>
                <div class="field">
                  <span class="label">Konu</span>
                  <div class="value">${subject}</div>
                </div>
                <div class="field" style="border: none;">
                  <span class="label">Mesaj</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>&copy; 2026 Palo Alto Auto Care. Tüm hakları saklıdır.</p>
                <p>Bu mail web sitesi üzerinden gönderilmiştir.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
