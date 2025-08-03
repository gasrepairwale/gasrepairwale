import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Eye, Lock, Users, FileText, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Gas Repaire Wale - Your Data Protection & Privacy Rights",
  description:
    "Learn how Gas Repaire Wale protects your personal information, data collection practices, and your privacy rights. We are committed to safeguarding your data.",
  keywords: [
    "privacy policy",
    "data protection",
    "gas repair privacy",
    "personal information",
    "data security",
    "privacy rights",
  ],
  openGraph: {
    title: "Privacy Policy | Gas Repaire Wale",
    description: "Learn how we protect your personal information and respect your privacy rights.",
    url: "https://gasrepairewale.com/privacy-policy",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Privacy+Policy",
        width: 1200,
        height: 630,
        alt: "Gas Repaire Wale Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Gas Repaire Wale",
    description: "Learn how we protect your personal information and respect your privacy rights.",
    images: ["/placeholder.svg?height=630&width=1200&text=Privacy+Policy"],
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://gasrepairewale.com/privacy-policy",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
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
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Gas Repaire Wale, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our gas repair services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Name and contact information (phone number, email address)</li>
                  <li>• Service address and location details</li>
                  <li>• Service preferences and requirements</li>
                  <li>• Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• IP address and browser information</li>
                  <li>• Device information and operating system</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Delivery</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Schedule and provide gas repair services</li>
                  <li>• Communicate about appointments</li>
                  <li>• Process payments and billing</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Operations</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Improve our services and website</li>
                  <li>• Send service updates and promotions</li>
                  <li>• Analyze usage patterns</li>
                  <li>• Comply with legal requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Data Protection & Security</h2>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. This includes
                encryption, secure servers, and regular security assessments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Encryption</h4>
                <p className="text-sm text-gray-600">SSL/TLS encryption</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Secure Storage</h4>
                <p className="text-sm text-gray-600">Protected databases</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Eye className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Access Control</h4>
                <p className="text-sm text-gray-600">Limited access</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Privacy Rights</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Access & Correction</h3>
                    <p className="text-gray-600 text-sm">
                      Request access to or correction of your personal information
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Deletion</h3>
                    <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Lock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Portability</h3>
                    <p className="text-gray-600 text-sm">Request a copy of your data in a portable format</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <Eye className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Opt-out</h3>
                    <p className="text-gray-600 text-sm">Opt-out of marketing communications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="mb-6 opacity-90">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="opacity-90">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-90">privacy@gasrepairewale.com</div>
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
