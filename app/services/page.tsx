import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { SafetyGuarantees } from "@/components/safety-guarantees"
import { BrandShowcase } from "@/components/brand-showcase"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import {
  Flame,
  Wrench,
  Settings,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Home,
  Building2,
  Phone,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  AlertTriangle,
  FileCheck2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Gas Repair Services in Pune, Mumbai & Hyderabad | Gas Repair Wale",
  description:
    "Expert doorstep gas stove repair, glass hob auto-ignition tuning, and copper pipeline installation across Pune, Mumbai & Hyderabad. 15-25 min arrival, genuine brass parts, and transparent upfront estimates. Call +91 83027 13127!",
  keywords: [
    "gas repair services",
    "gas stove repair",
    "gas hob repair",
    "gas pipeline installation",
    "emergency gas leak repair",
    "gas burner repair",
    "gas valve replacement",
    "commercial stove repair",
    "gas repair pune mumbai hyderabad",
  ].join(", "),
  authors: [{ name: "Gas Repair Wale", url: "https://gasrepairwale.com" }],
  creator: "Gas Repair Wale",
  publisher: "Gas Repair Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairwale.com/services",
    title: "Professional Gas Repair Services | Gas Repair Wale",
    description:
      "Doorstep gas stove repair, hob auto-ignition, and certified copper pipeline installation in Pune, Mumbai & Hyderabad. 15-25 min arrival.",
    siteName: "Gas Repair Wale",
    images: [
      {
        url: "/images/burner-after.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repair Wale - Doorstep Gas Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Gas Repair Services | Gas Repair Wale",
    description:
      "Expert gas stove repair & copper pipeline installation in Pune, Mumbai & Hyderabad. 15-25 min arrival. Call +91 83027 13127",
    images: ["/images/burner-after.jpg"],
  },
  alternates: {
    canonical: "https://gasrepairwale.com/services",
  },
}

export default function ServicesPage() {
  const mainServices = [
    {
      id: "gas-stove-repair",
      icon: Flame,
      title: "Gas Stove Repair & Blue Flame Tuning",
      slug: "#gas-stove-repair",
      image: "/images/burner-after.jpg",
      badge: "Most Requested",
      description:
        "Comprehensive restoration for 2, 3, and 4-burner glass and stainless steel gas stoves. Nozzle descaling, flame calibration, and knob leak repairs.",
      features: [
        "Ultrasonic chemical nozzle & jet descaling",
        "Calibrated 100% blue flame with zero soot",
        "Smooth brass spindle rotation & valve lubrication",
        "Electronic digital sniffer leak test included",
      ],
      issues: ["Yellow / low flame", "Gas smell from knobs", "Black soot on utensils", "Burner choked with grease"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "90-Day Blue Flame Warranty",
      arrival: "15-25 Mins Doorstep Arrival",
    },
    {
      id: "gas-hob-repair",
      icon: Wrench,
      title: "Built-In Glass Hob & Cooktop Repair",
      slug: "#gas-hob-repair",
      image: "/images/hob-glass-repair.jpg",
      badge: "Hob Specialists",
      description:
        "Expert servicing for toughened glass cooktops and built-in hobs. Auto-ignition pulse repair, micro-switch tuning, and Italian/Indian brass spindle replacement.",
      features: [
        "Pulse spark electrode realignment & battery check",
        "Jammed brass spindle replacement & realignment",
        "Compatible with Faber, Glen, Bosch, Elica & Prestige",
        "Under-glass heat shield check & electrical isolation",
      ],
      issues: ["Continuous spark clicking", "No ignition spark", "Jammed / stiff knobs", "Uneven flame between burners"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "90-Day Parts & Service Warranty",
      arrival: "15-25 Mins Doorstep Arrival",
    },
    {
      id: "gas-pipeline-installation",
      icon: Settings,
      title: "Copper Gas Pipeline Installation & Safety",
      slug: "#gas-pipeline-installation",
      image: "/images/copper-pipeline.jpg",
      badge: "BIS / PESO Compliant",
      description:
        "Commercial-grade seamless heavy-duty copper piping for modular kitchens and apartments. High-pressure testing and safety isolation ball valves.",
      features: [
        "Seamless heavy-gauge copper pipe with silver brazing",
        "Dual isolation brass ball valves at cylinder & cooktop",
        "Digital pressure drop test at 1.5x line pressure",
        "Safety compliance certificate issued for societies",
      ],
      issues: ["Aged or cracked rubber hose", "Micro gas leaks behind cabinets", "Pipeline relocation for renovation", "Low gas pressure"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "1-Year Certified Pipeline Warranty",
      arrival: "Same-Day Technician Scheduling",
    },
    {
      id: "emergency-gas-repair",
      icon: AlertTriangle,
      title: "24/7 Emergency Gas Leak Detection",
      slug: "#emergency-gas-repair",
      image: "/images/gas-leak-detector.jpg",
      badge: "24/7 Urgent Dispatch",
      description:
        "Immediate emergency response for unexplained gas smell, hissing regulators, and fire hazards. Electronic sniffer sensors detect sub-surface PPM gas leaks.",
      features: [
        "Multi-sensor combustible hydrocarbon sniffer test",
        "Immediate main valve shut-off & safety isolation",
        "Defective regulator & perished O-ring replacement",
        "Safe kitchen ventilation guidance & clearance handover",
      ],
      issues: ["Strong LPG smell in kitchen", "Hissing sound at regulator", "Stuck cylinder main valve", "Suspected line puncture"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "Immediate Safety Clearance Certificate",
      arrival: "15-25 Mins Priority Arrival",
    },
    {
      id: "burner-descaling",
      icon: Sparkles,
      title: "Ultrasonic Deep Burner Cleaning & AMC",
      slug: "#burner-descaling",
      image: "/images/technician-hero.jpg",
      badge: "Fuel Efficiency",
      description:
        "Deep carbon descaling and chemical jet bath restoring full heating power and reducing domestic LPG cylinder consumption by up to 20%.",
      features: [
        "Ultrasonic chemical nozzle & jet bath",
        "Air-fuel mixing chamber de-carbonization",
        "Spindle manifold grease re-packing",
        "Post-service burner flame temperature calibration",
      ],
      issues: ["Sluggish cooking times", "Clogged jet orifices", "Heavy carbon encrustation", "Higher monthly gas consumption"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "90-Day Calibration Warranty",
      arrival: "15-25 Mins Doorstep Arrival",
    },
    {
      id: "commercial-bhatti",
      icon: Building2,
      title: "Commercial Kitchen Stove & Bhatti Service",
      slug: "#commercial-bhatti",
      image: "/images/commercial-stove.jpg",
      badge: "Commercial / AMC",
      description:
        "Heavy-duty on-call repair and preventive maintenance contracts for restaurants, cloud kitchens, cafes, and catering cooking ranges.",
      features: [
        "High-pressure bhatti burner servicing & jet tuning",
        "Commercial manifold bank & multi-cylinder testing",
        "Chinese wok range burner & pilot light repairs",
        "Custom quarterly & annual AMC maintenance plans",
      ],
      issues: ["Bhatti low pressure / flickering flame", "Commercial regulator failure", "Manifold joint micro-leakage", "Kitchen downtime risk"],
      estimatePolicy: "Transparent Upfront Quote • Pay After Service",
      warranty: "Commercial Warranty & Rapid AMC Support",
      arrival: "Priority Commercial Dispatch",
    },
  ]

  const categories = [
    {
      icon: Home,
      title: "Residential Kitchen Services",
      subtitle: "Serving Apartments, Bungalows & Housing Societies",
      description:
        "Comprehensive doorstep repair and maintenance for home cooking appliances. We handle standard countertop stoves, designer built-in glass hobs, and apartment copper pipelines.",
      highlights: [
        "Doorstep service in 15-25 minutes across Pune, Mumbai & Hyderabad",
        "Zero advance payment — pay securely after testing via UPI/Cash",
        "100% genuine brass replacement spares with 90-day warranty",
        "Digital combustible gas leak inspection included on every visit",
      ],
      coverage: "Pune (27+ areas) • Mumbai (16+ hubs) • Hyderabad (40+ localities)",
    },
    {
      icon: Building2,
      title: "Commercial Kitchen & Restaurant Solutions",
      subtitle: "Supporting Cafes, Hotels, Cloud Kitchens & Bakeries",
      description:
        "Zero kitchen downtime guarantee. Dedicated commercial technicians trained in high-pressure bhattis, tandoors, Chinese wok ranges, and bulk manifold copper piping.",
      highlights: [
        "Fast-track emergency response to prevent order delay and revenue loss",
        "Custom Annual Maintenance Contracts (AMC) with scheduled audits",
        "Commercial heavy-duty forged brass regulators and safety ball valves",
        "FSSAI and local fire safety compliance inspection support",
      ],
      coverage: "All major commercial food clusters and industrial zones",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Instant Booking",
      desc: "Call our 24/7 helpline or click WhatsApp. Share your location and issue in 30 seconds.",
    },
    {
      step: "02",
      title: "15-25 Min Dispatch",
      desc: "A certified, background-verified technician arrives at your doorstep with full toolkit & genuine spares.",
    },
    {
      step: "03",
      title: "Clear Upfront Estimate",
      desc: "Our specialist diagnoses the root issue and provides an itemized quote before starting work.",
    },
    {
      step: "04",
      title: "Precision Repair & Sniffer Audit",
      desc: "Nozzle descaling, brass valve alignment, and digital sniffer testing to ensure 0% gas leak.",
    },
    {
      step: "05",
      title: "Test Burn & 90-Day Warranty",
      desc: "Test the flame power yourself. Pay securely via UPI/Cash only after 100% satisfaction.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (Deep Midnight Navy Canvas) */}
      <section className="bg-[#071126] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-sky-500/5 to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-sky-400 font-semibold">Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-600/20 text-sky-300 border border-blue-500/30 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Certified Doorstep Technicians • 15-25 Min Arrival</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Expert Doorstep Gas Solutions <span className="text-sky-400">— Precision, Safety &amp; Zero Waste</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              From ultrasonic burner nozzle descaling and built-in hob spark ignition tuning to certified copper pipeline routing across Pune, Mumbai, and Hyderabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href="tel:+918302713127"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: +91 83027 13127</span>
              </a>

              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: "All Services Inquiry",
                  city: "General",
                  message: "Hi Gas Repair Wale, I need assistance with a gas service quotation.",
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Get Free Quote on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-12 border-t border-slate-800">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Fast Turnaround</span>
              </div>
              <p className="text-lg sm:text-xl font-black text-white">15–25 Mins Arrival</p>
              <p className="text-xs text-slate-400 mt-0.5">Across all 3 city clusters</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Safety Certified</span>
              </div>
              <p className="text-lg sm:text-xl font-black text-white">Electronic Leak Audit</p>
              <p className="text-xs text-slate-400 mt-0.5">Digital sniffer check included</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Wrench className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Parts Quality</span>
              </div>
              <p className="text-lg sm:text-xl font-black text-white">100% Genuine Brass</p>
              <p className="text-xs text-slate-400 mt-0.5">Factory-matched OEM parts</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-yellow-400 mb-1">
                <FileCheck2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Guaranteed</span>
              </div>
              <p className="text-lg sm:text-xl font-black text-white">90-Day Warranty</p>
              <p className="text-xs text-slate-400 mt-0.5">Zero risk doorstep assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Catalog (6 Cards) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Professional Gas Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your required service below for doorstep technician dispatch, upfront estimates, and genuine brass parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 rounded-3xl bg-slate-50/80 border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-300 transition-all duration-200"
                >
                  <div>
                    {/* Service Image with Top Badge */}
                    <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-none">
                        {service.badge}
                      </div>
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {service.arrival}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-5">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* What's Included */}
                      <div>
                        <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                          What is Included:
                        </p>
                        <ul className="space-y-1.5">
                          {service.features.map((feat, fIdx) => (
                            <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Common Issues Fixed */}
                      <div>
                        <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Common Issues We Fix:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.issues.map((iss, iIdx) => (
                            <span key={iIdx} className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                              {iss}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Service Policy Badge */}
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                        <p className="text-xs font-bold text-blue-900">{service.estimatePolicy}</p>
                        <p className="text-[11px] text-blue-700 mt-0.5">{service.warranty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppRedirectUrl({
                          serviceType: service.title,
                          city: "General",
                          message: `Hi Gas Repair Wale, I need assistance with ${service.title}.`,
                        })}
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-none cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href="tel:+918302713127"
                        className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-none cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Now</span>
                      </a>
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors"
                    >
                      <span>View Full Service Specs & Diagnosis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Residential vs Commercial Solutions */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Tailored Residential &amp; Commercial Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Whether you are a homeowner in need of prompt burner repair or a restaurant requiring commercial range maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                          {cat.title}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600">{cat.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Service Highlights:</p>
                      <ul className="space-y-2">
                        {cat.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 font-medium">{cat.coverage}</p>
                    <a
                      href="tel:+918302713127"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shadow-none shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. 5-Step Simple & Reliable Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How Our Doorstep Service Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A transparent, hassle-free procedure from initial booking to certified blue flame handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-blue-600 block mb-3">{step.step}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Gas Stove & Hob Brands */}
      <BrandShowcase />

      {/* 6. Safety Guarantees Component */}
      <SafetyGuarantees />

      {/* 7. Quick Booking Form Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
              Direct Doorstep Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Schedule Your Gas Technician Visit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Book online in 30 seconds. Pay securely after verified inspection and safe test burning.
            </p>
          </div>

          <QuickBookingForm />
        </div>
      </section>

      {/* 8. Contact CTA Component */}
      <ContactCTA />
    </main>
  )
}
