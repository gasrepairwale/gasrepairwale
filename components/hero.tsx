"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Star, ShieldCheck, Zap, CheckCircle2, Wrench } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { useToast } from "@/hooks/use-toast"
import { trackPhoneCall, trackServiceBooking, sendLeadNotification, getWhatsAppRedirectUrl } from "@/lib/analytics"
import { CITIES, getAreasForCity } from "@/lib/locations-data"

/**
 * Hero Component - Clean, Compact Royal Blue & Slate Theme (Zero Orange, Zero Button Shadows)
 * Features dynamically fetched cities & localities, official WhatsApp brand icon, and streamlined form layout.
 */
export function Hero() {
  const [selectedLocation, setSelectedLocation] = useState("pune")
  const [selectedArea, setSelectedArea] = useState("")
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Gas Stove Repair",
    preferredTime: "Immediate (15-25 Min Dispatch)",
    address: "",
    message: "",
  })

  // Dynamically fetch areas from areaData for the selected city
  const currentAreas = getAreasForCity(selectedLocation)

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location)
    setSelectedArea("")
  }

  const activePhone = selectedLocation === "hyderabad" ? "+916304739440" : "+918302713127"
  const activePhoneDisplay = selectedLocation === "hyderabad" ? "+91 63047 39440" : "+91 83027 13127"

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    try {
      setSubmitting(true)
      
      // 1. Send Lead to Telegram
      await sendLeadNotification({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        city: selectedLocation,
        area: selectedArea,
        address: form.address,
        preferredTime: form.preferredTime,
        message: form.message || "Booked via Hero Booking Form",
        source: "Hero Direct Form"
      })

      // 2. Track Booking in GA4
      trackServiceBooking({
        serviceType: form.service,
        city: selectedLocation,
        area: selectedArea,
        phone: form.phone,
      })

      toast({ title: "Booking Received", description: "Redirecting to WhatsApp for instant confirmation..." })

      const waUrl = getWhatsAppRedirectUrl({
        serviceType: form.service,
        city: selectedLocation,
        area: selectedArea,
        phone: form.phone,
        address: form.address,
        preferredTime: form.preferredTime,
        message: `Hi Gas Repair Wale, I want to book ${form.service} in ${selectedLocation}${selectedArea ? ` (${selectedArea})` : ""}. Slot: ${form.preferredTime}. Address: ${form.address}. Please confirm technician visit.`
      })

      setTimeout(() => {
        window.location.href = waUrl
      }, 1000)

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "Gas Stove Repair",
        preferredTime: "Immediate (15-25 Min Dispatch)",
        address: "",
        message: "",
      })
    } catch (err: any) {
      const waUrl = getWhatsAppRedirectUrl({
        serviceType: form.service,
        city: selectedLocation,
        area: selectedArea,
        phone: form.phone,
        address: form.address,
      })
      window.location.href = waUrl
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="pt-3 pb-8 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Deep Navy Container (Zero Orange, Compact Padding) */}
      <div className="relative rounded-[2rem] lg:rounded-[2.5rem] bg-[#071126] text-white p-6 sm:p-8 lg:p-10 overflow-hidden border border-blue-500/20 shadow-none">
        
        {/* Subtle Blue Glow in background */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Authority Headline, City Routing & Social Proof (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Google Rating Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-blue-800 font-black text-[11px]">
                G
              </span>
              <span className="font-bold text-white">4.9 / 5</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <span className="text-slate-300 hidden sm:inline border-l border-white/20 pl-2">
                4,970+ Verified Doorstep Repairs
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                EXPERT <span className="text-sky-400">GAS REPAIR</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
                Safe, certified, and rapid doorstep service. From burner clogs and low flame to gas leaks and auto-ignition—our technicians arrive within 15-25 minutes.
              </p>
            </div>

            {/* Dynamic City Selection Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Select Your Service City:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((c) => {
                  const areaCount = getAreasForCity(c.value).length
                  const isSelected = selectedLocation === c.value
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => handleLocationChange(c.value)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-white/[0.07] text-slate-300 hover:bg-white/[0.12] border border-white/10"
                      }`}
                    >
                      {c.label} ({areaCount}+ Localities)
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons (Zero Button Shadows, Real WhatsApp Icon) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={`tel:${activePhone}`}
                onClick={() => trackPhoneCall(activePhone, `Hero Primary Call - ${selectedLocation}`)}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-none"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Helpline: {activePhoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: "General Gas Inquiry",
                  city: selectedLocation,
                  message: `Hi, I need doorstep gas stove repair in ${selectedLocation}. Please provide quote.`
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-none"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 4 Trust Metrics Strip (No Pricing Numbers) */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-lg sm:text-xl font-black text-white">15K+</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Happy Kitchens</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-lg sm:text-xl font-black text-sky-400">15-25m</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Rapid Arrival</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-lg sm:text-xl font-black text-white">100%</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Genuine Spares</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-lg sm:text-xl font-black text-emerald-400">90 Days</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Parts Warranty</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Streamlined Booking Form Card (5 Cols, Compact & Direct) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 text-slate-900 border border-slate-100 shadow-none">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-black text-slate-900">Book Doorstep Service</h3>
                  <p className="text-[11px] text-slate-500">Free inspection quote • Pay after service</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  <Zap className="w-4 h-4 fill-blue-600" />
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-2.5">
                {/* Row 1: Name + Mobile Number */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Your Full Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-10 text-xs rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500"
                  />
                  <Input
                    placeholder="Mobile Number *"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-10 text-xs rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500"
                  />
                </div>

                {/* Row 2: Email (Optional) + Service Type */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Email Address (Optional)"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-10 text-xs rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500"
                  />
                  <select
                    className="w-full h-10 px-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 text-slate-800 font-medium"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                  >
                    <option value="Gas Stove Repair & Blue Flame Tuning">Gas Stove Repair</option>
                    <option value="Built-In Glass Hob & Cooktop Repair">Hob &amp; Glass Top Repair</option>
                    <option value="Auto-Ignition Pulse & Spark Repair">Auto-Ignition Pulse Repair</option>
                    <option value="Copper Gas Pipeline Installation">Copper Pipeline Installation</option>
                    <option value="24/7 Emergency Gas Leak Detection">24/7 Emergency Leak Check</option>
                    <option value="Ultrasonic Deep Burner Cleaning">Burner Descaling &amp; Cleaning</option>
                    <option value="Commercial Kitchen Bhatti & Stove Service">Commercial Kitchen Bhatti</option>
                    <option value="LPG Cylinder to PNG Conversion">LPG to PNG Conversion</option>
                    <option value="Gas Safety Inspection & Pressure Test">Safety Audit &amp; Pressure Test</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance (AMC)</option>
                  </select>
                </div>

                {/* Row 3: City (Dynamic) + Area (Dynamic Fetch from areaData) */}
                <div className="grid grid-cols-2 gap-2">
                  <select
                    className="w-full h-10 px-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 text-slate-800 font-medium"
                    value={selectedLocation}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    required
                  >
                    {CITIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label} ({c.state})
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full h-10 px-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 text-slate-800 font-medium"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    required
                  >
                    <option value="">Select Area ({currentAreas.length} Localities) *</option>
                    {currentAreas.map((a) => (
                      <option key={a.value} value={a.value}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Preferred Time Slot + Complete Address */}
                <div className="grid grid-cols-2 gap-2">
                  <select
                    className="w-full h-10 px-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 text-slate-800 font-medium"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    required
                  >
                    <option value="Immediate (15-25 Min Dispatch)">Immediate (15-25 Min)</option>
                    <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>

                  <Input
                    placeholder="Complete Address (Flat, Landmark) *"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="h-10 text-xs rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500"
                  />
                </div>

                {/* Row 5: Describe Issue (Optional) */}
                <Textarea
                  placeholder="Describe your gas issue (e.g. low flame, spark not working, gas smell)"
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="text-xs rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500 min-h-[48px] py-1.5"
                />

                {/* Submit Button (Zero Shadow) */}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-none transition-colors flex items-center justify-center gap-1.5"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{submitting ? "Booking Dispatch..." : "Book Service Now - Free Quote"}</span>
                </Button>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> No Advance Fee
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Clock className="w-3 h-3 text-blue-600" /> 15-25 Min Arrival
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" /> 30-90 Day Warranty
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
