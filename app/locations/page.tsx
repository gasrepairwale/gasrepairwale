import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, CheckCircle, ArrowRight } from "lucide-react"
import { areaData } from "@/data/area-data"

export const metadata: Metadata = {
  title: "Service Locations | Gas Repair Services in Pune & Mumbai | Gas Repaire Wale",
  description:
    "Professional gas repair services across 30+ locations in Pune and 16+ areas in Mumbai. Find your area and get expert gas stove repair, pipeline installation & emergency services. Call +91 83027 13127",
  keywords: [
    "gas repair locations pune",
    "gas repair locations Mumbai",
    "gas service areas pune",
    "gas service areas Mumbai",
    "gas repair near me",
    "gas stove repair locations",
    "pipeline installation areas",
    "emergency gas service locations",
  ].join(", "),
  openGraph: {
    title: "Service Locations | Gas Repair Services in Pune & Mumbai",
    description: "Professional gas repair services across 30+ locations in Pune and 16+ areas in Mumbai. Find your area and get expert service.",
    url: "https://gasrepairwale.com/locations",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Service+Locations",
        width: 1200,
        height: 630,
        alt: "Gas Repaire Wale Service Locations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Locations | Gas Repair Services in Pune & Mumbai",
    description: "Professional gas repair services across 30+ locations in Pune and 16+ areas in Mumbai.",
    images: ["/placeholder.svg?height=630&width=1200&text=Service+Locations"],
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://gasrepairwale.com/locations",
}

export default function LocationsPage() {
  const cities = Object.keys(areaData)
  const totalAreas = cities.reduce((total, city) => total + Object.keys(areaData[city]).length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <MapPin className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Locations</h1>
            <p className="text-xl opacity-90">
              Professional gas repair services across {cities.length} cities and {totalAreas}+ areas
            </p>
            <div className="mt-6 text-sm opacity-80">
              Fast response times • Licensed technicians • 24/7 emergency service
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">{cities.length}</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">{totalAreas}+</div>
            <div className="text-gray-600">Service Areas</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">15-30</div>
            <div className="text-gray-600">Min Response</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Emergency</div>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600">
              Professional gas repair services across major cities with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city) => {
              const cityAreas = Object.keys(areaData[city])
              const cityData = areaData[city][cityAreas[0]] // Get first area data for city info
              
              return (
                <div key={city} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6">
                    <h3 className="text-2xl font-bold capitalize mb-2">{city}</h3>
                    <p className="opacity-90">
                      {cityAreas.length}+ areas • {cityData?.responseTime || "20-30 min"} response
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-gray-900">{cityAreas.length}</div>
                        <div className="text-sm text-gray-600">Areas</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-gray-900">
                          {cityData?.rating || "4.8"}★
                        </div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Popular Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cityAreas.slice(0, 6).map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {areaData[city][area]?.name || area}
                          </span>
                        ))}
                        {cityAreas.length > 6 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            +{cityAreas.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/locations/${city}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        View All Areas
                      </Link>
                      <a
                        href="tel:+918302713127"
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Local Service?</h2>
            <p className="text-xl text-gray-600">
              Professional gas repair services with local expertise and fast response times
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Local Response</h3>
              <p className="text-gray-600">
                15-30 minute response time across all areas with dedicated local teams
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of local infrastructure, societies, and gas systems
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Trusted</h3>
              <p className="text-gray-600">
                Trusted by thousands of families and businesses across all areas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Gas Repair Service?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get expert service in your area with guaranteed fast response time
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918302713127"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91 83027 13127
            </a>
            
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center"
            >
              Book Online
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you reach my area?
              </h3>
              <p className="text-gray-600">
                We guarantee 15-30 minute response time across all areas in Pune and Mumbai. 
                Our local teams are strategically positioned for fastest service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you serve all areas in Pune and Mumbai?
              </h3>
              <p className="text-gray-600">
                Yes! We cover {totalAreas}+ areas across {cities.length} cities including all major 
                residential, commercial, and industrial zones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if my area is not listed?
              </h3>
              <p className="text-gray-600">
                If you don't see your area listed, please call us. We're constantly expanding 
                our service areas and may already be serving your location.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is emergency service available in all areas?
              </h3>
              <p className="text-gray-600">
                Yes! 24/7 emergency gas repair service is available across all our service areas 
                with guaranteed fast response times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
