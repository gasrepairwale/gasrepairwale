import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, Star, CheckCircle } from "lucide-react"

/**
 * Trust Signals Component
 * Builds credibility and trust with visitors
 */
export function TrustSignals() {
  const trustElements = [
    {
      icon: Shield,
      title: "Government Licensed",
      description: "Certified & Registered Business",
      badge: "VERIFIED",
      color: "green",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "10+ Years of Excellence",
      badge: "TRUSTED",
      color: "blue",
    },
    {
      icon: Users,
      title: "5000+ Happy Customers",
      description: "Across Pune & Hyderabad",
      badge: "POPULAR",
      color: "purple",
    },
    {
      icon: Star,
      title: "4.9★ Google Rating",
      description: "Based on 500+ Reviews",
      badge: "TOP RATED",
      color: "yellow",
    },
  ]

  const certifications = [
    "Gas Safety Certified",
    "Insurance Approved",
    "Government Registered",
    "ISO Compliant",
    "Emergency Response Certified",
    "Customer Satisfaction Guaranteed",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🏆 Why <span className="text-orange-600">5000+ Customers</span> Trust Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">India's most trusted gas repair service with proven track record</p>
        </div>

        {/* Trust elements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon
            const badgeColors = {
              green: "bg-green-100 text-green-800",
              blue: "bg-blue-100 text-blue-800",
              purple: "bg-purple-100 text-purple-800",
              yellow: "bg-yellow-100 text-yellow-800",
            }

            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <Badge
                      className={`absolute -top-2 -right-2 ${badgeColors[element.color as keyof typeof badgeColors]} text-xs font-bold`}
                    >
                      {element.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{element.title}</h3>
                  <p className="text-gray-600 text-sm">{element.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🛡️ Our <span className="text-green-600">Certifications</span> &{" "}
              <span className="text-blue-600">Guarantees</span>
            </h3>
            <p className="text-gray-600">Licensed, insured, and certified for your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency guarantee */}
        <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Clock className="h-6 w-6 animate-pulse" />
            <span className="text-2xl font-black">⚡ 15-MINUTE RESPONSE GUARANTEE ⚡</span>
          </div>
          <p className="text-lg">Gas Emergency? We guarantee to respond within 15 minutes or your service is FREE!</p>
        </div>
      </div>
    </section>
  )
}
