"use client"

import { Star, CheckCircle2, MapPin } from "lucide-react"

/**
 * EnhancedTestimonials Component - "Trusted Reviews from Homeowners & Businesses"
 * Redesigned to match Section 8 of the reference design
 */
export function EnhancedTestimonials() {
  const reviews = [
    {
      name: "Rajesh Patil",
      city: "Kothrud, Pune",
      service: "Stove Burner Tuning",
      text: "Technician arrived in 20 minutes with proper uniform and toolkit. Restored our 3-burner gas stove from yellow sputtering flame to sharp blue. Transparent charge of ₹350. Highly satisfied!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      city: "Andheri West, Mumbai",
      service: "Gas Pipeline & Leak Sealing",
      text: "Detected a subtle gas smell near the cylinder valve. The technician used a digital sniffer, replaced the aged Suraksha hose, and sealed the valve within 25 minutes. Prompt and professional!",
      rating: 5,
    },
    {
      name: "Venkat Reddy",
      city: "Miyapur, Hyderabad",
      service: "Hob Auto-Ignition Repair",
      text: "Our 4-burner Faber hob spark wasn't firing. The Gas Repair Wale technician fixed the pulse generator at home. No need to transport the heavy glass top anywhere. Excellent doorstep service.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted Reviews from <br />
            <span className="text-blue-600">Homeowners &amp; Businesses</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Over 5,000+ kitchens serviced across Pune, Mumbai & Hyderabad with 4.9/5 star satisfaction.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Row + Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500">
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-black">
                      G
                    </span>
                    <span>Google Review</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{r.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-500" />
                    <span>{r.city}</span>
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
