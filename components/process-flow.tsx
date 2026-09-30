"use client"

import { PhoneCall, MapPin, Search, Wrench, ShieldCheck } from "lucide-react"

/**
 * ProcessFlow Component - "How Our Simple & Reliable Process Works"
 * Matches Section 6 of the reference template with 5 clean circular stepper nodes
 */
export function ProcessFlow() {
  const steps = [
    {
      num: "01",
      icon: PhoneCall,
      title: "Book or Call",
      desc: "Call direct helpline or request instant booking via form.",
    },
    {
      num: "02",
      icon: MapPin,
      title: "15-25m Arrival",
      desc: "Certified local technician arrives with full toolkit & spares.",
    },
    {
      num: "03",
      icon: Search,
      title: "Safety Diagnosis",
      desc: "Digital gas sniffer test & transparent upfront estimate.",
    },
    {
      num: "04",
      icon: Wrench,
      title: "Doorstep Repair",
      desc: "Burner descaling, valve restoration & genuine brass parts.",
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "Warranty & Pay",
      desc: "Pure blue flame test, 90-day warranty card & digital payment.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 text-blue-800 mb-2">
            Seamless Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How Our Simple &amp; Reliable <br />
            <span className="text-blue-600">Process Works</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Zero hassle. Complete doorstep transparency from call to completion.
          </p>
        </div>

        {/* 5-Step Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-6 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center justify-between"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-black text-sm mb-4 shadow-inner">
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-500/20">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
