"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, MapPin, Clock, ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { CITIES, getAreasForCity } from "@/lib/locations-data"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { getWhatsAppRedirectUrl, trackPhoneCall, trackWhatsApp } from "@/lib/analytics"

export function LocalityDirectory() {
  const [activeCity, setActiveCity] = useState("pune")
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch areas dynamically for the selected city
  const cityAreas = useMemo(() => {
    return getAreasForCity(activeCity)
  }, [activeCity])

  // Filter areas based on search query
  const filteredAreas = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return cityAreas
    return cityAreas.filter((a) => a.label.toLowerCase().includes(q))
  }, [cityAreas, searchQuery])

  const cityContactPhone = activeCity === "hyderabad" ? "+919950809283" : "+918302713127"
  const cityContactDisplay = activeCity === "hyderabad" ? "+91 99508 09283" : "+91 83027 13127"

  return (
    <div className="space-y-8">
      {/* City Switcher Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {CITIES.map((c) => {
          const isActive = c.value === activeCity
          const count = getAreasForCity(c.value).length
          return (
            <button
              key={c.value}
              onClick={() => {
                setActiveCity(c.value)
                setSearchQuery("")
              }}
              className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-none flex items-center gap-2 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
              }`}
            >
              <span>{c.label}</span>
              <span
                className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-white text-slate-600"
                }`}
              >
                {count}+ Areas
              </span>
            </button>
          )
        })}
      </div>

      {/* Search Bar & City Summary Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${activeCity.toUpperCase()} locality (e.g. ${
              activeCity === "pune" ? "Baner, Wakad" : activeCity === "mumbai" ? "Andheri, Bandra" : "Miyapur, Tellapur"
            })...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <span className="text-xs text-slate-500 hidden lg:inline">
            Direct {activeCity.toUpperCase()} Dispatch Helpline:
          </span>
          <a
            href={`tel:${cityContactPhone}`}
            onClick={() => trackPhoneCall(cityContactPhone, `Directory Tab ${activeCity}`)}
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-none"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{cityContactDisplay}</span>
          </a>

          <a
            href={getWhatsAppRedirectUrl({
              city: activeCity.toUpperCase(),
              message: `Hi Gas Repair Wale, I need gas repair service in ${activeCity.toUpperCase()}.`,
            })}
            onClick={() => trackWhatsApp(`Directory WA ${activeCity}`)}
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-none"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Grid of Areas */}
      {filteredAreas.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredAreas.map((area) => (
            <Link
              key={area.value}
              href={`/locations/${activeCity}/${area.value}`}
              className="group rounded-2xl bg-white border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between shadow-none"
            >
              <div>
                <div className="flex items-start justify-between gap-1 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Active Hub
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {area.label}
                </h4>
                <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>15–25 min arrival</span>
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Book Service</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
          <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-800">No matching locality found for "{searchQuery}"</p>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            We cover virtually all residential societies across {activeCity.toUpperCase()}. Call our direct helpline to book an instant technician visit.
          </p>
          <a
            href={`tel:${cityContactPhone}`}
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-none"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Helpline {cityContactDisplay}</span>
          </a>
        </div>
      )}
    </div>
  )
}
