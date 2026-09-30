"use client"

import { usePathname } from "next/navigation"
import { Phone, ShieldCheck, Zap } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"
import { getCityContact } from "@/lib/phone"

/**
 * Mobile Sticky Bottom Bar
 * Stays fixed at the bottom on mobile screens (hidden on desktop).
 * Dynamically updates phone number and WhatsApp routing based on current city/area.
 * Fully tracks clicks in Google Analytics 4 and sends real-time Telegram alerts.
 */
export function MobileStickyBar() {
  const pathname = usePathname() || ""
  const pathParts = pathname.split("/").filter(Boolean)

  // Detect city and area from URL structure (/locations/[city]/[area])
  let citySlug = ""
  let areaSlug = ""

  if (pathParts[0] === "locations") {
    citySlug = pathParts[1] || ""
    areaSlug = pathParts[2] || ""
  }

  // Determine city display name
  const isHyd = pathname.includes("hyderabad") || citySlug === "hyderabad"
  const isMumbai = pathname.includes("mumbai") || citySlug === "mumbai"
  const isPune = pathname.includes("pune") || citySlug === "pune"

  let cityName = "Pune & Mumbai"
  if (isHyd) cityName = "Hyderabad"
  else if (isMumbai) cityName = "Mumbai"
  else if (isPune) cityName = "Pune"

  // Format area name for display (e.g., "tellapur" -> "Tellapur", "hmt-miyapur" -> "Hmt Miyapur")
  const areaName = areaSlug
    ? areaSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : ""

  // Contact routing based on city
  const contact = getCityContact(isHyd ? "hyderabad" : "pune")

  // Handle Call Action
  const handleCall = () => {
    trackPhoneCall(contact.phoneRaw, cityName, areaName || undefined)
  }

  // Handle WhatsApp Action
  const handleWhatsApp = () => {
    const trackingLabel = areaName
      ? `Mobile Sticky Bar - ${areaName}, ${cityName}`
      : `Mobile Sticky Bar - ${cityName}`
    trackWhatsApp(trackingLabel, cityName, areaName || undefined)
  }

  // WhatsApp Pre-filled redirect URL
  const waUrl = getWhatsAppRedirectUrl({
    serviceType: "Gas Stove Repair & Service",
    city: cityName,
    area: areaName || undefined,
    message: areaName
      ? `Hi, I am looking for gas repair service in ${areaName}, ${cityName}. Please share technician availability.`
      : `Hi, I am looking for gas repair service in ${cityName}. Please share technician availability.`,
  })

  return (
    <aside
      aria-label="Mobile Quick Contact"
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-[0_-4px_25px_rgba(0,0,0,0.15)] pt-2 px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      {/* Micro Trust Banner */}
      <div className="flex items-center justify-between px-1 pb-1.5 text-[11px] text-gray-500 font-medium">
        <span className="flex items-center space-x-1 text-blue-600 font-semibold truncate max-w-[60%]">
          <Zap className="w-3 h-3 text-blue-600 flex-shrink-0 animate-pulse" />
          <span className="truncate">
            {areaName ? `${areaName} Hub` : `${cityName} Fast Dispatch`}
          </span>
        </span>
        <span className="flex items-center space-x-1 text-green-700 font-medium">
          <ShieldCheck className="w-3 h-3 text-green-600 flex-shrink-0" />
          <span>Pay After Service</span>
        </span>
      </div>

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Call Now Button */}
        <a
          href={contact.phoneTel}
          onClick={handleCall}
          className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-none transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-extrabold uppercase tracking-wide">Call Now</div>
            <div className="text-[10px] text-blue-100 font-medium truncate max-w-[95px]">
              {contact.phoneDisplay}
            </div>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-none transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon className="w-4 h-4 fill-white" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-extrabold uppercase tracking-wide">WhatsApp</div>
            <div className="text-[10px] text-emerald-100 font-medium">Instant Reply</div>
          </div>
        </a>
      </div>
    </aside>
  )
}
