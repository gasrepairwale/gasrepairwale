"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])
}
