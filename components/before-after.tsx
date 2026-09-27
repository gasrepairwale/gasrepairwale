"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, CheckCircle, Phone } from "lucide-react"
import { trackPhoneCall } from "@/lib/analytics"

/**
 * Before/After Scenarios Component
 * Shows problem-solution scenarios for better engagement
 */
export function BeforeAfter() {
  const scenarios = [
    {
      problem: {
        title: "Gas Stove Not Igniting",
        description: "Clicking sound but no flame, wasting time and gas",
        issues: ["Frustrating cooking delays", "Wasted gas money", "Safety concerns", "Family complaints"],
      },
      solution: {
        title: "Perfect Ignition Every Time",
        description: "Professional repair with genuine parts and testing",
        benefits: ["Instant ignition", "Safe operation", "Money saved", "Happy cooking"],
      },
    },
    {
      problem: {
        title: "Gas Smell Detected",
        description: "Dangerous gas leak putting family at risk",
        issues: ["Life-threatening danger", "Panic and stress", "Emergency evacuation", "Property damage risk"],
      },
      solution: {
        title: "100% Safe & Secure",
        description: "Emergency leak detection and repair with safety certification",
        benefits: ["Complete safety", "Peace of mind", "Professional certification", "Family protection"],
      },
    },
    {
      problem: {
        title: "Pipeline Problems",
        description: "Old, corroded pipes causing frequent issues",
        issues: ["Frequent breakdowns", "High repair costs", "Unreliable service", "Constant worry"],
      },
      solution: {
        title: "Modern Pipeline System",
        description: "Complete pipeline upgrade with warranty and maintenance",
        benefits: ["Reliable operation", "Long-term savings", "Modern safety features", "10-year warranty"],
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Real Work in Indian Kitchens
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Real Results: <span className="text-red-600">Before</span> vs <span className="text-green-600">After</span> Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the actual difference our certified technicians make with deep cleaning, genuine parts, and precision flame calibration.
          </p>
        </div>

        {/* Real Photo Visual Comparison Card */}
        <div className="max-w-5xl mx-auto mb-16 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before Photo */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-red-200 shadow-md">
              <div className="absolute top-4 left-4 z-10 bg-red-600/95 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></span>
                BEFORE SERVICE
              </div>
              <img
                src="/images/burner-before.jpg"
                alt="Choked, greasy gas burner with dangerous flickering orange flame before repair"
                className="w-full h-72 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-red-50 border-t border-red-200">
                <h4 className="font-bold text-red-900 text-base mb-1">Heavy Carbon Build-Up & Weak Flame</h4>
                <p className="text-xs text-red-700 leading-relaxed">
                  Clogged gas nozzles cause low heating, blackened cooking vessels, and dangerous gas leakage risks.
                </p>
              </div>
            </div>

            {/* After Photo */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-green-300 shadow-md">
              <div className="absolute top-4 left-4 z-10 bg-green-600/95 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></span>
                AFTER OUR SERVICE
              </div>
              <img
                src="/images/burner-after.jpg"
                alt="Clean brass gas stove burner with steady blue flame after expert servicing"
                className="w-full h-72 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-green-50 border-t border-green-200">
                <h4 className="font-bold text-green-900 text-base mb-1">Deep Cleaned & Pure Blue Flame</h4>
                <p className="text-xs text-green-700 leading-relaxed">
                  Calibrated gas-air ratio, brass nozzle cleared, 100% efficient blue flame saving up to 20% LPG cylinder gas.
                </p>
              </div>
            </div>
          </div>

          {/* Safety feature highlight bar */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                </div>
              <div className="text-sm">
                <span className="font-bold text-gray-900">Every repair includes electronic gas leak detection</span>
                <span className="text-gray-600 block text-xs">We test cylinder valve, rubber hose & burner joints for 100% peace of mind.</span>
              </div>
            </div>
            <div className="text-xs font-bold text-orange-700 bg-white px-4 py-2 rounded-lg border border-orange-200 shadow-sm flex-shrink-0">
              30-Day Service Guarantee
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {scenarios.map((scenario, index) => (
            <div key={index} className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Before - Problem */}
              <Card className="border-2 border-red-200 bg-red-50/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">{scenario.problem.title}</h3>
                    <p className="text-red-700">{scenario.problem.description}</p>
                  </div>

                  <div className="space-y-2">
                    {scenario.problem.issues.map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-red-700 text-sm">{issue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 rounded-full">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* After - Solution */}
              <Card className="border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{scenario.solution.title}</h3>
                    <p className="text-green-700">{scenario.solution.description}</p>
                  </div>

                  <div className="space-y-2">
                    {scenario.solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-green-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Gas Problems?</h3>
            <p className="text-xl mb-6">Join 5000+ satisfied customers who chose the smart solution!</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              <a 
                href="tel:+918302713127" 
                className="flex items-center space-x-2"
                onClick={() => trackPhoneCall("+918302713127")}
              >
                <Phone className="h-5 w-5" />
                <span>CALL NOW: +91 83027 13127</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
