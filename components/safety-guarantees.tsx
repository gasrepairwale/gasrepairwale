import { ShieldCheck, UserCheck, Smartphone, Award, Wrench, Clock } from "lucide-react"

export function SafetyGuarantees() {
  const guarantees = [
    {
      icon: UserCheck,
      title: "Certified & Background Checked",
      description: "Every field technician undergoes thorough skill testing and identity verification for your kitchen's complete safety.",
    },
    {
      icon: ShieldCheck,
      title: "Company Uniform & Toolkit",
      description: "Our technicians arrive equipped with specialized tools, calibrated pressure gauges, and genuine brass replacement parts.",
    },
    {
      icon: Wrench,
      title: "Electronic Gas Leak Detection",
      description: "Post-repair digital leak sniffer test on your stove, rubber hose, and regulator joints before we sign off.",
    },
    {
      icon: Smartphone,
      title: "Pay After Service via UPI",
      description: "No advance payment required. Test your stove thoroughly, then pay easily via Google Pay, PhonePe, Paytm, or Cash.",
    },
    {
      icon: Award,
      title: "30-Day Service Guarantee",
      description: "Complete warranty on our workmanship. If the same issue recurs within 30 days, we fix it 100% free of charge.",
    },
    {
      icon: Clock,
      title: "15 to 25 Minute Dispatch",
      description: "Local technicians stationed in your neighborhood across Pune, Mumbai, and Hyderabad for rapid emergency arrival.",
    },
  ]

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Kitchen Safety First
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our 6-Point Safety & Trust Guarantee
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mt-2">
            Gas appliances require certified care. Here is how we ensure maximum safety for your home and family on every visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guarantees.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-gray-50/80 hover:bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-blue-300 transition-all duration-200 shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
