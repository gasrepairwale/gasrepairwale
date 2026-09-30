"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

/**
 * BackToTop Component
 * Features dynamic circular scroll-progress indicator, sleek royal blue theme,
 * zero button shadow, and safe mobile positioning above MobileStickyBar.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentScroll = window.scrollY
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100))
        setScrollProgress(progress)
        setIsVisible(currentScroll > 280)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Circle radius and circumference calculation
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div
      className={`fixed bottom-22 sm:bottom-8 right-4 sm:right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top of page"
        className="relative w-12 h-12 rounded-full bg-[#071126] text-white hover:bg-blue-600 border border-slate-700/80 transition-colors flex items-center justify-center group shadow-none cursor-pointer"
      >
        {/* Dynamic Circular Progress Indicator */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Background circle track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="2.5"
          />
          {/* Active progress stroke */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Up Arrow Icon */}
        <ArrowUp
          className="w-5 h-5 text-sky-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
          strokeWidth={2.5}
        />
      </button>
    </div>
  )
}
