"use client"

import Link from "next/link"
import { Wrench, Phone, Mail, MapPin, ShieldCheck } from "lucide-react"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * Footer Component
 * Site footer with verified physical hub addresses, contact info, and links
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold">Gas Repair Wale</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Certified doorstep gas stove repair, hob flame restoration, and gas pipeline installation across Mumbai, Pune, and Hyderabad.
            </p>
            <div className="flex items-center space-x-2 text-green-400 text-xs font-semibold bg-gray-800/80 p-3 rounded-lg border border-gray-700">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span>Certified & Trained Gas Appliance Technicians</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/locations/pune" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Pune Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/mumbai" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Mumbai Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/hyderabad" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Hyderabad Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact & Hubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Gas Stove Burner Cleaning (from ₹299)</li>
              <li>Auto-Ignition & Spark Plug Repair</li>
              <li>Gas Pipeline Leak Detection & Sealing</li>
              <li>Commercial Kitchen Stove AMC</li>
              <li>Gas Hob Valve Replacement</li>
              <li>LPG & PNG Compliance Audits</li>
            </ul>
          </div>

          {/* Verified Hub Addresses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Service Hubs</h3>
            <div className="space-y-4 text-xs text-gray-300">
              <div className="border-l-2 border-orange-500 pl-3">
                <p className="font-bold text-white text-sm">Mumbai Hub</p>
                <p className="text-gray-400 mt-0.5">Dalvi Plazza, Shop 1, OM Nagar, JB Nagar, Andheri East, Mumbai 400059</p>
                <a href="tel:+918302713127" onClick={() => trackPhoneCall("+918302713127")} className="text-orange-400 font-semibold block mt-1 hover:underline">
                  Call: +91 83027 13127
                </a>
              </div>

              <div className="border-l-2 border-orange-500 pl-3">
                <p className="font-bold text-white text-sm">Pune Hub</p>
                <p className="text-gray-400 mt-0.5">Sr No. 123, Ganesh Nagar, Phursungi, Pune-Saswad Rd, Pune 412308</p>
                <a href="tel:+918302713127" onClick={() => trackPhoneCall("+918302713127")} className="text-orange-400 font-semibold block mt-1 hover:underline">
                  Call: +91 83027 13127
                </a>
              </div>

              <div className="border-l-2 border-green-500 pl-3">
                <p className="font-bold text-white text-sm">Hyderabad Hub (Vikash Ji)</p>
                <p className="text-gray-400 mt-0.5">Shop 4, Allwyn X Road, Near Metro, Miyapur, Hyderabad 500049</p>
                <a href="tel:+919950809283" onClick={() => trackPhoneCall("+919950809283")} className="text-green-400 font-semibold block mt-1 hover:underline">
                  Call: +91 99508 09283
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Gas Repair Wale. All rights reserved.</p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs text-gray-500">
          Design and Developed by{" "}
          <Link
            href="https://b29technology.com/"
            className="hover:text-orange-500 transition-colors text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            B29 Technology
          </Link>
        </div>
      </div>
    </footer>
  )
}
