import type { MetadataRoute } from "next"
import { areaData } from "@/data/area-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gasrepairewale.com"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Dynamic city pages
  const cityPages: MetadataRoute.Sitemap = Object.keys(areaData).map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Dynamic area pages
  const areaPages: MetadataRoute.Sitemap = []

  Object.entries(areaData).forEach(([city, areas]) => {
    Object.keys(areas).forEach((area) => {
      areaPages.push({
        url: `${baseUrl}/locations/${city}/${area}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })
    })
  })

  return [...staticPages, ...cityPages, ...areaPages]
}
