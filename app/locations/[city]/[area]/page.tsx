import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactCTA } from "@/components/contact-cta"
import { areaData } from "@/data/area-data"
import {
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle,
  Building,
  Shield,
  Award,
  Users,
  Zap,
  Wrench,
  Calendar,
} from "lucide-react"

type Props = {
  params: { city: string; area: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityAreas = areaData[params.city as keyof typeof areaData]
  const area = cityAreas?.[params.area as keyof typeof cityAreas]

  if (!area) {
    return {
      title: "Area Not Found",
    }
  }

  const title = `Gas Repair Services in ${area.name}, ${area.city} | ${area.responseTime} Response | Gas Repaire Wale`
  const description = `⭐ #1 Gas Repair Service in ${area.name}, ${area.city} ✅ ${area.customers} Happy Customers ✅ ${area.responseTime} Response Time ✅ ${area.rating}★ Rating ✅ Local Experts Since ${area.establishedYear}. Call +91 83027 13127!`

  return {
    title,
    description,
    keywords: [
      `gas repair ${area.name.toLowerCase()}`,
      `gas stove repair ${area.name.toLowerCase()} ${area.city.toLowerCase()}`,
      `gas pipeline service ${area.name.toLowerCase()}`,
      `emergency gas service ${area.city.toLowerCase()}`,
      `${area.pincode} gas repair`,
      `gas services ${area.name.toLowerCase()}`,
      `gas leak repair ${area.name.toLowerCase()}`,
      `gas appliance repair ${area.city.toLowerCase()}`,
      `licensed gas technician ${area.name.toLowerCase()}`,
      `24/7 gas service ${area.city.toLowerCase()}`,
      `gas safety inspection ${area.name.toLowerCase()}`,
      `commercial gas service ${area.city.toLowerCase()}`,
      `residential gas repair ${area.name.toLowerCase()}`,
      `gas maintenance ${area.city.toLowerCase()}`,
      `gas installation ${area.name.toLowerCase()}`,
    ],
    authors: [{ name: "Gas Repaire Wale" }],
    creator: "Gas Repaire Wale",
    publisher: "Gas Repaire Wale",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://gasrepairewale.com/locations/${params.city}/${params.area}`,
      title,
      description,
      siteName: "Gas Repaire Wale",
      images: [
        {
          url: "/placeholder.svg?height=630&width=1200" + area.name + " " + area.city,
          width: 1200,
          height: 630,
          alt: `Gas Repair Services in ${area.name}, ${area.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@gasrepairewale",
      images: ["/placeholder.svg?height=630&width=1200" + area.name + " " + area.city],
    },
    alternates: {
      canonical: `https://gasrepairewale.com/locations/${params.city}/${params.area}`,
    },
    other: {
      "google-site-verification": "your-google-verification-code",
      "msvalidate.01": "your-bing-verification-code",
    },
  }
}

export async function generateStaticParams() {
  const params: { city: string; area: string }[] = []

  Object.entries(areaData).forEach(([city, areas]) => {
    Object.keys(areas).forEach((area) => {
      params.push({ city, area })
    })
  })

  return params
}

// Quick Booking Form Component
function QuickBookingForm({ area, className = "" }: { area: any; className?: string }) {
  return (
    <Card className={`shadow-2xl border-0 bg-white/95 backdrop-blur-sm ${className}`}>
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="h-4 w-4" />
              <span>INSTANT BOOKING - FREE QUOTE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Gas Service in {area.name}</h3>
            <p className="text-gray-600">Get expert technician at your doorstep in {area.responseTime}</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Full Name *"
                className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                required
              />
              <Input
                placeholder="Mobile Number *"
                type="tel"
                className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                required
              />
            </div>

            <Input
              placeholder="Email Address"
              type="email"
              className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
            />

            <Input
              placeholder={`Complete Address in ${area.name} *`}
              className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              required
            />

            <select
              className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
              required
            >
              <option value="">Select Service Type *</option>
              <option value="gas-stove-repair">Gas Stove Repair</option>
              <option value="gas-stove-service">Gas Stove Service</option>
              <option value="pipeline-installation">Pipeline Installation</option>
              <option value="pipeline-repair">Pipeline Repair</option>
              <option value="safety-inspection">Safety Inspection</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="new-connection">New Gas Connection</option>
              <option value="maintenance-contract">Maintenance Contract</option>
            </select>

            <select
              className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
              required
            >
              <option value="">Preferred Time Slot *</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 8 PM)</option>
              <option value="emergency">Emergency (Immediate)</option>
            </select>

            <Textarea
              placeholder="Describe your gas issue or requirements (Optional)"
              rows={3}
              className="border-2 border-gray-200 focus:border-orange-500 rounded-lg"
            />

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Service Now - FREE Quote
            </Button>
          </form>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>No Hidden Charges • Transparent Pricing</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
              <Shield className="h-4 w-4" />
              <span>Licensed Technicians • Insured Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
              <Clock className="h-4 w-4" />
              <span>Response Time: {area.responseTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AreaPage({ params }: Props) {
  const cityAreas = areaData[params.city as keyof typeof areaData]
  const area = cityAreas?.[params.area as keyof typeof cityAreas]

  if (!area) {
    notFound()
  }

  // Icon mapping for advantages
  const getIcon = (iconName: string) => {
    const icons = {
      MapPin,
      Clock,
      Users,
      Award,
      Shield,
      Zap,
      Building,
      Star,
    }
    return icons[iconName as keyof typeof icons] || MapPin
  }

  return (
    <main className="min-h-screen">
      {/* Enhanced hero section with form */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 overflow-hidden">
        {/* Professional background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Enhanced Content */}
            <div className="space-y-8">
              {/* Location badge */}
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-green-100 text-green-800 border border-green-200 hover:bg-green-200 px-4 py-2 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  Serving {area.name}, {area.city} - {area.pincode}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200 px-4 py-2 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {area.responseTime} Response Time
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional{" "}
                  <span className="text-orange-600 relative">
                    Gas Repair
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  </span>
                  <br />
                  Services in {area.name}
                </h1>

                <div className="text-xl text-gray-700 leading-relaxed space-y-3">
                  <p className="font-semibold flex items-center">
                    <Wrench className="w-6 h-6 text-orange-600 mr-2" />
                    Expert Gas Stove Repair, Pipeline Installation & Safety Inspections
                  </p>
                  <p className="text-lg">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                      Emergency Service:
                    </span>{" "}
                    {area.responseTime} response time for gas leaks and urgent repairs
                  </p>
                </div>
              </div>

              {/* Enhanced service highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Emergency Service</p>
                      <p className="text-sm text-gray-600">Gas leaks & urgent repairs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Licensed Technicians</p>
                      <p className="text-sm text-gray-600">Certified gas professionals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{area.rating}★ Customer Rating</p>
                      <p className="text-sm text-gray-600">{area.customers} satisfied customers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Local Experts</p>
                      <p className="text-sm text-gray-600">{area.completedJobs} jobs completed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <a href="tel:+918302713127" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">Call Now: +91 83027 13127</span>
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-white font-semibold hover:shadow-lg transition-all duration-200"
                >
                  WhatsApp Quote
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Government Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Insurance Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Same Day Service</span>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Booking Form */}
            <QuickBookingForm area={area} />
          </div>
        </div>
      </section>

      {/* Coverage areas with enhanced design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Service Coverage</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📍 Areas We Cover in {area.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive gas repair services across all parts of {area.name} and surrounding areas with
              the fastest response times in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {area.landmarks.map((landmark, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
              >
                <MapPin className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-orange-600 transition-colors">{landmark}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-green-600 font-semibold">Average Response Time: {area.responseTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized services with booking forms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Specialized Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔧 Our Specialized Services in {area.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored gas services designed specifically for {area.name}'s unique residential and commercial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {area.specialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600">
                      <a href="tel:+918302713127">Book This Service</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      Get Free Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional booking form */}
          <div className="max-w-2xl mx-auto">
            <QuickBookingForm area={area} />
          </div>
        </div>
      </section>

      {/* Why choose us in this area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Local Advantages</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Why {area.name} Residents Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise with deep understanding of {area.name}'s unique requirements and community needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {area.advantages.map((advantage, index) => {
              const IconComponent = getIcon(advantage.icon)
              const gradients = [
                "from-orange-100 to-red-100",
                "from-green-100 to-blue-100",
                "from-yellow-100 to-orange-100",
                "from-purple-100 to-pink-100",
              ]
              const iconColors = ["text-orange-600", "text-green-600", "text-yellow-600", "text-purple-600"]

              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-8 w-8 ${iconColors[index % iconColors.length]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 mb-2">{advantage.description}</p>
                  <Badge className="bg-blue-100 text-blue-800">{advantage.stats}</Badge>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced local testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 mb-4">Customer Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💬 What {area.name} Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our satisfied customers in {area.name} area with detailed service experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {area.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>

                  {/* Enhanced service details */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mb-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-orange-600">{testimonial.service}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Job Type:</span>
                      <span className="font-medium text-gray-700">{testimonial.jobType}</span>
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
                        <p className="text-sm text-blue-600">{testimonial.profession}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.area}, {area.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action after testimonials */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
              <p className="text-xl mb-6">
                Join {area.customers} satisfied customers in {area.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
                  <a href="tel:+918302713127" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Now: +91 83027 13127</span>
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold bg-transparent"
                >
                  Book Online Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency service highlight */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">🚨 Emergency Service in {area.name}</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Gas emergencies can't wait! Our {area.name}-based team provides 24/7 emergency service with the fastest
              response time in the area.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-500/80 p-6 rounded-lg hover:bg-red-500/90 transition-colors">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">24/7 Available</h3>
                <p className="text-red-100">Round-the-clock emergency service</p>
              </div>
              <div className="bg-red-500/80 p-6 rounded-lg hover:bg-red-500/90 transition-colors">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Local Team</h3>
                <p className="text-red-100">{area.name}-based technicians</p>
              </div>
              <div className="bg-red-500/80 p-6 rounded-lg hover:bg-red-500/90 transition-colors">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-red-100">{area.responseTime} emergency response</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold">
              <a href="tel:+918302713127" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency: +91 83027 13127</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced local SEO content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Local SEO Content</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🔧 Professional Gas Services in {area.name}, {area.city}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>Gas Repaire Wale</strong> has been serving {area.name} since {area.establishedYear}, providing
                professional gas stove repair, pipeline services, and appliance maintenance. Our team of licensed and
                certified technicians understands the unique requirements of {area.name} residents and businesses with
                {area.completedJobs} successfully completed jobs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Choose Our Gas Repair Services in {area.name}?
              </h3>

              <ul className="space-y-2">
                {area.seoContent.whyChoose.map((point, index) => (
                  <li key={index}>
                    ✅ <strong>{point.split(":")[0]}:</strong> {point.split(":")[1]}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Gas Services in {area.name} Include:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">🏠 Residential Services</h4>
                  <ul className="text-sm space-y-1">
                    {area.seoContent.services.residential.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">🏢 Commercial Services</h4>
                  <ul className="text-sm space-y-1">
                    {area.seoContent.services.commercial.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
                <h4 className="text-lg font-bold text-blue-900 mb-2">📍 Areas We Cover in {area.name}:</h4>
                <p className="text-blue-800">
                  {area.landmarks.join(" • ")} and surrounding areas in {area.name}, {area.city} - {area.pincode}
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mt-6">
                <h4 className="text-lg font-bold text-red-900 mb-2">🚨 Emergency Gas Service in {area.name}:</h4>
                <p className="text-red-800">
                  {area.seoContent.emergencyInfo} Call{" "}
                  <a href="tel:+918302713127" className="font-bold underline">
                    +91 83027 13127
                  </a>{" "}
                  for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final booking section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Book Your Gas Service?</h2>
              <p className="text-xl text-gray-600">
                Get professional gas repair service in {area.name} with {area.responseTime} response time
              </p>
            </div>
            <QuickBookingForm area={area} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
