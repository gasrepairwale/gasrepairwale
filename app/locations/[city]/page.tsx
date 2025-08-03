import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { LocationPageContent } from "@/components/location-page-content"

// Comprehensive city data with all content
const cityData = {
  pune: {
    name: "Pune",
    state: "Maharashtra",
    description:
      "Professional gas stove repair, pipeline services, and appliance maintenance across Pune and surrounding areas",
    heroDescription:
      "🔥 Professional gas stove repair, pipeline services, and appliance maintenance across Pune and surrounding areas. Fast, reliable, and affordable solutions for your home and business with 3000+ satisfied customers and 20-25 minute average response time.",
    areas: [
      {
        name: "Kothrud",
        slug: "kothrud",
        description: "Complete gas repair services in Kothrud area with fastest response time",
        responseTime: "15-20 minutes",
        customers: "500+",
        landmarks: ["Kothrud Depot", "Mayur Colony", "Ideal Colony", "Paud Road"],
        specialties: ["Residential focus", "Student-friendly", "Quick service"],
      },
      {
        name: "Baner",
        slug: "baner",
        description: "Professional gas stove and pipeline services for IT professionals",
        responseTime: "20-25 minutes",
        customers: "400+",
        landmarks: ["Baner Road", "IT Parks", "Balewadi", "Sus Road"],
        specialties: ["IT professional friendly", "Weekend service", "Modern solutions"],
      },
      {
        name: "Wakad",
        slug: "wakad",
        description: "Emergency and regular gas appliance maintenance services",
        responseTime: "20-30 minutes",
        customers: "350+",
        landmarks: ["Wakad Bridge", "Hinjawadi Road", "Dange Chowk"],
        specialties: ["Emergency priority", "Family service", "Affordable rates"],
      },
      {
        name: "Hinjewadi",
        slug: "hinjewadi",
        description: "Specialized gas services for IT hub and residential areas",
        responseTime: "25-30 minutes",
        customers: "300+",
        landmarks: ["Rajiv Gandhi Infotech Park", "Phase 1-3", "IT Companies"],
        specialties: ["Tech sector focus", "Corporate service", "Flexible timing"],
      },
      {
        name: "Karve Nagar",
        slug: "karve-nagar",
        description: "Residential and commercial gas solutions in central Pune",
        responseTime: "15-25 minutes",
        customers: "250+",
        landmarks: ["Karve Road", "Deccan Gymkhana", "Erandwane"],
        specialties: ["Central location", "Mixed service", "Quick access"],
      },
      {
        name: "Warje",
        slug: "warje",
        description: "Reliable gas repair and installation services",
        responseTime: "20-25 minutes",
        customers: "200+",
        landmarks: ["Warje Bridge", "Bavdhan", "Residential areas"],
        specialties: ["Growing area", "New installations", "Community focus"],
      },
    ],
    totalCustomers: "3000+",
    avgResponseTime: "20-25 minutes",
    establishedYear: "2013",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    testimonials: [
      {
        name: "Rajesh Patil",
        area: "Kothrud",
        profession: "Software Engineer",
        rating: 5,
        text: "Excellent service! Fixed my gas stove burner issue within an hour. Very professional team with transparent pricing.",
        service: "Gas Stove Repair",
        date: "December 2024",
      },
      {
        name: "Priya Sharma",
        area: "Baner",
        profession: "Marketing Manager",
        rating: 5,
        text: "Quick response for emergency gas leak. Safety-first approach and reasonable pricing. Highly recommend!",
        service: "Emergency Repair",
        date: "November 2024",
      },
      {
        name: "Amit Joshi",
        area: "Wakad",
        profession: "Restaurant Owner",
        rating: 5,
        text: "Regular maintenance service for our restaurant kitchen. Always punctual and thorough work.",
        service: "Maintenance Service",
        date: "October 2024",
      },
    ],
    advantages: [
      {
        title: "Local Pune Expertise",
        description: "Established in Pune since 2013 with deep local knowledge of Maharashtra regulations",
        icon: "MapPin",
      },
      {
        title: "Fastest in Pune",
        description: "Average response time of 20-25 minutes across all Pune areas",
        icon: "Clock",
      },
      {
        title: "Pune's Choice",
        description: "3000+ satisfied customers across Pune metro area",
        icon: "Users",
      },
      {
        title: "Maharashtra Certified",
        description: "Licensed and certified for gas work in Maharashtra state",
        icon: "Award",
      },
    ],
    seoContent: {
      whyChoose: [
        "Local Expertise: Deep knowledge of Pune's residential and commercial gas systems since 2013",
        "Quick Response: Average 20-25 minute response time across Pune",
        "Licensed Technicians: Certified for gas work in Maharashtra",
        "Comprehensive Coverage: Serving 6 major areas in Pune including Kothrud, Baner, Wakad",
        "Customer Satisfaction: 3000+ happy customers across Pune",
        "Emergency Service: 24/7 availability for gas emergencies",
      ],
      services: {
        gasStove: [
          "Burner repair and cleaning",
          "Ignition system repair",
          "Gas valve replacement",
          "Thermostat calibration",
        ],
        pipeline: [
          "New pipeline installation",
          "Leak detection and repair",
          "Pressure testing",
          "Compliance certification",
        ],
      },
    },
  },
  mumbai: {
    name: "Mumbai",
    state: "Maharastra",
    description:
      "Professional gas stove repair, pipeline services, and appliance maintenance across Mumbai and surrounding areas",
    heroDescription:
      "🔥 Professional gas stove repair, pipeline services, and appliance maintenance across Mumbai and surrounding areas. Serving the tech capital with reliable and efficient gas solutions for 2500+ satisfied customers and 25-30 minute average response time.",
    areas: [
      {
        name: "Borivali East West",
        slug: "borivali-east-west",
        description: "Premium gas services for IT professionals and modern families",
        responseTime: "20-25 minutes",
        customers: "600+",
        landmarks: ["HITEC City", "Financial District", "Nanakramguda", "Kokapet"],
        specialties: ["IT hub focus", "Premium service", "Weekend availability"],
      },
      {
        name: "Kandivali East West",
        slug: "kandivali-east-west",
        description: "Complete gas repair and maintenance services for tech corridor",
        responseTime: "25-30 minutes",
        customers: "450+",
        landmarks: ["Cyber Towers", "Inorbit Mall", "Durgam Cheruvu", "Shilparamam"],
        specialties: ["Tech professionals", "Commercial focus", "Quick service"],
      },
      {
        name: "Malda East West",
        slug: "malda-east-west",
        description: "Residential and commercial gas solutions for growing community",
        responseTime: "25-30 minutes",
        customers: "400+",
        landmarks: ["Botanical Garden", "Kothaguda", "Masjid Banda", "Nizampet Road"],
        specialties: ["Mixed community", "Family service", "Reliable support"],
      },
      {
        name: "Ram Mandir East",
        slug: "ram-mandir-east",
        description: "Professional gas appliance services for metro connectivity area",
        responseTime: "30-35 minutes",
        customers: "350+",
        landmarks: ["Ram Mandir East Metro", "Bachupally", "Nizampet", "Pragathi Nagar"],
        specialties: ["Metro accessible", "Growing area", "Affordable rates"],
      },
      {
        name: "Goregaon East West",
        slug: "goregaon-east-west",
        description: "Emergency and regular gas repair services for established area",
        responseTime: "25-35 minutes",
        customers: "300+",
        landmarks: ["KPHB Colony", "Moosapet", "Balanagar", "Housing Board"],
        specialties: ["Established area", "Emergency focus", "Community trust"],
      },
      {
        name: "Andheri West",
        slug: "andheri-west",
        description: "Trusted gas services for central Mumbai location",
        responseTime: "20-30 minutes",
        customers: "250+",
        landmarks: ["Andheri West Airport", "Somajiguda", "Ameerpet", "Greenlands"],
        specialties: ["Central location", "Business district", "Quick access"],
      },
    ],
    totalCustomers: "2500+",
    avgResponseTime: "25-30 minutes",
    establishedYear: "2016",
    coordinates: { lat: 17.385, lng: 78.4867 },
    testimonials: [
      {
        name: "Srinivas Reddy",
        area: "Borivali East West",
        profession: "Software Architect",
        rating: 5,
        text: "Excellent service for gas pipeline installation. Professional team with proper safety measures and documentation.",
        service: "Pipeline Installation",
        date: "December 2024",
      },
      {
        name: "Kavitha Nair",
        area: "Kandivali East West",
        profession: "Product Manager",
        rating: 5,
        text: "Quick response for gas stove repair. Fixed the ignition problem efficiently. Highly recommended for IT professionals!",
        service: "Gas Stove Repair",
        date: "November 2024",
      },
      {
        name: "Rajesh Kumar",
        area: "Malda East West",
        profession: "Restaurant Owner",
        rating: 5,
        text: "Regular maintenance service for our restaurant. Always punctual and thorough work with competitive pricing.",
        service: "Commercial Service",
        date: "October 2024",
      },
    ],
    advantages: [
      {
        title: "Tech City Expertise",
        description: "Specialized service for Mumbai's tech professionals since 2016",
        icon: "MapPin",
      },
      {
        title: "Tech City Speed",
        description: "25-30 minute response time across Mumbai's IT corridor",
        icon: "Clock",
      },
      {
        title: "Cyberabad Trusted",
        description: "2500+ customers in Mumbai and Cyberabad areas",
        icon: "Users",
      },
      {
        title: "Maharastra Licensed",
        description: "Fully licensed and compliant with Maharastra state regulations",
        icon: "Shield",
      },
    ],
    seoContent: {
      whyChoose: [
        "Tech City Expertise: Specialized service for Mumbai's IT professionals and modern homes",
        "Quick Response: Average 25-30 minute response time across Mumbai metro",
        "Licensed Technicians: Certified for gas work in Maharastra",
        "Comprehensive Coverage: Serving 6 major areas including Borivali East West, Kandivali East West, Malda East West",
        "Customer Satisfaction: 2500+ happy customers across Mumbai",
        "Emergency Service: 24/7 availability for gas emergencies",
      ],
      services: {
        gasStove: [
          "IT professional-friendly timing",
          "Weekend service availability",
          "Modern appliance expertise",
          "Quick turnaround time",
        ],
        pipeline: [
          "High-rise apartment installations",
          "Commercial office solutions",
          "Tech park compliance",
          "Modern safety standards",
        ],
      },
    },
  },
}

type Props = {
  params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cityData[params.city as keyof typeof cityData]

  if (!city) {
    return {
      title: "City Not Found",
    }
  }

  return {
    title: `Gas Repair Services in ${city.name} | Gas Stove Repair, Pipeline Services | Gas Repaire Wale`,
    description: `⭐ #1 Gas Repair Service in ${city.name}, ${city.state} ✅ ${city.totalCustomers} Happy Customers ✅ ${city.avgResponseTime} Response Time ✅ 24/7 Emergency Service. Call +91 83027 13127 for instant quote!`,
    keywords: `gas repair ${city.name.toLowerCase()}, gas stove repair ${city.name.toLowerCase()}, gas pipeline service ${city.name.toLowerCase()}, gas leak repair ${city.state.toLowerCase()}, emergency gas service ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Gas Repair Services in ${city.name} | Gas Repaire Wale`,
      description: `Professional gas repair services in ${city.name} with ${city.totalCustomers} satisfied customers and ${city.avgResponseTime} response time.`,
      url: `https://gasrepairewale.com/locations/${params.city}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }))
}

export default function CityPage({ params }: Props) {
  const city = cityData[params.city as keyof typeof cityData]

  if (!city) {
    notFound()
  }

  return <LocationPageContent city={city} citySlug={params.city} />
}
