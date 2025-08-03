import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ComprehensiveServices } from "@/components/comprehensive-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { LocationsOverview } from "@/components/locations-overview"
import { EnhancedTestimonials } from "@/components/enhanced-testimonials"
import { ContactCTA } from "@/components/contact-cta"
import { EmergencyBanner } from "@/components/emergency-banner"
import { StatsSection } from "@/components/stats-section"
import { FAQ } from "@/components/faq"
import { BeforeAfter } from "@/components/before-after"
import { TrustSignals } from "@/components/trust-signals"
import { SEOContentSection } from "@/components/seo-content-section"

export const metadata: Metadata = {
  title:
    "Gas Repair Services Pune and Mumbai | Gas Stove Repair | Pipeline Installation | Emergency Gas Service | Gas Repaire Wale",
  description:
    "⭐ Professional Gas Repair Services in Pune & Mumbai ✅ Gas Stove Repair ✅ Pipeline Installation ✅ 24/7 Emergency Service ✅ Licensed Technicians ✅ 5000+ Happy Customers ✅ Same Day Service. Call +91 83027 13127 for Expert Gas Solutions!",
  keywords: [
    // Primary keywords
    "gas repair services pune",
    "gas repair services Mumbai",
    "gas stove repair pune",
    "gas stove repair Mumbai",
    "gas pipeline installation pune",
    "gas pipeline installation Mumbai",
    "emergency gas repair pune",
    "emergency gas repair Mumbai",

    // Long-tail keywords
    "professional gas stove repair services",
    "licensed gas technician pune Mumbai",
    "gas leak repair emergency service",
    "commercial gas pipeline installation",
    "residential gas appliance repair",
    "gas safety inspection services",
    "24/7 emergency gas repair",
    "affordable gas repair services",

    // Location-specific
    "gas repair kothrud pune",
    "gas repair Borivali East West Mumbai",
    "gas repair baner pune",
    "gas repair Kandivali East West Mumbai",
    "gas services Maharastra",

    // Service-specific
    "gas burner repair",
    "gas ignition repair",
    "gas valve replacement",
    "gas meter installation",
    "gas safety certificate",
    "gas appliance maintenance",
  ].join(", "),
  authors: [{ name: "Gas Repaire Wale", url: "https://gasrepairewale.com" }],
  creator: "Gas Repaire Wale",
  publisher: "Gas Repaire Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairewale.com",
    title: "Professional Gas Repair Services in Pune & Mumbai | Gas Repaire Wale",
    description:
      "Expert gas stove repair, pipeline installation & emergency gas services across Pune & Mumbai. Licensed technicians, 24/7 service, 5000+ satisfied customers. Call +91 83027 13127",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repaire Wale - Professional Gas Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Gas Repair Services | Gas Repaire Wale",
    description:
      "Expert gas stove repair & pipeline services in Pune & Mumbai. Licensed technicians, emergency service, 5000+ customers. Call +91 83027 13127",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gasrepairewale.com",
  },
}

/**
 * Home Page Component - SEO Optimized Landing Page
 * Comprehensive landing page with rich content for maximum SEO impact
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Emergency banner for immediate attention */}
      <EmergencyBanner />

      {/* Hero section with main CTA and value proposition */}
      <Hero />

      {/* Trust signals and social proof */}
      <TrustSignals />

      {/* Comprehensive services with detailed descriptions */}
      <ComprehensiveServices />

      {/* SEO-rich content section */}
      <SEOContentSection />

      {/* Before/After scenarios for engagement */}
      <BeforeAfter />

      {/* Why choose us with competitive advantages */}
      <WhyChooseUs />

      {/* Statistics and achievements */}
      <StatsSection />

      {/* Locations we serve with local SEO */}
      <LocationsOverview />

      {/* Customer testimonials and reviews */}
      <EnhancedTestimonials />

      {/* FAQ section for long-tail keywords */}
      <FAQ />

      {/* Final contact CTA */}
      <ContactCTA />
    </main>
  )
}
