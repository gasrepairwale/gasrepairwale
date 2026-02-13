"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { trackPhoneCall, trackServiceBooking } from "@/lib/analytics"

/**
 * Contact CTA Section Component
 * Contact form and company contact information
 */
export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSubmitting(true)
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send")
      }

      // Track successful booking
      trackServiceBooking({
        serviceType: formData.service,
        city: "General", // This is a general contact form
        area: "General",
        phone: formData.phone,
      })

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 30 minutes.",
      })
      setFormData({ name: "", phone: "", email: "", service: "", message: "" })
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                Ready to fix your gas appliances? Contact us now for quick, professional service. We're here to help
                24/7.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Call Us Now</p>
                  <a 
                    href="tel:+918302713127" 
                    className="text-lg hover:underline"
                    onClick={() => trackPhoneCall("+918302713127")}
                  >
                    +91 83027 13127
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:info@gasrepairewale.com" className="text-lg hover:underline">
                    info@gasrepairewale.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-lg">Pune & Mumbai</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-lg">24/7 Emergency Service</p>
                  <p className="text-orange-100">Regular: 8 AM - 8 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="bg-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🚨 Emergency Service Available</h3>
              <p className="text-orange-100">
                Gas leaks and safety issues? Don't wait! Call us immediately for 24/7 emergency repairs and safety
                inspections.
              </p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Service</h3>
                  <p className="text-gray-600">Fill out the form and we'll contact you within 30 minutes</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />

                  <Input
                    placeholder="Service Required"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="h-12"
                  />

                  <Textarea
                    placeholder="Describe your issue or requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />

                  <Button type="submit" disabled={submitting} className="w-full h-12 text-white bg-orange-600 hover:bg-orange-700 text-lg">
                    {submitting ? "Sending..." : "Send Request"}
                  </Button>
                </form>

                <div className="text-center text-sm text-gray-500">
                  <p>🔒 Your information is secure and will not be shared</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
