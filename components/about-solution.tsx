"use client"

import Link from "next/link"
import { CheckCircle2, ShieldCheck, ArrowRight, Clock, Award } from "lucide-react"

/**
 * AboutSolution Component - "Delivering Quality Gas Solutions"
 * Exactly matches Section 2 of the reference design (2 overlapping photos + 15+ years badge + 4 checkmarks)
 */
export function AboutSolution() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 2 Overlapping Photo Cards + Floating Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 1: Technician at work */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[3/4] bg-slate-100 border border-slate-100">
                <img
                  src="/images/technician-hero.jpg"
                  alt="Certified gas repair technician diagnosing stove"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 2: Pipeline / Burner testing */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[3/4] bg-slate-100 mt-8 border border-slate-100">
                <img
                  src="/images/stove-flame-test.jpg"
                  alt="Technician testing blue flame"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Experience Badge (Matches Reference circular badge) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-28 h-28 sm:w-32 sm:h-32 p-3 shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl font-black leading-none">15+</span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-100 mt-1">
                Years of Experience
              </span>
            </div>
          </div>

          {/* Right Column: Content & 4 Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                About Gas Repair Wale
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Delivering Quality <br />
                <span className="text-blue-600">Gas Solutions</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We are dedicated to delivering high-quality gas appliance and pipeline services built on expertise, safety compliance, and attention to detail. From routine burner maintenance to complete copper pipeline routing, our certified technicians ensure long-lasting results.
            </p>

            {/* 4 Checkmark Features Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Licensed & Insured</span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Same-Day Service</span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Upfront, Flat Pricing</span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Gas Safety Experts</span>
              </div>
            </div>

            {/* CTA Button (Zero Shadow) */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-none transition-colors group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
