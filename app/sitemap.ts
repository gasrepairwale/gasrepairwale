import type { MetadataRoute } from "next"
import { areaData } from "@/data/area-data"

// Static page last-modified dates (update manually when content changes)
const STATIC_DATES = {
  home: "2025-08-01",
  about: "2025-07-15",
  services: "2025-07-15",
  locations: "2025-08-01",
  privacy: "2025-01-01",
  terms: "2025-01-01",
  cityPages: "2025-08-01",
  areaPages: "2025-08-01",
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gasrepairwale.com"

  // Static pages with fixed dates (not new Date() — that wastes crawl budget)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(STATIC_DATES.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(STATIC_DATES.about),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(STATIC_DATES.services),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(STATIC_DATES.home),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(STATIC_DATES.locations),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(STATIC_DATES.privacy),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(STATIC_DATES.terms),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Dynamic city pages — all 3 cities
  const cityPages: MetadataRoute.Sitemap = Object.keys(areaData).map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(STATIC_DATES.cityPages),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Dynamic area pages — all 79 areas
  const areaPages: MetadataRoute.Sitemap = []

  Object.entries(areaData).forEach(([city, areas]) => {
    Object.keys(areas).forEach((area) => {
      areaPages.push({
        url: `${baseUrl}/locations/${city}/${area}`,
        lastModified: new Date(STATIC_DATES.areaPages),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    })
  })

  return [...staticPages, ...cityPages, ...areaPages]
}
