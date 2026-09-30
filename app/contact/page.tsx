import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  ShieldCheck,
  UserCheck,
  ExternalLink,
  AlertTriangle,
  PhoneCall,
  Home,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Flame
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { TrackedLink } from "@/components/tracked-link"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/json-ld/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Contact Us | Gas Repair Wale — Mumbai, Pune & Hyderabad",
  description:
    "Contact Gas Repair Wale for professional gas stove repair, pipeline installation & emergency service in Mumbai, Pune & Hyderabad. Direct Call, WhatsApp & Verified Hub Addresses.",
  alternates: {
    canonical: "https://gasrepairwale.com/contact",
  },
  openGraph: {
    title: "Contact Gas Repair Wale | Official Service Hubs",
    description:
      "Get in touch for gas repair across Mumbai, Pune & Hyderabad. Verified service hubs, licensed technicians, and 24/7 emergency dispatch.",
    url: "https://gasrepairwale.com/contact",
  },
}

export default function ContactPage() {
  const hubs = [
    {
      city: "Mumbai Service Hub",
      region: "Western & Central Mumbai",
      address: "Dalvi Plazza, Shop Number 1, OM Nagar, JB Nagar, Andheri East, Mumbai, Maharashtra 400059",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      coverage: "Andheri, Borivali, Kandivali, Malad, Goregaon, Bandra, Dadar & all Mumbai Suburbs",
      googleMapsUrl: "https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093",
      timing: "8:00 AM – 9:00 PM (Emergency 24/7)",
    },
    {
      city: "Pune Service Hub",
      region: "East, West & Central Pune",
      address: "Sr No. 123, Ganesh Nagar, Phursungi, Pune-Saswad Road, Pune, Maharashtra 412308",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      coverage: "Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Kharadi, Fursungi, Viman Nagar & all Pune Localities",
      googleMapsUrl: "https://business.google.com/n/16485793595543893042/profile?fid=5310968251242542856",
      timing: "8:00 AM – 9:00 PM (Emergency 24/7)",
    },
    {
      city: "Hyderabad Service Hub",
      region: "West & North Hyderabad",
      address: "Shop No. 4, Allwyn X Road, Near Miyapur Metro Station, Miyapur, Hyderabad, Telangana 500049",
      phone: "+91 63047 39440",
      phoneTel: "tel:+916304739440",
      coverage: "Nallagandla, Tellapur, BHEL, Miyapur, Kukatpally, Suchitra, Gachibowli, Kokapet & IT Corridor",
      googleMapsUrl: null,
      timing: "8:00 AM – 9:00 PM (Emergency 24/7)",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", item: "https://gasrepairwale.com" },
    { name: "Contact Us", item: "https://gasrepairwale.com/contact" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Visual Breadcrumb Navigation */}
      <div className="bg-[#0b1730] border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-xs sm:text-sm text-slate-400 flex-wrap gap-1" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-white font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Executive Midnight Navy Hero Section */}
      <section className="relative bg-[#071126] text-white py-16 sm:py-20 overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 40%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <MapPin className="w-3.5 h-3.5" />
                Pune • Mumbai • Hyderabad
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                <Clock className="w-3.5 h-3.5" />
                15–25 Mins Emergency Arrival
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <BadgeCheck className="w-3.5 h-3.5" />
                100% Certified Technicians
              </span>
            </div>

            {/* Headline: Blue text on the same line */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Get in Touch with <span className="text-sky-400">Gas Repair Wale</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Book certified doorstep gas stove, glass hob & pipeline technicians across Mumbai, Pune, and Hyderabad. Average 15 to 25 minute arrival for emergency gas leaks.
            </p>

            {/* Direct Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-7 py-3.5 text-base transition-colors"
              >
                <TrackedLink
                  href="tel:+918302713127"
                  className="flex items-center justify-center space-x-2"
                  category="phone"
                  city="Pune & Mumbai"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Call Pune / Mumbai: +91 83027 13127</span>
                </TrackedLink>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl shadow-none border border-slate-700 px-7 py-3.5 text-base transition-colors"
              >
                <TrackedLink
                  href="tel:+916304739440"
                  className="flex items-center justify-center space-x-2"
                  category="phone"
                  city="Hyderabad"
                >
                  <Phone className="h-5 w-5 text-sky-400" />
                  <span>Call Hyderabad: +91 63047 39440</span>
                </TrackedLink>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none px-7 py-3.5 text-base transition-colors"
              >
                <TrackedLink
                  href={getWhatsAppRedirectUrl({
                    serviceType: "General Inquiry",
                    city: "General",
                    message: "Hi Gas Repair Wale, I need assistance with gas stove / pipeline service.",
                  })}
                  className="flex items-center justify-center space-x-2"
                  category="whatsapp"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-white" />
                  <span>WhatsApp Quote</span>
                </TrackedLink>
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sky-400">15-25 Mins</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Average Arrival</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Leak Emergency Helpline</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sky-400">3 Hubs</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Physical Workshops</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">90 Days</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Service Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Regional Service Hubs & Workshops */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              OFFICIAL PHYSICAL WORKSHOPS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our City Service Centers & Dispatch Hubs
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Visit our physical workshops or connect with our city-specific dispatch desks for immediate doorstep visits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 shadow-none hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                      {hub.region}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      Active Dispatch
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{hub.city}</h3>

                  <div className="flex items-start gap-2.5 text-slate-600 text-sm mb-4 leading-relaxed">
                    <MapPin className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                    <span>{hub.address}</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs text-slate-600 mb-5">
                    <strong className="text-slate-800 block mb-1">Key Coverage Sectors:</strong>
                    <span>{hub.coverage}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <TrackedLink
                    href={hub.phoneTel}
                    className="flex items-center justify-center gap-2 w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
                    category="phone"
                    city={hub.city}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {hub.phone}</span>
                  </TrackedLink>

                  {hub.googleMapsUrl ? (
                    <a
                      href={hub.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-xs text-blue-600 hover:text-blue-800 font-medium py-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      View Google Business Profile
                    </a>
                  ) : (
                    <div className="text-center text-xs text-slate-400 py-1">
                      Registered Workshop Miyapur
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dispatch Channels & Verification Standards (2-column layout) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Technician Verification Proof & Protocols */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1 text-xs font-semibold mb-3">
                  DOORSTEP SAFETY PROTOCOL
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Your Safety is Our Highest Priority
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                  Every service request is handled by trained, ID-verified technicians equipped with calibrated electronic detection instruments.
                </p>
              </div>

              {/* Verified Technician ID Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950">
                <img
                  src="/images/technician-id-verified.jpg"
                  alt="Certified Gas Repair Wale technician with specialized toolkit and digital leak detector"
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CERTIFIED & BACKGROUND VERIFIED</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-white">Doorstep Safety Guaranteed</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Technicians carry official company photo ID, standardized brass spare parts, and digital gas sniffer detectors on every visit.
                  </p>
                </div>
              </div>

              {/* 4 Protocol Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                  <UserCheck className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-bold text-sm text-slate-900">Photo ID Verified</h4>
                  <p className="text-xs text-slate-600 mt-1">Government ID and background verification for customer security.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-sm text-slate-900">Electronic Sniffer Test</h4>
                  <p className="text-xs text-slate-600 mt-1">Mandatory digital gas sniffer check before and after service.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                  <BadgeCheck className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-bold text-sm text-slate-900">100% Genuine Brass</h4>
                  <p className="text-xs text-slate-600 mt-1">Certified heavy-gauge brass burners, valves, and copper pipes.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-sm text-slate-900">90-Day Warranty</h4>
                  <p className="text-xs text-slate-600 mt-1">Digital warranty on replaced parts and workmanship.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Booking Form */}
            <div className="lg:col-span-6">
              <div className="mb-6">
                <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
                  FAST LEAD DISPATCH
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Book Technician Doorstep Visit
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                  Fill in your details below and our nearest local technician will call you within 5 minutes.
                </p>
              </div>

              <QuickBookingForm area={{ name: "City Hub", city: "Pune" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Gas Smell Safety First Aid Banner */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
                <AlertTriangle className="w-4 h-4" />
                <span>GAS SMELL SAFETY ADVISORY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Suspecting a Gas Leak? Take These Immediate Steps:
              </h3>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 max-w-2xl">
                <li>• <strong>Turn Off:</strong> Immediately switch off cylinder regulator knob or PNG pipeline main valve.</li>
                <li>• <strong>Ventilate:</strong> Open all kitchen windows and doors to allow fresh air circulation.</li>
                <li>• <strong>No Sparks:</strong> DO NOT turn electric switches ON or OFF, and avoid matches or lighters.</li>
                <li>• <strong>Call Emergency:</strong> Evacuate the kitchen area and call our emergency dispatch team immediately.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-6"
              >
                <TrackedLink href="tel:+918302713127" category="phone" city="Emergency">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span>Emergency: +91 83027 13127</span>
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Hours & Direct Support Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-1 text-xs font-semibold mb-3">
              DIRECT REACH
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Direct Contact & Operating Hours
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-none">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Phone Helplines</h4>
              <p className="text-xs text-slate-600 mb-2">Pune/Mumbai: +91 83027 13127</p>
              <p className="text-xs text-slate-600">Hyderabad: +91 63047 39440</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-none">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">WhatsApp Chat</h4>
              <p className="text-xs text-slate-600 mb-2">Send photos/videos for instant diagnosis & quote</p>
              <span className="text-xs text-emerald-600 font-semibold">Active Daily</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-none">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Service Hours</h4>
              <p className="text-xs text-slate-600 mb-1">Regular: 8:00 AM – 9:00 PM</p>
              <p className="text-xs text-slate-600">Emergency Leaks: 24/7 Support</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-none">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Official Email</h4>
              <p className="text-xs text-slate-600 mb-2">gasrepairwale@gmail.com</p>
              <span className="text-xs text-slate-400">Response within 24 hrs</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
