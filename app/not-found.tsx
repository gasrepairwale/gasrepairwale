"use client"

import Link from "next/link"
import { Home, Search, Phone, ArrowLeft, Wrench, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text">
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-gray-200 animate-pulse">404</div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished like gas from a leaky pipe! Don't worry, our expert team
            can help you find what you need.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-full">
                <Wrench className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Need Gas Repair Services?</h3>
            <p className="text-gray-600">
              Even if this page is broken, our gas repair services are always working perfectly!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Home className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Go Home
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Wrench className="h-5 w-5 mr-2 group-hover:animate-spin" />
            Our Services
          </Link>

          <Link
            href="/locations/pune"
            className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <MapPin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Locations
          </Link>

          <a
            href="tel:+919876543210"
            className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Call Now
          </a>
        </div>

        {/* Popular Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services"
              className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-blue-200 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-300 transition-colors">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Gas Stove Repair</h3>
                <p className="text-sm text-gray-600">Expert repair services for all gas stove brands</p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-orange-200 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-orange-300 transition-colors">
                  <Search className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Pipeline Services</h3>
                <p className="text-sm text-gray-600">Installation and maintenance of gas pipelines</p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-red-200 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-red-300 transition-colors">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Emergency Services</h3>
                <p className="text-sm text-gray-600">24/7 emergency gas repair services</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Emergency Gas Services</h2>
          <p className="mb-6 opacity-90">
            Gas leak or emergency? Don't wait! Call us immediately for 24/7 emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919876543210"
              className="flex items-center px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergency: +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Emergency
            </a>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
