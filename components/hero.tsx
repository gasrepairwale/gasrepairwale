"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, CheckCircle, Calendar, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { trackPhoneCall, trackServiceBooking, sendLeadNotification, getWhatsAppRedirectUrl } from "@/lib/analytics"

export function Hero() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    message: "",
  })

  // Area options based on selected location
  const areaOptions = {
    pune: [
      { value: "kothrud", label: "Kothrud" },
      { value: "baner", label: "Baner" },
      { value: "wakad", label: "Wakad" },
      { value: "hinjewadi", label: "Hinjewadi" },
      { value: "aundh", label: "Aundh" },
      { value: "warje", label: "Warje" },
      { value: "karve-nagar", label: "Karve Nagar" },
      { value: "hadapsar", label: "Hadapsar" },
      { value: "kharadi", label: "Kharadi" },
      { value: "fursungi", label: "Fursungi" },
      { value: "undri", label: "Undri" },
      { value: "mohammadwadi", label: "Mohammadwadi" },
      { value: "wanwadi", label: "Wanwadi" },
      { value: "kondhwa", label: "Kondhwa" },
      { value: "dhanori", label: "Dhanori" },
      { value: "lohegaon", label: "Lohegaon" },
      { value: "viman-nagar", label: "Viman Nagar" },
      { value: "vishrantwadi", label: "Vishrantwadi" },
      { value: "koregaon-park", label: "Koregaon Park" },
      { value: "keshav-nagar", label: "Keshav Nagar" },
      { value: "mundhwa", label: "Mundhwa" },
      { value: "magarpatta-city", label: "Magarpatta City" },
      { value: "amanora-park-town", label: "Amanora Park Town" },
      { value: "wagholi", label: "Wagholi" },
      { value: "yerwada", label: "Yerwada" },
      { value: "bhekrai-nagar", label: "Bhekrai Nagar" },
      { value: "nibm-road", label: "NIBM Road" },
    ],
    Mumbai: [
      { value: "borivali-east-west", label: "Borivali East West" },
      { value: "kandivali-east-west", label: "Kandivali East West" },
      { value: "malad-east-west", label: "Malad East West" },
      { value: "goregaon-east-west", label: "Goregaon East West" },
      { value: "ram-mandir-east", label: "Ram Mandir East" },
      { value: "andheri-west", label: "Andheri West" },
      { value: "vile-parle-east-west", label: "Vile Parle East & West" },
      { value: "santacruz-east-west", label: "Santacruz East & West" },
      { value: "bandra-east-west", label: "Bandra East & West" },
      { value: "mahim-west", label: "Mahim West" },
      { value: "dadar-east-west", label: "Dadar East & West" },
      { value: "wadala-west", label: "Wadala West" },
      { value: "mumbai-central-east-west", label: "Mumbai Central East West" },
      { value: "mahalaxmi-east-west", label: "Mahalaxmi East & West" },
      { value: "marine-drive-colaba", label: "Marine Drive & Colaba" },
      { value: "churchgate", label: "Churchgate" },
    ],
  }

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location)
    setSelectedArea("") // Reset area when location changes
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    try {
      setSubmitting(true)
      
      // 1. Send Lead Notification to Telegram (Server-side)
      await sendLeadNotification({
        name: form.name,
        phone: form.phone,
        service: form.service,
        city: selectedLocation,
        area: selectedArea,
        address: form.address,
        message: form.message,
        source: "Hero Form"
      })

      // 2. Track successful booking in GA4
      trackServiceBooking({
        serviceType: form.service,
        city: selectedLocation,
        area: selectedArea,
        phone: form.phone,
      })

      // 3. Optional: Send Email/Database (existing logic)
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          address: form.address,
          message: form.message,
          city: selectedLocation,
          area: selectedArea,
          source: "Hero Form"
        }),
      })

      toast({ title: "Request sent", description: "Redirecting to WhatsApp for instant confirmation..." })

      // 4. Redirect to WhatsApp
      const waUrl = getWhatsAppRedirectUrl({
        serviceType: form.service,
        city: selectedLocation,
        area: selectedArea,
        phone: form.phone,
        address: form.address,
        message: form.message
      })

      // Delayed redirect to allow GA4 to fire and user to see toast
      setTimeout(() => {
        window.location.href = waUrl
      }, 1500)

      setForm({ name: "", phone: "", email: "", service: "", address: "", message: "" })
      setSelectedLocation("")
      setSelectedArea("")
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-100 text-green-800 border border-green-200 hover:bg-green-200 px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                5000+ Happy Customers
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200 px-4 py-2 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                24/7 Emergency Service
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200 px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-1" />
                4.9★ Rating
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
                Services in Pune & Mumbai
              </h1>

              <div className="text-xl text-gray-700 leading-relaxed space-y-3">
                <p className="font-semibold">🔥 Expert Gas Stove Repair, Pipeline Installation & Emergency Services</p>
                <p className="text-lg">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                    Emergency Service:
                  </span>{" "}
                  15-30 minute response time across both cities
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
                    <p className="font-semibold text-gray-900">Same Day Service</p>
                    <p className="text-sm text-gray-600">Quick repairs & installations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
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
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">All Areas Covered</p>
                    <p className="text-sm text-gray-600">Pune & Mumbai regions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Transparent Pricing</p>
                    <p className="text-sm text-gray-600">No hidden charges</p>
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
                <a 
                  href="tel:+918302713127" 
                  className="flex items-center space-x-2"
                  onClick={() => trackPhoneCall("+918302713127")}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Call Now: +91 83027 13127</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-white font-semibold hover:shadow-lg transition-all duration-200"
              >
                WhatsApp Quote
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
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Booking Form */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Zap className="h-4 w-4" />
                    <span>INSTANT BOOKING - FREE QUOTE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Gas Service</h3>
                  <p className="text-gray-600">Get expert technician at your doorstep today</p>
                </div>

                <form className="space-y-4" onSubmit={onSubmit}>
                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Full Name *"
                      className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Mobile Number *"
                      type="tel"
                      className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>

                  {/* Row 2: Email */}
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />

                  {/* Row 3: Service + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select Service Type *</option>
                      <option value="gas-stove-repair">Gas Stove Repair</option>
                      <option value="pipeline-service">Pipeline Service</option>
                      <option value="safety-inspection">Safety Inspection</option>
                      <option value="emergency-repair">Emergency Repair</option>
                      <option value="new-installation">New Installation</option>
                      <option value="maintenance-contract">Maintenance Contract</option>
                    </select>

                    <select
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                      value={selectedLocation}
                      onChange={(e) => handleLocationChange(e.target.value)}
                      required
                    >
                      <option value="">Select City/Location *</option>
                      <option value="pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                  </div>

                  {/* Row 4: Area (conditional) */}
                  {selectedLocation && (
                    <select
                      className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      required
                    >
                      <option value="">Select Area *</option>
                      {areaOptions[selectedLocation as keyof typeof areaOptions]?.map((area) => (
                        <option key={area.value} value={area.value}>
                          {area.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Row 5: Address */}
                  <Input
                    placeholder="Complete Address *"
                    className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    required
                  />

                  {/* Row 6: Message */}
                  <Textarea
                    placeholder="Describe your gas issue or requirements (Optional)"
                    rows={3}
                    className="border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    {submitting ? "Sending..." : "Book Service Now - FREE Quote"}
                  </Button>
                </form>

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>No Hidden Charges • Transparent Pricing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Licensed Technicians • Insured Service</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
                    <Clock className="h-4 w-4" />
                    <span>Same Day Service Available</span>
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
