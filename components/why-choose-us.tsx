import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield, Star, Wrench } from "lucide-react"

/**
 * Why Choose Us Section Component
 * Highlights company strengths and competitive advantages
 */
export function WhyChooseUs() {
  // Company advantages data
  const advantages = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Decade of expertise in gas appliance repair and maintenance services across Pune and Hyderabad.",
    },
    {
      icon: Users,
      title: "Certified Technicians",
      description: "All our technicians are licensed, trained, and certified to handle gas appliances safely.",
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "We respond to service calls within 30 minutes and provide same-day repairs when possible.",
    },
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "We prioritize safety in every job with proper testing, inspection, and compliance checks.",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Over 5000+ satisfied customers with 4.9-star rating and 98% customer retention rate.",
    },
    {
      icon: Wrench,
      title: "Quality Parts & Tools",
      description: "We use only genuine parts and professional-grade tools for lasting repairs and installations.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Gas Repaire Wale?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another repair service. We're your trusted partners in maintaining safe and efficient gas
            appliances for your home and business.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-orange-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Statistics section */}
        <div className="mt-20 bg-orange-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
