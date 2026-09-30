"use client"

import { useState } from "react"
import { Phone, ShieldCheck, CheckCircle2, AlertCircle, Wrench, Flame, Zap } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  categoryBadge: string
  before: {
    image: string
    title: string
    badge: string
    bullets: string[]
  }
  after: {
    image: string
    title: string
    badge: string
    bullets: string[]
  }
  safetyNotice: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "stove-burner",
    title: "LPG Stove Burner Descaling & Flame Tuning",
    subtitle: "Eliminating sooty yellow flame, sluggish ignition, and high LPG fuel wastage",
    categoryBadge: "Gas Stove Service",
    before: {
      image: "/images/burner-before.jpg",
      title: "Choked Brass Jet & Yellow Sooty Flame",
      badge: "BEFORE REPAIR",
      bullets: [
        "Heavy carbon deposits choking jet orifice",
        "Yellow-orange flame blackening cookware bottoms",
        "Up to 25% unburnt LPG fuel wasted every meal",
        "Persistent mild gas odor when turned to low sim",
      ],
    },
    after: {
      image: "/images/burner-after.jpg",
      title: "Calibrated Pure Blue High-Efficiency Flame",
      badge: "AFTER BLUE FLAME SERVICE",
      bullets: [
        "Ultrasonic chemical nozzle cleaning & descaling",
        "Calibrated 100% blue flame with zero soot",
        "Even heat spread across 2/3/4 burners",
        "Backed by 90-day flame calibration warranty",
      ],
    },
    safetyNotice: "Electronic leak test completed on all manifold seals before flame calibration.",
  },
  {
    id: "glass-hob",
    title: "Built-In Glass Hob & Spindle Overhaul",
    subtitle: "Fixing stiff jammed knobs, auto-ignition sparking failures, and glass cooktop alignment",
    categoryBadge: "Hob & Cooktop Service",
    before: {
      image: "/images/hob-glass-repair.jpg",
      title: "Stiff Jammed Knobs & Ignition Spark Failure",
      badge: "BEFORE REPAIR",
      bullets: [
        "Jammed brass spindle valves unable to rotate",
        "Continuous clicking or no spark on pulse ignition",
        "Uneven gas pressure between front & rear burners",
        "Risk of toughened glass crack due to thermal stress",
      ],
    },
    after: {
      image: "/images/stove-flame-test.jpg",
      title: "Silky Spindle Movement & Instant Micro-Spark",
      badge: "AFTER HOB OVERHAUL",
      bullets: [
        "Genuine Italian/Indian brass spindle replacement",
        "Pulse ignition electrode repositioning & battery check",
        "Thermal heat shielding re-aligned beneath glass",
        "Compatible with Faber, Glen, Bosch, Prestige & Sunflame",
      ],
    },
    safetyNotice: "Full electrical insulation & gas cutoff verified on auto-ignition built-in hobs.",
  },
  {
    id: "copper-pipeline",
    title: "Copper Gas Pipeline & Leak Sniffer Inspection",
    subtitle: "Replacing hazardous rubber hoses with BIS/PESO certified copper lines",
    categoryBadge: "Pipeline & Safety",
    before: {
      image: "/images/gas-leak-detector.jpg",
      title: "Hazardous Cracked Hose & Micro-Leakage",
      badge: "BEFORE INSPECTION",
      bullets: [
        "Aged rubber pipe degraded by grease and rodent bites",
        "Dangerous micro gas leakage at cylinder regulator joint",
        "Failed kitchen safety compliance",
        "Risk of accidental flash fire in enclosed modular cabinetry",
      ],
    },
    after: {
      image: "/images/pipeline-safety.jpg",
      title: "Commercial-Grade Seamless Copper Line",
      badge: "AFTER CERTIFIED INSTALLATION",
      bullets: [
        "Heavy-gauge seamless copper pipe with silver brazing",
        "Dual isolation safety ball valves at cylinder & cooktop",
        "Electronic digital sniffer test (0% gas ppm detected)",
        "Official safety certificate issued for apartment societies",
      ],
    },
    safetyNotice: "Dual pressure drop test performed at 1.5x operating LPG/PNG line pressure.",
  },
]

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id)
  const currentCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0]

  return (
    <section className="py-16 sm:py-24 bg-[#071126] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-600/20 text-sky-300 border border-blue-500/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Documented Doorstep Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Real Repairs. Real Results. <br />
            <span className="text-sky-400">Done Right.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            No guesswork, no fake promises. Inspect actual on-site repair results delivered by our certified technicians across Pune, Mumbai &amp; Hyderabad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {CASE_STUDIES.map((item) => {
            const isActive = item.id === activeTab
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-none ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                }`}
              >
                {item.categoryBadge}
              </button>
            )
          })}
        </div>

        {/* Active Case Study Showcase */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 mb-10">
          {/* Case Title Info */}
          <div className="mb-8 pb-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                {currentCase.categoryBadge} Case Study
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 px-4 py-2 rounded-xl text-xs text-sky-200 self-start md:self-auto shrink-0">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>Doorstep Resolution: <strong>30-45 Mins</strong></span>
            </div>
          </div>

          {/* Clean 2-Column Before vs After Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Column 1: Before Repair Card */}
            <div className="bg-slate-950/80 rounded-2xl border border-red-900/30 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={currentCase.before.image}
                  alt={currentCase.before.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-none">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{currentCase.before.badge}</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <span>Problem Diagnosed: {currentCase.before.title}</span>
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    {currentCase.before.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-red-400 font-bold shrink-0">✕</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: After Repair Card */}
            <div className="bg-slate-950/80 rounded-2xl border border-emerald-800/40 overflow-hidden flex flex-col justify-between relative ring-1 ring-emerald-500/20">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={currentCase.after.image}
                  alt={currentCase.after.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-none">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentCase.after.badge}</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span>Certified Technician Resolution: {currentCase.after.title}</span>
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    {currentCase.after.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Notice Strip */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
            <Flame className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{currentCase.safetyNotice}</span>
          </div>
        </div>

        {/* Bottom Trust & Instant Action Bar (With Real WhatsApp Icon & Zero Shadow) */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white flex items-center justify-center lg:justify-start gap-2">
              <Wrench className="w-5 h-5 text-sky-400" />
              <span>Have a Similar Problem With Your Gas Stove or Hob?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Send us a photo or short video on WhatsApp for an immediate diagnosis and doorstep technician dispatch in 15-25 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            {/* WhatsApp CTA with Official WhatsApp Brand SVG */}
            <a
              href={getWhatsAppRedirectUrl({
                serviceType: "Photo Diagnosis",
                city: "General",
                message: "Hi Gas Repair Wale, I have an issue with my gas appliance. Sharing photo for quick inspection & quote.",
              })}
              onClick={() => trackWhatsApp("Before After WhatsApp Click")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Send Photo on WhatsApp</span>
            </a>

            {/* Direct Call CTA */}
            <a
              href="tel:+918302713127"
              onClick={() => trackPhoneCall("+918302713127", "Before After Call Helpline")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 83027 13127</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
