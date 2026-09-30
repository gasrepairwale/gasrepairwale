"use client"

import { useState } from "react"
import {
  Star,
  CheckCircle2,
  MapPin,
  Quote,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Flame,
  Wrench,
  Settings,
  AlertTriangle,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EnhancedTestimonials() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [showAll, setShowAll] = useState<boolean>(false)

  const reviews = [
    {
      id: 1,
      name: "Rajesh Patil",
      city: "Kothrud, Pune",
      cityKey: "pune",
      category: "stove",
      service: "Gas Stove Blue Flame Calibration",
      date: "Verified Review • 2 days ago",
      text: "Our 3-burner Prestige stove was sputtering yellow flames and leaving black carbon soot on all cookware. The technician arrived in 20 minutes with a full mobile toolkit, ultrasonic-cleaned the brass nozzles, and calibrated it to a crisp 100% blue flame. Upfront estimate and pay after service. Super professional!",
      rating: 5,
      appliance: "Prestige 3-Burner Stove",
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Andheri West, Mumbai",
      cityKey: "mumbai",
      category: "hob",
      service: "Built-In Glass Hob Auto-Ignition",
      date: "Verified Review • 4 days ago",
      text: "Our 4-burner Faber glass hob kept clicking continuously even after releasing the knob. Local mechanics asked us to bring the heavy glass top to their workshop. Gas Repair Wale's specialist lifted the glass on-site, replaced the wet micro-switch and pulse generator, and fixed it in 35 minutes at our kitchen counter!",
      rating: 5,
      appliance: "Faber Built-In Toughened Hob",
    },
    {
      id: 3,
      name: "Dr. Venkat Rao",
      city: "Miyapur, Hyderabad",
      cityKey: "hyderabad",
      category: "leak",
      service: "24/7 Midnight Gas Leak Emergency",
      date: "Verified Review • 1 week ago",
      text: "Noticed a distinct ethyl mercaptan gas odor behind our modular kitchen cabinets at 9:30 PM. Called their emergency dispatch, and the technician arrived with an electronic digital sniffer within 18 minutes. Found a hairline crack in the regulator joint, replaced the safety seal, and certified zero PPM. Absolute lifesavers!",
      rating: 5,
      appliance: "Modular Kitchen PNG Pipeline",
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      city: "Baner, Pune",
      cityKey: "pune",
      category: "pipeline",
      service: "Copper Gas Pipeline Installation",
      date: "Verified Review • 1 week ago",
      text: "Moved into our new 3BHK in Baner and needed a concealed copper gas line from the utility dry balcony to the kitchen island. They laid heavy-gauge seamless copper pipe with silver brazing, dual brass isolation ball valves, and provided an official digital pressure drop test certificate for our housing society.",
      rating: 5,
      appliance: "Seamless Copper Line Setup",
    },
    {
      id: 5,
      name: "Amitabh Deshmukh",
      city: "Borivali West, Mumbai",
      cityKey: "mumbai",
      category: "hob",
      service: "European SABAF Cooktop Repair",
      date: "Verified Review • 2 weeks ago",
      text: "Our imported SABAF Italian hob burner was leaking gas from the spindle shaft. Other mechanics had no idea how to service it. Gas Repair Wale dispatched an authorized specialist who carried original SABAF compatible brass valves and synthetic high-temp grease. Restored like factory new.",
      rating: 5,
      appliance: "Italian SABAF Cooktop",
    },
    {
      id: 6,
      name: "K. Srinivas Reddy",
      city: "Gachibowli, Hyderabad",
      cityKey: "hyderabad",
      category: "hob",
      service: "Glass Hob Jammed Knob & Spindle Repair",
      date: "Verified Review • 2 weeks ago",
      text: "Two knobs of our Elica glass hob were jammed rock-solid and wouldn't depress for auto-ignition. The technician dismantled the assembly, chemically degreased the brass shafts, repacked them with heat-resistant synthetic lubricant, and adjusted the spark gap. Incredible attention to detail.",
      rating: 5,
      appliance: "Elica 4-Burner Auto-Hob",
    },
    {
      id: 7,
      name: "Vikram Joshi",
      city: "Wakad, Pune",
      cityKey: "pune",
      category: "stove",
      service: "Ultrasonic Burner Descaling & AMC",
      date: "Verified Review • 3 weeks ago",
      text: "Signed up for their preventive maintenance service. After the chemical ultrasonic jet bath and venturi de-carbonization, our cooking time decreased noticeably and our LPG cylinder now lasts nearly 10 to 12 days longer! Very clean work with zero kitchen mess.",
      rating: 5,
      appliance: "Sunflame Stainless Steel Stove",
    },
    {
      id: 8,
      name: "Farhan Merchant",
      city: "Bandra West, Mumbai",
      cityKey: "mumbai",
      category: "commercial",
      service: "Commercial Kitchen Bhatti & Manifold",
      date: "Verified Review • 3 weeks ago",
      text: "Run a high-volume cloud kitchen in Bandra. Our high-pressure Chinese wok bhatti started flickering with low flame during peak lunch rush. Their commercial team arrived in 18 minutes, cleared the high-output jet nozzle, and balanced the multi-cylinder manifold bank without shutting down our kitchen.",
      rating: 5,
      appliance: "T-35 High Pressure Commercial Bhatti",
    },
    {
      id: 9,
      name: "Ananya Gupta",
      city: "Tellapur, Hyderabad",
      cityKey: "hyderabad",
      category: "pipeline",
      service: "LPG to PNG Gas Line Conversion",
      date: "Verified Review • 1 month ago",
      text: "Switched from cylinder to piped natural gas in our gated community in Tellapur. The Gas Repair Wale technician resized all burner jets, calibrated the air-fuel dampers for PNG pressure, and performed a digital sniffer leak test. Smooth and hassle-free transition.",
      rating: 5,
      appliance: "PNG Network Conversion",
    },
    {
      id: 10,
      name: "Sandeep Mehta",
      city: "Kharadi, Pune",
      cityKey: "pune",
      category: "hob",
      service: "Flame Failure Device (FFD) Sensor Repair",
      date: "Verified Review • 1 month ago",
      text: "Our Bosch hob burner would shut off the instant the knob was released. The technician tested the thermocouple sensor millivolts and replaced the magnetic safety shut-off valve on the spot. Polite, knowledgeable, and carried genuine parts.",
      rating: 5,
      appliance: "Bosch Flame Failure Cooktop",
    },
    {
      id: 11,
      name: "Rohan Varma",
      city: "Kandivali East, Mumbai",
      cityKey: "mumbai",
      category: "leak",
      service: "Emergency Stuck Cylinder Regulator Fix",
      date: "Verified Review • 1 month ago",
      text: "The domestic cylinder regulator knob got mechanically locked and refused to turn off. Called their 24/7 helpline, emergency van dispatched from Kandivali hub reached in 15 minutes. Safely disengaged the stuck unit, installed an ISI regulator, and checked the line.",
      rating: 5,
      appliance: "HP Gas Cylinder & Regulator",
    },
    {
      id: 12,
      name: "Madhavi Latha",
      city: "Nallagandla, Hyderabad",
      cityKey: "hyderabad",
      category: "pipeline",
      service: "Society Gas Pipeline Safety Audit",
      date: "Verified Review • 1 month ago",
      text: "Engaged Gas Repair Wale for annual gas safety audits across 16 flats in our gated apartment society. Every flat received electronic sniffer testing, valve lubrication, and formal pressure testing compliance certificates. Highly recommended for societies.",
      rating: 5,
      appliance: "Residential Society Pipeline Network",
    },
  ]

  // Filter reviews
  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === "all") return true
    if (activeFilter === "pune") return r.cityKey === "pune"
    if (activeFilter === "mumbai") return r.cityKey === "mumbai"
    if (activeFilter === "hyderabad") return r.cityKey === "hyderabad"
    if (activeFilter === "hob") return r.category === "hob"
    if (activeFilter === "pipeline") return r.category === "pipeline" || r.category === "leak"
    return true
  })

  // Display initial 6 or all
  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>REAL STORIES • VERIFIED RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by 15,000+ Homes Across <span className="text-blue-600">Pune, Mumbai &amp; Hyderabad</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Read verified on-site service reviews from real homeowners, society managers, and commercial kitchens who count on Gas Repair Wale.
          </p>

          {/* Social Proof Aggregate Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-base font-black text-slate-900">4.9 / 5.0</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>1,850+ Google &amp; Verified Doorstep Reviews</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="text-xs sm:text-sm font-bold text-blue-600 flex items-center gap-1">
              <span>99.4% Issue Resolution Rate</span>
            </div>
          </div>
        </div>

        {/* Dynamic Category & City Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => {
              setActiveFilter("all")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-slate-900 text-white shadow-none"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
          >
            All Reviews ({reviews.length})
          </button>

          <button
            onClick={() => {
              setActiveFilter("pune")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "pune"
                ? "bg-blue-600 text-white shadow-none"
                : "bg-slate-100 hover:bg-blue-50 text-slate-700 border border-slate-200"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Pune Localities</span>
          </button>

          <button
            onClick={() => {
              setActiveFilter("mumbai")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "mumbai"
                ? "bg-blue-600 text-white shadow-none"
                : "bg-slate-100 hover:bg-blue-50 text-slate-700 border border-slate-200"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Mumbai Hubs</span>
          </button>

          <button
            onClick={() => {
              setActiveFilter("hyderabad")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "hyderabad"
                ? "bg-blue-600 text-white shadow-none"
                : "bg-slate-100 hover:bg-blue-50 text-slate-700 border border-slate-200"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyderabad Corridor</span>
          </button>

          <button
            onClick={() => {
              setActiveFilter("hob")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "hob"
                ? "bg-blue-600 text-white shadow-none"
                : "bg-slate-100 hover:bg-blue-50 text-slate-700 border border-slate-200"
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Glass Hobs &amp; Stoves</span>
          </button>

          <button
            onClick={() => {
              setActiveFilter("pipeline")
              setShowAll(false)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "pipeline"
                ? "bg-blue-600 text-white shadow-none"
                : "bg-slate-100 hover:bg-blue-50 text-slate-700 border border-slate-200"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Pipeline &amp; Leaks</span>
          </button>
        </div>

        {/* Dynamic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedReviews.map((r) => (
            <div
              key={r.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-none hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-black">
                      G
                    </span>
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Service Badge & Appliance */}
                <div className="mb-3 space-y-1">
                  <div className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg inline-block">
                    {r.service}
                  </div>
                  {r.appliance && (
                    <div className="text-[11px] text-slate-500 font-medium pl-0.5">
                      Appliance: <strong className="text-slate-700">{r.appliance}</strong>
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                  "{r.text}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>{r.city}</span>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{r.date}</p>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified On-Site</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredReviews.length > 6 && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold rounded-xl px-7 py-3 shadow-none transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Fewer Reviews</span>
                  <ChevronUp className="w-4 h-4 ml-1.5" />
                </>
              ) : (
                <>
                  <span>Load More Customer Reviews ({filteredReviews.length - 6} more)</span>
                  <ChevronDown className="w-4 h-4 ml-1.5" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Google Review Submission Bar */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>COMMITTED TO 100% SATISFACTION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Had an Experience with Gas Repair Wale?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Your feedback helps homeowners find trustworthy, certified gas technicians. Rate our doorstep technician today on Google!
            </p>
          </div>

          <div className="shrink-0 flex gap-2.5">
            <a
              href="https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors shadow-none cursor-pointer"
            >
              <span>Review on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
