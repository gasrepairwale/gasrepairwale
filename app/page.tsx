import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { AboutSolution } from "@/components/about-solution"
import { ComprehensiveServices } from "@/components/comprehensive-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { VerifiedTechnicians } from "@/components/verified-technicians"
import { ProcessFlow } from "@/components/process-flow"
import { BeforeAfter } from "@/components/before-after"
import { EnhancedTestimonials } from "@/components/enhanced-testimonials"
import { LocationsOverview } from "@/components/locations-overview"
import { BrandShowcase } from "@/components/brand-showcase"
import { FAQ } from "@/components/faq"

export const metadata: Metadata = {
  title: "Gas Repair Wale | Gas Stove Repair & Pipeline Services in Pune, Mumbai & Hyderabad",
  description:
    "Expert doorstep gas stove repair, hob auto-ignition tuning, and copper pipeline installation across Pune, Mumbai, and Hyderabad. 15-25 min arrival, genuine brass parts, and transparent upfront estimates. Call +91 83027 13127!",
  keywords: [
    "gas repair services pune",
    "gas repair services mumbai",
    "gas repair services hyderabad",
    "gas stove repair pune",
    "gas stove repair mumbai",
    "gas stove repair hyderabad",
    "gas pipeline installation pune",
    "gas pipeline installation mumbai",
    "gas pipeline installation hyderabad",
    "emergency gas leak repair",
    "hob repair near me",
  ].join(", "),
  authors: [{ name: "Gas Repair Wale", url: "https://gasrepairwale.com" }],
  creator: "Gas Repair Wale",
  publisher: "Gas Repair Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairwale.com",
    title: "Gas Repair Wale | Gas Stove Repair & Pipeline Experts",
    description:
      "Expert gas stove repair, hob restoration & copper pipeline services in Pune, Mumbai & Hyderabad. 15-25 min arrival, certified technicians.",
    siteName: "Gas Repair Wale",
    images: [
      {
        url: "/images/stove-flame-test.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repair Wale Technician Testing Blue Flame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Repair Wale | Gas Stove Repair & Pipeline Services",
    description:
      "Expert gas stove repair & pipeline services in Pune, Mumbai & Hyderabad. Certified technicians, emergency service.",
    images: ["/images/stove-flame-test.jpg"],
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
      name: "How quickly can your technician arrive in Pune, Mumbai, or Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our technicians are stationed locally across Pune, Mumbai, and Hyderabad with an average doorstep arrival time of 15 to 25 minutes for emergency repairs.",
      },
    },
    {
      "@type": "Question",
      name: "What types of gas stove and hob issues do you fix at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We fix low flame, burner clogging, yellow soot flames, clicking auto-ignition spark failure, loose or stiff knobs, gas smell near regulator/pipeline, and glass cooktop valve replacements.",
      },
    },
    {
      "@type": "Question",
      name: "What are your inspection and repair charges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our certified technician inspects your gas stove or pipeline first and provides an upfront, transparent estimate before starting any repair. There are zero hidden fees, and you only pay after testing the blue flame.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide warranty on parts and repair workmanship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All repairs come with a standard 30 to 90-day service warranty. Genuine spare parts like brass burners, forged valves, and ISI Suraksha hoses carry manufacturer warranties.",
      },
    },
  ],
}

/**
 * Home Page Component - Redesigned to match premium reference layout
 * Features curved royal blue hero, 4-card service grid, and verified hubs
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* FAQ Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section (Curved Royal Blue Canvas with Arched Photo & Booking) */}
      <Hero />

      {/* 2. Section 2: Delivering Quality Gas Solutions (About / 15+ Yrs Credibility) */}
      <AboutSolution />

      {/* 3. Section 3: Provides Professional Gas Services for Every Need (4-Card Squircle Grid) */}
      <ComprehensiveServices />

      {/* 4. Section 4: Committed to Your Comfort & Safety (Why Choose Us) */}
      <WhyChooseUs />

      {/* 5. Section 5: Verified Doorstep Technicians & Safety Standards */}
      <VerifiedTechnicians />

      {/* 6. Section 6: How Our Simple & Reliable Process Works (5-Step Stepper) */}
      <ProcessFlow />

      {/* 6. Section 6: Real Repairs. Real Results. Done Right. (Before / After Showcase) */}
      <BeforeAfter />

      {/* 7. Section 7: Trusted Reviews from Homeowners & Businesses */}
      <EnhancedTestimonials />

      {/* 8. Section 8: Check Service Availability in Your Area (Coverage Network) */}
      <LocationsOverview />

      {/* 9. Supported Brands */}
      <BrandShowcase />

      {/* 10. Section 9: Answers to Your Frequently Asked Questions (FAQ) */}
      <FAQ />
    </main>
  )
}



