import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTopWrapper } from "@/components/scroll-to-top-wrapper"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://gasrepairwale.com"),
  title: "Gas Repair Wale | Gas Stove Repair in Pune, Mumbai & Hyderabad",
  description:
    "Professional gas repair services in Pune, Mumbai & Hyderabad. Gas stove repair, pipeline installation, 24/7 emergency service. Licensed technicians. 5000+ customers. Call +91 83027 13127",
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
    "emergency gas repair pune",
    "emergency gas repair mumbai",
    "emergency gas repair hyderabad",
    "professional gas stove repair services",
    "licensed gas technician pune mumbai hyderabad",
    "gas leak repair emergency service",
    "commercial gas pipeline installation",
    "residential gas appliance repair",
    "gas safety inspection services",
    "24/7 emergency gas repair",
    "affordable gas repair services",
    "gas repair kothrud pune",
    "gas repair baner pune",
    "gas repair borivali mumbai",
    "gas repair kandivali mumbai",
    "gas repair hitec city hyderabad",
    "gas repair gachibowli hyderabad",
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
    title: "Gas Repair Wale | Professional Gas Repair Services in Pune, Mumbai & Hyderabad",
    description:
      "Expert gas stove repair, pipeline installation & emergency gas services across Pune, Mumbai & Hyderabad. Licensed technicians, 24/7 service, 5000+ satisfied customers. Call +91 83027 13127",
    siteName: "Gas Repair Wale",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repair Wale - Professional Gas Services in Pune, Mumbai & Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Repair Wale | Professional Gas Repair Services",
    description:
      "Expert gas stove repair & pipeline services in Pune, Mumbai & Hyderabad. Licensed technicians, emergency service, 5000+ customers. Call +91 83027 13127",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "JUBZp6IFOyJ98MiNTifWjKfFF5Fanxoleua8AQ4lZSE",
  },
  // NOTE: No global canonical here — each page sets its own via metadata.alternates.canonical
}

// Enhanced Structured Data for Local Business — Valid Schema.org
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://gasrepairwale.com/#business",
      name: "Gas Repair Wale",
      description:
        "Professional gas stove repair, pipeline installation, and emergency gas services in Pune, Mumbai and Hyderabad. Licensed technicians with 10+ years experience.",
      url: "https://gasrepairwale.com",
      telephone: "+91-83027-13127",
      email: "info@gasrepairwale.com",
      priceRange: "₹₹",
      foundingDate: "2013",

      // Primary address (Pune HQ)
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
        postalCode: "411001",
      },

      // Primary geo coordinates (Pune)
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5204,
        longitude: 73.8567,
      },

      // Valid areaServed — replaces invalid GeoCircle array
      areaServed: [
        {
          "@type": "City",
          name: "Pune",
          sameAs: "https://en.wikipedia.org/wiki/Pune",
        },
        {
          "@type": "City",
          name: "Mumbai",
          sameAs: "https://en.wikipedia.org/wiki/Mumbai",
        },
        {
          "@type": "City",
          name: "Hyderabad",
          sameAs: "https://en.wikipedia.org/wiki/Hyderabad,_India",
        },
      ],

      openingHours: "Mo-Su 00:00-23:59",

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Gas Repair Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gas Stove Repair",
              description:
                "Professional gas stove repair for all brands including burner repair, ignition system repair, and complete servicing",
              provider: {
                "@id": "https://gasrepairwale.com/#business",
              },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "299",
              priceCurrency: "INR",
              description: "Starting price for gas stove repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gas Pipeline Installation",
              description:
                "Complete gas pipeline installation, repair, and maintenance services for residential and commercial properties",
              provider: {
                "@id": "https://gasrepairwale.com/#business",
              },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "599",
              priceCurrency: "INR",
              description: "Starting price for pipeline services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Gas Repair",
              description: "24/7 emergency gas repair services for gas leaks, safety concerns, and urgent repairs",
              provider: {
                "@id": "https://gasrepairwale.com/#business",
              },
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },

      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "Rajesh Kumar",
          },
          reviewBody:
            "Excellent gas stove repair service. Fixed my burner issue quickly and professionally. Technician arrived within 20 minutes. Highly recommend Gas Repair Wale in Pune!",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "Priya Sharma",
          },
          reviewBody:
            "Called for emergency gas leak at 11 PM in Mumbai. Technician arrived in 15 minutes. Professional service, highly recommended.",
        },
      ],

      sameAs: [
        "https://www.facebook.com/gasrepairwale",
        "https://www.instagram.com/gasrepairwale",
        "https://twitter.com/gasrepairwale",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://gasrepairwale.com/#website",
      url: "https://gasrepairwale.com",
      name: "Gas Repair Wale",
      description: "Professional gas repair services in Pune, Mumbai and Hyderabad",
      publisher: {
        "@id": "https://gasrepairwale.com/#business",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data — JSON-LD for LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* NOTE: No hardcoded canonical here — each page sets its own via metadata.alternates.canonical */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />

        {/* Geo meta tags — primary location (Pune). Multi-city handled via schema areaServed */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Mumbai, Hyderabad" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Business contact meta tags */}
        <meta name="business:contact_data:locality" content="Pune, Mumbai, Hyderabad" />
        <meta name="business:contact_data:region" content="Maharashtra, Telangana" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+91-83027-13127" />
        <meta name="business:contact_data:website" content="https://gasrepairwale.com" />
      </head>
      <body className={inter.className}>
        <ScrollToTopWrapper>
          {/* Main navigation header */}
          <Header />

          {/* Page content */}
          {children}

          {/* Footer with contact info and links */}
          <Footer />

          {/* Sticky Quick Contact Bar on Mobile Devices */}
          <MobileStickyBar />

          {/* Toast notifications */}
          <Toaster />
        </ScrollToTopWrapper>

        {/* Google Analytics 4 — loaded AFTER page is interactive (non-blocking) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ELBP9XJCKC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELBP9XJCKC', {
              send_page_view: true,
              anonymize_ip: true
            });
          `}
        </Script>
      </body>
    </html>
  )
}
