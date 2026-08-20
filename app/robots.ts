import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/locations/", "/services", "/about", "/contact", "/privacy-policy", "/terms-of-service"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/", "/claim/", "/join-as-technician/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/locations/", "/services", "/about", "/contact"],
        // Note: crawlDelay is ignored by Google — removed
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        crawlDelay: 1,
      },
      {
        userAgent: ["facebookexternalhit", "Twitterbot", "LinkedInBot", "WhatsApp"],
        allow: "/",
      },
    ],
    sitemap: "https://gasrepairwale.com/sitemap.xml",
    host: "https://gasrepairwale.com",
  }
}
