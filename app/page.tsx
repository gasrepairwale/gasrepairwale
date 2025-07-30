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
