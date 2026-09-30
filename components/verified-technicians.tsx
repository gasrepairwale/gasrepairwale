"use client"

import { ShieldCheck, UserCheck, Wrench, Flame, Phone, CheckCircle2, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"

export function VerifiedTechnicians() {
  const protocols = [
    {
      icon: UserCheck,
      title: "Physical Photo ID & Background Verified",
      desc: "Every technician carries authorized credentials and identity verification before arriving at your doorstep.",
      badge: "Verified Personnel",
    },
    {
      icon: ShieldCheck,
      title: "Electronic Digital Sniffer Inspection",
      desc: "We deploy multi-sensor sniffer devices to test regulators, manifolds, and burner joints for micro gas leaks.",
      badge: "Zero Leak Check",
    },
    {
      icon: Wrench,
      title: "Upfront Written Estimate Before Starting",
      desc: "Our technician diagnoses the appliance and gives you an itemized, flat price quote. Work starts only after your approval.",
      badge: "Zero Hidden Costs",
    },
    {
      icon: Flame,
      title: "Post-Service Flame Tuning & 90-Day Warranty",
      desc: "Every repaired stove undergoes a pure blue flame test and burner pressure calibration backed by a 90-day warranty card.",
      badge: "90-Day Warranty",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>On-Site Safety Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Verified Doorstep Technicians. <br />
            <span className="text-blue-600">Zero Safety Compromises.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Gas appliances require certified technical expertise. Our field technicians across Pune, Mumbai, and Hyderabad operate with strict safety equipment, digital diagnostics, and factory-standard replacement brass parts.
          </p>
        </div>

        {/* 2-Column Layout: Visual Showcase (Left) + 4 Safety Protocols (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Field Photos with Side-by-Side Clean Layout */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
              {/* Card 1: On-Site Technician at Work */}
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm relative flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                  <img
                    src="/images/technician-hero.jpg"
                    alt="Certified gas repair technician servicing stove"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    <span>Live Work Standards</span>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-800 leading-tight">On-Site Servicing</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Burner &amp; pressure calibration</p>
                </div>
              </div>

              {/* Card 2: Photo ID Verified Technician */}
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm relative flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                  <img
                    src="/images/technician-id-verified.jpg"
                    alt="Verified technician photo ID credentials"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-none">
                    <UserCheck className="w-3 h-3 text-white" />
                    <span>ID Verified</span>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-800 leading-tight">Police Verified</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Authorized photo ID badge</p>
                </div>
              </div>
            </div>

            {/* Quick Response Metric Badge */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Average Arrival Time</p>
                  <p className="text-sm font-black text-slate-900">15–25 Minutes at Doorstep</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                24/7 Active
              </span>
            </div>
          </div>

          {/* Right Column: 4 Safety Protocols List */}
          <div className="lg:col-span-7 space-y-5">
            {protocols.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* Direct Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+918302713127"
                onClick={() => trackPhoneCall("+918302713127", "Verified Technicians Section")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: +91 83027 13127</span>
              </a>

              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: "Technician Dispatch",
                  city: "General",
                  message: "Hi Gas Repair Wale, I need a certified technician for doorstep gas service.",
                })}
                onClick={() => trackWhatsApp("Verified Technicians WhatsApp")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
