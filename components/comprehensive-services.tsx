import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Flame,
  Wrench,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Home,
  Building,
  Zap,
  Phone,
} from "lucide-react"

/**
 * Comprehensive Services Section Component
 * Detailed, SEO-optimized services with rich content
 */
export function ComprehensiveServices() {
  const mainServices = [
    {
      icon: Flame,
      title: "Gas Stove Repair & Maintenance",
      shortDesc: "Complete gas stove repair services for all brands and models",
      fullDesc:
        "Our certified technicians specialize in repairing all types of gas stoves including single burner, double burner, triple burner, and four burner gas stoves. We work with all major brands like Prestige, Butterfly, Glen, Sunflame, Pigeon, and more.",
      features: [
        "Burner cleaning and repair",
        "Auto-ignition system repair",
        "Gas valve replacement",
        "Thermostat calibration",
        "Safety valve inspection",
        "Gas leak detection and repair",
        "Flame adjustment and optimization",
        "Complete stove servicing",
      ],
      pricing: "Depends on issue",
      warranty: "6 months parts warranty",
      responseTime: "Same day service",
      commonIssues: [
        "Gas stove not igniting",
        "Uneven flame distribution",
        "Gas smell from stove",
        "Auto-ignition not working",
        "Burner not lighting properly",
      ],
    },
    {
      icon: Wrench,
      title: "Gas Pipeline Installation & Repair",
      shortDesc: "Professional gas pipeline services for residential and commercial properties",
      fullDesc:
        "We provide complete gas pipeline solutions including new installations, repairs, maintenance, and upgrades. Our services comply with all safety standards and local regulations in Maharastra.",
      features: [
        "New pipeline installation",
        "Pipeline leak detection",
        "Pressure testing and certification",
        "Pipeline relocation services",
        "Compliance documentation",
        "Emergency pipeline repairs",
        "Gas meter installation",
        "Safety valve installation",
      ],
      pricing: "Depends on work",
      warranty: "1 year installation warranty",
      responseTime: "24-48 hours",
      commonIssues: [
        "Gas pipeline leakage",
        "Low gas pressure",
        "Pipeline corrosion",
        "Faulty gas connections",
        "Meter reading issues",
      ],
    },
    {
      icon: Settings,
      title: "Gas Appliance Maintenance",
      shortDesc: "Regular maintenance services for optimal performance and safety",
      fullDesc:
        "Preventive maintenance is crucial for gas appliance safety and efficiency. Our comprehensive maintenance programs help extend appliance life, improve performance, and ensure safety compliance.",
      features: [
        "Scheduled maintenance visits",
        "Performance optimization",
        "Parts cleaning and replacement",
        "Safety system checks",
        "Efficiency improvements",
        "Preventive repairs",
        "Maintenance documentation",
        "Annual service contracts",
      ],
      pricing: "Depends on service",
      warranty: "3 months service warranty",
      responseTime: "Scheduled visits",
      commonIssues: [
        "Reduced efficiency",
        "Frequent breakdowns",
        "Safety concerns",
        "Higher gas consumption",
        "Performance degradation",
      ],
    },
    {
      icon: Shield,
      title: "Gas Safety Inspections & Certification",
      shortDesc: "Comprehensive safety audits and compliance certifications",
      fullDesc:
        "Safety is our top priority. We conduct thorough gas safety inspections for homes, offices, restaurants, and commercial establishments to ensure compliance with safety standards and regulations.",
      features: [
        "Complete safety audit",
        "Gas leak detection",
        "Pressure testing",
        "Compliance verification",
        "Safety certification",
        "Risk assessment reports",
        "Recommendations for improvements",
        "Emergency response planning",
      ],
      pricing: "Depends on inspection",
      warranty: "Certification validity",
      responseTime: "Within 24 hours",
      commonIssues: [
        "Safety compliance requirements",
        "Insurance claim support",
        "Legal compliance needs",
        "Property sale requirements",
        "Commercial licensing",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Emergency Gas Services",
      shortDesc: "Round-the-clock emergency response for gas-related emergencies",
      fullDesc:
        "Gas emergencies can't wait. Our 24/7 emergency service team is always ready to respond to gas leaks, safety concerns, and urgent repairs across Pune and Mumbai with guaranteed response times.",
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
      pricing: "Depends on urgency",
      warranty: "Same as regular service",
      responseTime: "15 minutes guaranteed",
      commonIssues: [
        "Gas leak emergencies",
        "Complete gas failure",
        "Safety hazard situations",
        "Urgent repair needs",
        "Emergency shutdowns",
      ],
    },
    {
      icon: Home,
      title: "New Gas Connection & Installation",
      shortDesc: "Complete installation services for new gas connections and appliances",
      fullDesc:
        "We handle everything from new gas connections to appliance installations. Our certified technicians ensure proper installation, testing, and commissioning of all gas systems with full compliance.",
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
      pricing: "Depends on installation",
      warranty: "1 year installation warranty",
      responseTime: "2-3 working days",
      commonIssues: [
        "New home gas setup",
        "Kitchen renovation needs",
        "Appliance upgrades",
        "Commercial installations",
        "System expansions",
      ],
    },
  ]

  const serviceCategories = [
    {
      icon: Home,
      title: "Residential Gas Services",
      description: "Complete gas solutions for homes, apartments, and residential complexes across Pune and Mumbai",
      services: [
        "Kitchen gas stove repair and maintenance",
        "Residential gas pipeline installation",
        "Home gas safety inspections",
        "Emergency gas leak repairs",
        "New gas connection setup",
        "Appliance installation and servicing",
      ],
      coverage: "All residential areas in Pune & Mumbai",
      specialties: ["Family safety priority", "Affordable pricing", "Quick response", "Trusted service"],
    },
    {
      icon: Building,
      title: "Commercial Gas Services",
      description: "Professional gas services for restaurants, hotels, offices, and commercial establishments",
      services: [
        "Commercial kitchen gas systems",
        "Restaurant gas equipment repair",
        "Industrial gas pipeline services",
        "Commercial safety inspections",
        "Bulk gas installations",
        "Maintenance contracts",
      ],
      coverage: "Commercial areas across both cities",
      specialties: ["Business continuity", "Compliance support", "Bulk pricing", "Priority service"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">Professional Gas Services</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Gas Repair & Maintenance Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From emergency gas leak repairs to routine maintenance, we provide comprehensive gas services across Pune
            and Mumbai. Our certified technicians ensure your safety with professional, reliable, and affordable
            solutions for all your gas appliance needs.
          </p>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl group-hover:from-orange-200 group-hover:to-red-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{service.fullDesc}</p>

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
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Starting Price:</span>
                      <span className="font-semibold text-orange-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Warranty:</span>
                      <span className="font-semibold text-green-600">{service.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time:</span>
                      <span className="font-semibold text-blue-600">{service.responseTime}</span>
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

        {/* Service categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve both residential and commercial clients with specialized solutions tailored to their unique
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                        <IconComponent className="h-10 w-10 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">{category.title}</h4>
                        <p className="text-orange-600 font-medium">{category.coverage}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Our Services Include:</h5>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">{service}</span>
                            </div>
                          ))}
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

        {/* Emergency service highlight */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 rounded-full">
                <AlertTriangle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Gas Emergency? We're Here 24/7!</h3>
            <p className="text-xl text-red-100 mb-6 max-w-3xl mx-auto">
              Don't wait when it comes to gas safety. Our emergency response team is available round-the-clock to handle
              gas leaks, safety concerns, and urgent repairs across Pune and Mumbai.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">15-Minute Response</h4>
                <p className="text-red-100 text-sm">Guaranteed emergency response time</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Safety First</h4>
                <p className="text-red-100 text-sm">Immediate safety measures and solutions</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Expert Team</h4>
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
      </div>
    </section>
  )
}
