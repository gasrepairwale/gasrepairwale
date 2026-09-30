import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, ShieldCheck, CheckCircle2, ChevronRight, ExternalLink, ArrowRight, Sparkles, Building2, Wrench, AlertTriangle } from "lucide-react"
import { CITIES, getTotalAreasCount } from "@/lib/locations-data"
import { LocalityDirectory } from "@/components/locality-directory"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { ContactCTA } from "@/components/contact-cta"
import { SafetyGuarantees } from "@/components/safety-guarantees"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Service Locations in Pune, Mumbai & Hyderabad | Gas Repair Wale",
  description:
    "Doorstep gas stove repair, hob auto-ignition tuning, and copper pipeline services across 85+ localities in Pune, Mumbai & Hyderabad. 15-25 min arrival, verified technicians. Call +91 83027 13127!",
  keywords: [
    "gas repair locations pune",
    "gas repair locations mumbai",
    "gas repair locations hyderabad",
    "gas stove repair near me",
    "gas pipeline installation areas",
    "emergency gas leak repair locations",
    "hob repair pune",
    "hob repair mumbai",
    "hob repair hyderabad",
  ].join(", "),
  openGraph: {
    title: "Service Locations in Pune, Mumbai & Hyderabad | Gas Repair Wale",
    description: "Doorstep gas stove and pipeline services across 85+ localities with 15-25 min arrival.",
    url: "https://gasrepairwale.com/locations",
    siteName: "Gas Repair Wale",
    images: [
      {
        url: "/images/technician-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repair Wale Regional Service Hubs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Locations | Gas Repair Wale",
    description: "Doorstep gas stove repair across 85+ localities in Pune, Mumbai and Hyderabad.",
    images: ["/images/technician-hero.jpg"],
  },
  alternates: {
    canonical: "https://gasrepairwale.com/locations",
  },
}

export default function LocationsPage() {
  const totalAreas = getTotalAreasCount()

  const regionalHubs = [
    {
      city: "Mumbai Regional Hub",
      subTitle: "Western & Central Suburb Units",
      address: "Dalvi Plazza Shop Number 1 OM Nagar JB Nagar, Andheri East, Maharashtra 400059",
      googleMapUrl: "https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      responseTime: "15-25 mins",
      coverageNote: "16+ Major Hubs covering Borivali to Dadar, Powai & Ghatkopar.",
      popularAreas: ["Andheri East", "Andheri West", "Bandra", "Borivali", "Goregaon", "Malad", "Kandivali", "Powai"],
      citySlug: "mumbai",
    },
    {
      city: "Pune Regional Hub",
      subTitle: "Founding Hub & Central Workshop",
      address: "Sr no 123 Ganesh Nagar Phursungi, Pune Saswad Rd, Pune, Maharashtra 412308",
      googleMapUrl: "https://business.google.com/n/16485793595543893042/profile?fid=5310968251242542856",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      responseTime: "15-25 mins",
      coverageNote: "27+ Localities covering IT corridor, East & West residential sectors.",
      popularAreas: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Hadapsar", "Kharadi", "Viman Nagar", "Aundh"],
      citySlug: "pune",
    },
    {
      city: "Hyderabad Regional Hub",
      subTitle: "West & North Corridor Technical Team",
      address: "Shop No. 4, Allwyn X Road, Near Miyapur Metro Station, Miyapur, Hyderabad, Telangana 500049",
      phone: "+91 63047 39440",
      phoneTel: "tel:+916304739440",
      responseTime: "15-25 mins",
      coverageNote: "40+ Localities covering IT Cyberabad corridor & residential zones.",
      popularAreas: ["Miyapur", "HITEC City", "Gachibowli", "Kukatpally", "Tellapur", "Kondapur", "BHEL", "Madhapur"],
      citySlug: "hyderabad",
    },
  ]

  const hubFeatures = [
    {
      icon: Clock,
      title: "15-25 Min Response",
      desc: "Local mobile technician vans stationed across major residential clusters for rapid arrival.",
    },
    {
      icon: ShieldCheck,
      title: "Electronic Leak Audit",
      desc: "Multi-sensor digital combustible gas sniffer testing on all joints, valves, and regulators.",
    },
    {
      icon: Wrench,
      title: "100% Genuine Brass Spares",
      desc: "Factory-matched forged brass burners, jets, and spindles carried directly in our service kits.",
    },
    {
      icon: CheckCircle2,
      title: "Pay After Doorstep Testing",
      desc: "Zero advance payment. Test flame power thoroughly, then pay securely via UPI or Cash.",
    },
  ]

  const faqs = [
    {
      q: "How quickly does a technician reach my area?",
      a: "Our local dispatch vans operate in localized zones across Pune, Mumbai, and Hyderabad. On average, a certified technician arrives within 15 to 25 minutes of your booking confirmation.",
    },
    {
      q: "What if my exact apartment or locality is not listed?",
      a: "We service virtually all residential societies, gated communities, and commercial kitchens across Pune, Mumbai, and Hyderabad. If your locality is nearby any of our listed hubs, our mobile team can reach you promptly.",
    },
    {
      q: "Is 24/7 emergency service available in all cities?",
      a: "Yes. For serious gas leakages, regulator hissing, or fire hazard concerns, our 24/7 emergency response hotline operates round the clock in Pune, Mumbai, and Hyderabad.",
    },
    {
      q: "Do I need to pay any advance charges for booking?",
      a: "No. Gas Repair Wale never asks for advance payment. Our technician inspects your appliance, gives you a clear upfront estimate, completes the repair, and you pay only after safe test burning.",
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
            <span className="text-sky-400 font-semibold">Service Locations</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-600/20 text-sky-300 border border-blue-500/30 mb-4">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Verified Regional Coverage • {totalAreas}+ Localities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Doorstep Gas Technicians in <span className="text-sky-400">Pune, Mumbai &amp; Hyderabad</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Strategic local dispatch centers delivering 15-25 minute doorstep gas stove repairs, glass hob overhauls, and copper pipeline installations across all major residential and commercial sectors.
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
                  serviceType: "Locations Inquiry",
                  city: "General",
                  message: "Hi Gas Repair Wale, I need gas repair service in my area.",
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-none cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Find Technician on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4 Network Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-12 border-t border-slate-800">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-white">{CITIES.length} Metros</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Pune, Mumbai &amp; Hyderabad</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-sky-400">{totalAreas}+ Areas</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Active Doorstep Coverage</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">15–25m</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Average Response Arrival</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <p className="text-3xl sm:text-4xl font-black text-yellow-400">24/7 Live</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Emergency Gas Leak Dispatch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 Master City Operations Hubs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Regional Operations Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Physical Dispatch Hubs in 3 Metros
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Each regional center maintains mobile service vans, digital sniffer diagnostics, and genuine brass spare parts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regionalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-blue-300 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">{hub.city}</h3>
                      <p className="text-xs text-blue-600 font-semibold">{hub.subTitle}</p>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Verified Address:
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {hub.address}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {hub.coverageNote}
                  </p>

                  {/* Key Areas Preview */}
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Popular Hub Localities:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.popularAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hub Actions */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={hub.phoneTel}
                      className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-none"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Hub</span>
                    </a>

                    <a
                      href={getWhatsAppRedirectUrl({
                        city: hub.city.split(" ")[0],
                        message: `Hi Gas Repair Wale, I need assistance in ${hub.city.split(" ")[0]}.`,
                      })}
                      className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-none"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

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

                  <Link
                    href={`/locations/${hub.citySlug}`}
                    className="w-full flex items-center justify-center gap-1 py-1.5 text-xs font-semibold text-blue-600 hover:underline transition-colors"
                  >
                    <span>View all {hub.city.split(" ")[0]} localities</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Locality Directory (Search & Tabs for All 85+ Areas) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
              Interactive Locality Directory
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Find Your Neighborhood Technician
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your city or type your area name below to book an instant doorstep technician visit.
            </p>
          </div>

          <LocalityDirectory />
        </div>
      </section>

      {/* 4. Why Our Local Hub Network Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Neighborhood Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Why Our Localized Network Outperforms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Unlike generic lead aggregators, our certified technical teams live and operate directly in your city clusters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubFeatures.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between hover:border-blue-200 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Direct Doorstep Booking Form */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
              Direct Doorstep Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Schedule Your Local Technician Visit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Book online in 30 seconds. Pay securely after verified inspection and safe test burning.
            </p>
          </div>

          <QuickBookingForm />
        </div>
      </section>

      {/* 6. Safety Guarantees */}
      <SafetyGuarantees />

      {/* 7. Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Locations &amp; Coverage FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <ContactCTA />
    </main>
  )
}
