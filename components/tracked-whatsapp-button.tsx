"use client"

import { sendLeadNotification } from "@/lib/analytics"

interface TrackedWhatsAppButtonProps {
  /** WhatsApp message to pre-fill */
  message: string
  /** Source label shown in Telegram notification */
  source: string
  /** Optional city */
  city?: string
  /** Optional area */
  area?: string
  /** Button label */
  label?: string
  /** Tailwind className override */
  className?: string
  /** Phone number without + sign */
  phone?: string
}

/**
 * TrackedWhatsAppButton
 * 
 * A client component that:
 * 1. Fires a Telegram lead notification (via /api/leads)
 * 2. Then opens WhatsApp with a pre-filled message
 * 
 * Use this on any page/component that has static WA links but
 * needs Telegram notification support without converting the
 * whole page to a client component.
 */
export function TrackedWhatsAppButton({
  message,
  source,
  city = "General",
  area = "",
  label = "WhatsApp Us",
  className = "inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors",
  phone,
}: TrackedWhatsAppButtonProps) {
  const defaultPhone = city.toLowerCase().includes("hyderabad") ? "919950809283" : "918302713127"
  const targetPhone = (phone || defaultPhone).replace(/[^0-9]/g, "")
  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`

  const handleClick = async () => {
    try {
      // Fire Telegram notification asynchronously — don't block WA redirect
      sendLeadNotification({
        name: "Website Visitor",
        phone: "Unknown (static button click)",
        service: "General Inquiry",
        city,
        area,
        source,
        message: `Clicked '${label}' button`,
        type: "activity",
      }).catch(() => {
        // Silently ignore Telegram errors — WA must always open
      })
    } catch {
      // Fail silently
    }

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      aria-label={`Open WhatsApp: ${label}`}
    >
      {label}
    </button>
  )
}
