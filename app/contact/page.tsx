import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, ShieldCheck, UserCheck, ExternalLink } from "lucide-react"
import { TrackedWhatsAppButton } from "@/components/tracked-whatsapp-button"
import { QuickBookingForm } from "@/components/quick-booking-form"

export const metadata: Metadata = {
  title: "Contact Us | Gas Repair Wale — Mumbai, Pune & Hyderabad",
  description:
    "Contact Gas Repair Wale for professional gas stove repair, pipeline installation & emergency service in Mumbai, Pune & Hyderabad. Direct Call, WhatsApp & Verified Hub Addresses.",
  alternates: {
    canonical: "https://gasrepairwale.com/contact",
  },
  openGraph: {
    title: "Contact Gas Repair Wale | Official Service Hubs",
    description: "Get in touch for gas repair across Mumbai, Pune & Hyderabad. Verified service hubs, licensed technicians, and 24/7 emergency dispatch.",
    url: "https://gasrepairwale.com/contact",
  },
}

export default function ContactPage() {
  const hubs = [
    {
      city: "Mumbai Service Hub",
      address: "Dalvi Plazza, Shop Number 1, OM Nagar, JB Nagar, Andheri East, Mumbai, Maharashtra 400059",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      coverage: "Andheri, Borivali, Kandivali, Malad, Goregaon, Bandra, Dadar & all Mumbai Suburbs",
      googleMapsUrl: "https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093",
    },
    {
      city: "Pune Service Hub",
      address: "Sr No. 123, Ganesh Nagar, Phursungi, Pune-Saswad Road, Pune, Maharashtra 412308",
      phone: "+91 83027 13127",
      phoneTel: "tel:+918302713127",
      coverage: "Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Kharadi, Fursungi & all Pune Localities",
      googleMapsUrl: "https://business.google.com/n/16485793595543893042/profile?fid=5310968251242542856",
    },
    {
      city: "Hyderabad Service Hub",
      address: "Shop No. 4, Allwyn X Road, Near Miyapur Metro Station, Miyapur, Hyderabad, Telangana 500049",
      phone: "+91 99508 09283 (Direct Lead: Vikash Ji)",
      phoneTel: "tel:+919950809283",
      coverage: "Nallagandla, Tellapur, BHEL, Miyapur, Kukatpally, Suchitra, Gachibowli, Kokapet & West/North Hyderabad",
      googleMapsUrl: null,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold text-orange-700 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Official Service Centers
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Contact <span className="text-orange-600">Gas Repair Wale</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book certified doorstep gas technicians across Mumbai, Pune, and Hyderabad. Fast 15 to 25 minute arrival for emergency gas leaks.
          </p>
        </div>
      </section>

      {/* Verified Hub Addresses Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-green-700 uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
              Physical Hub Locations
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Our City Service Centers & Workshops
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
              Visit our registered hubs or call our dispatch lines for immediate technician visits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200/80 hover:border-orange-500 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-orange-600 mb-3">
                    <MapPin className="h-6 w-6 flex-shrink-0" />
                    <h3 className="font-extrabold text-lg text-gray-900">{hub.city}</h3>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {hub.address}
                  </p>

                  <div className="text-xs text-gray-500 mb-4 bg-white p-3 rounded-lg border border-gray-200">
                    <strong className="text-gray-700 block mb-1">Coverage Area:</strong>
                    {hub.coverage}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <a
                    href={hub.phoneTel}
                    className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors"
                  >
                    Call: {hub.phone}
                  </a>

                  {hub.googleMapsUrl && (
                    <a
                      href={hub.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-xs text-blue-700 hover:text-blue-900 font-semibold py-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      View Verified Google Business Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Channels & Technician Photo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side: Photo & Trust Signals */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-orange-200 bg-gray-900">
                <img
                  src="/images/technician-id-verified.jpg"
                  alt="Certified Gas Repair Wale technician with specialized toolkit and digital leak detector"
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center space-x-2 text-xs font-bold text-green-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CERTIFIED & BACKGROUND VERIFIED</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-white">Doorstep Safety Guaranteed</h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Every technician arrives with standardized safety tools, calibrated pressure gauges, and digital gas sniffers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <UserCheck className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">Verified Personnel</h4>
                  <p className="text-xs text-gray-600 mt-1">Trained in LPG/PNG safety protocols.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">Electronic Leak Test</h4>
                  <p className="text-xs text-gray-600 mt-1">Mandatory digital testing on every visit.</p>
                </div>
              </div>
            </div>

            {/* Right side: Quick Form */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                  Quick Booking
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                  Send a Service Request
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fill in your details below and our nearest technician will contact you within 5 minutes.
                </p>
              </div>

              <QuickBookingForm area={{ name: "City Hub", city: "Pune" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & Business Hours Bar */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-3">
            <Clock className="w-6 h-6" />
            <h3 className="font-extrabold text-xl text-gray-900">Working Hours & Emergency Support</h3>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Regular Doorstep Service: <strong>8:00 AM to 8:30 PM (Mon - Sun)</strong> | Gas Leak Emergency: <strong>24/7 Available</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+918302713127"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Pune & Mumbai Helpline: +91 83027 13127
            </a>
            <a
              href="tel:+919950809283"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Hyderabad Helpline: +91 99508 09283 (Vikash Ji)
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
