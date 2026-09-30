"use client"

import { sendLeadNotification } from "@/lib/analytics"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

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
  /** Whether to show icon */
  showIcon?: boolean
}

/**
 * TrackedWhatsAppButton
 * 
 * Client component that fires Telegram lead notification
 * and opens WhatsApp with authentic WhatsApp brand SVG icon.
 */
export function TrackedWhatsAppButton({
  message,
  source,
  city = "General",
  area = "",
  label = "WhatsApp Us",
  className = "inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-none text-sm",
  phone,
  showIcon = true,
}: TrackedWhatsAppButtonProps) {
  const defaultPhone = city.toLowerCase().includes("hyderabad") ? "916304739440" : "918302713127"
  const targetPhone = (phone || defaultPhone).replace(/[^0-9]/g, "")
  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`

  const handleClick = async () => {
    try {
      // Fire Telegram notification asynchronously
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
        // Silently ignore Telegram errors
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
      {showIcon && <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />}
      <span>{label}</span>
    </button>
  )
}
