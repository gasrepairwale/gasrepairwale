import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

/**
 * Testimonials Section Component
 * Customer reviews and feedback display
 */
export function Testimonials() {
  // Customer testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kothrud, Pune",
      rating: 5,
      text: "Excellent service! My gas stove was not working properly and they fixed it within an hour. Very professional and reasonably priced.",
      service: "Gas Stove Repair",
    },
    {
      name: "Priya Sharma",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      text: "Quick response and quality work. The technician was knowledgeable and explained everything clearly. Highly recommended!",
      service: "Gas Pipeline Service",
    },
    {
      name: "Amit Patel",
      location: "Baner, Pune",
      rating: 5,
      text: "Called them for an emergency gas leak issue. They arrived within 20 minutes and resolved the problem safely. Great service!",
      service: "Emergency Repair",
    },
    {
      name: "Sunita Reddy",
      location: "Madhapur, Hyderabad",
      rating: 5,
      text: "Professional installation of new gas connection. Clean work, proper testing, and good follow-up service. Very satisfied!",
      service: "Installation Service",
    },
    {
      name: "Vikram Singh",
      location: "Wakad, Pune",
      rating: 5,
      text: "Regular maintenance service for our restaurant. Always on time, thorough inspection, and competitive pricing. Trustworthy team!",
      service: "Maintenance Service",
    },
    {
      name: "Kavitha Nair",
      location: "Kondapur, Hyderabad",
      rating: 5,
      text: "Burner was not igniting properly. They diagnosed and fixed the issue quickly. Fair pricing and excellent customer service.",
      service: "Gas Stove Repair",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-orange-600" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Customer info */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-orange-600">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall rating summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-gray-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
