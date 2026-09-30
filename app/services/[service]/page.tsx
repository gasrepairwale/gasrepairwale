import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  Flame,
  Wrench,
  Settings,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Home,
  Building2,
  Phone,
  PhoneCall,
  ChevronRight,
  Sparkles,
  Zap,
  AlertTriangle,
  FileCheck2,
  Check,
  MapPin,
  BadgeCheck,
  ShieldAlert,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TrackedLink } from "@/components/tracked-link"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"
import { BreadcrumbSchema } from "@/components/json-ld/breadcrumb-schema"
import { ServiceSchema } from "@/components/json-ld/service-schema"
import { FAQSchema } from "@/components/json-ld/faq-schema"
import { servicesData, type ServiceDetail } from "@/data/services-data"

type Props = {
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceParam } = await params
  const service = servicesData[serviceParam]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: {
      canonical: `https://gasrepairwale.com/services/${service.id}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://gasrepairwale.com/services/${service.id}`,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: "Gas Repair Wale",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service,
  }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service: serviceParam } = await params
  const service: ServiceDetail = servicesData[serviceParam]

  if (!service) {
    notFound()
  }

  const breadcrumbItems = [
    { name: "Home", item: "https://gasrepairwale.com" },
    { name: "Services", item: "https://gasrepairwale.com/services" },
    { name: service.shortTitle, item: `https://gasrepairwale.com/services/${service.id}` },
  ]

  const topLocations = [
    { name: "Kothrud, Pune", href: "/locations/pune/kothrud" },
    { name: "Baner, Pune", href: "/locations/pune/baner" },
    { name: "Wakad, Pune", href: "/locations/pune/wakad" },
    { name: "Andheri West, Mumbai", href: "/locations/mumbai/andheri-west" },
    { name: "Borivali, Mumbai", href: "/locations/mumbai/borivali-east-west" },
    { name: "Bandra, Mumbai", href: "/locations/mumbai/bandra-east-west" },
    { name: "Miyapur, Hyderabad", href: "/locations/hyderabad" },
    { name: "Gachibowli, Hyderabad", href: "/locations/hyderabad" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        providerName="Gas Repair Wale"
        areaServed="Pune, Mumbai, Hyderabad"
        serviceType={service.shortTitle}
      />
      <FAQSchema faqs={service.faqs} />

      {/* Visual Breadcrumb Navigation */}
      <div className="bg-[#0b1730] border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-xs sm:text-sm text-slate-400 flex-wrap gap-1" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <Link href="/services" className="hover:text-sky-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-white font-medium">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Premium Executive Hero Section with Integrated Booking Form */}
      <section className="relative bg-[#071126] text-white py-12 lg:py-16 overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 40%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side: Context & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Zap className="w-3.5 h-3.5" />
                  {service.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  15-25 Mins Rapid Arrival
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  90-Day Warranty
                </span>
              </div>

              {/* Headline: Blue text on the same line */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Professional <span className="text-sky-400">{service.title}</span>
              </h1>

              {/* Sub-copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.tagline} Certified technicians with digital gas sniffers, 100% genuine brass spare parts, and transparent upfront estimates across Pune, Mumbai, and Hyderabad.
              </p>

              {/* Operational Guarantee Bar */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white">Emergency Mobile Vans:</span> Stationed across all sectors of Pune, Mumbai & Hyderabad. Guaranteed doorstep arrival in 15 to 25 minutes.
                </p>
              </div>

              {/* Direct Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-base transition-colors"
                >
                  <TrackedLink
                    href="tel:+918302713127"
                    className="flex items-center justify-center space-x-2"
                    category="phone"
                    city="Pune & Mumbai"
                  >
                    <PhoneCall className="h-5 w-5" />
                    <span>Call Now: +91 83027 13127</span>
                  </TrackedLink>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-base transition-colors"
                >
                  <TrackedLink
                    href={getWhatsAppRedirectUrl({
                      serviceType: service.shortTitle,
                      message: `Hi Gas Repair Wale, I need assistance with ${service.shortTitle}.`,
                    })}
                    className="flex items-center justify-center space-x-2"
                    category="whatsapp"
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white" />
                    <span>WhatsApp Quote</span>
                  </TrackedLink>
                </Button>
              </div>

              {/* 4 Micro Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-sky-400 font-bold text-lg sm:text-xl">15-25 Mins</div>
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
                  <div className="text-amber-400 font-bold text-lg sm:text-xl">Zero PPM</div>
                  <div className="text-slate-400 text-xs mt-0.5">Digital Sniffer Test</div>
                </div>
              </div>
            </div>

            {/* Right side: Quick Booking Form */}
            <div className="lg:col-span-5">
              <QuickBookingForm area={{ name: "Doorstep Service", city: "Pune" }} defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Overview & Visual Breakdown */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CERTIFIED TECHNICIAN DISPATCH</span>
                  </div>
                  <h4 className="text-lg font-bold">{service.shortTitle} Specialists</h4>
                  <p className="text-xs text-slate-300 mt-1">Carrying all genuine spare parts in mobile vans.</p>
                </div>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold">
                SERVICE OVERVIEW
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Comprehensive {service.shortTitle} Engineering Standards
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {service.overview}
              </p>
              {service.deepDescription.map((p, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {service.warrantyInfo}
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  {service.pricingPolicy}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms & Technical Solutions */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-rose-50 text-rose-700 border border-rose-200 px-3.5 py-1 text-xs font-semibold mb-3">
              TROUBLESHOOTING & REPAIR
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Common Issues We Solve on Every Visit
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Identified through calibrated diagnostic procedures and resolved with genuine factory components.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.commonIssues.map((issue, idx) => (
              <Card key={idx} className="bg-white border border-slate-200 rounded-2xl shadow-none p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{issue.symptom}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      <strong className="text-slate-700">Root Cause:</strong> {issue.cause}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-xs text-slate-700">
                  <strong className="text-blue-700 block mb-1">Our Engineering Solution:</strong>
                  <span>{issue.solution}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Engineering Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              STANDARD OPERATING PROCEDURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How We Deliver Doorstep Excellence
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Our 4-step calibrated workflow guarantees complete safety and zero callbacks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative hover:border-blue-400 transition-colors shadow-none flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-blue-600/30 mb-3">{step.step}</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-600">
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Verified Procedure
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Spares & Brand Compatibility */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Genuine Spares */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold text-sm">
                <BadgeCheck className="w-5 h-5 text-blue-600" />
                <span>100% GENUINE FACTORY SPARE PARTS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Zero Compromise on Component Quality
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                We never use cheap aluminium or recycled scrap parts. Every replacement part carried in our mobile units meets or exceeds OEM specifications:
              </p>
              <ul className="space-y-3">
                {service.genuineSpares.map((spare, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spare}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Compatibility */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold text-sm">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>COMPATIBLE BRANDS & MODELS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Servicing All Indian & Global Brands
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Our technicians are trained on both domestic manual models and European auto-ignition SABAF systems:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.supportedBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>*All trademarks belong to respective owners</span>
                <span className="text-emerald-600 font-bold">100% Compatible Spares</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Local Hubs Across Pune, Mumbai & Hyderabad */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Doorstep {service.shortTitle} Coverage Across 3 Cities
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Technicians stationed locally with dedicated dispatch vans in Pune, Mumbai, and Hyderabad.
              </p>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View all 80+ localities</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {topLocations.map((loc, idx) => (
              <Link
                key={idx}
                href={loc.href}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs sm:text-sm text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600" />
                <span>{loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1 text-xs font-semibold mb-3">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900">
              FAQs About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-none">
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
