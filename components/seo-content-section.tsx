"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, CheckCircle, Wrench, Sparkles, Flame, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackPhoneCall } from "@/lib/analytics"

/**
 * SEO Content & Work Gallery Component
 * Image-driven quality standard and field work showcase across Pune, Mumbai & Hyderabad.
 * Retains essential SEO semantic keywords without ugly text walls.
 */
export function SEOContentSection() {
  const qualityPillars = [
    {
      title: "100% Solid Brass Burners & Spares",
      image: "/images/gas-brass-parts.jpg",
      badge: "Quality Components",
      heading: "Why We Use Heavy-Gauge Brass Exclusively",
      points: [
        "Cheap duplicate iron/zinc burners rust, clog quickly, and cause hazardous yellow soot.",
        "We install factory-calibrated heavy brass burners that distribute heat evenly and maximize LPG thermal efficiency.",
        "Steel wire-braided Suraksha safety hoses (ISI marked) prevent rat bites and high-pressure blowouts.",
        "Genuine factory-matched brass gas control valves and spindles ensure leak-free knob operation.",
      ],
    },
    {
      title: "Digital Combustible Gas Sniffer Audits",
      image: "/images/gas-leak-detector.jpg",
      badge: "Safety Verification",
      heading: "Electronic Leak Detection on Every Visit",
      points: [
        "Traditional soap water tests miss micro-leaks behind cooktop panels and inside cabinet joints.",
        "Our technicians use calibrated digital combustible gas detectors with flexible sniffer wands.",
        "Thorough testing across cylinder regulator, O-ring seal, manifold joints, and rubber hose connectors.",
        "Safe blue-flame test burn performed before technician hand-off and payment.",
      ],
    },
    {
      title: "Heavy-Duty Copper Pipeline Installations",
      image: "/images/copper-pipeline.jpg",
      badge: "Pipeline Experts",
      heading: "Seamless Kitchen Copper Pipeline Routing",
      points: [
        "Seamless copper pipe routing compliant with Indian residential safety standards.",
        "Heavy-duty forged brass ball valves for instantaneous emergency gas shut-off.",
        "Digital pressure gauge testing conducted before pipeline commissioning in apartments & societies.",
        "Pipeline relocation and neat concealed routing during modular kitchen renovations in Pune, Mumbai & Hyderabad.",
      ],
    },
    {
      title: "Commercial Multi-Burner Range & Bhatti AMC",
      image: "/images/commercial-stove.jpg",
      badge: "Commercial Solutions",
      heading: "Zero-Downtime Kitchen Maintenance for Food Businesses",
      points: [
        "Heavy-duty high-pressure bhattis, tandoor burners, and multi-burner commercial cooking ranges.",
        "Quarterly & annual preventive AMC plans for restaurants, cafes, hotels, and cloud kitchens.",
        "On-call rapid technician dispatch to ensure food prep orders never stop during rush hours.",
        "FSSAI & fire compliance kitchen safety inspection reports provided with every commercial service.",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-blue-100 text-blue-800 px-3.5 py-1 text-xs font-semibold mb-3">
            Our Quality &amp; Safety Standard
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            How We Deliver <span className="text-blue-600">Uncompromising Safety</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See the tools, genuine brass components, and certified safety testing protocols our technicians bring to your kitchen in Pune, Mumbai, and Hyderabad.
          </p>
        </div>

        {/* 2x2 Image-Led Quality Showcase */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {qualityPillars.map((pillar, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-200/80 rounded-2xl bg-white flex flex-col justify-between group shadow-none"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    {pillar.badge}
                  </div>
                </div>

                <div className="p-6 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">{pillar.heading}</p>

                  <div className="space-y-2.5">
                    {pillar.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start space-x-2.5 text-xs text-gray-700 leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4 border-t border-gray-100 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-xs h-9 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold shadow-none"
                >
                  <a
                    href="tel:+918302713127"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => trackPhoneCall("+918302713127", "Quality Pillar", pillar.title)}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire About {pillar.badge}</span>
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
