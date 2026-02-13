"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, Clock, Shield, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { trackServiceBooking, sendLeadNotification, getWhatsAppRedirectUrl } from "@/lib/analytics"

type QuickBookingFormProps = {
  area: any
  className?: string
}

export function QuickBookingForm({ area, className = "" }: QuickBookingFormProps) {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    preferredTime: "",
    message: "",
  })

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
        city: area?.city,
        area: area?.name,
        address: form.address,
        preferredTime: form.preferredTime,
        message: form.message,
        source: "Quick Booking Form"
      })

      // 2. Track successful booking in GA4
      trackServiceBooking({
        serviceType: form.service,
        city: area?.city,
        area: area?.name,
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
          address: form.address,
          service: form.service,
          preferredTime: form.preferredTime,
          message: form.message,
          city: area?.city,
          area: area?.name,
          source: "Quick Booking Form"
        }),
      })

      toast({ title: "Request sent", description: "Redirecting to WhatsApp for instant confirmation..." })

      // 4. Redirect to WhatsApp
      const waUrl = getWhatsAppRedirectUrl({
        serviceType: form.service,
        city: area?.city,
        area: area?.name,
        phone: form.phone,
        address: form.address,
        preferredTime: form.preferredTime,
        message: form.message
      })

      // Delayed redirect
      setTimeout(() => {
        window.location.href = waUrl
      }, 1500)

      setForm({ name: "", phone: "", email: "", address: "", service: "", preferredTime: "", message: "" })
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className={`shadow-2xl border-0 bg-white/95 backdrop-blur-sm ${className}`}>
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="h-4 w-4" />
              <span>INSTANT BOOKING - FREE QUOTE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Gas Service in {area?.name}</h3>
            <p className="text-gray-600">Get expert technician at your doorstep in {area?.responseTime}</p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
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

            <Input
              placeholder="Email Address"
              type="email"
              className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <Input
              placeholder={`Complete Address in ${area?.name} *`}
              className="h-12 border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
            />

            <select
              className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
            >
              <option value="">Select Service Type *</option>
              <option value="gas-stove-repair">Gas Stove Repair</option>
              <option value="gas-stove-service">Gas Stove Service</option>
              <option value="pipeline-installation">Pipeline Installation</option>
              <option value="pipeline-repair">Pipeline Repair</option>
              <option value="safety-inspection">Safety Inspection</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="new-connection">New Gas Connection</option>
              <option value="maintenance-contract">Maintenance Contract</option>
            </select>

            <select
              className="w-full h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white"
              value={form.preferredTime}
              onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
              required
            >
              <option value="">Preferred Time Slot *</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 8 PM)</option>
              <option value="emergency">Emergency (Immediate)</option>
            </select>

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
              <Shield className="h-4 w-4" />
              <span>Licensed Technicians • Insured Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
              <Clock className="h-4 w-4" />
              <span>Response Time: {area?.responseTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}



