import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { MapPin, Phone, Clock, Star, Users, Award, Shield } from "lucide-react"

interface CityData {
  name: string
  state: string
  description: string
  heroDescription: string
  areas: Array<{
    name: string
    slug: string
    description: string
    responseTime: string
    customers: string
    landmarks: string[]
    specialties: string[]
  }>
  totalCustomers: string
  avgResponseTime: string
  establishedYear: string
  coordinates: { lat: number; lng: number }
  testimonials: Array<{
    name: string
    area: string
    profession: string
    rating: number
    text: string
    service: string
    date: string
  }>
  advantages: Array<{
    title: string
    description: string
    icon: string
  }>
  seoContent: {
    whyChoose: string[]
    services: {
      gasStove: string[]
      pipeline: string[]
    }
  }
}

interface LocationPageContentProps {
  city: CityData
  citySlug: string
}

/**
 * Dynamic Location Page Content Component
 * SEO-optimized location pages with comprehensive local content
 */
export function LocationPageContent({ city, citySlug }: LocationPageContentProps) {
  // Icon mapping for advantages
  const getIcon = (iconName: string) => {
    const icons = {
      MapPin,
      Clock,
      Users,
      Award,
      Shield,
    }
    return icons[iconName as keyof typeof icons] || MapPin
  }

  return (
    <main className="min-h-screen">
      {/* Enhanced hero section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              Serving {city.name}, {city.state}
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              #1 Gas Repair Services in <span className="text-orange-600">{city.name}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">{city.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold"
              >
                <a href="tel:+918302713127" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>CALL NOW: +91 83027 13127</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-white font-bold"
              >
                💰 Get FREE Quote
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{city.totalCustomers}</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{city.avgResponseTime}</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced service areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Service Coverage</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📍 Areas We Serve in {city.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gas repair services across all major areas in {city.name} with the fastest response times in{" "}
              {city.state}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.areas.map((area, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600 group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span>{area.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{area.description}</p>

                  {/* Local landmarks */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.landmarks.map((landmark, landmarkIndex) => (
                        <Badge key={landmarkIndex} variant="outline" className="text-xs">
                          {landmark}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium">Response: {area.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{area.customers} satisfied customers</span>
                    </div>
                  </div>

                  {/* Area specialties */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-orange-600 hover:bg-orange-700">
                      <Link href={`/locations/${citySlug}/${area.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      <a href="tel:+918302713127">Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us in this city */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Local Expertise</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🏆 Why {city.name} Residents Choose Gas Repaire Wale?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise with deep understanding of {city.name}'s unique residential and commercial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {city.advantages.map((advantage, index) => {
              const IconComponent = getIcon(advantage.icon)
              const gradients = [
                "from-orange-100 to-red-100",
                "from-green-100 to-blue-100",
                "from-yellow-100 to-orange-100",
                "from-purple-100 to-pink-100",
              ]
              const iconColors = ["text-orange-600", "text-green-600", "text-yellow-600", "text-purple-600"]

              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${iconColors[index % iconColors.length]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Customer Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💬 What {city.name} Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our satisfied customers across {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {city.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>

                  {/* Service details */}
                  <div className="bg-orange-50 p-3 rounded-lg mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-orange-600">{testimonial.service}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-700">{testimonial.date}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.profession}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.area}, {city.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service statistics for city */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-12">📊 Our {city.name} Service Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">{city.totalCustomers}</div>
                <div className="text-orange-100">Customers Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{city.areas.length}</div>
                <div className="text-orange-100">Areas Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{city.avgResponseTime}</div>
                <div className="text-orange-100">Avg Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-orange-100">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Local SEO Content</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🔧 Professional Gas Services in {city.name}, {city.state}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>Gas Repaire Wale</strong> has been serving {city.name} since {city.establishedYear}, providing
                professional gas stove repair, pipeline services, and appliance maintenance across all major areas of{" "}
                {city.name}. Our team of licensed and certified technicians understands the unique requirements of{" "}
                {city.state} residents and businesses.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Choose Our Gas Repair Services in {city.name}?
              </h3>

              <ul className="space-y-2">
                {city.seoContent.whyChoose.map((point, index) => (
                  <li key={index}>
                    ✅ <strong>{point.split(":")[0]}:</strong> {point.split(":")[1]}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Gas Services in {city.name} Include:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">🔥 Gas Stove Repair Services</h4>
                  <ul className="text-sm space-y-1">
                    {city.seoContent.services.gasStove.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">🔧 Pipeline Services</h4>
                  <ul className="text-sm space-y-1">
                    {city.seoContent.services.pipeline.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
                <strong>Emergency Gas Service in {city.name}:</strong> Gas leaks and safety issues require immediate
                attention. Our emergency team is available 24/7 across {city.name} with guaranteed response within 15
                minutes. Call{" "}
                <a href="tel:+918302713127" className="text-blue-600 font-bold">
                  +91 83027 13127
                </a>{" "}
                for immediate assistance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
