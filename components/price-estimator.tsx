"use client"

import { useState } from "react"
import { Calculator, ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { trackPhoneCall, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * PriceEstimator Component - "Instant Price Estimate"
 * Matches Section 5 of reference image (Curved royal blue container + interactive price card)
 */
export function PriceEstimator() {
  const [service, setService] = useState("stove-burner")
  const [burners, setBurners] = useState("2")
  const [urgency, setUrgency] = useState("standard")
  const [city, setCity] = useState("pune")

  // Estimate computation logic
  const getEstimate = () => {
    let base = 299
    if (service === "hob-glass") base = 499
    if (service === "copper-pipe") base = 599
    if (service === "leak-test") base = 399
    if (service === "commercial") base = 899

    if (burners === "3") base += 100
    if (burners === "4") base += 200

    if (urgency === "emergency") base += 150

    return {
      min: base,
      max: base + 200,
    }
  }

  const estimate = getEstimate()
  const phone = city === "hyderabad" ? "+919950809283" : "+918302713127"
  const phoneDisplay = city === "hyderabad" ? "+91 99508 09283" : "+91 83027 13127"

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="rounded-[2.25rem] lg:rounded-[3rem] bg-[#071126] border border-blue-500/25 text-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Subtle geometric circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-white border border-white/20 mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Instant Price Estimate
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-2">
            Get a clear ballpark price in 30 seconds. No hidden fees. Genuine parts & doorstep test included.
          </p>
        </div>

        {/* Interactive Estimate Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 max-w-3xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Service Type</label>
              <select
                className="w-full h-11 px-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="stove-burner">Gas Stove Burner</option>
                <option value="hob-glass">Hob / Glass Cooktop</option>
                <option value="copper-pipe">Copper Pipeline</option>
                <option value="leak-test">Gas Leak Testing</option>
                <option value="commercial">Commercial Bhatti</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Burners / Size</label>
              <select
                className="w-full h-11 px-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                value={burners}
                onChange={(e) => setBurners(e.target.value)}
              >
                <option value="2">2 Burners</option>
                <option value="3">3 Burners</option>
                <option value="4">4 Burners / Hob</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Urgency</label>
              <select
                className="w-full h-11 px-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
              >
                <option value="standard">Same-Day (Flexible)</option>
                <option value="emergency">Emergency (15-25 min)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">City</label>
              <select
                className="w-full h-11 px-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
          </div>

          {/* Estimate Display Box */}
          <div className="rounded-2xl bg-blue-50/80 border border-blue-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Estimated Labor & Diagnostic</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">₹{estimate.min}</span>
                <span className="text-sm font-semibold text-slate-500">– ₹{estimate.max}*</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                *Exact quote approved before work starts. Spare parts charged separately at MRP.
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: service,
                  city: city,
                  message: `Hi, I got an estimate of ₹${estimate.min}-₹${estimate.max} for ${service}. Please book a visit.`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-none transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Book On WhatsApp</span>
              </a>

              <a
                href={`tel:${phone}`}
                onClick={() => trackPhoneCall(phone, "Price Estimator CTA")}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 mt-4">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> No advance fees
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Digital leak test included
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> 30-Day guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
