"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, Flame, Clock, MapPin, ShieldCheck, ChevronDown, Wrench, Settings, AlertTriangle, Sparkles, Building2 } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackPhoneCall, trackWhatsApp, getWhatsAppRedirectUrl } from "@/lib/analytics"
import { getCityContact } from "@/lib/phone"

/**
 * Header Component - Modern floating pill navbar with emergency micro-bar
 * Matches Valvoro/reference home services template design
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const contact = getCityContact(pathname?.includes("hyderabad") ? "hyderabad" : "pune")

  // Navigation menu items with dedicated service routes
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services",
      submenu: [
        { href: "/services", label: "All Services Overview", desc: "Explore all 6 specialized doorstep services" },
        { href: "/services/gas-stove-repair", label: "Gas Stove Repair", desc: "Blue flame tuning & nozzle descaling" },
        { href: "/services/gas-hob-repair", label: "Built-In Hob & Glass Top", desc: "Auto-ignition pulse & spindle fix" },
        { href: "/services/gas-pipeline-installation", label: "Copper Pipeline Installation", desc: "Seamless copper pipe & safety valves" },
        { href: "/services/emergency-gas-repair", label: "24/7 Emergency Leak Detection", desc: "Electronic sniffer & 15-min arrival" },
        { href: "/services/burner-descaling", label: "Burner Deep Cleaning & AMC", desc: "Restore 100% blue flame & save fuel" },
        { href: "/services/commercial-bhatti", label: "Commercial Bhatti & Stoves", desc: "Restaurant ranges & manifold banks" },
      ],
    },
    {
      href: "/locations",
      label: "Locations",
      submenu: [
        { href: "/locations/pune", label: "Pune (27+ Areas)", desc: "Kothrud, Baner, Wakad, Hinjewadi..." },
        { href: "/locations/mumbai", label: "Mumbai (16+ Hubs)", desc: "Andheri, Borivali, Bandra, Dadar..." },
        { href: "/locations/hyderabad", label: "Hyderabad (40+ Localities)", desc: "Miyapur, Nallagandla, Gachibowli..." },
      ],
    },
    { href: "/contact", label: "Contact & Hubs" },
  ]

  const handleCallClick = () => {
    trackPhoneCall(contact.phoneRaw, contact.city)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. Micro Top Bar (24/7 Emergency Hotline & Hub Notice) */}
      <div className="bg-[#0b1736] text-slate-200 text-xs py-1.5 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open 24/7 Emergency Service
            </span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-blue-400" />
              Pune, Mumbai & Hyderabad Operations
            </span>
            <span className="text-slate-500 hidden lg:inline">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Certified Technicians
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <span className="text-slate-400 hidden sm:inline">Typical arrival: <strong className="text-white">15-25 min</strong></span>
            <a
              href={contact.phoneTel}
              onClick={handleCallClick}
              className="inline-flex items-center gap-1 text-sky-300 font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 fill-sky-300" />
              <span>Helpline: {contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Floating Navbar Pill Container */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Flame className="h-5 w-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                GAS REPAIR <span className="text-blue-600">WALE</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                Stove & Pipeline Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-50/80 border border-slate-200/60 rounded-full px-3 py-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)

              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:text-blue-600 hover:bg-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.submenu && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-100 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors">
                            {subItem.label}
                          </div>
                          {subItem.desc && (
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {subItem.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Direct Phone Pill */}
            <a
              href={contact.phoneTel}
              onClick={handleCallClick}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-blue-200 bg-blue-50/70 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </div>
              <span>{contact.phoneDisplay}</span>
            </a>

            {/* Book Inspection CTA (Zero Shadow) */}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 text-xs font-bold shadow-none transition-colors"
            >
              <Link href="/contact">
                <span>Book Service</span>
                <span className="ml-1">→</span>
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full h-9 w-9 text-slate-700 hover:bg-slate-100">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[310px] sm:w-[380px] p-6 overflow-y-auto">
                <div className="flex items-center space-x-2.5 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                    <Flame className="h-5 w-5 fill-white" />
                  </div>
                  <div>
                    <SheetTitle className="text-base font-black text-slate-900 leading-tight">Gas Repair Wale</SheetTitle>
                    <p className="text-[11px] text-slate-500 font-medium">Pune • Mumbai • Hyderabad</p>
                  </div>
                </div>
                <SheetDescription className="sr-only">
                  Mobile navigation menu for Gas Repair Wale doorstep repair and gas pipeline services.
                </SheetDescription>

                <div className="py-4">
                  <div className="bg-blue-50/70 rounded-xl p-3 border border-blue-100 text-xs text-blue-900 mb-4">
                    <p className="font-bold flex items-center gap-1.5 text-blue-700">
                      <Clock className="w-3.5 h-3.5" />
                      15-25 Min Emergency Response
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Direct Doorstep Gas Repair & Certified Technicians.
                    </p>
                  </div>

                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <div key={item.href} className="py-1">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-blue-600 py-2 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{item.label}</span>
                        </Link>
                        {item.submenu && (
                          <div className="ml-3 pl-3 border-l-2 border-slate-100 space-y-1.5 my-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-xs font-medium text-slate-600 hover:text-blue-600 py-1 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                    <a
                      href={contact.phoneTel}
                      onClick={handleCallClick}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-none transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {contact.phoneDisplay}</span>
                    </a>

                    <a
                      href={getWhatsAppRedirectUrl({
                        city: contact.city,
                        message: `Hi Gas Repair Wale, I need assistance with gas stove/pipeline service in ${contact.city}.`,
                      })}
                      onClick={() => trackWhatsApp("Mobile Header Drawer Click", contact.city)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-none transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <Button asChild variant="outline" className="w-full rounded-xl border-slate-300 font-semibold text-xs py-2.5">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        View All 3 City Hubs
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
