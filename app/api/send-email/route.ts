import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type SendEmailBody = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  address?: string
  city?: string
  area?: string
  preferredTime?: string
  source?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SendEmailBody

    const {
      name = "",
      email = "",
      phone = "",
      service = "",
      message = "",
      address = "",
      city = "",
      area = "",
      preferredTime = "",
      source = "",
    } = body || {}

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields: name, phone" }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const fromEmail = process.env.MAIL_FROM || smtpUser
    const toEmail = process.env.MAIL_TO || smtpUser

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Email not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const subject = `New Service Request: ${service || "General Inquiry"} - ${name}`

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">New Service Request</h2>
        <div style="background-color: #fff7ed; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📞 Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>📧 Email:</strong> ${email}</p>` : ""}
          <p><strong>🛠️ Service:</strong> ${service || "General Inquiry"}</p>
          <hr style="border: 0; border-top: 1px solid #fed7aa; margin: 15px 0;"/>
          <p><strong>📍 City:</strong> ${city || "General"}</p>
          <p><strong>🏘️ Area:</strong> ${area || "N/A"}</p>
          ${address ? `<p><strong>🏠 Address:</strong> ${address}</p>` : ""}
          ${preferredTime ? `<p><strong>⏰ Preferred Time:</strong> ${preferredTime}</p>` : ""}
          ${source ? `<p><strong>🌐 Source:</strong> ${source}</p>` : ""}
        </div>
        ${message ? `
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
          <p><strong>📝 Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>` : ""}
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
        <p style="font-size: 12px; color: #6b7280; text-align: center;">Submitted at: ${new Date().toLocaleString('en-IN')}</p>
      </div>
    `

    // Send to receiver
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      html,
    })

    // Send confirmation to user if email provided
    if (email) {
      await transporter.sendMail({
        from: fromEmail,
        to: email,
        subject: "We received your request - Gas Repaire Wale",
        html: `
          <p>Hi ${name.split(" ")[0] || "there"},</p>
          <p>Thanks for contacting Gas Repaire Wale. We have received your request and will get back within 30 minutes.</p>
          <p><strong>Summary:</strong></p>
          <ul>
            ${service ? `<li>Service: ${service}</li>` : ""}
            ${phone ? `<li>Phone: ${phone}</li>` : ""}
            ${[area, city].filter(Boolean).length ? `<li>Location: ${[area, city].filter(Boolean).join(", ")}</li>` : ""}
            ${preferredTime ? `<li>Preferred Time: ${preferredTime}</li>` : ""}
          </ul>
          <p>If this is an emergency, please call us directly at <a href="tel:+918302713127">+91 83027 13127</a>.</p>
          <p>— Gas Repaire Wale</p>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("send-email error", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}



