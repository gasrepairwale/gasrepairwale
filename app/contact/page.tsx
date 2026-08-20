import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react"
import { TrackedWhatsAppButton } from "@/components/tracked-whatsapp-button"

export const metadata: Metadata = {
  title: "Contact Us | Gas Repair Wale — Pune, Mumbai & Hyderabad",
  description:
    "Contact Gas Repair Wale for professional gas repair services in Pune, Mumbai & Hyderabad. Call +91 83027 13127 or WhatsApp for instant support. 24/7 emergency service available.",
  alternates: {
    canonical: "https://gasrepairwale.com/contact",
  },
  openGraph: {
    title: "Contact Gas Repair Wale | +91 83027 13127",
    description: "Get in touch for gas repair services across Pune, Mumbai & Hyderabad. Call, WhatsApp, or fill our form for instant support.",
    url: "https://gasrepairwale.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-orange-600">Gas Repair Wale</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get expert gas repair services across Pune, Mumbai & Hyderabad. Our team is available 24/7 for emergencies.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Call Us</h2>
              <p className="text-gray-600 mb-4 text-sm">Available 24/7 for emergency gas repairs</p>
              <a
                href="tel:+918302713127"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                +91 83027 13127
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h2>
              <p className="text-gray-600 mb-4 text-sm">Chat instantly and get a free quote</p>
              <TrackedWhatsAppButton
                message="Hi, I need gas repair service. Please contact me."
                source="Contact Page — WhatsApp Now"
                label="💬 WhatsApp Now"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              />
            </div>

            {/* Email */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Email Us</h2>
              <p className="text-gray-600 mb-4 text-sm">For detailed queries and support</p>
              <a
                href="mailto:info@gasrepairwale.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Service Cities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  city: "Pune",
                  slug: "pune",
                  areas: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Karve Nagar", "Hadapsar", "Kharadi"],
                },
                {
                  city: "Mumbai",
                  slug: "mumbai",
                  areas: ["Borivali", "Kandivali", "Malad", "Andheri", "Bandra", "Dadar", "Marine Drive"],
                },
                {
                  city: "Hyderabad",
                  slug: "hyderabad",
                  areas: ["Gachibowli", "HITEC City", "Madhapur", "Banjara Hills", "Jubilee Hills", "Kondapur"],
                },
              ].map((location) => (
                <div key={location.city} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <h3 className="text-lg font-bold text-gray-900">{location.city}</h3>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {location.areas.map((area) => (
                      <li key={area} className="text-sm text-gray-600 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-sm text-orange-600 font-medium hover:underline"
                  >
                    View all {location.city} areas →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Monday — Sunday</p>
                  <p className="text-gray-600">Regular Services: 8:00 AM — 8:00 PM</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-red-700">Emergency Service</p>
                  <p className="text-gray-600">24/7 — 365 Days a Year</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-gray-700 font-medium">
                  🚨 Gas Leak? Call immediately:{" "}
                  <a href="tel:+918302713127" className="text-orange-600 font-bold">
                    +91 83027 13127
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
