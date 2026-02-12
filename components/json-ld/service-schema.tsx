import type { Service, WithContext } from "schema-dts/dist/schema"

interface ServiceSchemaProps {
  name: string
  description: string
  providerName: string
  areaServed: string
  serviceType: string
  offerPrice?: string
}

export function ServiceSchema({
  name,
  description,
  providerName,
  areaServed,
  serviceType,
  offerPrice,
}: ServiceSchemaProps) {
  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    serviceType: serviceType,
    offers: offerPrice
      ? {
          "@type": "Offer",
          price: offerPrice,
          priceCurrency: "INR",
        }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
