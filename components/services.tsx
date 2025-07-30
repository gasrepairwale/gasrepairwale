import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Wrench, Settings, Shield, Clock, CheckCircle } from "lucide-react"

/**
 * Services Section Component
 * Displays all available services with icons and descriptions
 */
export function Services() {
  // Service offerings data
  const services = [
    {
      icon: Flame,
      title: "Gas Stove Repair",
      description:
        "Complete gas stove repair and maintenance services including burner cleaning, ignition repair, and gas leak detection.",
      features: ["Burner repair", "Ignition system", "Gas leak detection", "Safety inspection"],
    },
    {
      icon: Wrench,
      title: "Gas Pipeline Services",
      description:
        "Professional gas pipeline installation, repair, and maintenance for residential and commercial properties.",
      features: ["Pipeline installation", "Leak repair", "Pressure testing", "Safety compliance"],
    },
    {
      icon: Settings,
      title: "Appliance Maintenance",
      description: "Regular maintenance and servicing of gas appliances to ensure optimal performance and safety.",
      features: ["Regular servicing", "Performance optimization", "Safety checks", "Parts replacement"],
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive safety inspections and certifications for gas installations and appliances.",
      features: ["Safety audits", "Compliance checks", "Certification", "Risk assessment"],
    },
    {
      icon: Clock,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for urgent gas-related issues and safety concerns.",
      features: ["24/7 availability", "Quick response", "Emergency repairs", "Safety priority"],
    },
    {
      icon: CheckCircle,
      title: "Installation Services",
      description: "Professional installation of new gas appliances and connections with proper safety measures.",
      features: ["New installations", "Connection setup", "Safety testing", "Warranty support"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive gas repair and maintenance services for your home and business. Our certified technicians
            ensure safety and reliability in every job.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>

                  {/* Service features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
            <a href="tel:+918302713127">Book Service Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
