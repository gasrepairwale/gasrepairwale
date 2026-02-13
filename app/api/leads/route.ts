import { NextResponse } from "next/server"

/**
 * Lead Notification API
 * Handles Telegram Bot notifications and server-side lead logging
 */
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, phone, service, city, area, address, preferredTime, message: userMessage, source = "Website Form" } = body

        // 1. Validate required fields
        if (!phone) {
            return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
        }

        // 2. Format message for Telegram
        const botToken = process.env.TELEGRAM_BOT_TOKEN
        const chatId = process.env.TELEGRAM_CHAT_ID

        // Check if Telegram is configured
        if (!botToken || !chatId || botToken === 'YOUR_BOT_TOKEN_HERE') {
            console.warn("[Leads API] Telegram Bot not configured. Skipping notification.")
            return NextResponse.json({ ok: true, warn: "Telegram not configured" })
        }

        const message = `
🔥 *New Lead Received!* 🔥
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name || 'N/A'}
📞 *Phone:* ${phone}
🛠️ *Service:* ${service || 'General Inquiry'}
📍 *City:* ${city || 'General'}
🏘️ *Area:* ${area || 'N/A'}
🏠 *Address:* ${address || 'N/A'}
⏰ *Slot:* ${preferredTime || 'N/A'}
🌐 *Source:* ${source}

📝 *Message:*
${userMessage || 'No message provided'}
━━━━━━━━━━━━━━━━━━
⏰ _Time: ${new Date().toLocaleString('en-IN')}_
    `.trim()

        // 3. Send to Telegram
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

        await fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown",
            }),
        })

        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error("[Leads API] Error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
