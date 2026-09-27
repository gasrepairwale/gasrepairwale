import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { SafetyGuarantees } from "@/components/safety-guarantees"
import { BrandShowcase } from "@/components/brand-showcase"
import { QuickBookingForm } from "@/components/quick-booking-form"
import {
 Flame,
 Wrench,
 Settings,
 Shield,
 Clock,
 CheckCircle,
 AlertTriangle,
 PenToolIcon as Tool,
 Home,
 Building,
 Phone,
 Award,
} from "lucide-react"
import { TrackedWhatsAppButton } from "@/components/tracked-whatsapp-button"

export const metadata: Metadata = {
 title: "Gas Repair Services | Gas Stove Repair & Pipeline Services | Gas Repair Wale",
 description:
 "Complete Gas Repair Services in Pune, Mumbai & Hyderabad Gas Stove Repair Pipeline Installation Safety Inspections 24/7 Emergency Service Licensed Technicians. Call +91 83027 13127",
 keywords: [
 "gas repair services",
 "gas stove repair",
 "gas pipeline installation",
 "gas safety inspection",
 "emergency gas repair",
 "gas appliance maintenance",
 "residential gas services",
 "commercial gas services",
 "gas leak repair",
 "gas burner repair",
 "gas valve replacement",
 "gas meter installation",
 "gas connection services",
 "professional gas technicians",
 "licensed gas repair",
 "gas services pune mumbai hyderabad",
 ].join(", "),
 authors: [{ name: "Gas Repair Wale", url: "https://gasrepairwale.com" }],
 creator: "Gas Repair Wale",
 publisher: "Gas Repair Wale",
 robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
 openGraph: {
 type: "website",
 locale: "en_IN",
 url: "https://gasrepairwale.com/services",
 title: "Professional Gas Repair Services | Gas Stove Repair | Pipeline Installation",
 description:
 "Complete gas repair services including stove repair, pipeline installation, safety inspections, and emergency service in Pune, Mumbai & Hyderabad.",
 siteName: "Gas Repair Wale",
 images: [
 {
 url: "https://gasrepairwale.com/api/og?area=All+Services&city=Pune+Mumbai+Hyderabad&service=Gas+Stove+and+Pipeline+Repair",
 width: 1200,
 height: 630,
 alt: "Gas Repair Wale - Professional Gas Services",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Professional Gas Repair Services | Gas Repair Wale",
 description:
 "Complete gas repair services in Pune, Mumbai & Hyderabad. Licensed technicians, 24/7 emergency support. Call +91 83027 13127",
 images: ["https://gasrepairwale.com/api/og?area=All+Services&city=Pune+Mumbai+Hyderabad&service=Gas+Stove+and+Pipeline+Repair"],
 },
 alternates: {
 canonical: "https://gasrepairwale.com/services",
 },
}

/**
 * Enhanced Services Page Component
 * SEO-optimized with comprehensive service information
 */
export default function ServicesPage() {
 // Enhanced main services data
 const mainServices = [
 {
 icon: Flame,
 title: "Gas Stove Repair & Burner Tuning",
 image: "/images/burner-after.jpg",
 description:
 "Complete repair and maintenance services for all types of gas stoves, glass cooktops, and hobs.",
 detailedDescription:
 "Our certified technicians specialize in repairing single, double, triple, and 4-burner glass and stainless steel gas stoves. We work with Prestige, Glen, Butterfly, Sunflame, Elica, Faber, and more. From spark ignition failure to calibrated blue flame tuning, we ensure your cooking is 100% safe and efficient.",
 features: [
 "Burner cleaning & brass nozzle recalibration",
 "Auto-ignition spark plug and battery replacement",
 "Gas valve and spindle leak repair",
 "Toughened glass top inspection",
 "Safety cut-off valve testing",
 "Electronic digital gas leak detection",
 "Flame adjustment (yellow to blue flame)",
 "Complete stove deep servicing",
 ],
 commonIssues: [
 "Gas stove not igniting or continuous clicking",
 "Yellow/orange flame creating carbon on utensils",
 "LPG gas smell from stove knobs",
 "Auto-ignition failure or spark missing",
 "Burner clogged with grease and carbon",
 "Low flame on high knob setting",
 ],
 pricing: "Starts at ₹299 (Spare parts transparent MRP)",
 warranty: "30-day service warranty",
 responseTime: "15-25 minutes",
 serviceAreas: "Pune, Mumbai & Hyderabad",
 },
 {
 icon: Wrench,
 title: "Gas Pipeline Installation & Repair",
 image: "/images/copper-pipeline.jpg",
 description:
 "Heavy-duty copper and GI pipeline installation, leak detection, and valve servicing for homes and businesses.",
 detailedDescription:
 "We provide comprehensive gas pipeline solutions including new copper pipeline routing, leak repairs, pressure testing, and compliance certifications. All installations use certified forged brass ball valves and IS-compliant copper piping for absolute leak safety.",
 features: [
 "Heavy-duty copper pipeline routing",
 "Pipeline leak detection & repair",
 "Digital pressure gauge testing",
 "Pipeline relocation during kitchen renovation",
 "Forged brass shut-off valve fittings",
 "Emergency pipeline repairs & hose replacement",
 "Gas meter & cylinder regulator connection",
 "Suraksha reinforced hose installation",
 ],
 commonIssues: [
 "Gas pipeline joint leakage",
 "Low gas pressure to appliances",
 "Pipeline corrosion or wall damage",
 "Faulty or hard shut-off valve",
 "Relocation required for modular kitchen",
 "Safety compliance check",
 ],
 pricing: "Starts at ₹599 (Tested brass valves)",
 warranty: "1 year pipeline warranty",
 responseTime: "20-35 minutes",
 serviceAreas: "Residential & Commercial properties",
 },
 {
 icon: Settings,
 title: "Gas Appliance Maintenance & Deep Cleaning",
 image: "/images/technician-hero.jpg",
 description: "Preventive maintenance and ultrasonic jet cleaning to restore efficiency and appliance life.",
 detailedDescription:
 "Preventive maintenance is crucial for gas appliance safety and kitchen efficiency. Our comprehensive maintenance programs restore flame power, reduce LPG gas consumption by up to 20%, and eliminate hazardous soot build-up through thorough ultrasonic jet descaling.",
 features: [
 "Scheduled maintenance visits",
 "Ultrasonic jet & nozzle descaling",
 "Burner ring carbon removal",
 "Safety system & knob seal checks",
 "Gas efficiency improvements",
 "Spindle lubrication & alignment",
 "Comprehensive safety inspection report",
 "Annual maintenance contracts (AMC)",
 ],
 commonIssues: [
 "Heavy black carbon on cookware",
 "Stiff or jammed stove control knobs",
 "Higher cylinder consumption than usual",
 "Rusted or degraded burner heads",
 "Performance degradation over time",
 "Lack of regular servicing",
 ],
 pricing: "Starts at ₹399 (Complete deep service)",
 warranty: "30-day service warranty",
 responseTime: "Same-day booking",
 serviceAreas: "Home & Business maintenance",
 },
 {
 icon: Shield,
 title: "Gas Safety Inspections & Leak Audits",
 image: "/images/pipeline-safety.jpg",
 description: "Digital sniffer gas leak testing and full safety audits for residential kitchens and restaurants.",
 detailedDescription:
 "Safety is non-negotiable. We conduct thorough gas safety inspections using calibrated electronic combustible gas sniffers for homes, apartments, restaurants, and cloud kitchens. Our verified technicians test all joints, regulators, hoses, and burners to guarantee zero leakage.",
 features: [
 "Electronic digital gas sniffer audit",
 "Regulator & Suraksha hose integrity testing",
 "Pipeline pressure testing & certification",
 "Safety compliance verification",
 "Immediate hazard identification",
 "Digital sign-off with safety certificate",
 "Kitchen ventilation & safety advice",
 "Emergency shut-off mechanism verification",
 ],
 commonIssues: [
 "Unexplained faint gas odor in kitchen",
 "Cracked or aged rubber hose (>2 years old)",
 "Loose regulator or worn O-ring seal",
 "Pre-moving or tenant safety verification",
 "Commercial kitchen licensing requirement",
 "Periodic family safety check",
 ],
 pricing: "Starts at ₹499 (Digital detector audit)",
 warranty: "Verified safety check report",
 responseTime: "Within 20-30 minutes",
 serviceAreas: "Residential & Commercial properties",
 },
 {
 icon: Clock,
 title: "24/7 Emergency Gas Leak Response",
 image: "/images/technician-id-verified.jpg",
 description: "Round-the-clock rapid dispatch for urgent gas leaks, hissing valves, and kitchen hazards.",
 detailedDescription:
 "Gas emergencies cannot wait. Our 24/7 emergency response team is strategically positioned across Pune, Mumbai, and Hyderabad to isolate leaks, secure cylinders, replace failed regulators, and eliminate fire hazards with 15-25 minute guaranteed arrival.",
 features: [
 "24/7 emergency priority dispatch",
 "15-25 minute arrival guarantee",
 "Immediate gas shut-off & leak isolation",
 "Regulator & valve emergency replacement",
 "Electronic combustible gas sniffer verification",
 "Priority senior technician allocation",
 "Post-emergency safety clearance",
 "Safe ventilation guidance",
 ],
 commonIssues: [
 "Sudden strong gas odor in kitchen or building",
 "Hissing sound near cylinder valve or meter",
 "Stuck or broken main cylinder valve",
 "Physical damage to pipeline or pipe connector",
 "Immediate fire hazard concern",
 "Late-night gas connection fault",
 ],
 pricing: "Starts at ₹399 (Priority emergency rate)",
 warranty: "Immediate safety clearance",
 responseTime: "15-25 minutes guaranteed",
 serviceAreas: "Pune, Mumbai & Hyderabad",
 },
 {
 icon: Tool,
 title: "Commercial Stove Repair & Kitchen AMC",
 image: "/images/commercial-stove.jpg",
 description: "Heavy-duty commercial burner servicing, bhatti maintenance, and custom AMC for food businesses.",
 detailedDescription:
 "We support restaurants, hotels, cafes, cloud kitchens, and catering units with fast on-call repair for multi-burner cooking ranges, high-pressure bhattis, tandoor burners, and commercial copper manifold banks. Zero kitchen downtime guaranteed.",
 features: [
 "High-pressure bhatti burner servicing",
 "Commercial range & Chinese wok repairs",
 "Commercial regulator & manifold testing",
 "Custom quarterly & annual AMC plans",
 "On-call rapid technician dispatch",
 "Genuine commercial spare parts replacement",
 "FSSAI & fire compliance safety inspection",
 "Emergency backup valve installation",
 ],
 commonIssues: [
 "Bhatti low pressure / flickering flame",
 "Soot slowing order cooking times",
 "Commercial regulator diaphragm failure",
 "Manifold leakage between cylinders",
 "Fire audit & kitchen safety non-compliance",
 "Heavy kitchen revenue loss from downtime",
 ],
 pricing: "Starts at ₹899 (Custom AMC packages)",
 warranty: "90-day parts warranty",
 responseTime: "Priority 30-min response",
 serviceAreas: "Restaurants, Cafes & Cloud Kitchens",
 },
 ]

 // Enhanced service categories
 const serviceCategories = [
 {
 icon: Home,
 title: "Residential Gas Services",
 description: "Complete gas solutions for homes, apartments, and residential complexes across Pune and Mumbai.",
 detailedServices: [
 "Kitchen gas stove repair and maintenance for all brands",
 "Residential gas pipeline installation and upgrades",
 "Home gas safety inspections and certifications",
 "Emergency gas leak repairs with 15-minute response",
 "New gas connection setup for homes and apartments",
 "Appliance installation and comprehensive servicing",
 "Annual maintenance contracts for residential properties",
 "Gas meter installation and relocation services",
 ],
 coverage: "All residential areas in Pune & Mumbai",
 specialties: ["Family safety priority", "Affordable pricing", "Quick response", "Trusted local service"],
 customerBase: "3000+ residential customers",
 responseTime: "20-30 minutes average",
 },
 {
 icon: Building,
 title: "Commercial Gas Services",
 description: "Professional gas services for restaurants, hotels, offices, and commercial establishments.",
 detailedServices: [
 "Commercial kitchen gas systems installation and repair",
 "Restaurant gas equipment maintenance and servicing",
 "Industrial gas pipeline services and compliance",
 "Commercial safety inspections and certifications",
 "Bulk gas installations for office complexes",
 "Maintenance contracts for commercial properties",
 "Emergency commercial gas repairs with priority response",
 "Compliance documentation for business licensing",
 ],
 coverage: "Commercial areas across both cities",
 specialties: ["Business continuity", "Compliance support", "Bulk service pricing", "Priority response"],
 customerBase: "500+ commercial clients",
 responseTime: "15-25 minutes for emergencies",
 },
 ]

 return (
 <main className="min-h-screen">
 {/* Enhanced hero section */}
 <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">Professional Gas Services</Badge>
 <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
 Our <span className="text-orange-600">Gas Services</span>
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed mb-8">
 Comprehensive gas repair and maintenance services for your home and business. Professional, safe, and
 reliable solutions from certified technicians across <strong>Pune, Mumbai &amp; Hyderabad</strong> with
 <strong> 5000+ satisfied customers</strong> and <strong>4.9-star rating</strong>.
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
 <TrackedWhatsAppButton
 message="Hi, I want a free gas service quote. Please help me."
 source="Services Page — Get Free Quote"
 label="Get Free Quote on WhatsApp"
 className="inline-flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent px-6 py-3 rounded-md font-medium text-sm transition-colors"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Enhanced main services */}
 <section className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">What We Do</Badge>
 <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Gas Solutions</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 From simple repairs to complex installations, we handle all your gas appliance needs with expertise and
 attention to safety across Pune and Mumbai.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {mainServices.map((service, index) => {
 const IconComponent = service.icon
 return (
 <Card
 key={index}
 className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600 group flex flex-col"
 >
 <div className="relative h-48 w-full overflow-hidden bg-gray-100">
 <Image
 src={service.image}
 alt={service.title}
 fill
 className="object-cover group-hover:scale-105 transition-transform duration-500"
 sizes="(max-width: 768px) 100vw, 33vw"
 />
 <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-orange-600 shadow-sm">
 {service.responseTime}
 </div>
 </div>
 <CardHeader>
 <div className="flex items-center space-x-4">
 <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg group-hover:from-orange-200 group-hover:to-red-200 transition-colors">
 <IconComponent className="h-8 w-8 text-orange-600" />
 </div>
 <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
 </div>
 </CardHeader>
 <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
 <div className="space-y-4">
 <p className="text-gray-600">{service.description}</p>

 <div className="bg-gray-50 p-4 rounded-lg">
 <p className="text-sm text-gray-700 leading-relaxed">{service.detailedDescription}</p>
 </div>

 {/* Service features */}
 <div>
 <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
 <div className="grid grid-cols-1 gap-2">
 {service.features.slice(0, 4).map((feature, featureIndex) => (
 <div key={featureIndex} className="flex items-center space-x-2">
 <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
 <span className="text-sm text-gray-700">{feature}</span>
 </div>
 ))}
 {service.features.length > 4 && (
 <div className="text-sm text-orange-600 font-medium">
 +{service.features.length - 4} more services included
 </div>
 )}
 </div>
 </div>

 {/* Common issues */}
 <div>
 <h4 className="font-semibold text-gray-900 mb-3">Common Issues We Fix:</h4>
 <div className="flex flex-wrap gap-2">
 {service.commonIssues.slice(0, 3).map((issue, issueIndex) => (
 <Badge key={issueIndex} variant="outline" className="text-xs">
 {issue}
 </Badge>
 ))}
 </div>
 </div>
 </div>

 <div className="space-y-4 pt-4 border-t">
 {/* Service details */}
 <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg space-y-2">
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Pricing:</span>
 <span className="font-semibold text-orange-600">{service.pricing}</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Warranty:</span>
 <span className="font-semibold text-green-600">{service.warranty}</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Response:</span>
 <span className="font-semibold text-blue-600">{service.responseTime}</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Coverage:</span>
 <span className="font-semibold text-purple-600">{service.serviceAreas}</span>
 </div>
 </div>

 <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
 <a href="tel:+918302713127" className="flex items-center justify-center space-x-2">
 <Phone className="h-4 w-4" />
 <span>Book This Service</span>
 </a>
 </Button>
 </div>
 </CardContent>
 </Card>
 )
 })}
 </div>
 </div>
 </section>

 {/* Safety Guarantees */}
 <SafetyGuarantees />

 {/* Brand Showcase */}
 <BrandShowcase />

 {/* Enhanced service categories */}
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Service Categories</Badge>
 <h2 className="text-4xl font-bold text-gray-900 mb-4">Residential & Commercial Solutions</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 We serve both residential and commercial clients with specialized solutions tailored to their unique
 requirements across Pune, Mumbai &amp; Hyderabad.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
 {serviceCategories.map((category, index) => {
 const IconComponent = category.icon
 return (
 <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
 <CardContent className="p-8">
 <div className="flex items-center space-x-4 mb-6">
 <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
 <IconComponent className="h-10 w-10 text-orange-600" />
 </div>
 <div>
 <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
 <p className="text-orange-600 font-medium">{category.coverage}</p>
 </div>
 </div>

 <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

 <div className="space-y-6">
 <div>
 <h4 className="font-semibold text-gray-900 mb-3">Our Services Include:</h4>
 <div className="space-y-2">
 {category.detailedServices.map((service, serviceIndex) => (
 <div key={serviceIndex} className="flex items-start space-x-2">
 <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
 <span className="text-sm text-gray-700">{service}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <h5 className="font-semibold text-blue-800 mb-1">Customer Base</h5>
 <p className="text-sm text-blue-700">{category.customerBase}</p>
 </div>
 <div className="bg-green-50 p-3 rounded-lg">
 <h5 className="font-semibold text-green-800 mb-1">Response Time</h5>
 <p className="text-sm text-green-700">{category.responseTime}</p>
 </div>
 </div>

 <div>
 <h5 className="font-semibold text-gray-900 mb-3">Why Choose Us:</h5>
 <div className="flex flex-wrap gap-2">
 {category.specialties.map((specialty, specialtyIndex) => (
 <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800">
 {specialty}
 </Badge>
 ))}
 </div>
 </div>
 </div>
 </CardContent>
 </Card>
 )
 })}
 </div>
 </div>
 </section>

 {/* Emergency service highlight */}
 <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="p-4 bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
 <AlertTriangle className="h-12 w-12 text-white animate-pulse" />
 </div>
 <h2 className="text-4xl font-bold text-white mb-4">Emergency Gas Services Available 24/7</h2>
 <p className="text-xl text-red-100 mb-8">
 Gas leaks and safety issues can't wait. Our emergency team is available round-the-clock to handle urgent
 situations and ensure your safety across Pune, Mumbai &amp; Hyderabad.
 </p>

 <div className="grid md:grid-cols-3 gap-6 mb-8">
 <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
 <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
 <h3 className="font-bold mb-2 text-white">15-Minute Response</h3>
 <p className="text-red-100 text-sm">Guaranteed emergency response time within city limits</p>
 </div>
 <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
 <Shield className="h-8 w-8 mx-auto mb-3 text-white" />
 <h3 className="font-bold mb-2 text-white">Safety Priority</h3>
 <p className="text-red-100 text-sm">Immediate safety measures and professional solutions</p>
 </div>
 <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
 <Award className="h-8 w-8 mx-auto mb-3 text-white" />
 <h3 className="font-bold mb-2 text-white">Expert Team</h3>
 <p className="text-red-100 text-sm">Certified emergency response technicians</p>
 </div>
 </div>

 <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4">
 <a href="tel:+918302713127" className="flex items-center space-x-2">
 <Phone className="h-5 w-5" />
 <span>Emergency Call: +91 83027 13127</span>
 </a>
 </Button>
 </div>
 </div>
 </section>

 {/* Service process */}
 <section className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4">Our Process</Badge>
 <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Gas Service Works</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Simple, straightforward process to get your gas appliances fixed quickly and safely with professional
 service.
 </p>
 </div>

 <div className="grid md:grid-cols-4 gap-8">
 {[
 {
 step: "1",
 title: "Contact & Assessment",
 description:
 "Call us or submit online request. We gather details about your gas issue and provide initial guidance.",
 icon: Phone,
 color: "from-blue-500 to-blue-600",
 },
 {
 step: "2",
 title: "Professional Diagnosis",
 description:
 "Our certified technician arrives on time, diagnoses the problem, and provides transparent pricing.",
 icon: Wrench,
 color: "from-green-500 to-green-600",
 },
 {
 step: "3",
 title: "Expert Repair & Testing",
 description:
 "We perform the repair using genuine parts, conduct safety tests, and ensure perfect operation.",
 icon: Shield,
 color: "from-orange-500 to-orange-600",
 },
 {
 step: "4",
 title: "Quality Assurance",
 description: "Final inspection, cleanup, warranty documentation, and follow-up to ensure satisfaction.",
 icon: Award,
 color: "from-purple-500 to-purple-600",
 },
 ].map((process, index) => {
 const IconComponent = process.icon
 return (
 <div key={index} className="text-center">
 <div className="relative mb-6">
 <div
 className={`w-16 h-16 bg-gradient-to-r ${process.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}
 >
 {process.step}
 </div>
 <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
 <IconComponent className="h-6 w-6 text-gray-600" />
 </div>
 </div>
 <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
 <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
 </div>
 )
 })}
 </div>
 </div>
 </section>

 {/* Direct Booking Form */}
 <section className="py-16 bg-gray-50 border-t">
 <div className="container mx-auto px-4 max-w-4xl">
 <div className="text-center mb-10">
 <Badge className="bg-orange-100 text-orange-800 px-4 py-1.5 mb-3">Book Instantly</Badge>
 <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Gas Technician Visit</h2>
 <p className="text-gray-600">
 Book online in 30 seconds. Pay only after verified inspection and safe test burning.
 </p>
 </div>
 <QuickBookingForm />
 </div>
 </section>

 {/* Contact CTA */}
 <ContactCTA />
 </main>
 )
}

