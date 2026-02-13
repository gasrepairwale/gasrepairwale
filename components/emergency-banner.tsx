"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, X } from "lucide-react"
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
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 animate-pulse opacity-20"></div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5 animate-bounce" />
          <span className="font-bold text-sm md:text-base">
            🚨 GAS EMERGENCY? Don't Wait! 24/7 Service Available - Response in 15 Minutes!
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Button size="sm" className="bg-white text-red-600 hover:bg-gray-100 font-bold animate-pulse">
            <a 
              href="tel:+918302713127" 
              className="flex items-center space-x-1"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">CALL NOW</span>
            </a>
          </Button>

          <Button size="sm" className="bg-green-500 text-white hover:bg-green-600 font-bold hidden md:flex border-0">
            <a 
              href={getWhatsAppRedirectUrl({
                serviceType: "Emergency",
                city: "General",
                message: "🚨 EMERGENCY: I need immediate help with a gas issue!"
              })}
              className="flex items-center space-x-1"
              onClick={() => trackWhatsApp('Emergency Banner Click')}
            >
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
