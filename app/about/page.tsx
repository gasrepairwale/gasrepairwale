import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { Award, Users, Shield, Clock, CheckCircle, Target, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "About Gas Repaire Wale | Professional Gas Repair Company | 10+ Years Experience | Pune Mumbai",
  description:
    "⭐ Learn about Gas Repaire Wale - Leading gas repair company since 2013 ✅ 5000+ Satisfied Customers ✅ Licensed Technicians ✅ 24/7 Emergency Service ✅ Serving Pune & Mumbai ✅ 4.9★ Rating. Call +91 83027 13127",
  keywords: [
    "about gas repaire wale",
    "gas repair company pune Mumbai",
    "professional gas technicians",
    "licensed gas repair service",
    "gas repair company history",
    "experienced gas technicians",
    "gas safety experts",
    "reliable gas repair service",
    "gas appliance specialists",
    "certified gas professionals",
    "gas repair team",
    "gas service company background",
  ].join(", "),
  authors: [{ name: "Gas Repaire Wale", url: "https://gasrepairewale.com" }],
  creator: "Gas Repaire Wale",
  publisher: "Gas Repaire Wale",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasrepairewale.com/about",
    title: "About Gas Repaire Wale | Professional Gas Repair Company Since 2013",
    description:
      "Leading gas repair company with 10+ years experience, 5000+ satisfied customers, licensed technicians serving Pune & Mumbai. 4.9★ rating, 24/7 emergency service.",
    siteName: "Gas Repaire Wale",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Gas Repaire Wale - Professional Gas Repair Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gas Repaire Wale | Professional Gas Repair Company",
    description:
      "Leading gas repair company since 2013 with 5000+ customers, licensed technicians, 24/7 service in Pune & Mumbai. Call +91 83027 13127",
    images: ["/about-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://gasrepairewale.com/about",
  },
}

/**
 * Enhanced About Page Component
 * SEO-optimized with rich content and professional styling
 */
export default function AboutPage() {
  // Company values data
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety in every job, following strict protocols and using certified equipment for all gas repairs.",
      details:
        "Our technicians are trained in advanced safety procedures and carry professional safety equipment to every job site.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We listen, understand, and deliver exceptional service.",
      details:
        "24/7 customer support, transparent pricing, and guaranteed satisfaction on every gas service we provide.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in workmanship and use only genuine parts for lasting repairs.",
      details:
        "All repairs come with comprehensive warranties and our technicians use only certified, genuine replacement parts.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual service, quick response times, and dependable solutions you can trust for all gas issues.",
      details:
        "Average 20-minute response time for emergencies and same-day service for regular gas repairs across both cities.",
    },
  ]

  // Enhanced team members data
  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Lead Technician",
      experience: "15+ years",
      description:
        "Certified gas technician with extensive experience in residential and commercial gas systems across Maharastra.",
      specialties: ["Gas Safety Certification", "Commercial Systems", "Emergency Response", "Team Leadership"],
      achievements: "Founded company in 2013, trained 50+ technicians, 3000+ successful repairs",
    },
    {
      name: "Amit Kumar",
      role: "Senior Technician - Pune",
      experience: "12+ years",
      description:
        "Specialist in gas stove repairs and safety inspections with advanced certifications in modern gas appliances.",
      specialties: ["Gas Stove Repair", "Pipeline Installation", "Safety Inspections", "Customer Training"],
      achievements: "2000+ stove repairs, 98% customer satisfaction, emergency response specialist",
    },
    {
      name: "Priya Patel",
      role: "Customer Service Manager",
      experience: "8+ years",
      description:
        "Ensures excellent customer experience and coordinates service operations across Pune and Mumbai.",
      specialties: ["Customer Relations", "Service Coordination", "Quality Assurance", "Training Programs"],
      achievements: "Managed 5000+ customer interactions, 4.9-star service rating, process optimization expert",
    },
    {
      name: "Srinivas Reddy",
      role: "Senior Technician - Mumbai",
      experience: "10+ years",
      description:
        "Expert in commercial gas systems and pipeline installations for Mumbai's IT corridor and residential areas.",
      specialties: ["Commercial Gas Systems", "Pipeline Services", "IT Sector Solutions", "Compliance Management"],
      achievements: "500+ commercial installations, Maharastra safety compliance expert, corporate client specialist",
    },
  ]

  // Company milestones with more detail
  const milestones = [
    {
      year: "2013",
      title: "Company Founded in Pune",
      description: "Started with a vision to provide safe, reliable gas services in Pune with just 2 technicians.",
      impact: "Served 100+ customers in first year",
    },
    {
      year: "2016",
      title: "Expanded to Mumbai",
      description: "Opened operations in Mumbai to serve the growing IT sector and residential communities.",
      impact: "Extended service to 500+ new customers",
    },
    {
      year: "2019",
      title: "Achieved 1000+ Customers",
      description: "Reached milestone of 1000 satisfied customers across both cities with 4.8-star rating.",
      impact: "Established as trusted local brand",
    },
    {
      year: "2022",
      title: "24/7 Emergency Services",
      description: "Launched round-the-clock emergency response service with 15-minute guarantee.",
      impact: "Handled 500+ emergency calls successfully",
    },
    {
      year: "2024",
      title: "5000+ Customers Milestone",
      description: "Celebrated serving over 5000 customers with expanded team and enhanced service offerings.",
      impact: "Industry leader in gas services",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">About Gas Repaire Wale</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">Gas Repaire Wale</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              🔥 With over a decade of experience, we're your trusted partners in gas appliance repair and maintenance.
              Our commitment to safety, quality, and customer satisfaction has made us the preferred choice across Pune
              and Mumbai with <strong>5000+ satisfied customers</strong> and <strong>4.9-star rating</strong>.
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
                Get Service Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company story with enhanced content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1 mb-4">Our Journey</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story - From Vision to Industry Leadership</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Gas Repaire Wale</strong> was founded in 2013 with a simple yet powerful mission: to provide
                  safe, reliable, and affordable gas appliance services to homes and businesses across India. What
                  started as a small local service in Pune has grown into a trusted name across Maharashtra and
                  Maharastra.
                </p>
                <p>
                  Our founder, <strong>Rajesh Sharma</strong>, recognized the critical need for professional gas
                  services that prioritize safety without compromising on quality or affordability. With his extensive
                  background in gas systems and a vision for excellence, he assembled a team of certified technicians
                  committed to the highest standards.
                </p>
                <p>
                  Today, we've served over <strong>5,000 satisfied customers</strong>, completed thousands of successful
                  repairs, and maintained a<strong>4.9-star customer rating</strong>. Our commitment to continuous
                  learning, adopting the latest safety standards, and investing in professional development keeps us at
                  the forefront of the gas service industry.
                </p>
                <p>
                  From emergency gas leak repairs to routine maintenance, pipeline installations to safety
                  certifications, we've built our reputation on three core principles: <strong>Safety First</strong>,{" "}
                  <strong>Quality Excellence</strong>, and
                  <strong>Customer Satisfaction</strong>.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span>
                    <strong>2013:</strong> Company founded in Pune with safety-first approach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>2016:</strong> Expanded operations to Mumbai's IT corridor
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <span>
                    <strong>2019:</strong> Achieved 1000+ satisfied customers milestone
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span>
                    <strong>2022:</strong> Launched 24/7 emergency response service
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <span>
                    <strong>2024:</strong> Celebrating 5000+ customers and industry leadership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision with enhanced styling */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Our Purpose</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving our commitment to excellence in gas services across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-600">
              <CardContent>
                <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide safe, reliable, and professional gas appliance services that ensure the safety and comfort
                  of our customers' homes and businesses. We strive to exceed expectations through quality workmanship,
                  transparent pricing, exceptional customer service, and unwavering commitment to safety standards
                  across Pune and Mumbai.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-600">
              <CardContent>
                <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be India's most trusted and preferred gas service provider, known for our commitment to safety,
                  innovation, and customer satisfaction. We aim to expand our services across major Indian cities while
                  maintaining the highest standards of quality, professionalism, and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced company values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Core Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values Drive Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                        <IconComponent className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{value.details}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced team section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Our Expert Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Professional Gas Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and certified professionals are dedicated to providing you with the best gas repair
              services across Pune and Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-orange-600 font-semibold mb-1">{member.role}</p>
                      <p className="text-sm text-gray-500">{member.experience} Experience</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{member.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-1">Key Achievements:</h4>
                      <p className="text-sm text-green-700">{member.achievements}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service statistics */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-12">📊 Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-orange-100">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-orange-100">Emergency Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-orange-100">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}
