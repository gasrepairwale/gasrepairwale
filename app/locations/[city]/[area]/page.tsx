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
import { TrackedLink } from "@/components/tracked-link"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import { getCityContact } from "@/lib/phone"
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

  const area = areaData_temp as any
  const contact = getCityContact(area.city)

  const title = `Gas Repair in ${area.name}, ${area.city} | ${area.responseTime} Response | Licensed Technicians`
  const description = `#1 Gas Repair Service in ${area.name}, ${area.city} ${area.customers} Happy Customers ${area.responseTime} Response ${area.rating} Rating 24/7 Emergency. Call ${contact.phoneDisplay}!`

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
    authors: [{ name: "Gas Repair Wale" }],
    creator: "Gas Repair Wale",
    publisher: "Gas Repair Wale",
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
      siteName: "Gas Repair Wale",
      images: [
        {
          // Dynamic OG image — unique branded image per area page
          url: `https://gasrepairwale.com/api/og?area=${encodeURIComponent(area.name)}&city=${encodeURIComponent(area.city)}&service=Gas+Repair`,
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
      creator: "@gasrepairwale",
      images: [`https://gasrepairwale.com/api/og?area=${encodeURIComponent(area.name)}&city=${encodeURIComponent(area.city)}`],
    },
    alternates: {
      canonical: `https://gasrepairwale.com/locations/${city}/${areaParam}`,
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

export default async function AreaPage({ params }: Props) {
  const { city, area: areaParam } = await params
  const cityAreas = (areaData as any)[city]
  const areaData_temp = cityAreas?.[areaParam]

  if (!areaData_temp) {
    notFound()
  }

  const area = areaData_temp as any
  const contact = getCityContact(area.city)

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
      answer: `Yes, we provide specialized gas stove repair services in ${area.name}, ${area.city} (${area.pincode}). Our local technicians are stationed nearby for quick ${area.responseTime} service.`,
    },
    {
      question: `How quickly can you reach ${area.name} for an emergency?`,
      answer: `We guarantee a response time of ${area.responseTime} for gas emergencies in ${area.name}. Our emergency team is available 24/7 throughout the year including weekends and holidays.`,
    },
    {
      question: `Do you service both residential and commercial properties in ${area.name}?`,
      answer: `Yes, we offer comprehensive gas pipeline and appliance services for both residential homes and commercial establishments in ${area.name}. This includes restaurants, offices, and housing societies.`,
    },
    {
      question: `What is the cost of gas stove repair in ${area.name}?`,
      answer: `Gas stove repair in ${area.name} starts from ₹299 for basic issues. Complex repairs cost ₹499–₹1499 depending on parts needed. We provide transparent pricing with no hidden charges.`,
    },
  ]

  // Get nearby areas from same city for internal linking
  const allCityAreas = Object.keys(cityAreas)
  const currentAreaIndex = allCityAreas.indexOf(areaParam)
  const nearbyAreaSlugs = allCityAreas
    .filter((a) => a !== areaParam)
    .slice(
      Math.max(0, currentAreaIndex - 3),
      Math.min(allCityAreas.length, currentAreaIndex + 4)
    )
    .slice(0, 6)

  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={`Gas Repair Services in ${area.name}`}
        description={`Professional gas repair and pipeline services in ${area.name}, ${area.city}.`}
        providerName="Gas Repair Wale"
        areaServed={area.name}
        serviceType="Gas Appliance Repair"
      />
      <FAQSchema faqs={areaFaqs} />

      {/* Visual Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
         <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-600 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-orange-600 flex items-center">
                 <Home className="w-4 h-4 mr-1"/> Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              <Link href="/locations" className="hover:text-orange-600">Locations</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              <Link href={`/locations/${city}`} className="hover:text-orange-600 capitalize">
                {area.city}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
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
            {/* Left side — Enhanced Content */}
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
                      <p className="font-semibold text-gray-900">{area.rating} Customer Rating</p>
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

              {/* CTA buttons — using TrackedLink (client component) inside Button (valid HTML) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <TrackedLink
                    href={contact.phoneTel}
                    className="flex items-center space-x-2"
                    category="phone"
                    city={area.city}
                    area={area.name}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">Call Now: {contact.phoneDisplay}</span>
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
                      message: `Hi, I need gas repair service in ${area.name}, ${area.city}.`,
                    })}
                    className="flex items-center space-x-2"
                    category="whatsapp"
                    city={area.city}
                    area={area.name}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp Quote</span>
                  </TrackedLink>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center space-x-6 text-sm text-gray-600 flex-wrap gap-y-2">
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
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right side — Quick Booking Form */}
            <QuickBookingForm area={area} />
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gas Repair Services in {area.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gas repair solutions for homes and businesses in {area.name}, {area.city}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {area.specialServices?.map((service: any, index: number) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Wrench className="h-6 w-6 text-orange-600" />
                    </div>
                    <span className="text-lg">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features?.map((feature: string, fi: number) => (
                      <li key={fi} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      {area.advantages && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Why Choose Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why {area.name} Customers Trust Gas Repair Wale
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {area.advantages.map((advantage: any, index: number) => {
                const IconComponent = getIcon(advantage.icon)
                return (
                  <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                    {advantage.stats && (
                      <div className="mt-3 text-orange-600 font-semibold text-sm">{advantage.stats}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {area.testimonials && area.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Customer Reviews</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What {area.name} Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {area.testimonials.map((testimonial: any, index: number) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>
                    <div className="bg-orange-50 p-3 rounded-lg mb-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium text-orange-600">{testimonial.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium text-gray-700">{testimonial.date}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.profession}</p>
                      <p className="text-sm text-gray-500">{testimonial.area}, {area.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rich SEO Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Professional Gas Services in {area.name}, {area.city} — {area.pincode}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>Gas Repair Wale</strong> provides comprehensive gas appliance services in{" "}
                {area.name}, {area.city}. Our certified technicians are locally based in {area.city}{" "}
                and provide guaranteed <strong>{area.responseTime}</strong> response time across{" "}
                {area.name} and surrounding areas including{" "}
                {area.landmarks?.slice(0, 3).join(", ")}.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3"> Residential Services</h3>
                  <ul className="space-y-1 text-sm">
                    {area.seoContent?.services?.residential?.map((s: string, i: number) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3"> Commercial Services</h3>
                  <ul className="space-y-1 text-sm">
                    {area.seoContent?.services?.commercial?.map((s: string, i: number) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
                <h4 className="text-lg font-bold text-blue-900 mb-2">Areas We Cover in {area.name}:</h4>
                <p className="text-blue-800">
                  {area.landmarks?.join(" • ")} and surrounding areas in {area.name}, {area.city} — {area.pincode}
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mt-6">
                <h4 className="text-lg font-bold text-red-900 mb-2">Emergency Gas Service in {area.name}:</h4>
                <p className="text-red-800">
                  {area.seoContent?.emergencyInfo} Call{" "}
                  <a href={contact.phoneTel} className="font-bold underline">
                    {contact.phoneDisplay}
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

      {/* Internal Linking — Nearby Areas (critical for Googlebot crawling & PageRank flow) */}
      {nearbyAreaSlugs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Other Areas We Serve in {area.city}
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyAreaSlugs.map((areaSlug) => {
                  const nearbyArea = (cityAreas as any)[areaSlug]
                  return (
                    <Link
                      key={areaSlug}
                      href={`/locations/${city}/${areaSlug}`}
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-full text-sm text-orange-700 font-medium transition-colors"
                    >
                      <MapPin className="h-3 w-3" />
                      <span>Gas Repair in {nearbyArea?.name || areaSlug}</span>
                    </Link>
                  )
                })}
                <Link
                  href={`/locations/${city}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full text-sm text-gray-700 font-medium transition-colors"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>View All {area.city} Areas</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
