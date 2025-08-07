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
      {
        name: "Hadapsar",
        slug: "hadapsar",
        description: "Reliable gas repair and pipeline installation services for homes and businesses in Hadapsar",
        responseTime: "18-22 minutes",
        customers: "400+",
        landmarks: ["Magarpatta City","Amanora Park Town","Sasane Nagar","Hadapsar Industrial Estate"],
        specialties: ["High-rise residential societies","New construction pipeline setup","Certified safety inspections"],
      },
      {
        name: "Kharadi",
        slug: "kharadi",
        description: "Expert gas stove repair and pipeline installation services for modern homes and offices in Kharadi",
        responseTime: "18-22 minutes",
        customers: "500+",
        landmarks: ["EON IT Park","Zensar Technologies","World Trade Center","Riverdale","Gera Commerzone"],
        specialties: ["IT hub & corporate kitchen support","Luxury society pipeline setup","Quick service for high-rise apartments"]
      },
      {
        name: "Fursungi",
        slug: "fursungi",
        description: "Affordable and fast gas repair services for residential homes and new constructions in Fursungi",
        responseTime: "20-25 minutes",
        customers: "250+",
        landmarks: [
          "Fursungi Gaon",
          "Solapur Road",
          "Kondhwa-Fursungi Bypass",
          "Aai Mata Mandir"
        ],
        specialties: [
          "New construction pipeline installation",
          "Society-level maintenance services",
          "Emergency leak repair & inspection"
        ]
      },
      {
        name: "Undri",
        slug: "undri",
        description: "Gas repair and new pipeline installation services for premium societies and schools in Undri",
        responseTime: "20-25 minutes",
        customers: "300+",
        landmarks: [
          "Bizzbay Mall",
          "Corinthians Club",
          "Nyati County",
          "Bishop’s School"
        ],
        specialties: [
          "Society-wide maintenance",
          "Pipeline installation in new flats",
          "Emergency stove and gas leak repair"
        ]
      },
      {
        name: "Mohammadwadi",
        slug: "mohammadwadi",
        description: "Professional gas repair and pipeline extension services in Mohammadwadi’s growing residential zones",
        responseTime: "20-25 minutes",
        customers: "220+",
        landmarks: [
          "Destination Center",
          "Raheja Vista",
          "Nibm Road Extension",
          "Kondhwa-Mohammadwadi Link Road"
        ],
        specialties: [
          "Pipeline setup for new apartments",
          "Cooktop and hob servicing",
          "Leak detection and compliance checks"
        ]
      },
      {
        name: "Wanwadi",
        slug: "wanwadi",
        description: "Quick gas stove repair and safety inspections for societies and shops in Wanwadi",
        responseTime: "18-22 minutes",
        customers: "280+",
        landmarks: [
          "Salunke Vihar",
          "Azad Nagar",
          "Kausar Baugh",
          "Clover Village"
        ],
        specialties: [
          "Gas safety checks for old buildings",
          "Annual maintenance for societies",
          "Fast response for stove repairs"
        ]
      },
      {
        name: "Kondhwa",
        slug: "kondhwa",
        description: "Complete gas repair and certified pipeline services in the densely populated Kondhwa area",
        responseTime: "20-25 minutes",
        customers: "450+",
        landmarks: [
          "Kausar Baug",
          "Kondhwa Khurd",
          "Kondhwa Budruk",
          "Meetha Nagar"
        ],
        specialties: [
          "Society-level AMC services",
          "Gas pipeline installation & repair",
          "Flame, burner, and valve fixes"
        ]
      },
      {
        name: "Dhanori",
        slug: "dhanori",
        description: "Trusted gas repair and installation services for new housing projects and families in Dhanori",
        responseTime: "20-25 minutes",
        customers: "260+",
        landmarks: [
          "Goodwill Square",
          "Dhanori-Lohegaon Road",
          "Sathe Wasti",
          "Kedari Nagar"
        ],
        specialties: [
          "New home gas pipeline setup",
          "Emergency leak inspections",
          "Cooktop servicing and regulator fix"
        ]
      },
      {
        name: "Lohegaon",
        slug: "lohegaon",
        description: "Affordable and safe gas repair and safety inspection services for homes near Pune Airport & Lohegaon",
        responseTime: "20-25 minutes",
        customers: "230+",
        landmarks: [
          "Lohegaon Airport",
          "Sant Nagar",
          "Diamond Water Park",
          "Lohegaon Bazar"
        ],
        specialties: [
          "Same-day gas stove repair",
          "Pipeline modifications for bungalows",
          "Safety certification and compliance"
        ]
      },
      {
        name: "Viman Nagar",
        slug: "viman-nagar",
        description: "Premium gas repair and installation support for high-rise societies and cafes in Viman Nagar",
        responseTime: "18-22 minutes",
        customers: "500+",
        landmarks: [
          "Phoenix Marketcity",
          "Symbiosis College",
          "Konark Campus",
          "Airport Road"
        ],
        specialties: [
          "Certified gas pipeline setup",
          "Stove repair for homes and cafes",
          "Fast service for high-rise buildings"
        ]
      },
      {
        name: "Vishrantwadi",
        slug: "vishrantwadi",
        description: "Quick and professional gas repair and stove servicing in Vishrantwadi’s residential societies",
        responseTime: "20-25 minutes",
        customers: "240+",
        landmarks: [
          "Vishrantwadi Chowk",
          "Airport Road",
          "Pratik Nagar",
          "Mohanwadi"
        ],
        specialties: [
          "Same-day stove repair service",
          "Pipeline installations in flats",
          "Leak detection & safety audits"
        ]
      },
      {
        name: "Koregaon Park",
        slug: "koregaon-park",
        description: "Premium gas repair and commercial kitchen maintenance in Koregaon Park",
        responseTime: "18-22 minutes",
        customers: "300+",
        landmarks: [
          "Lane 5 & Lane 7",
          "Osho Ashram",
          "Westin Hotel",
          "North Main Road"
        ],
        specialties: [
          "Restaurant gas pipeline support",
          "Cooktop & hob repairs for villas",
          "Compliance certificates for businesses"
        ]
      },
      {
        name: "Keshav Nagar",
        slug: "keshav-nagar",
        description: "Certified gas pipeline and repair services in the newly developed Keshav Nagar area",
        responseTime: "20-25 minutes",
        customers: "280+",
        landmarks: [
          "Godrej Infinity",
          "Panchshil Towers",
          "Amanora Neo Towers",
          "Shivanta Residency"
        ],
        specialties: [
          "New society pipeline installations",
          "Safety inspections for new buyers",
          "AMC plans for gated communities"
        ]
      },
      {
        name: "Mundhwa",
        slug: "mundhwa",
        description: "Reliable gas repair and safety services for modern townships and societies in Mundhwa",
        responseTime: "20-25 minutes",
        customers: "260+",
        landmarks: [
          "The Lexicon School",
          "Kapila Matrix",
          "BT Kawade Road",
          "Mundhwa Road"
        ],
        specialties: [
          "New construction pipeline setup",
          "Society-level annual maintenance",
          "Fast emergency repair services"
        ]
      },
      {
        name: "Magarpatta City",
        slug: "magarpatta-city",
        description: "Expert gas repair and compliance services inside the gated Magarpatta City township",
        responseTime: "18-22 minutes",
        customers: "350+",
        landmarks: [
          "Seasons Mall",
          "Cybercity",
          "West Gate",
          "Destination Center"
        ],
        specialties: [
          "Society-approved technicians",
          "Stove servicing and pipeline setup",
          "Certified inspections with documentation"
        ]
      },
      {
        name: "Amanora Park Town",
        slug: "amanora-park-town",
        description: "Trusted gas stove repair and pipeline services for Amanora Park Town’s premium residents",
        responseTime: "18-22 minutes",
        customers: "320+",
        landmarks: [
          "Amanora Mall",
          "Aspire Towers",
          "Neo Towers",
          "Town Center"
        ],
        specialties: [
          "Luxury apartment stove repair",
          "Pipeline connection with safety check",
          "Quick service with community compliance"
        ]
      },
      {
        name: "Wagholi",
        slug: "wagholi",
        description: "Affordable and prompt gas repair services in the fast-developing Wagholi area",
        responseTime: "20-25 minutes",
        customers: "300+",
        landmarks: [
          "Wagholi Gaon",
          "Ivy Estate",
          "Kesnand Road",
          "Bakori Road"
        ],
        specialties: [
          "Gas pipeline setup in new flats",
          "Society-level service contracts",
          "Stove & regulator repair support"
        ]
      },
      {
        name: "Yerwada",
        slug: "yerwada",
        description: "Quick-response gas stove repair and kitchen safety services in Yerwada",
        responseTime: "18-22 minutes",
        customers: "270+",
        landmarks: [
          "Yerwada Jail",
          "Golf Course Road",
          "Shastri Nagar",
          "Aga Khan Palace"
        ],
        specialties: [
          "Cooktop repair and part replacement",
          "Gas line modifications for homes",
          "24/7 emergency support available"
        ]
      },
      {
        name: "Bhekrai Nagar",
        slug: "bhekrai-nagar",
        description: "Gas repair services for affordable homes and growing societies in Bhekrai Nagar",
        responseTime: "20-25 minutes",
        customers: "180+",
        landmarks: [
          "Shewalewadi",
          "Pune-Solapur Road",
          "PMC Boundary",
          "Jadhavwadi"
        ],
        specialties: [
          "Same-day service in budget apartments",
          "Gas leak detection & safety audits",
          "Stove, regulator, and pipe servicing"
        ]
      },
      {
        name: "NIBM Road",
        slug: "nibm-road",
        description: "Certified gas repair and installation services in premium townships around NIBM Road",
        responseTime: "20-25 minutes",
        customers: "350+",
        landmarks: [
          "Clover Hills",
          "Bramha Suncity",
          "Dorabjee Paradise",
          "Salunkhe Vihar"
        ],
        specialties: [
          "High-rise society pipeline setups",
          "Certified safety checks",
          "Annual gas maintenance contracts"
        ]
      },
      {
        name: "Pisoli",
        slug: "pisoli",
        description: "Reliable gas stove and pipeline repair solutions for new apartments and villas in Pisoli",
        responseTime: "20-25 minutes",
        customers: "200+",
        landmarks: [
          "Pisoli Gaon",
          "Majestique Magnum",
          "Cloud 9 Society",
          "Undri-Pisoli Road"
        ],
        specialties: [
          "New construction gas line setup",
          "Stove & hob repair with warranty",
          "Gas safety inspections for families"
        ]
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
