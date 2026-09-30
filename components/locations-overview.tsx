"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, ArrowRight, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * LocationsOverview Component - "Check Service Availability in Your Area"
 * Matches Section 9 of the reference design with interactive city tabs & area pills
 */
export function LocationsOverview() {
  const [activeCity, setActiveCity] = useState("pune")

  const citiesData = {
    pune: {
      name: "Pune",
      phone: "+918302713127",
      phoneDisplay: "+91 83027 13127",
      hub: "Phursungi Operations Hub (Pune-Saswad Rd)",
      arrival: "15-25 Mins",
      link: "/locations/pune",
      areas: [
        "Kothrud", "Baner", "Wakad", "Hinjewadi", "Aundh", "Hadapsar", "Kharadi",
        "Fursungi", "Viman Nagar", "Koregaon Park", "Magarpatta City", "Wagholi",
        "Dhanori", "Warje", "Kondhwa", "Wanwadi", "NIBM Road", "Yerwada"
      ],
    },
    mumbai: {
      name: "Mumbai",
      phone: "+918302713127",
      phoneDisplay: "+91 83027 13127",
      hub: "Dalvi Plazza, Andheri East Hub",
      arrival: "20-30 Mins",
      link: "/locations/mumbai",
      areas: [
        "Andheri East & West", "Borivali East & West", "Kandivali East & West",
        "Malad East & West", "Bandra East & West", "Goregaon East & West",
        "Dadar", "Santacruz", "Vile Parle", "Ghatkopar", "Powai", "Chembur"
      ],
    },
    hyderabad: {
      name: "Hyderabad",
      phone: "+916304739440",
      phoneDisplay: "+91 63047 39440",
      hub: "Miyapur Metro Station Hub",
      arrival: "15-25 Mins",
      link: "/locations/hyderabad",
      areas: [
        "Miyapur", "Kukatpally", "KPHB Colony", "Madhapur", "Gachibowli",
        "HITEC City", "Kondapur", "Chandanagar", "Bachupally", "Manikonda",
        "Nallagandla", "Tellapur", "Hafeezpet", "Ameenpur", "BHEL"
      ],
    },
  }

  const current = citiesData[activeCity as keyof typeof citiesData]

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="rounded-[2.25rem] lg:rounded-[3rem] bg-[#071126] border border-blue-500/25 text-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-white border border-white/20 mb-2">
            Coverage Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Check Service Availability <br />
            <span className="text-sky-400">in Your Area</span>
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-2">
            Technicians stationed locally across Pune, Mumbai &amp; Hyderabad for rapid 15-25 min dispatch.
          </p>
        </div>

        {/* City Switcher Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          {(["pune", "mumbai", "hyderabad"] as const).map((cityKey) => (
            <button
              key={cityKey}
              onClick={() => setActiveCity(cityKey)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCity === cityKey
                  ? "bg-white text-blue-800 shadow-none"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {citiesData[cityKey].name}
            </button>
          ))}
        </div>

        {/* City Details Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{current.hub}</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                Average Arrival Time: <strong className="text-emerald-600">{current.arrival}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`tel:${current.phone}`}
                onClick={() => trackPhoneCall(current.phone, `Location Tab - ${current.name}`)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-none transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {current.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppRedirectUrl({ city: current.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-none transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Area Badges Grid */}
          <div className="pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Doorstep Coverage Localities:
            </p>
            <div className="flex flex-wrap gap-2">
              {current.areas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Don't see your locality? We cover all adjacent sectors.</span>
              <Link
                href={current.link}
                className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>View Full {current.name} Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
