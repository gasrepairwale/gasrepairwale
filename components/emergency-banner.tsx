"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * Emergency Banner Component
 * Attention-grabbing banner for emergency services
 */
export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const handleCallClick = () => {
    trackPhoneCall("+918302713127")
  }

  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-700 opacity-20"></div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-bold text-sm md:text-base">
            GAS EMERGENCY? Don't Wait! 24/7 Service Available - Doorstep Arrival in 15-25 Minutes!
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Button asChild size="sm" className="bg-white text-red-600 hover:bg-slate-100 font-bold shadow-none">
            <a 
              href="tel:+918302713127" 
              className="flex items-center space-x-1.5"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">CALL NOW</span>
            </a>
          </Button>

          <Button asChild size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold hidden md:flex border-0 shadow-none">
            <a 
              href={getWhatsAppRedirectUrl({
                serviceType: "Emergency",
                city: "General",
                message: "EMERGENCY: I need immediate help with a gas issue!"
              })}
              className="flex items-center space-x-1.5"
              onClick={() => trackWhatsApp('Emergency Banner Click')}
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WHATSAPP</span>
            </a>
          </Button>

          <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
