import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Gas Repair Services Pune Hyderabad | Gas Stove Repair | Pipeline Installation | Emergency Gas Service | Gas Repaire Wale",
  description:
    "⭐ Professional Gas Repair Services in Pune & Hyderabad ✅ Gas Stove Repair ✅ Pipeline Installation ✅ 24/7 Emergency Service ✅ Licensed Technicians ✅ 5000+ Happy Customers ✅ Same Day Service. Call +91 83027 13127 for Expert Gas Solutions!",
  keywords: [
    // Primary keywords
    "gas repair services pune",
    "gas repair services hyderabad",
    "gas stove repair pune",
    "gas stove repair hyderabad",
    "gas pipeline installation pune",
    "gas pipeline installation hyderabad",
    "emergency gas repair pune",
    "emergency gas repair hyderabad",

    // Long-tail keywords
    "professional gas stove repair services",
    "licensed gas technician pune hyderabad",
    "gas leak repair emergency service",
    "commercial gas pipeline installation",
    "residential gas appliance repair",
    "gas safety inspection services",
    "24/7 emergency gas repair",
    "affordable gas repair services",

    // Location-specific
    "gas repair kothrud pune",
    "gas repair gachibowli hyderabad",
    "gas repair baner pune",
    "gas repair madhapur hyderabad",
    "gas services maharashtra telangana",

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
    title: "Professional Gas Repair Services in Pune & Hyderabad | Gas Repaire Wale",
    description:
      "Expert gas stove repair, pipeline installation & emergency gas services across Pune & Hyderabad. Licensed technicians, 24/7 service, 5000+ satisfied customers. Call +91 83027 13127",
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
      "Expert gas stove repair & pipeline services in Pune & Hyderabad. Licensed technicians, emergency service, 5000+ customers. Call +91 83027 13127",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gasrepairewale.com",
  },
    generator: 'v0.dev'
}

// Enhanced Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://gasrepairewale.com/#business",
      name: "Gas Repaire Wale",
      description:
        "Professional gas stove repair, pipeline installation, and emergency gas services in Pune and Hyderabad. Licensed technicians with 10+ years experience.",
      url: "https://gasrepairewale.com",
      telephone: "+91-83027-13127",
      email: "info@gasrepairewale.com",
      priceRange: "₹₹",
      foundingDate: "2013",

      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
          areaServed: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Karve Nagar", "Warje"],
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
          areaServed: ["Gachibowli", "Madhapur", "Kondapur", "Miyapur", "Kukatpally", "Begumpet"],
        },
      ],

      geo: [
        {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
          address: "Pune, Maharashtra, India",
        },
        {
          "@type": "GeoCoordinates",
          latitude: 17.385,
          longitude: 78.4867,
          address: "Hyderabad, Telangana, India",
        },
      ],

      openingHours: "Mo-Su 00:00-23:59",

      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: [
          {
            "@type": "GeoCoordinates",
            latitude: 18.5204,
            longitude: 73.8567,
          },
          {
            "@type": "GeoCoordinates",
            latitude: 17.385,
            longitude: 78.4867,
          },
        ],
        geoRadius: "50000",
      },

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
                "@id": "https://gasrepairewale.com/#business",
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
                "@id": "https://gasrepairewale.com/#business",
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
                "@id": "https://gasrepairewale.com/#business",
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
          reviewBody: "Excellent gas stove repair service. Fixed my burner issue quickly and professionally.",
        },
      ],

      sameAs: [
        "https://www.facebook.com/gasrepairewale",
        "https://www.instagram.com/gasrepairewale",
        "https://twitter.com/gasrepairewale",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://gasrepairewale.com/#website",
      url: "https://gasrepairewale.com",
      name: "Gas Repaire Wale",
      description: "Professional gas repair services in Pune and Hyderabad",
      publisher: {
        "@id": "https://gasrepairewale.com/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://gasrepairewale.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <link rel="canonical" href="https://gasrepairewale.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Pune, Hyderabad" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="geo.position" content="17.385;78.4867" />
        <meta name="ICBM" content="18.5204, 73.8567" />
        <meta name="ICBM" content="17.385, 78.4867" />

        {/* Business-specific meta tags */}
        <meta name="business:contact_data:street_address" content="Pune & Hyderabad Service Areas" />
        <meta name="business:contact_data:locality" content="Pune, Hyderabad" />
        <meta name="business:contact_data:region" content="Maharashtra, Telangana" />
        <meta name="business:contact_data:postal_code" content="411001, 500001" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+91-83027-13127" />
        <meta name="business:contact_data:website" content="https://gasrepairewale.com" />
      </head>
      <body className={inter.className}>
        {/* Main navigation header */}
        <Header />

        {/* Page content */}
        {children}

        {/* Footer with contact info and links */}
        <Footer />

        {/* Toast notifications */}
        <Toaster />
      </body>
    </html>
  )
}
