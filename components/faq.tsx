"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * FAQ Component - "Answers to Your Frequently Asked Questions"
 * Clean, modern accordion matching Section 10 of the reference design
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How quickly can your technician arrive in Pune, Mumbai, or Hyderabad?",
      a: "Our mobile technicians are stationed locally across Pune (Kothrud, Baner, Wakad, Hadapsar), Mumbai (Andheri, Borivali, Bandra), and Hyderabad (Miyapur, Gachibowli, Kukatpally). Average arrival time is 15 to 25 minutes for emergency repairs.",
    },
    {
      q: "What types of gas stove and hob issues do you fix at home?",
      a: "We repair low flame, burner clogging, carbon build-up, clicking auto-ignition spark failure, loose or stiff knobs, gas smell near regulator/pipeline, and glass cooktop valve replacements.",
    },
    {
      q: "Do you provide a warranty on parts and repair workmanship?",
      a: "Yes. All repairs come with a standard 30 to 90-day service warranty. Genuine spare parts like brass burners, forged valves, and ISI Suraksha hoses carry manufacturer warranties up to 1 year.",
    },
    {
      q: "What are your inspection and repair charges?",
      a: "Our certified technician inspects your gas stove or pipeline first and provides an upfront, transparent estimate before starting any repair. There are zero hidden fees, and you only pay after testing the blue flame.",
    },
    {
      q: "Do you service commercial restaurant bhattis and bulk gas pipelines?",
      a: "Yes. We maintain commercial multi-burner ranges, Chinese wok burners, tandoor burners, and industrial copper/GI manifold piping with safety certificates.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 text-blue-800 mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Answers to Your <br />
            <span className="text-blue-600">Frequently Asked Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Everything you need to know about our doorstep services, transparent pricing, and safety standards.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions link */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            Have a specific gas issue not listed here?{" "}
            <a
              href="tel:+918302713127"
              className="text-blue-600 font-bold hover:underline"
            >
              Call our Helpline: +91 83027 13127
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
