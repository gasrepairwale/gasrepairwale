import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Shield, Award, CheckCircle, Wrench, Phone } from "lucide-react"

/**
 * SEO Content Section Component
 * Rich, keyword-optimized content for better search rankings
 */
export function SEOContentSection() {
  const locationContent = [
    {
      city: "Pune",
      areas: ["Kothrud", "Baner", "Wakad", "Hinjewadi", "Karve Nagar", "Warje", "Aundh", "Viman Nagar"],
      description:
        "Professional gas repair services across Pune with specialized expertise in Maharashtra's gas safety regulations and local requirements.",
      keyServices: [
        "Gas stove repair in Pune residential areas",
        "Commercial gas pipeline services for Pune businesses",
        "Emergency gas leak repairs across Pune metro",
        "Gas safety inspections for Pune properties",
      ],
      responseTime: "15-25 minutes",
      customers: "3000+",
    },
    {
      city: "Hyderabad",
      areas: [
        "Gachibowli",
        "Madhapur",
        "Kondapur",
        "Miyapur",
        "Kukatpally",
        "Begumpet",
        "Secunderabad",
        "Banjara Hills",
      ],
      description:
        "Expert gas services in Hyderabad's IT corridor and residential areas, compliant with Telangana state gas safety standards.",
      keyServices: [
        "IT professional-friendly gas services in Gachibowli",
        "Restaurant gas system maintenance in Hyderabad",
        "Residential gas pipeline installation across Cyberabad",
        "24/7 emergency gas repairs in Hyderabad metro",
      ],
      responseTime: "20-30 minutes",
      customers: "2500+",
    },
  ]

  const serviceDetails = [
    {
      title: "Gas Stove Repair Services - Complete Solutions for All Brands",
      content: `Our certified gas stove repair technicians in Pune and Hyderabad specialize in fixing all types of gas cooking appliances. Whether you have a single burner, double burner, triple burner, or four burner gas stove, we provide comprehensive repair services for all major brands including Prestige, Butterfly, Glen, Sunflame, Pigeon, Bajaj, and more.

      Common gas stove problems we fix include ignition issues, uneven flame distribution, gas leakage, burner blockages, auto-ignition failures, and thermostat malfunctions. Our technicians carry genuine spare parts and use professional-grade tools to ensure lasting repairs.

      We understand that a malfunctioning gas stove can disrupt your daily cooking routine, which is why we offer same-day repair services across Pune and Hyderabad. Our transparent pricing starts from just ₹299, and we provide a 6-month warranty on all parts and 3-month warranty on labor.`,
      keywords: [
        "gas stove repair",
        "burner repair",
        "ignition repair",
        "gas stove service",
        "cooking appliance repair",
      ],
    },
    {
      title: "Gas Pipeline Installation & Repair - Safe & Compliant Solutions",
      content: `Gas pipeline safety is crucial for every home and business. Our licensed gas pipeline technicians provide complete pipeline solutions including new installations, leak repairs, pressure testing, and compliance certifications for residential and commercial properties in Maharashtra and Telangana.

      We handle everything from kitchen gas connections to complex commercial gas distribution systems. Our services include pipeline routing, gas meter installations, safety valve setups, and regular maintenance programs. All our installations comply with local safety regulations and building codes.

      Emergency pipeline repairs are available 24/7 because we understand that gas leaks pose serious safety risks. Our emergency response team carries specialized leak detection equipment and can quickly isolate and repair pipeline issues to ensure your safety.`,
      keywords: [
        "gas pipeline installation",
        "gas leak repair",
        "pipeline maintenance",
        "gas connection",
        "pipeline safety",
      ],
    },
    {
      title: "Emergency Gas Services - 24/7 Response Across Pune & Hyderabad",
      content: `Gas emergencies require immediate professional attention. Our 24/7 emergency gas service team is strategically located across Pune and Hyderabad to provide rapid response to gas leaks, safety concerns, and urgent repairs.

      We guarantee a 15-minute response time for emergency calls within city limits. Our emergency technicians are equipped with gas detection equipment, safety gear, and tools needed to quickly assess and resolve dangerous situations.

      Common gas emergencies we handle include gas leaks from stoves or pipelines, gas smell in homes or offices, complete gas system failures, and safety shutdowns. We also provide temporary solutions to ensure your safety while permanent repairs are completed.`,
      keywords: [
        "emergency gas repair",
        "gas leak emergency",
        "24/7 gas service",
        "urgent gas repair",
        "gas safety emergency",
      ],
    },
  ]

  const whyChooseUsContent = {
    title: "Why Gas Repaire Wale is Pune & Hyderabad's Most Trusted Gas Service Provider",
    content: `Since 2013, Gas Repaire Wale has been the leading gas repair and maintenance service provider in Pune and Hyderabad. We've built our reputation on three core principles: safety, reliability, and customer satisfaction.

    Our team of certified gas technicians undergoes regular training on the latest safety protocols and repair techniques. We're licensed by local authorities in both Maharashtra and Telangana, and our services are approved by major insurance companies.

    What sets us apart is our commitment to transparency. We provide upfront pricing with no hidden charges, detailed explanations of all work performed, and comprehensive warranties on our services. Our customer-first approach has earned us over 5000 satisfied customers and a 4.9-star rating.`,
    achievements: [
      "10+ years of professional gas service experience",
      "5000+ satisfied customers across Pune & Hyderabad",
      "Licensed and certified by local authorities",
      "Insurance-approved service provider",
      "4.9-star customer rating with 500+ reviews",
      "24/7 emergency response capability",
      "Transparent pricing with no hidden charges",
      "Comprehensive warranty on all services",
    ],
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main SEO content */}
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Professional Gas Services Since 2013</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Gas Repair & Maintenance Services in Pune & Hyderabad
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Gas Repaire Wale is your trusted partner for all gas-related services across Pune and Hyderabad. From
              emergency gas leak repairs to routine maintenance, our certified technicians ensure your safety with
              professional, reliable, and affordable solutions for homes and businesses.
            </p>
          </div>

          {/* Location-specific content */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locationContent.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                      <MapPin className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Gas Services in {location.city}</h3>
                      <p className="text-orange-600 font-medium">{location.customers} Happy Customers</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{location.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Service Areas in {location.city}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.areas.map((area, areaIndex) => (
                          <Badge key={areaIndex} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specialized Services:</h4>
                      <div className="space-y-2">
                        {location.keyServices.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-5 w-5 text-orange-600" />
                        <span className="font-semibold text-gray-900">Response Time: {location.responseTime}</span>
                      </div>
                      <p className="text-sm text-gray-600">Average response time across all areas in {location.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed service content */}
          <div className="space-y-12 mb-16">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {service.content.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Related Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, keywordIndex) => (
                      <Badge key={keywordIndex} className="bg-blue-100 text-blue-800 text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why choose us section */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">{whyChooseUsContent.title}</h3>
              <div className="prose prose-lg max-w-none text-orange-100 mb-8">
                {whyChooseUsContent.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseUsContent.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-center space-x-3">
                    <div className="p-1 bg-white/20 rounded-full">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-orange-100">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service process */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Professional Gas Service Process</h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality service delivery and customer satisfaction. Here's how
              we handle every gas service request from start to finish.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Contact & Assessment",
                  description:
                    "Call us or submit online request. We gather details about your gas issue and schedule service visit.",
                  icon: Phone,
                },
                {
                  step: "2",
                  title: "Professional Diagnosis",
                  description:
                    "Our certified technician arrives on time, diagnoses the problem, and provides transparent pricing.",
                  icon: Wrench,
                },
                {
                  step: "3",
                  title: "Expert Repair & Testing",
                  description:
                    "We perform the repair using genuine parts, conduct safety tests, and ensure everything works perfectly.",
                  icon: Shield,
                },
                {
                  step: "4",
                  title: "Quality Assurance & Follow-up",
                  description:
                    "Final inspection, cleanup, warranty documentation, and follow-up to ensure your satisfaction.",
                  icon: Award,
                },
              ].map((process, index) => {
                const IconComponent = process.icon
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {process.step}
                      </div>
                      <div className="p-3 bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                        <IconComponent className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
