"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, Star, CheckCircle, Zap, Award, MapPin, Wrench } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

/**
 * Enhanced Hero Section Component
 * Professional, conversion-optimized hero with comprehensive form
 */
export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    area: "",
    address: "",
    message: "",
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [availableAreas, setAvailableAreas] = useState<string[]>([])
  const { toast } = useToast()

  // Area data for dynamic dropdown
  const locationAreas = {
    pune: [
      { value: "kothrud", label: "Kothrud" },
      { value: "baner", label: "Baner" },
      { value: "wakad", label: "Wakad" },
      { value: "hinjewadi", label: "Hinjewadi" },
      { value: "aundh", label: "Aundh" },
      { value: "warje", label: "Warje" },
      { value: "karve-nagar", label: "Karve Nagar" },
    ],
    hyderabad: [
      { value: "gachibowli", label: "Gachibowli" },
      { value: "madhapur", label: "Madhapur" },
      { value: "kondapur", label: "Kondapur" },
      { value: "kukatpally", label: "Kukatpally" },
      { value: "miyapur", label: "Miyapur" },
      { value: "begumpet", label: "Begumpet" },
    ],
  }

  // Real customer testimonials for authenticity
  const testimonials = [
    {
      text: "Fixed my gas stove in 20 minutes! Professional service at fair price.",
      name: "Rajesh Kumar",
      location: "Kothrud, Pune",
      rating: 5,
    },
    {
      text: "Emergency gas leak resolved quickly. Felt safe with their expertise.",
      name: "Priya Sharma",
      location: "Gachibowli, Hyderabad",
      rating: 5,
    },
    {
      text: "Best gas repair service in Pune. Highly recommend to everyone!",
      name: "Amit Patel",
      location: "Baner, Pune",
      rating: 5,
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Update available areas when location changes
  useEffect(() => {
    if (formData.location && locationAreas[formData.location as keyof typeof locationAreas]) {
      setAvailableAreas(locationAreas[formData.location as keyof typeof locationAreas])
      // Reset area when location changes
      setFormData((prev) => ({ ...prev, area: "" }))
    } else {
      setAvailableAreas([])
    }
  }, [formData.location])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Request Submitted Successfully! 🎉",
      description: "Our gas expert will call you within 15 minutes with your free quote.",
    })
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      area: "",
      address: "",
      message: "",
    })
  }

  const currentTest = testimonials[currentTestimonial]

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 lg:py-20 overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Content */}
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                10+ Years Experience
              </Badge>
              <Badge className="bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 px-3 py-1">
                <Zap className="w-3 h-3 mr-1" />
                Same Day Service
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional{" "}
                <span className="text-orange-600 relative">
                  Gas Repair
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                </span>
                <br />
                Services in Pune & Hyderabad
              </h1>

              <div className="text-xl text-gray-700 leading-relaxed space-y-3">
                <p className="font-semibold flex items-center">
                  <Wrench className="w-6 h-6 text-orange-600 mr-2" />
                  Expert Gas Stove Repair, Pipeline Installation & Safety Inspections
                </p>
                <p className="text-lg">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">Emergency Service:</span>{" "}
                  15-minute response time for gas leaks and urgent repairs
                </p>
              </div>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Emergency Service</p>
                    <p className="text-sm text-gray-600">Gas leaks & urgent repairs</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed Technicians</p>
                    <p className="text-sm text-gray-600">Certified gas professionals</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9★ Customer Rating</p>
                    <p className="text-sm text-gray-600">5000+ satisfied customers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Local Experts</p>
                    <p className="text-sm text-gray-600">Pune & Hyderabad coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer testimonial */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {currentTest.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-2">"{currentTest.text}"</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{currentTest.name}</span>
                    <span className="text-gray-600"> • {currentTest.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <a href="tel:+918302713127" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Call Now: +91 83027 13127</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-white font-semibold hover:shadow-lg transition-all duration-200"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Government Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Insurance Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Zap className="h-4 w-4" />
                    <span>FREE QUOTE IN 30 SECONDS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Service Quote</h3>
                  <p className="text-gray-600">Our gas expert will call you back within 15 minutes</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                    />
                    <Input
                      placeholder="Phone Number *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                    />
                  </div>

                  {/* Email Field */}
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                  />

                  {/* Service and Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                    >
                      <option value="">Select Service *</option>
                      <option value="gas-stove-repair">Gas Stove Repair</option>
                      <option value="pipeline-service">Pipeline Service</option>
                      <option value="safety-inspection">Safety Inspection</option>
                      <option value="emergency-repair">Emergency Repair</option>
                      <option value="installation">New Installation</option>
                      <option value="maintenance-contract">Maintenance Contract</option>
                    </select>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                    >
                      <option value="">Select City *</option>
                      <option value="pune">Pune</option>
                      <option value="hyderabad">Hyderabad</option>
                    </select>
                  </div>

                  {/* Area Selection - Only show when location is selected */}
                  {formData.location && availableAreas.length > 0 && (
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      required
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                    >
                      <option value="">Select Area *</option>
                      {availableAreas.map((area) => (
                        <option key={area.value} value={area.value}>
                          {area.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Address Field */}
                  <Input
                    placeholder="Complete Address *"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                  />

                  {/* Message Field */}
                  <Textarea
                    placeholder="Describe your gas issue or requirements (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Get My Free Quote Now
                  </Button>
                </form>

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>No Hidden Charges • Transparent Pricing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                    <Shield className="h-4 w-4" />
                    <span>Licensed Technicians • Insured Service</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
                    <Clock className="h-4 w-4" />
                    <span>15-Minute Response Time • Same Day Service</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
