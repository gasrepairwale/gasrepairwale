"use client"

import { ShieldCheck, Clock, Award, CheckCircle2, Phone } from "lucide-react"
import { trackPhoneCall } from "@/lib/analytics"

/**
 * WhyChooseUs Component - "Committed to Your Comfort & Safety."
 * Matches Section 4 of the reference design with 4 cards and technician photo
 */
export function WhyChooseUs() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Every technician is certified and background-checked before dispatch.",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      desc: "15-25 minute response time to ensure your cooking never halts.",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Award,
      title: "Fixed Upfront Estimates",
      desc: "No hidden fees, no surprises. You approve the exact quote before repair starts.",
      color: "text-sky-600 bg-sky-50",
    },
    {
      icon: CheckCircle2,
      title: "5,000+ Repairs",
      desc: "Trusted across Pune, Mumbai, and Hyderabad residential & commercial kitchens.",
      color: "text-indigo-600 bg-indigo-50",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header Row: Title on Left, Description on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Committed to Your <br />
              <span className="text-blue-600">Comfort &amp; Safety.</span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-slate-600 leading-relaxed">
            We prioritize your kitchen comfort and safety by delivering dependable gas repair services. Our certified professionals follow rigorous multi-point safety standards.
          </div>
        </div>

        {/* 4 Cards Row (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-[2rem] bg-slate-50/80 border border-slate-100 hover:bg-white transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${c.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Real Technician Visual Banner */}
        <div className="mt-12 rounded-[2rem] overflow-hidden bg-slate-900 text-white relative shadow-none border border-slate-800">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-8 p-8 sm:p-10 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400">
                Doorstep Reliability
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                100% Genuine Brass Spare Parts Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                We never compromise on safety with cheap duplicate parts. Every burner, gas valve, and regulator is factory-matched with up to 90 days warranty.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+918302713127"
                  onClick={() => trackPhoneCall("+918302713127", "Why Choose Us Banner")}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-colors shadow-none"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Pune / Mumbai Helpline</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden">
              <img
                src="/images/stove-flame-test.jpg"
                alt="Gas Repair Technician Testing Blue Flame"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
