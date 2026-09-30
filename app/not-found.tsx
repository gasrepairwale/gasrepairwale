"use client"

import Link from "next/link"
import {
  Home,
  PhoneCall,
  ArrowLeft,
  ArrowRight,
  Flame,
  Wrench,
  Settings,
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"

export default function NotFound() {
  const quickServices = [
    {
      title: "Gas Stove Repair",
      desc: "Blue flame tuning, burner cleaning & nozzle fix",
      href: "/services/gas-stove-repair",
      icon: Flame,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Built-In Glass Hob Repair",
      desc: "Auto-ignition pulse spark & brass spindle repair",
      href: "/services/gas-hob-repair",
      icon: Wrench,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Copper Pipeline Installation",
      desc: "Seamless copper pipe & dual isolation valves",
      href: "/services/gas-pipeline-installation",
      icon: Settings,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "24/7 Gas Leak Emergency",
      desc: "Electronic sniffer test & 15-min arrival",
      href: "/services/emergency-gas-repair",
      icon: AlertTriangle,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
  ]

  const cities = [
    { name: "Pune (27+ Areas)", href: "/locations/pune" },
    { name: "Mumbai (16+ Hubs)", href: "/locations/mumbai" },
    { name: "Hyderabad (40+ Localities)", href: "/locations/hyderabad" },
  ]

  return (
    <main className="min-h-screen bg-[#071126] text-white flex flex-col justify-between relative overflow-hidden py-16 px-4">
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.25) 0%, transparent 45%)",
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center my-auto space-y-10">
        {/* Top 404 Visual Pill */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-sky-400 border border-blue-500/30">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>ERROR 404 • PAGE NOT FOUND</span>
          </div>

          <div className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 leading-none">
            404
          </div>

          {/* Headline: Blue text on the same line */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Looking for Certified <span className="text-sky-400">Gas Repair Services?</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The page you requested may have moved or doesn't exist, but our certified technicians are on duty 24/7 across Pune, Mumbai, and Hyderabad with 15–25 minute doorstep arrival.
          </p>
        </div>

        {/* Immediate Emergency Action Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 Emergency Dispatch Helpline Active</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-sm transition-colors"
            >
              <a href="tel:+918302713127" className="flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Call Helpline: +91 83027 13127</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none px-6 py-3.5 text-sm transition-colors"
            >
              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: "General Inquiry",
                  city: "General",
                  message: "Hi Gas Repair Wale, I need assistance with gas stove / pipeline service.",
                })}
                className="flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Quick Service Links */}
        <div className="space-y-4 text-left">
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">Popular Doorstep Services</h2>
            <p className="text-xs text-slate-400">Choose a service to view full technical specs & book a visit:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
            {quickServices.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <Link
                  key={idx}
                  href={svc.href}
                  className="bg-slate-900/60 border border-slate-800 hover:border-blue-500 rounded-xl p-4 transition-all group flex items-start gap-3.5"
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${svc.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors flex items-center justify-between">
                      <span>{svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{svc.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* City Coverage Hubs */}
        <div className="pt-2 space-y-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Explore Regional Service Hubs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {cities.map((city, idx) => (
              <Link
                key={idx}
                href={city.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>{city.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Back and Home Actions */}
        <div className="pt-4 flex items-center justify-center gap-4 text-xs font-semibold text-slate-400">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back Previous Page</span>
          </button>
          <span>•</span>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors py-1">
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
