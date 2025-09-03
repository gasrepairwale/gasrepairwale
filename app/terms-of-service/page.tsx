import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Gas Repaire Wale - Service Terms & Conditions",
  description:
    "Read our terms of service and conditions for gas repair services. Understand your rights, responsibilities, and our service commitments.",
  keywords: [
    "terms of service",
    "service conditions",
    "gas repair terms",
    "service agreement",
    "terms and conditions",
    "service policy",
  ],
  openGraph: {
    title: "Terms of Service | Gas Repaire Wale",
    description: "Read our terms of service and conditions for gas repair services.",
    url: "https://gasrepairwale.com/terms-of-service",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Terms+of+Service",
        width: 1200,
        height: 630,
        alt: "Gas Repaire Wale Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Gas Repaire Wale",
    description: "Read our terms of service and conditions for gas repair services.",
    images: ["/placeholder.svg?height=630&width=1200&text=Terms+of+Service"],
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://gasrepairwale.com/terms-of-service",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Scale className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl opacity-90">Our service terms and conditions for professional gas repair services</p>
            <div className="mt-6 text-sm opacity-80">Last updated: August 2025</div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Agreement to Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Gas Repaire Wale. These Terms of Service ("Terms") govern your use of our gas repair services
              and website. By booking our services or using our website, you agree to be bound by these Terms.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                Please read these terms carefully before using our services. If you do not agree to these terms, please
                do not use our services.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Gas Stove Repair</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Burner repair and replacement</li>
                  <li>• Ignition system fixes</li>
                  <li>• Gas leak detection</li>
                  <li>• Safety inspections</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Pipeline Services</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• New pipeline installation</li>
                  <li>• Pipeline maintenance</li>
                  <li>• Leak detection & repair</li>
                  <li>• Safety certifications</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Services</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• 24/7 emergency response</li>
                  <li>• Gas leak emergencies</li>
                  <li>• Urgent repairs</li>
                  <li>• Safety assessments</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-800">
                <strong>Service Availability:</strong> Services are available in Pune and Mumbai. Emergency services
                are available 24/7, while regular services operate during business hours.
              </p>
            </div>
          </div>

          {/* Booking & Payment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking & Payment Terms</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Booking Process</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Service requests can be made through our website, phone, or WhatsApp</li>
                  <li>• Booking confirmation will be provided within 30 minutes</li>
                  <li>• Service appointments are subject to technician availability</li>
                  <li>• Customers must provide accurate contact and address information</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Payment is due upon completion of service</li>
                  <li>• We accept cash, UPI, and digital payments</li>
                  <li>• Service charges are based on the type and complexity of work</li>
                  <li>• Additional charges may apply for parts and materials</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellation Policy</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cancellations must be made at least 2 hours before scheduled time</li>
                  <li>• Emergency service cancellations may incur charges</li>
                  <li>• Repeated cancellations may result in service restrictions</li>
                  <li>• Refunds are processed according to our refund policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Responsibilities</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-blue-600">Our Responsibilities</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Provide qualified and trained technicians</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Use quality parts and materials</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Follow safety protocols and standards</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Provide warranty on our work</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Maintain customer privacy and data security</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-orange-600">Your Responsibilities</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Provide accurate service location and contact details</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Ensure safe access to gas appliances and connections</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Be present during service appointments</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Pay for services as agreed</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Follow safety instructions provided by technicians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty & Liability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Warranty & Liability</h2>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-green-700">Service Warranty</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 30-day warranty on all repair work</li>
                  <li>• 1-year warranty on new installations</li>
                  <li>• Parts warranty as per manufacturer terms</li>
                  <li>• Free re-service for warranty-covered issues</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-red-700">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our liability is limited to the cost of the service provided. We are not liable for indirect,
                  incidental, or consequential damages. Our maximum liability shall not exceed the amount paid for the
                  specific service in question.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Questions About Terms?</h2>
            <p className="mb-6 opacity-90">
              If you have any questions about these Terms of Service, please contact us:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="opacity-90">+91 83027 13127</div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-90">info@gasrepairewale.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="opacity-90">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
