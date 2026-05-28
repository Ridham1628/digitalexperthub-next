import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to team
    await transporter.sendMail({
      from: `"Digital Expert Hub Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO ?? 'info@digitalexperthub.com',
      replyTo: email,
      subject: `New Lead: ${name} — ${service ?? 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', sans-serif; color: #111; background: #f9f9f9; margin: 0; padding: 0; }
            .container { max-width: 580px; margin: 32px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: #0b0f0c; padding: 32px; text-align: center; }
            .header h1 { color: #c8f250; margin: 0; font-size: 22px; letter-spacing: -0.5px; }
            .body { padding: 32px; }
            .badge { display: inline-block; background: #c8f250; color: #0b0f0c; padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
            .field { margin-bottom: 16px; padding: 12px 16px; background: #f5f5f5; border-radius: 10px; }
            .field label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; }
            .field p { margin: 0; font-size: 15px; color: #111; }
            .footer { padding: 20px 32px; border-top: 1px solid #eee; font-size: 12px; color: #aaa; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ New Lead — Digital Expert Hub</h1>
            </div>
            <div class="body">
              <span class="badge">New Inquiry</span>
              <div class="field">
                <label>Name</label>
                <p>${name}</p>
              </div>
              <div class="field">
                <label>Email</label>
                <p><a href="mailto:${email}" style="color:#0b0f0c">${email}</a></p>
              </div>
              ${phone ? `<div class="field"><label>Phone</label><p><a href="tel:${phone}" style="color:#0b0f0c">${phone}</a></p></div>` : ''}
              ${service ? `<div class="field"><label>Service Interested In</label><p>${service}</p></div>` : ''}
              ${message ? `<div class="field"><label>Message</label><p style="white-space:pre-wrap">${message}</p></div>` : ''}
            </div>
            <div class="footer">
              This lead was submitted via digitalexperthub.com — Respond within 2 hours for best conversion.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Auto-reply to lead
    await transporter.sendMail({
      from: `"Digital Expert Hub" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks ${name.split(' ')[0]}! We'll be in touch shortly 🚀`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', sans-serif; color: #111; background: #f9f9f9; margin: 0; padding: 0; }
            .container { max-width: 580px; margin: 32px auto; background: #0b0f0c; border-radius: 16px; overflow: hidden; }
            .header { padding: 40px 32px 24px; text-align: center; }
            .header h1 { color: #c8f250; margin: 0 0 8px; font-size: 24px; }
            .header p { color: rgba(255,255,255,0.6); margin: 0; font-size: 15px; }
            .body { padding: 24px 32px 32px; }
            .body p { color: rgba(255,255,255,0.75); line-height: 1.7; font-size: 15px; }
            .steps { margin: 24px 0; }
            .step { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; }
            .step .num { background: #c8f250; color: #0b0f0c; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
            .step p { color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; padding-top: 2px; }
            .cta { display: block; background: #c8f250; color: #0b0f0c; text-align: center; padding: 14px 24px; border-radius: 99px; font-weight: 700; font-size: 15px; text-decoration: none; margin: 24px 0; }
            .footer { padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: rgba(255,255,255,0.3); text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thanks, ${name.split(' ')[0]}! 🎉</h1>
              <p>We've received your message and will respond within 2 hours.</p>
            </div>
            <div class="body">
              <p>Here's what happens next:</p>
              <div class="steps">
                <div class="step"><div class="num">1</div><p>Our team reviews your inquiry</p></div>
                <div class="step"><div class="num">2</div><p>We analyse your current digital presence</p></div>
                <div class="step"><div class="num">3</div><p>We schedule a free 30-min strategy call</p></div>
                <div class="step"><div class="num">4</div><p>You receive a custom growth proposal</p></div>
              </div>
              <p>In the meantime, feel free to explore our <a href="https://digitalexperthub.com/case-studies" style="color:#c8f250">case studies</a> or read our <a href="https://digitalexperthub.com/blog" style="color:#c8f250">blog</a> for free digital marketing insights.</p>
              <a href="https://digitalexperthub.com/contact" class="cta">View Our Services →</a>
              <p style="font-size:13px">Questions? Reply to this email or call us at <a href="tel:+917986713605" style="color:#c8f250">+91 79867 13605</a></p>
            </div>
            <div class="footer">
              Digital Expert Hub · Ludhiana, Punjab, India<br>
              <a href="https://digitalexperthub.com/privacy-policy" style="color:rgba(255,255,255,0.3)">Privacy Policy</a>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
