import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: ["AhrefsBot", "MJ12bot", "DotBot", "SemrushBot"],
        disallow: "/",
      },
      {
        userAgent: ["facebookexternalhit", "Twitterbot", "LinkedInBot", "WhatsApp"],
        allow: "/",
      },
    ],
    sitemap: "https://gasrepairewale.com/sitemap.xml",
    host: "https://gasrepairewale.com",
  }
}
