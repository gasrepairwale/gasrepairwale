import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { MapPin, Phone, Clock, Star, Users, Award, Shield, ChevronRight, Home, PhoneCall, Check } from "lucide-react"
import { BreadcrumbSchema } from "@/components/json-ld/breadcrumb-schema"
import { ServiceSchema } from "@/components/json-ld/service-schema"
import { FAQSchema } from "@/components/json-ld/faq-schema"
import { TrackedLink } from "@/components/tracked-link"
import { getCityContact } from "@/lib/phone"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

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
 * Dynamic Location Page Content Component (Server Component)
 * SEO-optimized location pages with comprehensive local content.
 * Interactive elements (phone click tracking) handled by TrackedLink client component.
 */
export function LocationPageContent({ city, citySlug }: LocationPageContentProps) {
  const contact = getCityContact(city.name)

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

  // Schema Data Generation
  const breadcrumbItems = [
    { name: "Home", item: "https://gasrepairwale.com" },
    { name: "Locations", item: "https://gasrepairwale.com/locations" },
    { name: city.name, item: `https://gasrepairwale.com/locations/${citySlug}` },
  ]

  const cityFaqs = [
    {
      question: `Do you provide gas stove repair across all of ${city.name}?`,
      answer: `Yes, we provide professional doorstep gas stove repair and pipe services across all areas of ${city.name} including ${city.areas.slice(0, 4).map(a => a.name).join(", ")} and surrounding localities. Our mobile vans are stationed across ${city.name}.`,
    },
    {
      question: `How fast can you reach for an emergency in ${city.name}?`,
      answer: `We guarantee an average response time of ${city.avgResponseTime} for emergency gas leakages and urgent repairs across ${city.name}. Our emergency team is on duty 24/7.`,
    },
    {
      question: `Are your technicians in ${city.name} certified and verified?`,
      answer: `Yes, all our gas technicians serving ${city.name} are licensed and background-verified. They carry digital gas leak sniffers, 100% genuine brass spare parts, and full safety gear.`,
    },
    {
      question: `What is the cost of gas stove repair in ${city.name}?`,
      answer: `We maintain 100% transparent upfront pricing. Our technician inspects the appliance on-site and provides an honest estimate before touching any part. No hidden charges, and you pay only after complete testing and satisfaction.`,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={`Gas Repair Services in ${city.name}`}
        description={city.description}
        providerName="Gas Repair Wale"
        areaServed={city.name}
        serviceType="Gas Appliance Repair"
      />
      <FAQSchema faqs={cityFaqs} />

      {/* Visual Breadcrumb Navigation */}
      <div className="bg-[#0b1730] border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-xs sm:text-sm text-slate-400 flex-wrap gap-1" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <Link href="/locations" className="hover:text-sky-400 transition-colors">
              Locations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-white font-medium capitalize">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Premium Midnight Navy Hero Section */}
      <section className="relative bg-[#071126] text-white py-16 sm:py-20 overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 40%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <MapPin className="w-3.5 h-3.5" />
                Serving {city.name}, {city.state}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                <Clock className="w-3.5 h-3.5" />
                {city.avgResponseTime} Rapid Response
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                4.9 ★ Rated ({city.totalCustomers})
              </span>
            </div>

            {/* Headline: Blue text on the same line */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              #1 Gas Repair Services in <span className="text-sky-400">{city.name}</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {city.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-7 py-3.5 text-base transition-colors"
              >
                <TrackedLink
                  href={contact.phoneTel}
                  className="flex items-center justify-center space-x-2"
                  category="phone"
                  city={city.name}
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Call Now: {contact.phoneDisplay}</span>
                </TrackedLink>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none px-7 py-3.5 text-base transition-colors"
              >
                <TrackedLink
                  href={getWhatsAppRedirectUrl({
                    serviceType: "General Inquiry",
                    city: city.name,
                    message: `Hi Gas Repair Wale, I need gas stove or pipeline service in ${city.name}.`,
                  })}
                  className="flex items-center justify-center space-x-2"
                  category="whatsapp"
                  city={city.name}
                >
                  <WhatsAppIcon className="h-5 w-5 fill-white" />
                  <span>WhatsApp Quote</span>
                </TrackedLink>
              </Button>
            </div>

            {/* Quick stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sky-400">{city.totalCustomers}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Happy Households</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{city.avgResponseTime}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Average Response</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sky-400">24/7</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Emergency Dispatch</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">4.9 ★</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Areas Directory */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              LOCAL HUBS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Localities We Serve in <span className="text-blue-600">{city.name}</span>
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Dedicated mobile service vans stationed across all major sectors of {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.areas.map((area, index) => (
              <Card
                key={index}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl shadow-none hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2.5 text-lg font-bold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>{area.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>

                  {/* Local landmarks */}
                  {area.landmarks && area.landmarks.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2">Key Landmarks:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {area.landmarks.slice(0, 4).map((landmark, landmarkIndex) => (
                          <span key={landmarkIndex} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs">
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <Clock className="h-3.5 w-3.5 text-emerald-600" />
                      {area.responseTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {area.customers} jobs done
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link
                      href={`/locations/${citySlug}/${area.slug}`}
                      className="flex-1 text-center py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                    <TrackedLink
                      href={contact.phoneTel}
                      className="flex-1 text-center py-2.5 px-3 border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                      category="phone"
                      city={city.name}
                      area={area.name}
                    >
                      Direct Call
                    </TrackedLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in This City */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1 text-xs font-semibold mb-3">
              LOCAL EXPERTISE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why {city.name} Residents Choose Gas Repair Wale
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Local knowledge with full compliance to safety standards in {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {city.advantages.map((advantage, index) => {
              const IconComponent = getIcon(advantage.icon)
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-colors shadow-none">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{advantage.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-sky-50 text-sky-700 border border-sky-200 px-3.5 py-1 text-xs font-semibold mb-3">
              VERIFIED FEEDBACK
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What {city.name} Customers Say
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Real feedback from homeowners and commercial kitchens across {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {city.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-slate-200 rounded-2xl shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating || 5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm italic">
                    "{testimonial.text}"
                  </p>
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl mb-4 text-xs">
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-blue-600">{testimonial.service}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Date:</span>
                      <span className="font-medium text-slate-700">{testimonial.date}</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.profession} • {testimonial.area}, {city.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Statistics Bar */}
      <section className="py-16 bg-[#071126] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our {city.name} Operational Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border-r last:border-r-0 border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">{city.totalCustomers}</div>
                <div className="text-slate-400 text-xs sm:text-sm">Households Served</div>
              </div>
              <div className="border-r last:border-r-0 border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{city.areas.length}+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Neighborhoods</div>
              </div>
              <div className="border-r last:border-r-0 border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">{city.avgResponseTime}</div>
                <div className="text-slate-400 text-xs sm:text-sm">Avg Arrival Speed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">99%</div>
                <div className="text-slate-400 text-xs sm:text-sm">Issue Resolution Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900">
              FAQs about Gas Services in {city.name}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {cityFaqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-none">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-600 font-extrabold">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
