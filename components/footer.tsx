"use client"

import Link from "next/link"
import { Flame, Phone, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { trackPhoneCall } from "@/lib/analytics"

/**
 * Footer Component - Deep Navy Premium Layout matching reference design
 * Features emergency hotline strip, verified physical hubs, and city routing
 */
export function Footer() {
  return (
    <footer className="bg-[#070f26] text-slate-300 pb-20 md:pb-0">
      {/* 1. Top Emergency Hotline Strip (Matches Reference "Need Help Right Now?") */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-6 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg flex-shrink-0 hidden sm:block">
              <img
                src="/images/stove-flame-test.jpg"
                alt="Emergency Gas Repair Technician"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Immediate Doorstep Dispatch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Need Gas Stove or Pipeline Repair Right Now?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Certified technicians dispatched in 15-25 minutes across Pune, Mumbai & Hyderabad.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918302713127"
              onClick={() => trackPhoneCall("+918302713127", "Footer Pune/Mumbai Hotline")}
              className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-5 py-3 rounded-full font-bold text-xs sm:text-sm shadow-none transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span>Pune & Mumbai: +91 83027 13127</span>
            </a>
            <a
              href="tel:+916304739440"
              onClick={() => trackPhoneCall("+916304739440", "Footer Hyderabad Hotline")}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full font-bold text-xs sm:text-sm shadow-none transition-colors"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Hyderabad: +91 63047 39440</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info & Trust */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Flame className="h-5 w-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  GAS REPAIR <span className="text-blue-400">WALE</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                  Certified Doorstep Service
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Certified doorstep gas stove repair, Italian hob restoration, and commercial pipeline installations with genuine brass parts & 90-day warranty.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Certified & Background-Checked Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>15-25 Mins Average Doorstep Arrival</span>
              </div>
            </div>

            {/* Google Business Profile Verified Badges */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Verified Google Business Profiles
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href="https://business.google.com/n/1043319778573770626/profile?fid=4205353585654553093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="font-medium">Mumbai Google Profile (Andheri East)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
                <a
                  href="https://business.google.com/n/16485793595543893042/profile?fid=5310968251242542856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="font-medium">Pune Google Profile (Phursungi)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 border-l-2 border-blue-500 pl-3">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/gas-stove-repair" className="hover:text-white transition-colors block">
                  Gas Stove Burner Repair &amp; Tuning
                </Link>
              </li>
              <li>
                <Link href="/services/gas-hob-repair" className="hover:text-white transition-colors block">
                  Gas Hob &amp; Glass Top Repair
                </Link>
              </li>
              <li>
                <Link href="/services/gas-pipeline-installation" className="hover:text-white transition-colors block">
                  Copper Pipeline Installation
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-gas-repair" className="hover:text-white transition-colors block">
                  Gas Leak Detection &amp; Safety Sealing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors block">
                  Commercial Kitchen &amp; Restaurant Bhatti
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors block">
                  Annual Safety Inspection &amp; AMC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Physical Operations Hubs */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 border-l-2 border-blue-500 pl-3">
              Physical Hubs
            </h4>
            <div className="space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Mumbai Hub
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Dalvi Plazza, Shop 1, OM Nagar, JB Nagar, Andheri East, Mumbai 400059
                </p>
                <a
                  href="tel:+918302713127"
                  onClick={() => trackPhoneCall("+918302713127", "Footer Mumbai Hub")}
                  className="inline-block text-blue-400 font-bold hover:underline mt-1"
                >
                  Call: +91 83027 13127
                </a>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Pune Hub
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Sr No. 123, Ganesh Nagar, Phursungi, Pune Saswad Rd, Pune 412308
                </p>
                <a
                  href="tel:+918302713127"
                  onClick={() => trackPhoneCall("+918302713127", "Footer Pune Hub")}
                  className="inline-block text-blue-400 font-bold hover:underline mt-1"
                >
                  Call: +91 83027 13127
                </a>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Hyderabad Hub (Miyapur &amp; HITEC City)
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Shop 4, Allwyn X Road, Near Metro, Miyapur, Hyderabad 500049
                </p>
                <a
                  href="tel:+916304739440"
                  onClick={() => trackPhoneCall("+916304739440", "Footer Hyderabad Hub")}
                  className="inline-block text-emerald-400 font-bold hover:underline mt-1"
                >
                  Call: +91 63047 39440
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Guarantees */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 border-l-2 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Company & Team
                </Link>
              </li>
              <li>
                <Link href="/locations/pune" className="hover:text-white transition-colors">
                  Pune Coverage Areas (27+ Localities)
                </Link>
              </li>
              <li>
                <Link href="/locations/mumbai" className="hover:text-white transition-colors">
                  Mumbai Coverage Areas (16+ Suburbs)
                </Link>
              </li>
              <li>
                <Link href="/locations/hyderabad" className="hover:text-white transition-colors">
                  Hyderabad Coverage Areas (Miyapur & 40+ Localities)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Customer Support
                </Link>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs font-semibold text-slate-400 mb-2">Our Standard:</p>
              <div className="space-y-1 text-xs text-slate-300">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  100% Genuine Brass Spare Parts
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Electronic Leak Detection Test
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  30 to 90 Days Service Warranty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Credits Strip */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Gas Repair Wale. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Hubs
            </Link>
          </div>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://b29technology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 underline font-medium"
            >
              B29 Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

