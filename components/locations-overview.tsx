import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

/**
 * Locations Overview Component
 * Shows service areas with links to detailed location pages
 */
export function LocationsOverview() {
  // Service locations data
  const locations = [
    {
      city: "Pune",
      href: "/locations/pune",
      areas: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Karve Nagar", "Warje"],
      description: "Comprehensive gas repair services across Pune and surrounding areas.",
      responseTime: "20-30 minutes",
    },
    {
      city: "Mumbai",
      href: "/locations/mumbai",
      areas: ["Borivali East West", "Kandivali East West", "Malda East West", "Ram Mandir East", "Goregaon East West", "Andheri West"],
      description: "Professional gas appliance services throughout Mumbai metro area.",
      responseTime: "25-35 minutes",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide reliable gas repair services across major cities and their surrounding areas. Find your location
            and get quick service.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <span>{location.city}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">{location.description}</p>

                {/* Response time */}
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">Response Time: {location.responseTime}</span>
                </div>

                {/* Service areas */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Areas:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1 bg-orange-600 hover:bg-orange-700">
                    <Link href={location.href}>View Details</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <a href="tel:+918302713127" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional service note */}
        <div className="text-center mt-12 p-6 bg-orange-50 rounded-lg">
          <p className="text-gray-700">
            <strong>Don't see your area listed?</strong> We're expanding our services! Call us at{" "}
            <a href="tel:+918302713127" className="text-orange-600 font-semibold">
              +91 83027 13127
            </a>{" "}
            to check availability in your location.
          </p>
        </div>
      </div>
    </section>
  )
}
