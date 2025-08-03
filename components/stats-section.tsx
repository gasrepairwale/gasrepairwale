"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Star, Shield, Award, CheckCircle } from "lucide-react"

/**
 * Statistics Section Component
 * Animated counters and impressive statistics
 */
export function StatsSection() {
  const [counters, setCounters] = useState({
    customers: 0,
    years: 0,
    rating: 0,
    response: 0,
  })

  const finalStats = {
    customers: 5000,
    years: 10,
    rating: 4.9,
    response: 15,
  }

  // Animate counters on component mount
  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = {
      customers: setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          customers: Math.min(prev.customers + Math.ceil(finalStats.customers / steps), finalStats.customers),
        }))
      }, stepDuration),

      years: setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          years: Math.min(prev.years + Math.ceil(finalStats.years / steps), finalStats.years),
        }))
      }, stepDuration),

      rating: setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          rating: Math.min(prev.rating + finalStats.rating / steps, finalStats.rating),
        }))
      }, stepDuration),

      response: setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          response: Math.min(prev.response + Math.ceil(finalStats.response / steps), finalStats.response),
        }))
      }, stepDuration),
    }

    // Clear intervals when counters reach final values
    setTimeout(() => {
      Object.values(intervals).forEach(clearInterval)
      setCounters(finalStats)
    }, duration)

    return () => {
      Object.values(intervals).forEach(clearInterval)
    }
  }, [])

  const stats = [
    {
      icon: Users,
      number: `${counters.customers.toLocaleString()}+`,
      label: "Happy Customers",
      description: "Across Pune & Mumbai",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      number: `${counters.years}+`,
      label: "Years Experience",
      description: "Industry expertise",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: Star,
      number: `${counters.rating.toFixed(1)}★`,
      label: "Google Rating",
      description: "Based on 500+ reviews",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Clock,
      number: `${counters.response} Min`,
      label: "Response Time",
      description: "Emergency service",
      color: "from-red-500 to-orange-500",
    },
  ]

  const achievements = [
    { icon: Shield, text: "Government Licensed Business" },
    { icon: Award, text: "Industry Leader in Gas Services" },
    { icon: CheckCircle, text: "100% Customer Satisfaction" },
    { icon: Users, text: "Largest Service Network" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            📊 Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Impressive
            </span>{" "}
            Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak louder than words. See why we're India's most trusted gas repair service!
          </p>
        </div>

        {/* Main statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2 text-white">{stat.number}</div>
                  <div className="text-xl font-bold mb-1 text-white">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">
            🏆 Our <span className="text-orange-400">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{achievement.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full text-lg font-bold">
            <CheckCircle className="h-5 w-5" />
            <span>Join 5000+ Satisfied Customers Today!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
