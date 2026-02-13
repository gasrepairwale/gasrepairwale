"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { getWhatsAppRedirectUrl, trackWhatsApp } from "@/lib/analytics"

/**
 * FAQ Component
 * Comprehensive FAQ section for SEO and user engagement
 */
export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can you respond to gas emergencies in Pune and Mumbai?",
      answer:
        "We guarantee a 15-minute response time for gas emergencies across Pune and Mumbai. Our technicians are strategically located in key areas like Kothrud, Baner, Borivali East West, and Kandivali East West to ensure the fastest possible response. For non-emergency repairs, we typically arrive within 30-45 minutes.",
      keywords: "emergency response time, gas leak repair, Pune Mumbai service",
    },
    {
      question: "What types of gas stove problems do you repair?",
      answer:
        "We repair all types of gas stove issues including: ignition problems, burner not lighting, gas smell, uneven flames, auto-ignition failure, gas valve issues, thermostat problems, and complete stove servicing. We work with all brands including Prestige, Butterfly, Glen, Sunflame, and more.",
      keywords: "gas stove repair, burner repair, ignition problems, all brands",
    },
    {
      question: "Are your technicians licensed and insured for gas work?",
      answer:
        "Yes, all our technicians are fully licensed, certified, and insured for gas appliance work. They undergo regular training on safety protocols and are certified by recognized gas safety authorities. We carry comprehensive insurance coverage for your peace of mind.",
      keywords: "licensed technicians, certified gas repair, insured service",
    },
    {
      question: "What are your service charges for gas stove repair?",
      answer:
        "Our gas stove repair starts from ₹299 for basic issues like cleaning and minor adjustments. Complex repairs range from ₹499-₹1499 depending on the problem and parts required. We provide transparent pricing with no hidden charges. Emergency service carries a premium of ₹200 extra.",
      keywords: "gas stove repair cost, service charges, transparent pricing",
    },
    {
      question: "Do you provide warranty on your repair work?",
      answer:
        "Yes, we provide a comprehensive warranty on all our repair work. Parts carry a 6-month warranty, and labor comes with a 3-month guarantee. For major repairs and installations, we offer up to 1-year warranty. If the same problem occurs within the warranty period, we fix it free of charge.",
      keywords: "repair warranty, parts warranty, service guarantee",
    },
    {
      question: "Which areas in Pune and Mumbai do you cover?",
      answer:
        "In Pune: Kothrud, Baner, Wakad, Hinjewadi, Karve Nagar, Warje, Aundh, Viman Nagar, Koregaon Park, and surrounding areas. In Mumbai: Borivali East West, Kandivali East West, Malda East West, Ram Mandir East, Goregaon East West, Andheri West, Secunderabad, and nearby localities. We're expanding to cover more areas regularly.",
      keywords: "service areas Pune Mumbai, coverage areas, local service",
    },
    {
      question: "Can you install new gas connections and pipelines?",
      answer:
        "Yes, we provide complete gas pipeline installation services for both residential and commercial properties. This includes new gas connections, pipeline routing, safety testing, compliance certification, and connection to gas appliances. All installations meet safety standards and local regulations.",
      keywords: "gas pipeline installation, new gas connection, commercial residential",
    },
    {
      question: "What safety measures do you follow during gas repairs?",
      answer:
        "Safety is our top priority. We follow strict protocols including: gas leak detection before starting work, proper ventilation, use of certified tools, pressure testing after repairs, safety inspections, and compliance with all safety standards. We also provide safety certificates for major work.",
      keywords: "gas safety measures, safety protocols, leak detection, compliance",
    },
    {
      question: "Do you offer 24/7 emergency gas repair services?",
      answer:
        "Yes, we provide 24/7 emergency gas repair services throughout the year, including weekends and holidays. Gas emergencies like leaks, smell, or safety concerns are treated with highest priority. Our emergency team is always ready to respond within 15 minutes of your call.",
      keywords: "24/7 emergency service, weekend service, holiday service, gas emergency",
    },
    {
      question: "How do I know if I have a gas leak and what should I do?",
      answer:
        "Signs of gas leak include: gas smell (like rotten eggs), hissing sounds near gas lines, dead vegetation near gas lines, or physical symptoms like dizziness. If you suspect a leak: don't use electrical switches, open windows for ventilation, turn off gas supply if safe to do so, evacuate the area, and call us immediately at +91 83027 13127.",
      keywords: "gas leak detection, gas leak signs, emergency procedures, safety tips",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 font-semibold mb-4">
            <HelpCircle className="h-5 w-5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🤔 Got <span className="text-blue-600">Questions</span>? We Have{" "}
            <span className="text-green-600">Answers!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our gas repair services in Pune and Mumbai. Can't find your answer?
            Call us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {faq.keywords.split(", ").map((keyword, keywordIndex) => (
                          <span key={keywordIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions? 🤷‍♂️</h3>
            <p className="text-lg mb-6">
              Our gas experts are available 24/7 to answer all your questions and provide instant solutions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918302713127"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
              >
                📞 Call: +91 83027 13127
              </a>
              <a
                href={getWhatsAppRedirectUrl({
                  serviceType: "FAQ Inquiry",
                  city: "General",
                  message: "Hi, I have a question about your gas repair services."
                })}
                onClick={() => trackWhatsApp("FAQ Inquiry")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-200"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
