import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactCTA } from "@/components/contact-cta"
import { MapPin, Phone, Clock, Star, CheckCircle, Home, Building, Laptop } from "lucide-react"

/**
 * Gachibowli Area Page Component
 * Specific services and information for Gachibowli area in Hyderabad
 */
export default function GachibowliPage() {
  // Local landmarks and coverage areas
  const coverageAreas = [
    "HITEC City",
    "Financial District",
    "Nanakramguda",
    "Kokapet",
    "Manikonda",
    "Tellapur",
    "Gopanpally",
    "Gachibowli Stadium area",
  ]

  // Local services data
  const localServices = [
    {
      icon: Home,
      title: "Residential Services",
      description: "Premium gas services for apartments, villas, and gated communities in Gachibowli",
      features: ["Gas stove repair", "Pipeline installation", "Safety inspections", "Emergency repairs"],
    },
    {
      icon: Building,
      title: "Commercial Services",
      description: "Professional gas solutions for offices, restaurants, and commercial complexes",
      features: ["Office kitchen setup", "Restaurant gas systems", "Maintenance contracts", "Compliance checks"],
    },
    {
      icon: Laptop,
      title: "IT Professional Services",
      description: "Specialized services for busy IT professionals with flexible timing",
      features: ["Weekend service", "Evening appointments", "Quick repairs", "Online booking"],
    },
  ]

  // Local testimonials
  const gachibowliTestimonials = [
    {
      name: "Srinivas Reddy",
      location: "HITEC City, Gachibowli",
      rating: 5,
      text: "Excellent service! They came on weekend to fix our gas stove. Perfect for working professionals like us.",
    },
    {
      name: "Priya Sharma",
      location: "Nanakramguda, Gachibowli",
      rating: 5,
      text: "Professional installation of gas pipeline for our new apartment. Clean work and proper safety testing.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Gas Repair Services in <span className="text-orange-600">Gachibowli</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Premium gas stove repair, pipeline services, and appliance maintenance in Gachibowli - Hyderabad's IT hub.
              Specialized services for modern homes and busy professionals with 20-25 minute response time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <a href="tel:+918302713127" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: +91 83027 13127</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Book Service Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Cover in Gachibowli</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive gas repair services across all parts of Gachibowli and surrounding IT corridor
              areas with premium service quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coverageAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 bg-orange-50 p-4 rounded-lg">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-green-600 font-semibold">Average Response Time: 20-25 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services in Gachibowli</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized gas services designed for Gachibowli's modern lifestyle and professional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-orange-600" />
                      </div>
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <a href="tel:+918302713127">Book Service</a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why choose us in Gachibowli */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Gachibowli Residents Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium service tailored for Hyderabad's premier IT and residential hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IT Professional Friendly</h3>
              <p className="text-gray-600">Flexible timing for busy tech professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">20-25 minute response time in Gachibowli</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">600+ Customers</h3>
              <p className="text-gray-600">Trusted by IT professionals and families</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-end service for modern homes and offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Gachibowli Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our satisfied customers in Gachibowli area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {gachibowliTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special features for IT professionals */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Services for IT Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of Gachibowli's tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Weekend and evening appointments available for working professionals</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online Booking</h3>
              <p className="text-gray-600">Easy online scheduling that fits your busy work schedule</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Efficient repairs that don't disrupt your work-from-home setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency service highlight */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Emergency Service in Gachibowli</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Gas emergencies in your high-rise apartment or office? Our Gachibowli team provides 24/7 emergency service
              with priority response for the IT corridor.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-500 p-6 rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">24/7 Available</h3>
                <p className="text-orange-100">Round-the-clock emergency service</p>
              </div>
              <div className="bg-orange-500 p-6 rounded-lg">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">IT Hub Priority</h3>
                <p className="text-orange-100">Priority service for Gachibowli area</p>
              </div>
              <div className="bg-orange-500 p-6 rounded-lg">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-orange-100">20-minute emergency response</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="tel:+918302713127" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency: +91 83027 13127</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
