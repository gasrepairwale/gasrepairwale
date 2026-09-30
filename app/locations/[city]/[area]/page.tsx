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
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
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
  PhoneCall,
  Flame,
  ShieldCheck,
  Check
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
      question: `Do you provide doorstep gas stove repair in ${area.name}?`,
      answer: `Yes, we provide specialized doorstep gas stove, cooktop, and hob repair services in ${area.name}, ${area.city} (${area.pincode}). Our local technicians are stationed locally for quick ${area.responseTime} response.`,
    },
    {
      question: `How quickly can you reach ${area.name} for an emergency gas leak?`,
      answer: `We guarantee a response time of ${area.responseTime} for urgent gas leaks and repairs in ${area.name}. Our emergency dispatch team is active 24/7 across the locality with electronic sniffer equipment.`,
    },
    {
      question: `Do you service residential apartments and commercial kitchens in ${area.name}?`,
      answer: `Yes, we offer comprehensive gas pipeline installations, stove maintenance, and commercial manifold services for both residential high-rises and commercial restaurants in ${area.name}.`,
    },
    {
      question: `How does pricing work for gas stove repair in ${area.name}?`,
      answer: `We follow 100% transparent upfront pricing. Our technician inspects the appliance on-site and provides a clear quote before touching any part. No hidden fees, and you pay only after complete testing and satisfaction.`,
    },
    {
      question: `Do you provide warranty on spare parts in ${area.name}?`,
      answer: `Yes, all replacement components (brass burners, valves, copper pipes, auto-ignition units) are 100% genuine and backed by our standard 90-day hassle-free service warranty.`,
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
    .slice(0, 8)

  return (
    <main className="min-h-screen bg-white">
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
            <Link href={`/locations/${city}`} className="hover:text-sky-400 capitalize transition-colors">
              {area.city}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-white font-medium capitalize">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Premium Executive Hero Section with Integrated Booking Form */}
      <section className="relative bg-[#071126] text-white py-12 lg:py-16 overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 40%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side: Area Context & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <MapPin className="w-3.5 h-3.5" />
                  Serving {area.name}, {area.city} — {area.pincode}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  {area.responseTime} Rapid Response
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  {area.rating} ★ Rated ({area.customers})
                </span>
              </div>

              {/* Headline: Blue text on the same line */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Gas Stove & Pipeline Repair in <span className="text-sky-400">{area.name}, {area.city}</span>
              </h1>

              {/* Sub-copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Certified doorstep repair services across <strong className="text-white">{area.name}</strong>. Certified technicians carrying 100% genuine brass burners, valves, electronic leak sniffer detectors & 90-day service warranty.
              </p>

              {/* Emergency Callout Bar */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white">Local Vans On Duty:</span> Technicians physically stationed near {area.landmarks?.[0] || area.name}. Guaranteed arrival in {area.responseTime}.
                </p>
              </div>

              {/* Primary Direct CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-base transition-colors"
                >
                  <TrackedLink
                    href={contact.phoneTel}
                    className="flex items-center justify-center space-x-2"
                    category="phone"
                    city={area.city}
                    area={area.name}
                  >
                    <PhoneCall className="h-5 w-5" />
                    <span>Call Now: {contact.phoneDisplay}</span>
                  </TrackedLink>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-base transition-colors"
                >
                  <TrackedLink
                    href={getWhatsAppRedirectUrl({
                      serviceType: "General Inquiry",
                      city: area.city,
                      area: area.name,
                      message: `Hi Gas Repair Wale, I need gas stove/pipeline service in ${area.name}, ${area.city}.`,
                    })}
                    className="flex items-center justify-center space-x-2"
                    category="whatsapp"
                    city={area.city}
                    area={area.name}
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white" />
                    <span>WhatsApp Quote</span>
                  </TrackedLink>
                </Button>
              </div>

              {/* 4 Micro Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-sky-400 font-bold text-lg sm:text-xl">{area.responseTime}</div>
                  <div className="text-slate-400 text-xs mt-0.5">Average Arrival</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-emerald-400 font-bold text-lg sm:text-xl">100%</div>
                  <div className="text-slate-400 text-xs mt-0.5">Genuine Spares</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-sky-400 font-bold text-lg sm:text-xl">90 Days</div>
                  <div className="text-slate-400 text-xs mt-0.5">Service Warranty</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-amber-400 font-bold text-lg sm:text-xl">{area.completedJobs}+</div>
                  <div className="text-slate-400 text-xs mt-0.5">Repairs Done</div>
                </div>
              </div>
            </div>

            {/* Right side: Quick Booking Form */}
            <div className="lg:col-span-5">
              <QuickBookingForm area={area} />
            </div>
          </div>
        </div>
      </section>

      {/* Localized Specialized Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              LOCAL DOORSTEP SERVICES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Gas Repair Solutions in <span className="text-blue-600">{area.name}</span>
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Every job is performed on-site by certified gas technicians with calibrated safety checks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {area.specialServices?.map((service: any, index: number) => (
              <Card
                key={index}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl shadow-none hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-slate-100 pt-4 space-y-2.5">
                    {service.features?.map((feature: string, fi: number) => (
                      <div key={fi} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-xl text-sm shadow-none transition-colors"
                    >
                      <TrackedLink
                        href={contact.phoneTel}
                        category="phone"
                        city={area.city}
                        area={area.name}
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Book for {area.name}</span>
                      </TrackedLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {area.advantages && (
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1 text-xs font-semibold mb-3">
                WHY LOCAL RESIDENTS TRUST US
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why {area.name} Chooses Gas Repair Wale
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Trusted by {area.customers} households and businesses in {area.name}, {area.city}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {area.advantages.map((advantage: any, index: number) => {
                const IconComponent = getIcon(advantage.icon)
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-colors shadow-none"
                  >
                    <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{advantage.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{advantage.description}</p>
                    {advantage.stats && (
                      <div className="mt-4 pt-3 border-t border-slate-100 text-blue-600 font-semibold text-xs">
                        {advantage.stats}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Local Landmarks & Society Coverage */}
      {area.landmarks && area.landmarks.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-50/60 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold text-sm">
                <Building className="w-5 h-5 text-blue-600" />
                <span>LOCAL SOCIEITY & LANDMARK COVERAGE</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Doorstep Reach Across {area.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our technicians provide direct on-site servicing throughout {area.name} ({area.pincode}) including all prominent societies, residential towers, markets, and main roads:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {area.landmarks.map((landmark: string, li: number) => (
                  <span
                    key={li}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium shadow-none"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    {landmark}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">
                *Don't see your specific apartment or street? We cover 100% of addresses in {area.name} and surrounding radius.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews in Area */}
      {area.testimonials && area.testimonials.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <Badge className="bg-sky-50 text-sky-700 border border-sky-200 px-3.5 py-1 text-xs font-semibold mb-3">
                LOCAL FEEDBACK
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Real Customer Reviews in {area.name}
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Verified reviews from homeowners and commercial kitchens right here in {area.name}.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {area.testimonials.map((testimonial: any, index: number) => (
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
                      <p className="text-xs text-slate-500">{testimonial.profession} • {testimonial.area || area.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety & Transparent Estimate Promise */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>100% TRANSPARENT PRICING</span>
              </div>
              <h3 className="text-2xl font-bold">No Hidden Fees. Pay Only After Testing.</h3>
              <p className="text-slate-300 text-sm">
                Our technician provides an upfront quote after on-site diagnosis. You pay only when you are 100% satisfied.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-6"
              >
                <TrackedLink
                  href={contact.phoneTel}
                  category="phone"
                  city={area.city}
                  area={area.name}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {contact.phoneDisplay}</span>
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Details & FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
                FREQUENTLY ASKED QUESTIONS
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">
                Gas Service in {area.name} — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {areaFaqs.map((faq, i) => (
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
        </div>
      </section>

      {/* Internal Linking — Other Areas in the Same City */}
      {nearbyAreaSlugs.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Other Neighborhoods We Serve in {area.city}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    Fast mobile dispatch available across all sectors of {area.city}.
                  </p>
                </div>
                <Link
                  href={`/locations/${city}`}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Explore all {area.city} zones</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {nearbyAreaSlugs.map((areaSlug) => {
                  const nearbyArea = (cityAreas as any)[areaSlug]
                  return (
                    <Link
                      key={areaSlug}
                      href={`/locations/${city}/${areaSlug}`}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs sm:text-sm text-slate-700 hover:text-blue-700 font-medium transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-slate-400 group-hover:text-blue-600" />
                      <span>{nearbyArea?.name || areaSlug}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Clean Global Contact CTA */}
      <ContactCTA />
    </main>
  )
}
