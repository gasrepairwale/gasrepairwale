"use client"

import type React from "react"

import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import { BackToTop } from "./back-to-top"

export function ScrollToTopWrapper({ children }: { children: React.ReactNode }) {
  useScrollToTop()

  return (
    <>
      {children}
      <BackToTop />
    </>
  )
}
