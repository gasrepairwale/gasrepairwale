import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import {
  Flame,
  Wrench,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  PenToolIcon as Tool,
  Home,
  Building,
  Phone,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Gas Repair Services | Gas Stove Repair | Pipeline Installation | Emergency Gas Service | Gas Repaire Wale",
  description:
    "⭐ Complete Gas Repair Services in Pune & Hyderabad ✅ Gas Stove Repair ✅ Pipeline Installation ✅ Safety Inspections ✅ 24/7 Emergency Service ✅ Licensed Technicians ✅ Residential & Commercial. Call +91 83027 13127",
  keywords: [
    "gas repair services",
    "gas stove repair",
    "gas pipeline installation",
    "gas safety inspection",
    "emergency gas repair",
    "gas appliance maintenance",
    "residential gas services",
    "commercial gas services",
    "gas leak repair",
    "gas burner repair",
    "gas valve replacement",
    "gas meter installation",
    "gas connection services",
    "professional gas technicians",
    "licensed gas repair",
    "gas services pune hyderabad",
  ].join(", "),
  authors: [{ name: "Gas Repaire Wale", url: "https://gasrepairewale.com" }],
  creator: "Gas Repaire Wale",
  publisher: "Gas Repaire Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairewale.com/services",
    title: "Professional Gas Repair Services | Gas Stove Repair | Pipeline Installation",
    description:
      "Complete gas repair services including stove repair, pipeline installation, safety inspections, and emergency service. Licensed technicians serving Pune & Hyderabad.",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Repaire Wale - Professional Gas Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Gas Repair Services | Gas Repaire Wale",
    description:
      "Complete gas repair services - stove repair, pipeline installation, safety inspections, emergency service. Licensed technicians in Pune & Hyderabad.",
    images: ["/services-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://gasrepairewale.com/services",
  },
}

/**
 * Enhanced Services Page Component
 * SEO-optimized with comprehensive service information
 */
export default function ServicesPage() {
  // Enhanced main services data
  const mainServices = [
    {
      icon: Flame,
      title: "Gas Stove Repair & Maintenance",
      description:
        "Complete repair and maintenance services for all types of gas stoves and cooktops from all major brands.",
      detailedDescription:
        "Our certified technicians specialize in repairing single, double, triple, and four-burner gas stoves. We work with all major brands including Prestige, Butterfly, Glen, Sunflame, Pigeon, Bajaj, and more. From ignition problems to complete overhauls, we ensure your cooking experience is safe and efficient.",
      features: [
        "Burner cleaning and repair",
        "Auto-ignition system repair",
        "Gas valve replacement",
        "Thermostat calibration",
        "Safety valve inspection",
        "Gas leak detection",
        "Flame adjustment optimization",
        "Complete stove servicing",
      ],
      commonIssues: [
        "Gas stove not igniting",
        "Uneven flame distribution",
        "Gas smell from stove",
        "Auto-ignition failure",
        "Burner blockages",
        "Low flame issues",
      ],
      pricing: "Depends on issue complexity",
      warranty: "6 months parts, 3 months labor",
      responseTime: "Same day service",
      serviceAreas: "All areas in Pune & Hyderabad",
    },
    {
      icon: Wrench,
      title: "Gas Pipeline Installation & Repair",
      description:
        "Professional installation, repair, and maintenance of gas pipelines for residential and commercial properties.",
      detailedDescription:
        "We provide comprehensive gas pipeline solutions including new installations, leak repairs, pressure testing, and compliance certifications. Our services comply with all safety standards and local regulations in Maharashtra and Telangana, ensuring your gas supply is safe and reliable.",
      features: [
        "New pipeline installation",
        "Pipeline leak detection & repair",
        "Pressure testing & certification",
        "Pipeline relocation services",
        "Compliance documentation",
        "Emergency pipeline repairs",
        "Gas meter installation",
        "Safety valve installation",
      ],
      commonIssues: [
        "Gas pipeline leakage",
        "Low gas pressure",
        "Pipeline corrosion",
        "Faulty connections",
        "Meter reading issues",
        "Compliance requirements",
      ],
      pricing: "Depends on work scope",
      warranty: "1 year installation warranty",
      responseTime: "24-48 hours",
      serviceAreas: "Residential & Commercial properties",
    },
    {
      icon: Settings,
      title: "Gas Appliance Maintenance",
      description: "Regular maintenance services to keep your gas appliances running efficiently and safely.",
      detailedDescription:
        "Preventive maintenance is crucial for gas appliance safety and efficiency. Our comprehensive maintenance programs help extend appliance life, improve performance, ensure safety compliance, and reduce long-term repair costs through regular inspections and tune-ups.",
      features: [
        "Scheduled maintenance visits",
        "Performance optimization",
        "Parts cleaning & replacement",
        "Safety system checks",
        "Efficiency improvements",
        "Preventive repairs",
        "Maintenance documentation",
        "Annual service contracts",
      ],
      commonIssues: [
        "Reduced efficiency",
        "Frequent breakdowns",
        "Safety concerns",
        "Higher gas consumption",
        "Performance degradation",
        "Warranty requirements",
      ],
      pricing: "Depends on service type",
      warranty: "3 months service warranty",
      responseTime: "Scheduled appointments",
      serviceAreas: "Home & Business maintenance",
    },
    {
      icon: Shield,
      title: "Gas Safety Inspections & Certification",
      description: "Comprehensive safety audits and certifications for gas installations and appliances.",
      detailedDescription:
        "Safety is our top priority. We conduct thorough gas safety inspections for homes, offices, restaurants, and commercial establishments to ensure compliance with safety standards and regulations. Our certified inspectors provide detailed reports and official certifications.",
      features: [
        "Complete safety audit",
        "Gas leak detection",
        "Pressure testing",
        "Compliance verification",
        "Safety certification",
        "Risk assessment reports",
        "Improvement recommendations",
        "Emergency response planning",
      ],
      commonIssues: [
        "Safety compliance needs",
        "Insurance requirements",
        "Legal compliance",
        "Property sale requirements",
        "Commercial licensing",
        "Periodic inspections",
      ],
      pricing: "Depends on property size",
      warranty: "Certification validity period",
      responseTime: "Within 24 hours",
      serviceAreas: "Residential & Commercial properties",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Gas Services",
      description: "Round-the-clock emergency response for gas-related emergencies and urgent repairs.",
      detailedDescription:
        "Gas emergencies can't wait. Our 24/7 emergency service team is strategically located across Pune and Hyderabad to provide rapid response to gas leaks, safety concerns, and urgent repairs with guaranteed response times and immediate safety measures.",
      features: [
        "24/7 emergency hotline",
        "15-minute response guarantee",
        "Emergency leak repairs",
        "Safety shutdowns",
        "Temporary solutions",
        "Priority service dispatch",
        "Emergency safety equipment",
        "Post-emergency follow-up",
      ],
      commonIssues: [
        "Gas leak emergencies",
        "Complete gas failure",
        "Safety hazard situations",
        "Urgent repair needs",
        "Emergency shutdowns",
        "After-hours problems",
      ],
      pricing: "Emergency service rates",
      warranty: "Same as regular service",
      responseTime: "15 minutes guaranteed",
      serviceAreas: "24/7 across both cities",
    },
    {
      icon: Tool,
      title: "New Gas Connection & Installation",
      description: "Complete installation services for new gas connections and appliances with proper safety measures.",
      detailedDescription:
        "We handle everything from new gas connections to appliance installations. Our certified technicians ensure proper installation, testing, and commissioning of all gas systems with full compliance to local regulations and safety standards.",
      features: [
        "New connection setup",
        "Appliance installation",
        "System commissioning",
        "Safety testing",
        "Compliance documentation",
        "User training",
        "Warranty registration",
        "Post-installation support",
      ],
      commonIssues: [
        "New home gas setup",
        "Kitchen renovation needs",
        "Appliance upgrades",
        "Commercial installations",
        "System expansions",
        "Relocation requirements",
      ],
      pricing: "Depends on installation type",
      warranty: "1 year installation warranty",
      responseTime: "2-3 working days",
      serviceAreas: "New constructions & renovations",
    },
  ]

  // Enhanced service categories
  const serviceCategories = [
    {
      icon: Home,
      title: "Residential Gas Services",
      description: "Complete gas solutions for homes, apartments, and residential complexes across Pune and Hyderabad.",
      detailedServices: [
        "Kitchen gas stove repair and maintenance for all brands",
        "Residential gas pipeline installation and upgrades",
        "Home gas safety inspections and certifications",
        "Emergency gas leak repairs with 15-minute response",
        "New gas connection setup for homes and apartments",
        "Appliance installation and comprehensive servicing",
        "Annual maintenance contracts for residential properties",
        "Gas meter installation and relocation services",
      ],
      coverage: "All residential areas in Pune & Hyderabad",
      specialties: ["Family safety priority", "Affordable pricing", "Quick response", "Trusted local service"],
      customerBase: "3000+ residential customers",
      responseTime: "20-30 minutes average",
    },
    {
      icon: Building,
      title: "Commercial Gas Services",
      description: "Professional gas services for restaurants, hotels, offices, and commercial establishments.",
      detailedServices: [
        "Commercial kitchen gas systems installation and repair",
        "Restaurant gas equipment maintenance and servicing",
        "Industrial gas pipeline services and compliance",
        "Commercial safety inspections and certifications",
        "Bulk gas installations for office complexes",
        "Maintenance contracts for commercial properties",
        "Emergency commercial gas repairs with priority response",
        "Compliance documentation for business licensing",
      ],
      coverage: "Commercial areas across both cities",
      specialties: ["Business continuity", "Compliance support", "Bulk service pricing", "Priority response"],
      customerBase: "500+ commercial clients",
      responseTime: "15-25 minutes for emergencies",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Enhanced hero section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">Professional Gas Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Gas Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              🔥 Comprehensive gas repair and maintenance services for your home and business. Professional, safe, and
              reliable solutions from certified technicians across <strong>Pune and Hyderabad</strong> with
              <strong> 5000+ satisfied customers</strong> and <strong>4.9-star rating</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <a href="tel:+918302713127" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: +91 83027 13127</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced main services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">What We Do</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Gas Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple repairs to complex installations, we handle all your gas appliance needs with expertise and
              attention to safety across Pune and Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600 group"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg group-hover:from-orange-200 group-hover:to-red-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">{service.description}</p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">{service.detailedDescription}</p>
                    </div>

                    {/* Service features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-orange-600 font-medium">
                            +{service.features.length - 4} more services included
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Common issues */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Issues We Fix:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.commonIssues.slice(0, 3).map((issue, issueIndex) => (
                          <Badge key={issueIndex} variant="outline" className="text-xs">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Service details */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pricing:</span>
                        <span className="font-semibold text-orange-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Warranty:</span>
                        <span className="font-semibold text-green-600">{service.warranty}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Response:</span>
                        <span className="font-semibold text-blue-600">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Coverage:</span>
                        <span className="font-semibold text-purple-600">{service.serviceAreas}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                      <a href="tel:+918302713127" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Book This Service</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced service categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Service Categories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Residential & Commercial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve both residential and commercial clients with specialized solutions tailored to their unique
              requirements across Pune and Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                        <IconComponent className="h-10 w-10 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-orange-600 font-medium">{category.coverage}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Our Services Include:</h4>
                        <div className="space-y-2">
                          {category.detailedServices.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-1">Customer Base</h5>
                          <p className="text-sm text-blue-700">{category.customerBase}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-1">Response Time</h5>
                          <p className="text-sm text-green-700">{category.responseTime}</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Why Choose Us:</h5>
                        <div className="flex flex-wrap gap-2">
                          {category.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency service highlight */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-12 w-12 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">🚨 Emergency Gas Services Available 24/7</h2>
            <p className="text-xl text-red-100 mb-8">
              Gas leaks and safety issues can't wait. Our emergency team is available round-the-clock to handle urgent
              situations and ensure your safety across Pune and Hyderabad.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">15-Minute Response</h3>
                <p className="text-red-100 text-sm">Guaranteed emergency response time within city limits</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Shield className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">Safety Priority</h3>
                <p className="text-red-100 text-sm">Immediate safety measures and professional solutions</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Award className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">Expert Team</h3>
                <p className="text-red-100 text-sm">Certified emergency response technicians</p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4">
              <a href="tel:+918302713127" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Call: +91 83027 13127</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Gas Service Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process to get your gas appliances fixed quickly and safely with professional
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact & Assessment",
                description:
                  "Call us or submit online request. We gather details about your gas issue and provide initial guidance.",
                icon: Phone,
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "2",
                title: "Professional Diagnosis",
                description:
                  "Our certified technician arrives on time, diagnoses the problem, and provides transparent pricing.",
                icon: Wrench,
                color: "from-green-500 to-green-600",
              },
              {
                step: "3",
                title: "Expert Repair & Testing",
                description:
                  "We perform the repair using genuine parts, conduct safety tests, and ensure perfect operation.",
                icon: Shield,
                color: "from-orange-500 to-orange-600",
              },
              {
                step: "4",
                title: "Quality Assurance",
                description: "Final inspection, cleanup, warranty documentation, and follow-up to ensure satisfaction.",
                icon: Award,
                color: "from-purple-500 to-purple-600",
              },
            ].map((process, index) => {
              const IconComponent = process.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${process.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}
                    >
                      {process.step}
                    </div>
                    <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
