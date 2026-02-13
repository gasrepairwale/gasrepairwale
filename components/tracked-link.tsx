"use client"

import type React from "react"
import { trackPhoneCall, trackWhatsApp, trackEvent } from "@/lib/analytics"

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  category: "phone" | "whatsapp" | "custom"
  eventName?: string
  eventParams?: Record<string, any>
  city?: string
  area?: string
}

/**
 * Reusable Client Component to track clicks in Server Components
 */
export function TrackedLink({
  href,
  children,
  className,
  category,
  eventName,
  eventParams,
  city,
  area,
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (category === "phone") {
      trackPhoneCall(href.replace("tel:", ""), city, area)
    } else if (category === "whatsapp") {
      trackWhatsApp("Contact via WhatsApp", city, area)
    } else if (category === "custom" && eventName) {
      trackEvent(eventName, { ...eventParams, city, area })
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
