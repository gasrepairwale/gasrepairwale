import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { SafetyGuarantees } from "@/components/safety-guarantees"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import {
  Award,
  Users,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Target,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Flame,
  Wrench,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Gas Repair Wale | Gas Stove Repair & Pipeline Experts Since 2013",
  description:
    "Learn about Gas Repair Wale — Leading doorstep gas stove repair and copper pipeline company since 2013. 5000+ Satisfied Customers, Certified Technicians, 24/7 Emergency Service in Pune, Mumbai & Hyderabad. 4.9/5 Rating. Call +91 83027 13127!",
  keywords: [
    "about Gas Repair Wale",
    "gas repair company pune mumbai hyderabad",
    "professional gas technicians",
    "licensed gas repair service",
    "gas stove repair history",
    "experienced gas technicians",
    "gas safety experts",
    "reliable gas repair service",
    "gas appliance specialists",
    "certified gas professionals",
    "gas repair team",
  ].join(", "),
  authors: [{ name: "Gas Repair Wale", url: "https://gasrepairwale.com" }],
  creator: "Gas Repair Wale",
  publisher: "Gas Repair Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairwale.com/about",
    title: "About Gas Repair Wale | Professional Gas Repair Since 2013",
    description:
      "Leading gas repair company with 15+ years combined experience, 5000+ satisfied customers, certified technicians serving Pune, Mumbai & Hyderabad. 4.9/5 rating, 24/7 emergency service.",
    siteName: "Gas Repair Wale",
    images: [
      {
        url: "/images/stove-flame-test.jpg",
        width: 1200,
        height: 630,
        alt: "About Gas Repair Wale - Certified Gas Repair Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gas Repair Wale | Professional Gas Repair Company",
    description:
      "Leading gas repair company since 2013 with 5000+ customers, certified technicians, 24/7 service in Pune, Mumbai & Hyderabad. Call +91 83027 13127",
    images: ["/images/stove-flame-test.jpg"],
  },
  alternates: {
    canonical: "https://gasrepairwale.com/about",
  },
}

export default function AboutPage() {
  const hubs = [
    {
      city: "Mumbai Operations Hub",
      subTitle: "Western & Central Suburb Fleet",
      address: "Dalvi Plazza Shop Number 1 OM Nagar JB Nagar, Andheri East, Maharashtra 400059",
      googleMapUrl: "https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      highlights: "2,000+ completed repairs across Mumbai high-rises and residences.",
      areas: ["Andheri", "Bandra", "Borivali", "Kandivali", "Goregaon", "Malad", "Dadar", "Powai"],
    },
    {
      city: "Pune Operations Hub",
      subTitle: "Founding Hub & Central Workshop",
      address: "Sr no 123 Ganesh Nagar Phursungi, Pune Saswad Rd, Pune, Maharashtra 412308",
      googleMapUrl: "https://business.google.com/n/16485793595543893042/profile?fid=5310968251242542856",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      highlights: "Over 3,000+ satisfied residential & commercial customers since 2013.",
      areas: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Hadapsar", "Kharadi", "Viman Nagar", "Aundh"],
    },
    {
      city: "Hyderabad Operations Hub",
      subTitle: "West & North Corridor Technical Team",
      address: "Shop No. 4, Allwyn X Road, Near Miyapur Metro Station, Miyapur, Hyderabad, Telangana 500049",
      phone: "+91 63047 39440",
      phoneTel: "tel:+916304739440",
      highlights: "Dedicated fleet with 15-25 min arrival across West & North Hyderabad.",
      areas: ["Miyapur", "HITEC City", "Gachibowli", "Kukatpally", "Tellapur", "Kondapur", "BHEL", "Madhapur"],
    },
  ]

  const milestones = [
    {
      year: "2013",
      title: "Company Founded in Pune",
      description: "Started with a vision to deliver safe, transparent gas stove and pipeline services in Pune with certified technicians.",
      tag: "Foundation",
    },
    {
      year: "2016",
      title: "Expansion to Mumbai Metro",
      description: "Established operations hub in Andheri East, bringing rapid doorstep repair to high-rise societies across Mumbai.",
      tag: "Expansion",
    },
    {
      year: "2019",
      title: "1,000+ Kitchens Milestone",
      description: "Earned 1,000+ verified customer reviews with an exceptional 4.9★ rating for pure blue flame tuning and safety compliance.",
      tag: "Credibility",
    },
    {
      year: "2022",
      title: "24/7 Emergency Leak Response Fleet",
      description: "Equipped mobile technicians with multi-sensor digital combustible gas sniffers and 15-25 minute doorstep response.",
      tag: "Emergency Fleet",
    },
    {
      year: "2024+",
      title: "Hyderabad Hub & 5,000+ Customers",
      description: "Expanded to Hyderabad (Miyapur & IT Corridor), serving over 5,000 satisfied households and commercial kitchens.",
      tag: "Leadership",
    },
  ]

  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Safety",
      description: "Every repair includes digital sniffer gas leak testing across all regulators, joints, and burner valves before handover.",
    },
    {
      icon: Wrench,
      title: "100% Genuine Brass Parts",
      description: "We strictly prohibit cheap duplicate spares. Every jet, burner, and valve is factory-matched with up to 90 days warranty.",
    },
    {
      icon: Clock,
      title: "15-25 Min Response",
      description: "Gas emergencies cannot wait. Our neighborhood dispatch hubs ensure fastest doorstep arrival in Pune, Mumbai & Hyderabad.",
    },
    {
      icon: Award,
      title: "Transparent Upfront Pricing",
      description: "Zero hidden charges. Technicians inspect the appliance and provide a clear, itemized quote before starting work.",
    },
  ]

  const fieldEquipment = [
    {
      image: "/images/stove-flame-test.jpg",
      title: "Blue Flame Calibration",
      description: "Calibrated air-gas ratio testing to ensure 100% pure blue flame with zero soot and zero LPG fuel wastage.",
    },
    {
      image: "/images/gas-leak-detector.jpg",
      title: "Electronic Gas Leak Detection",
      description: "High-precision electronic sniffers detecting combustible hydrocarbon gases down to micro-PPM levels.",
    },
    {
      image: "/images/gas-brass-parts.jpg",
      title: "Factory-Matched Brass Spares",
      description: "Heavy forged brass burners, calibrated nozzles, and high-pressure valves tested for durability.",
    },
    {
      image: "/images/copper-pipeline.jpg",
      title: "BIS-Certified Copper Piping",
      description: "Seamless heavy-gauge copper pipeline installation with silver-brazed leakproof joints and isolation valves.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Premium Dark Navy Canvas */}
      <section className="bg-[#071126] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 relative overflow-hidden border-b border-slate-800">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-sky-500/5 to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-sky-400 font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-600/20 text-sky-300 border border-blue-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Since 2013 • Doorstep Gas Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Engineering Safety &amp; Trust <span className="text-sky-400">in Every Flame</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              For over a decade, Gas Repair Wale has been the trusted technical fleet for doorstep gas stove repairs, glass hob overhauls, and certified copper pipeline installations across Pune, Mumbai, and Hyderabad.
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
                  serviceType: "About Page Inquiry",
                  city: "General",
                  message: "Hi Gas Repair Wale, I would like to know more about your doorstep gas services.",
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-12 border-t border-slate-800">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-white">5,000+</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Safe Kitchens Serviced</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-sky-400">15-25m</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Doorstep Response Time</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">100%</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Genuine Brass Parts</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-yellow-400">4.9/5</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Customer Rating (Google)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Journey & Story (2-Column Showcase) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: 2 Staggered Real Photos */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden bg-slate-950 aspect-[3/4] border border-slate-200">
                  <img
                    src="/images/technician-hero.jpg"
                    alt="Certified technician servicing gas stove"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden bg-slate-950 aspect-[3/4] mt-8 border border-slate-200">
                  <img
                    src="/images/stove-flame-test.jpg"
                    alt="Technician testing blue flame"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-28 h-28 sm:w-32 sm:h-32 p-3 border-4 border-white flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-2xl sm:text-3xl font-black leading-none">15+</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-100 mt-1">
                  Years Expertise
                </span>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                  Our Mission &amp; Purpose
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Born Out of a Need for <br />
                  <span className="text-blue-600">Safe, Honest Service.</span>
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Gas appliances are the heart of every Indian home, yet cooking gas leaks and burner malfunctions remain major household hazards. In 2013, our founders noticed that homeowners frequently had to choose between unskilled local mechanics who used duplicate parts or costly service calls with days of delay.
                </p>
                <p>
                  <strong>Gas Repair Wale</strong> was built to solve this exact problem: providing certified, background-verified technicians who arrive with digital leak detectors, calibrated pressure tools, and 100% genuine brass parts directly to your doorstep in 15-25 minutes.
                </p>
                <p>
                  Today, we maintain dedicated operations hubs in <strong>Pune, Mumbai, and Hyderabad</strong>. We take pride in our zero-compromise approach: pure blue flame tuning, upfront itemized estimates before work begins, and a 90-day warranty backing every service.
                </p>
              </div>

              {/* 3 Quick Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Zero Leaks Policy</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sniffer tested on visit</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Genuine Brass</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Factory-matched parts</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                    <Zap className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Pay After Test</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">UPI/Cash post-approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Milestones Timeline */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
              Growth &amp; Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Journey Through the Years
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From a 2-technician setup in Pune to an established 3-city doorstep service network.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-none flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-600">{item.year}</span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Verified Operations Hubs (3 City Cards) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Physical Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Verified Regional Operations Hubs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We operate from verified physical dispatch hubs equipped with spare parts inventory and rapid technician response teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">{hub.city}</h3>
                      <p className="text-xs text-blue-600 font-semibold">{hub.subTitle}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Hub Address:</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">{hub.address}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{hub.highlights}</p>

                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Key Areas Covered:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.areas.map((area, aIdx) => (
                        <span key={aIdx} className="text-[11px] font-medium bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  <a
                    href={hub.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-none"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Hub ({hub.phone})</span>
                  </a>

                  {hub.googleMapUrl && (
                    <a
                      href={hub.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors shadow-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                      <span>Verified Google Business Profile</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Field Equipment & Authenticity Gallery */}
      <section className="py-16 sm:py-24 bg-[#071126] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-600/20 text-sky-300 border border-blue-500/30 mb-3">
              Technical Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Real Equipment. Authentic Parts.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              We invest in professional tools and genuine components so your appliances operate with maximum efficiency and zero safety hazards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldEquipment.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Values That Guide Every Doorstep Visit
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every Gas Repair Wale technician is trained to uphold four core operational principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between hover:border-blue-200 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Safety Guarantees */}
      <SafetyGuarantees />

      {/* 8. Contact CTA Form */}
      <ContactCTA />
    </main>
  )
}
