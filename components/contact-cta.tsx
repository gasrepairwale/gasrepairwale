"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, PhoneCall, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { trackPhoneCall, trackServiceBooking, sendLeadNotification, getWhatsAppRedirectUrl } from "@/lib/analytics"

/**
 * Contact CTA Section Component
 * Comprehensive contact form with complete service list and company helpline information
 */
export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Pune",
    service: "",
    message: "",
  })
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    try {
      setSubmitting(true)

      // 1. Send Lead Notification to Telegram (Server-side)
      await sendLeadNotification({
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        city: formData.city,
        area: "General",
        message: formData.message,
        source: "Contact CTA Form",
      })

      // 2. Track successful booking in GA4
      trackServiceBooking({
        serviceType: formData.service,
        city: formData.city,
        area: "General",
        phone: formData.phone,
      })

      // 3. Optional: Send Email/Database
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          service: formData.service,
          message: formData.message,
          area: "General",
          source: "Contact CTA Form",
        }),
      })

      toast({
        title: "Message Sent!",
        description: "Redirecting to WhatsApp for instant confirmation...",
      })

      // 4. Redirect to WhatsApp
      const waUrl = getWhatsAppRedirectUrl({
        serviceType: formData.service,
        city: formData.city,
        area: "General",
        phone: formData.phone,
        message: formData.message,
      })

      // Delayed redirect
      setTimeout(() => {
        window.location.href = waUrl
      }, 1500)

      setFormData({ name: "", phone: "", email: "", city: "Pune", service: "", message: "" })
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-[#071126] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-3">Get In Touch</h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Ready to fix your gas appliances? Contact us now for quick, professional doorstep service. We're here to help
                24/7 across Pune, Mumbai & Hyderabad.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {/* Helplines */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/30 border border-blue-500/30 rounded-xl text-sky-400 shrink-0 mt-1">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200 text-sm">Direct Helplines</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">Pune & Mumbai:</span>
                      <a
                        href="tel:+918302713127"
                        className="text-base sm:text-lg font-bold text-white hover:text-sky-300 transition-colors"
                        onClick={() => trackPhoneCall("+918302713127", "Contact CTA Pune")}
                      >
                        +91 83027 13127
                      </a>
                    </div>
                    <div className="hidden sm:block text-slate-600">|</div>
                    <div>
                      <span className="text-xs text-slate-400 block">Hyderabad Hub:</span>
                      <a
                        href="tel:+916304739440"
                        className="text-base sm:text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        onClick={() => trackPhoneCall("+916304739440", "Contact CTA Hyd")}
                      >
                        +91 63047 39440
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/30 border border-blue-500/30 rounded-xl text-sky-400 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Email Us</p>
                  <a
                    href="mailto:info@gasrepairwale.com"
                    className="text-base font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    info@gasrepairwale.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/30 border border-blue-500/30 rounded-xl text-sky-400 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Service Areas</p>
                  <p className="text-base font-bold text-white">Pune, Mumbai & Hyderabad (80+ Localities)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/30 border border-blue-500/30 rounded-xl text-sky-400 shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Working Hours</p>
                  <p className="text-base font-bold text-white">24/7 Emergency Dispatch</p>
                  <p className="text-slate-400 text-xs mt-0.5">Regular Doorstep Service: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="bg-white/[0.05] border border-white/10 p-5 rounded-2xl">
              <h3 className="font-bold text-base text-white mb-1.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Emergency Service Available</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Gas leaks and safety issues? Don't wait! Call us immediately for 15-25 minute emergency doorstep repairs and electronic leak inspections.
              </p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="shadow-none border border-slate-200 bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Request Service</h3>
                  <p className="text-slate-600 text-sm">Fill out the form and our nearest technician will call you within 15-25 minutes</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 border-2 border-slate-200 rounded-xl focus:border-blue-600"
                    />
                    <Input
                      placeholder="Mobile Number *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 border-2 border-slate-200 rounded-xl focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Email Address (Optional)"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-2 border-slate-200 rounded-xl focus:border-blue-600"
                    />
                    <select
                      className="w-full h-12 px-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none bg-white text-slate-800 font-medium text-sm"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                    >
                      <option value="Pune">City: Pune</option>
                      <option value="Mumbai">City: Mumbai</option>
                      <option value="Hyderabad">City: Hyderabad</option>
                    </select>
                  </div>

                  {/* Comprehensive Services Dropdown */}
                  <select
                    className="w-full h-12 px-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none bg-white text-slate-800 font-medium text-sm"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select Service Required *</option>
                    <option value="Gas Stove Repair & Blue Flame Tuning">Gas Stove Repair &amp; Blue Flame Tuning</option>
                    <option value="Built-In Glass Hob & Cooktop Repair">Built-In Glass Hob &amp; Cooktop Repair</option>
                    <option value="Auto-Ignition Pulse & Spark Repair">Auto-Ignition Pulse &amp; Spark Repair</option>
                    <option value="Copper Gas Pipeline Installation">Copper Gas Pipeline Installation &amp; Fitting</option>
                    <option value="24/7 Emergency Gas Leak Detection">24/7 Emergency Gas Leak Detection &amp; Sealing</option>
                    <option value="Ultrasonic Deep Burner Cleaning">Ultrasonic Deep Burner Cleaning &amp; Descaling</option>
                    <option value="Commercial Kitchen Bhatti & Stove Service">Commercial Bhatti &amp; Restaurant Cooking Range</option>
                    <option value="LPG Cylinder to PNG Conversion">LPG Cylinder to PNG Pipeline Conversion</option>
                    <option value="Gas Safety Inspection & Pressure Test">Gas Safety Inspection &amp; Pressure Drop Test</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  </select>

                  <Textarea
                    placeholder="Describe your gas issue or requirements (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="border-2 border-slate-200 rounded-xl focus:border-blue-600"
                  />

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 text-white bg-blue-600 hover:bg-blue-700 text-base font-bold rounded-xl shadow-none transition-colors"
                  >
                    {submitting ? "Sending Request..." : "Send Request — Instant Quote"}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent Upfront Quote • Pay After 100% Satisfactory Service</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
