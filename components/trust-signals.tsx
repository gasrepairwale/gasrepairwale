"use client"

import { ShieldCheck, Award, Clock, Star, Zap } from "lucide-react"

/**
 * Trust Signals Bar Component
 * Sleek, compact credibility bar that sits right below the Hero section.
 * Eliminates bulky duplicate text cards while reinforcing core trust metrics.
 */
export function TrustSignals() {
  const trustItems = [
    {
      icon: Star,
      title: "4.9 / 5 Rating",
      subtitle: "5,000+ Happy Kitchens",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Clock,
      title: "15 to 25 Min Arrival",
      subtitle: "Local Neighborhood Fleet",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: ShieldCheck,
      title: "Certified Safety",
      subtitle: "Digital Sniffer Leak Test",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      title: "30-Day Guarantee",
      subtitle: "100% Free Workmanship Rework",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Pay After Service",
      subtitle: "UPI / Cash on Test Burn",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="bg-white border-b border-gray-100 py-6 relative z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100/80 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center flex-shrink-0 shadow-xs`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-extrabold text-xs text-gray-900 truncate tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
