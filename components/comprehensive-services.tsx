"use client"

import Link from "next/link"
import { ArrowRight, Phone, Flame, Sparkles } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * ComprehensiveServices Component - "Provides Professional Gas Services for Every Need"
 * Rebuilt to match the 4-card arched squircle visual grid in the user's reference image
 */
export function ComprehensiveServices() {
  const services = [
    {
      title: "Gas Stove Burner Repair",
      image: "/images/stove-flame-test.jpg",
      badge: "Doorstep Repair",
      description: "Low flame troubleshooting, pure blue flame tuning, carbon jet cleaning.",
      link: "/services/gas-stove-repair",
    },
    {
      title: "Gas Hob & Glass Top Repair",
      image: "/images/hob-glass-repair.jpg",
      badge: "Hob Specialist",
      description: "Auto-ignition spark plug, pulse generator & microswitch replacements.",
      link: "/services/gas-hob-repair",
    },
    {
      title: "Copper Pipeline Installation",
      image: "/images/copper-pipeline.jpg",
      badge: "Certified Safety",
      description: "Heavy-gauge copper & GI gas lines with leak-proof brass shut-off valves.",
      link: "/services/gas-pipeline-installation",
    },
    {
      title: "Electronic Leak Detection",
      image: "/images/gas-leak-detector.jpg",
      badge: "Digital Sniffer",
      description: "Digital sniffer safety testing, cylinder regulator & Suraksha hose audits.",
      link: "/services/emergency-gas-repair",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (Centered, Reference Style) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 text-blue-800 mb-2">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Provides Professional Gas Services <br className="hidden sm:inline" />
            <span className="text-blue-600">for Every Need</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Doorstep diagnostics and genuine brass spare parts backed by a 30 to 90-day warranty.
          </p>
        </div>

        {/* 4-Card Visual Grid (Matching Reference Arched Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Arched Top Image */}
                <div className="p-3 pb-0">
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-none">
                      {item.badge}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link
                  href={item.link}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center space-x-1.5">
                  <a
                    href="tel:+918302713127"
                    onClick={() => trackPhoneCall("+918302713127", item.title)}
                    className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors"
                    title="Call Now"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={getWhatsAppRedirectUrl({ serviceType: item.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <span>Explore All Specialized Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
