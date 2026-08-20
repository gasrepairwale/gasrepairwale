"use client"

import { MessageSquare } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

/**
 * Floating WhatsApp Button
 * Fixed position bottom-right — critical for mobile conversions in India.
 * Only renders on client side to avoid hydration issues.
 */
export function WhatsAppFloat() {
  const waUrl =
    "https://wa.me/918302713127?text=Hi%2C%20I%20need%20gas%20repair%20service.%20Please%20help%20me%20with%20a%20quote."

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("Floating Button")}
      aria-label="Chat with Gas Repair Wale on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 group"
      style={{ boxShadow: "0 4px 30px rgba(34,197,94,0.4)" }}
    >
      <MessageSquare className="h-6 w-6 flex-shrink-0" />
      <span className="text-sm font-bold pr-1 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  )
}
