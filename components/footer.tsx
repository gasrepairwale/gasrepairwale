import Link from "next/link"
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

/**
 * Footer Component
 * Site footer with links, contact info, and social media
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold">Gas Repaire Wale</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional gas repair and maintenance services across Pune and Mumbai. Your safety is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations/pune" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Pune
                </Link>
              </li>
              <li>
                <Link href="/locations/mumbai" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Mumbai
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Gas Stove Repair</li>
              <li>Pipeline Services</li>
              <li>Safety Inspections</li>
              <li>Emergency Repairs</li>
              <li>Installation Services</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-600" />
                <a href="tel:+918302713127" className="text-gray-300 hover:text-orange-600">
                  +91 83027 13127
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-600" />
                <a href="mailto:info@gasrepairewale.com" className="text-gray-300 hover:text-orange-600">
                  info@gasrepairewale.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-600" />
                <span className="text-gray-300">Pune & Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Gas Repaire Wale. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        {/* Developer Name */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-6 mt-4 md:mt-0 gap-2">
              <p className="text-gray-400 text-sm">Design and Developed by</p>
              <Link href="https://pradeep-saran.netlify.app/" className="text-gray-400 hover:text-orange-600 text-sm flex items-center !ml-0" target="_blank">
                Pradeep Saran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
