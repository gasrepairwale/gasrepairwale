import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { areaData } from "@/data/area-data"
import { BreadcrumbSchema } from "@/components/json-ld/breadcrumb-schema"
import { ServiceSchema } from "@/components/json-ld/service-schema"
import { FAQSchema } from "@/components/json-ld/faq-schema"
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
  ChevronRight,
  Home,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  PhoneCall
} from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"

type Props = {
  params: Promise<{ city: string; area: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, area: areaParam } = await params
  const cityAreas = (areaData as any)[city]
  const areaData_temp = cityAreas?.[areaParam]

  if (!areaData_temp) {
    return {
      title: "Area Not Found",
    }
  }

  // Type assertion - TypeScript can't narrow optional chaining types properly
  const area = areaData_temp as any

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
      url: `https://gasrepairwale.com/locations/${city}/${areaParam}`,
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
      canonical: `https://gasrepairwale.com/locations/${city}/${areaParam}`,
    },
    other: {
      "google-site-verification": "JUBZp6IFOyJ98MiNTifWjKfFF5Fanxoleua8AQ4lZSE",
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

// moved to components/quick-booking-form

export default async function AreaPage({ params }: Props) {
  const { city, area: areaParam } = await params
  const cityAreas = (areaData as any)[city]
  const areaData_temp = cityAreas?.[areaParam]

  if (!areaData_temp) {
    notFound()
  }

  // Type assertion - TypeScript can't narrow optional chaining types properly
  const area = areaData_temp as any

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

  // Schema Generation
  const breadcrumbItems = [
    { name: "Home", item: "https://gasrepairwale.com" },
    { name: "Locations", item: "https://gasrepairwale.com/locations" },
    { name: area.city, item: `https://gasrepairwale.com/locations/${city}` },
    { name: area.name, item: `https://gasrepairwale.com/locations/${city}/${areaParam}` },
  ]

  const areaFaqs = [
    {
      question: `Do you provide gas stove repair in ${area.name}?`,
      answer: `Yes, we provide specialized gas stove repair services in ${area.name}, ${area.city} (${area.pincode}). Our local technicians are stationed nearby for quick service.`,
    },
    {
      question: `How quickly can you reach ${area.name} for an emergency?`,
      answer: `We guarantee a response time of ${area.responseTime} for gas emergencies in ${area.name}. Our emergency team is available 24/7.`,
    },
    {
      question: `Do you service both residential and commercial properties in ${area.name}?`,
      answer: `Yes, we offer comprehensive gas pipeline and appliance services for both residential homes and commercial establishments in ${area.name}.`,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={`Gas Repair Services in ${area.name}`}
        description={`Professional gas repair and pipeline services in ${area.name}, ${area.city}.`}
        providerName="Gas Repaire Wale"
        areaServed={area.name}
        serviceType="Gas Appliance Repair" 
      />
      <FAQSchema faqs={areaFaqs} />

      {/* Visual Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
         <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-600 flex-wrap">
              <Link href="/" className="hover:text-orange-600 flex items-center">
                 <Home className="w-4 h-4 mr-1"/> Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link href={`/locations/${city}`} className="hover:text-orange-600 capitalize">
                {area.city}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-900 font-medium capitalize">{area.name}</span>
            </nav>
         </div>
      </div>

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
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <TrackedLink 
                    href="tel:+918302713127" 
                    className="flex items-center space-x-2"
                    category="phone"
                    city={area.city}
                    area={area.name}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">Call Now: +91 83027 13127</span>
                  </TrackedLink>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-white font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <TrackedLink 
                    href={getWhatsAppRedirectUrl({
                      serviceType: "General Inquiry",
                      city: area.city,
                      area: area.name,
                      message: `Hi, I am visiting from the ${area.name} page and want a quote.`
                    })}
                    category="whatsapp"
                    city={area.city}
                    area={area.name}
                  >
                    WhatsApp Quote
                  </TrackedLink>
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
            {area.landmarks.map((landmark: string, index: number) => (
              <TrackedLink
                key={index}
                href={getWhatsAppRedirectUrl({
                  serviceType: "Area Inquiry",
                  city: area.city,
                  area: area.name,
                  message: `Hi, I am looking for gas service near ${landmark} in ${area.name}.`
                })}
                category="whatsapp"
                city={area.city}
                area={area.name}
                className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer group no-underline"
              >
                <MapPin className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-orange-600 transition-colors">{landmark}</span>
              </TrackedLink>
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
            {area.specialServices.map((service: any, index: number) => (
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
                      {service.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Button asChild className="w-full text-white bg-orange-600 hover:bg-orange-700 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 h-10">
                      <TrackedLink 
                        href="tel:+918302713127"
                        category="phone"
                        city={area.city}
                        area={area.name}
                        className="flex items-center justify-center space-x-2 w-full h-full"
                      >
                        <PhoneCall className="h-4 w-4" />
                        <span>Call for Booking</span>
                      </TrackedLink>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent h-10"
                    >
                      <TrackedLink 
                        href={getWhatsAppRedirectUrl({
                          serviceType: service.title,
                          city: area.city,
                          area: area.name,
                          message: `Hi, I want to get a quote for ${service.title} in ${area.name}, ${area.city}.`
                        })}
                        category="whatsapp"
                        city={area.city}
                        area={area.name}
                        className="flex items-center justify-center space-x-2 w-full h-full"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>WhatsApp Quote</span>
                      </TrackedLink>
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
            {area.advantages.map((advantage: any, index: number) => {
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
            {area.testimonials.map((testimonial: any, index: number) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_: any, starIndex: number) => (
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
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
                  <TrackedLink 
                    href="tel:+918302713127" 
                    className="flex items-center space-x-2"
                    category="phone"
                    city={area.city}
                    area={area.name}
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now: +91 83027 13127</span>
                  </TrackedLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold bg-transparent"
                >
                  <TrackedLink 
                    href={getWhatsAppRedirectUrl({
                      serviceType: "Online Booking",
                      city: area.city,
                      area: area.name,
                      message: `Hi, I want to book a service in ${area.name}.`
                    })}
                    category="whatsapp"
                    city={area.city}
                    area={area.name}
                  >
                    Book via WhatsApp
                  </TrackedLink>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold border-0">
                <TrackedLink 
                  href="tel:+918302713127" 
                  className="flex items-center space-x-2"
                  category="phone"
                  city={area.city}
                  area={area.name}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: +91 83027 13127</span>
                </TrackedLink>
              </Button>
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 font-bold border-0">
                <TrackedLink 
                  href={getWhatsAppRedirectUrl({
                    serviceType: "Emergency",
                    city: area.city,
                    area: area.name,
                    message: `🚨 EMERGENCY: I need immediate gas repair in ${area.name}!`
                  })}
                  className="flex items-center space-x-2"
                  category="whatsapp"
                  city={area.city}
                  area={area.name}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp Emergency</span>
                </TrackedLink>
              </Button>
            </div>
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
                {area.seoContent.whyChoose.map((point: string, index: number) => (
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
                    {area.seoContent.services.residential.map((service: string, index: number) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">🏢 Commercial Services</h4>
                  <ul className="text-sm space-y-1">
                    {area.seoContent.services.commercial.map((service: string, index: number) => (
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

      {/* Visual FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Common Questions</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQs about Gas Service in {area.name}</h2>
             </div>
             
             <div className="max-w-3xl mx-auto space-y-4">
                {areaFaqs.map((faq, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                     <CardContent className="p-6">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                     </CardContent>
                  </Card>
                ))}
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
