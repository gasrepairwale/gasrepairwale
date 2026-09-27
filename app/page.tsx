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
import { SafetyGuarantees } from "@/components/safety-guarantees"
import { BrandShowcase } from "@/components/brand-showcase"
import { SEOContentSection } from "@/components/seo-content-section"

export const metadata: Metadata = {
 title: "Gas Repair Wale | Gas Stove Repair Pune, Mumbai & Hyderabad",
 description:
 "Professional Gas Repair Services in Pune, Mumbai & Hyderabad Gas Stove Repair Pipeline Installation 24/7 Emergency Service Licensed Technicians 5000+ Happy Customers. Call +91 83027 13127!",
 keywords: [
 // Primary keywords
 "gas repair services pune",
 "gas repair services Mumbai",
 "gas repair services Hyderabad",
 "gas stove repair pune",
 "gas stove repair Mumbai",
 "gas stove repair Hyderabad",
 "gas pipeline installation pune",
 "gas pipeline installation Mumbai",
 "gas pipeline installation Hyderabad",
 "emergency gas repair pune",
 "emergency gas repair Mumbai",
 "emergency gas repair Hyderabad",

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
 "gas repair hitec city hyderabad",
 "gas repair gachibowli hyderabad",
 "gas services Maharashtra",
 "gas services Telangana",

 // Service-specific
 "gas burner repair",
 "gas ignition repair",
 "gas valve replacement",
 "gas meter installation",
 "gas safety certificate",
 "gas appliance maintenance",
 ].join(", "),
 authors: [{ name: "Gas Repair Wale", url: "https://gasrepairwale.com" }],
 creator: "Gas Repair Wale",
 publisher: "Gas Repair Wale",
 robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
 openGraph: {
 type: "website",
 locale: "en_IN",
 url: "https://gasrepairwale.com",
 title: "Professional Gas Repair Services in Pune, Mumbai & Hyderabad | Gas Repair Wale",
 description:
 "Expert gas stove repair, pipeline installation & emergency gas services across Pune, Mumbai & Hyderabad. Licensed technicians, 24/7 service, 5000+ satisfied customers. Call +91 83027 13127",
 siteName: "Gas Repair Wale",
 images: [
 {
 url: "/og-image.jpg",
 width: 1200,
 height: 630,
 alt: "Gas Repair Wale - Professional Gas Services",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Professional Gas Repair Services | Gas Repair Wale",
 description:
 "Expert gas stove repair & pipeline services in Pune, Mumbai & Hyderabad. Licensed technicians, emergency service, 5000+ customers. Call +91 83027 13127",
 images: ["/twitter-image.jpg"],
 },
 verification: {
 google: "JUBZp6IFOyJ98MiNTifWjKfFF5Fanxoleua8AQ4lZSE",
 },
 alternates: {
 canonical: "https://gasrepairwale.com",
 },
}

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "How quickly can you respond to gas emergencies in Pune, Mumbai and Hyderabad?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "We guarantee a 15-30 minute response time for gas emergencies across Pune, Mumbai and Hyderabad. Our technicians are strategically located in Kothrud, Baner, Borivali, Kandivali, Gachibowli, and HITEC City for the fastest response.",
 },
 },
 {
 "@type": "Question",
 name: "What types of gas stove problems do you repair?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "We repair all gas stove issues: ignition problems, burner not lighting, gas smell, uneven flames, auto-ignition failure, gas valve issues. We work with Prestige, Butterfly, Glen, Sunflame, and all other brands.",
 },
 },
 {
 "@type": "Question",
 name: "What are your service charges for gas stove repair?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Gas stove repair starts from ₹299 for basic issues. Complex repairs range ₹499-₹1499. Emergency service adds ₹200. Transparent pricing with no hidden charges.",
 },
 },
 {
 "@type": "Question",
 name: "Do you provide warranty on your repair work?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes. Parts carry 6-month warranty, labor has 3-month guarantee, and major repairs get up to 1-year warranty. Same issue within warranty period is fixed free of charge.",
 },
 },
 {
 "@type": "Question",
 name: "Do you offer 24/7 emergency gas repair services?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes, we provide 24/7 emergency gas repair throughout the year including weekends and holidays. Gas emergencies like leaks are treated with highest priority. Call +91 83027 13127 anytime.",
 },
 },
 ],
}

/**
 * Home Page Component - SEO Optimized Landing Page
 * Comprehensive landing page with rich content for maximum SEO impact
 */
export default function HomePage() {
 return (
 <main className="min-h-screen">
 {/* FAQ Structured Data for Google Rich Snippets */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* Emergency banner for immediate attention */}
 <EmergencyBanner />

 {/* Hero section with main CTA and value proposition */}
 <Hero />

 {/* Trust signals and social proof */}
 <TrustSignals />

 
  <SafetyGuarantees />

  {/* Comprehensive services with detailed descriptions */}
 <ComprehensiveServices />

  <BrandShowcase />

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

