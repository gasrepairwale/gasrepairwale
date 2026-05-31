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
        name: "Borivali East & West",
        slug: "borivali-east-west",
        description: "Reliable gas repair and installation services for modern families in Borivali East & West.",
        responseTime: "20–25 minutes",
        customers: "600+",
        landmarks: ["Vardhaman Mall", "Essel World", "Global Mall", "Borivali Railway Station"],
        specialties: ["Family-focused service", "Weekend availability", "Trusted by gated communities"],
      },
      {
        name: "Kandivali East & West",
        slug: "kandivali-east-west",
        description: "Comprehensive gas repair and maintenance tailored for Kandivali’s residential neighborhoods and shops.",
        responseTime: "25–30 minutes",
        customers: "450+",
        landmarks: ["Oberoi Mall", "R City Mall", "Sanskar Bharti Complex", "Kandivali Railway Station"],
        specialties: ["Residential & retail support", "Quick response", "Evening appointments"],
      },
      {
        name: "Malad East & West",
        slug: "malad-east-west",
        description: "Quality gas appliance services for Malad’s growing families and small businesses.",
        responseTime: "25–30 minutes",
        customers: "400+",
        landmarks: ["Inorbit Mall", "Mindspace Office Park", "Malad Link Road", "Lokhandwala Market"],
        specialties: ["Family-friendly", "Commercial kitchen support", "Reliable workmanship"],
      },
      {
        name: "Ram Mandir (Kandivali)",
        slug: "ram-mandir-east",
        description: "Dependable gas appliance repair services near Ram Mandir metro station and Kandivali West.",
        responseTime: "30–35 minutes",
        customers: "350+",
        landmarks: ["Ram Mandir Metro Station", "Oshiwara Art District", "Malad Creek", "Kandivali Sports Complex"],
        specialties: ["Metro-accessible area", "Growing locality", "Affordable pricing"],
      },
      {
        name: "Goregaon East & West",
        slug: "goregaon-east-west",
        description: "Flexible gas repair solutions for homes and offices across Goregaon East & West.",
        responseTime: "25–35 minutes",
        customers: "300+",
        landmarks: ["Oberoi Mall", "Mindspace Business Park", "Goregaon Railway Station", "Film City"],
        specialties: ["Established community", "Emergency service option", "Trusted locally"],
      },
      {
        name: "Andheri West",
        slug: "andheri-west",
        description: "Trusted gas repair and installation for the bustling residential and commercial zones of Andheri West.",
        responseTime: "20–30 minutes",
        customers: "250+",
        landmarks: ["Lokhandwala Complex", "PVR Juhu", "Infinity Mall", "Andheri Station"],
        specialties: ["Central location", "Corporate & residential support", "Quick access"],
      },
      {
        name: "Vile Parle East & West",
        slug: "vile-parle-east-west",
        description: "Premium gas services for modern families and professionals in Vile Parle.",
        responseTime: "20–25 minutes",
        customers: "600+",
        landmarks: ["Chhatrapati Shivaji Domestic Airport Terminal‑1", "NMIMS / Mithibai College", "ISKCON Temple", "Darvesh Insignia"],
        specialties: ["Airport convenience", "Educational hub support", "Weekend availability"],
      },
      {
        name: "Santacruz East & West",
        slug: "santacruz-east-west",
        description: "Comprehensive gas repair and installation for Santacruz’s bustling residential and commercial zones.",
        responseTime: "20–25 minutes",
        customers: "550+",
        landmarks: ["Santacruz Railway Station", "Santacruz Metro Station (Aqua Line 3)", "Sacred Heart Church", "Taj Santacruz"],
        specialties: ["Metro connectivity", "School & office support", "Residential and business focus"],
      },
      {
        name: "Bandra East & West",
        slug: "bandra-east-west",
        description: "Reliable gas services for Bandra’s trendy homes, cafés, and seaside bungalows.",
        responseTime: "15–20 minutes",
        customers: "700+",
        landmarks: ["Mount Mary Church", "Bandstand Seafront", "Bandra Fort", "Linking Road"],
        specialties: ["Heritage & modern blend", "Café kitchen service", "Fast service in narrow lanes"],
      },
      {
        name: "Mahim West",
        slug: "mahim-west",
        description: "Trusted gas solutions in Mahim — serving older chawls and modern apartments near freeway access.",
        responseTime: "25–30 minutes",
        customers: "400+",
        landmarks: ["Mahim Fort", "Karjat Start Point", "Sewri Flamingo Point (nearby)", "Mahim Causeway"],
        specialties: ["Chawl & society ready", "Bridge-side access", "Cost-effective service"],
      },
      {
        name: "Dadar East & West",
        slug: "dadar-east-west",
        description: "Fast and affordable gas repairs across central Dadar — the hub of Mumbai’s heart.",
        responseTime: "15–20 minutes",
        customers: "800+",
        landmarks: ["Dadar TT Circle", "Siddhivinayak Temple (nearby)", "Dadar Railway Station", "Chembur Link Road"],
        specialties: ["Central connectivity", "Busy locality support", "24/7 emergency service"],
      },
      {
        name: "Wadala West",
        slug: "wadala-west",
        description: "Expert gas services in culturally rich Wadala — suitable for families, colleges, and small eateries.",
        responseTime: "20–25 minutes",
        customers: "450+",
        landmarks: ["Vitthal Temple (Prati Pandharpur)", "BEST Transport Museum", "St Joseph’s Church", "Flamingo Bay (nearby)"],
        specialties: ["College borough support", "Heritage area experience", "Emergency response"],
      },
      {
        name: "Mumbai Central East & West",
        slug: "mumbai-central-east-west",
        description: "Quick and reliable gas services in Mumbai Central’s dense residential and business district.",
        responseTime: "15–20 minutes",
        customers: "500+",
        landmarks: ["Mumbai Central Railway Station", "St Thomas Cathedral (Heritage)", "Mumbai One Mall", "Marian College"],
        specialties: ["Central access", "Office & heritage homes", "Fast scheduling"],
      },
      {
        name: "Mahalaxmi East & West",
        slug: "mahalaxmi-east-west",
        description: "Premium gas solutions near Mahalaxmi with proximity to racetrack and luxury apartments.",
        responseTime: "20–25 minutes",
        customers: "300+",
        landmarks: ["Mahalaxmi Racecourse", "Haji Ali Dargah (close)", "Banganga Tank / Walkeshwar", "Kamala Nehru Park"],
        specialties: ["Luxury neighborhood", "Quiet & high-end", "Weekend booking"],
      },
      {
        name: "Marine Drive & Colaba",
        slug: "marine-drive-colaba",
        description: "Specialized gas services for South Mumbai’s scenic Marine Drive and heritage Colaba area.",
        responseTime: "20–30 minutes",
        customers: "400+",
        landmarks: ["Marine Drive (Queen’s Necklace)", "Gateway of India", "Colaba Causeway", "Taj Mahal Palace"],
        specialties: ["Heritage area care", "Tourist zone service", "Sensitive site proficiency"],
      },
      {
        name: "Churchgate",
        slug: "churchgate",
        description: "Trusted gas repair service for Mumbai’s central business-line neighborhood, Churchgate.",
        responseTime: "15–20 minutes",
        customers: "350+",
        landmarks: ["Churchgate Station", "St Thomas Cathedral", "Marine Drive entrance", "Nariman Point (nearby)"],
        specialties: ["Business district focus", "Heritage precinct access", "Quick daytime service"],
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
  hyderabad: {
    name: "Hyderabad",
    state: "Telangana",
    description:
      "Professional gas stove repair, pipeline services, and appliance maintenance across Hyderabad and surrounding areas",
    heroDescription:
      "🔥 Professional gas stove repair, pipeline services, and appliance maintenance across Hyderabad and surrounding areas. Fast, reliable, and affordable solutions for your home and business with 2000+ satisfied customers and 20-25 minute average response time.",
    areas: [
      {
        name: "Gachibowli",
        slug: "gachibowli",
        description: "Professional gas stove repair and pipeline services in Hyderabad's premier IT district.",
        responseTime: "20-25 minutes",
        customers: "450+",
        landmarks: ["DLF Cyber City", "Gachibowli Stadium", "ISB Hyderabad"],
        specialties: ["IT professional friendly", "High-rise apartments", "Weekend service"],
      },
      {
        name: "HITEC City",
        slug: "hitec-city",
        description: "Expert gas repair and installation services for tech parks and modern homes.",
        responseTime: "15-20 minutes",
        customers: "600+",
        landmarks: ["Cyber Towers", "Inorbit Mall", "Mindspace IT Park"],
        specialties: ["Corporate kitchen support", "Quick response", "Premium societies"],
      },
      {
        name: "Madhapur",
        slug: "madhapur",
        description: "Reliable gas appliance maintenance for Madhapur's growing residential and commercial spaces.",
        responseTime: "15-20 minutes",
        customers: "500+",
        landmarks: ["Ayyappa Society", "Image Hospitals", "Kavuri Hills"],
        specialties: ["Restaurant pipeline setup", "Fast emergency repair", "Community focus"],
      },
      {
        name: "Kondapur",
        slug: "kondapur",
        description: "Affordable and fast gas repair services for residential homes and new constructions.",
        responseTime: "20-25 minutes",
        customers: "400+",
        landmarks: ["Sarath City Capital Mall", "Botanical Garden", "Kothaguda"],
        specialties: ["New connection setup", "Stove servicing", "Safety inspections"],
      },
      {
        name: "Banjara Hills",
        slug: "banjara-hills",
        description: "Premium gas repair and installation support for luxury homes and high-end cafes.",
        responseTime: "20-30 minutes",
        customers: "300+",
        landmarks: ["GVK One Mall", "KBR Park", "Taj Krishna"],
        specialties: ["Luxury appliance repair", "Concealed pipeline setup", "Certified safety checks"],
      },
      {
        name: "Jubilee Hills",
        slug: "jubilee-hills",
        description: "Trusted gas stove repair and pipeline services for Jubilee Hills' premium residents.",
        responseTime: "20-30 minutes",
        customers: "350+",
        landmarks: ["Jubilee Hills Check Post", "Peddamma Temple", "Apollo Hospital"],
        specialties: ["Villas and bungalows", "Restaurant gas pipelines", "Annual maintenance"],
      },
      {
        name: "Kukatpally",
        slug: "kukatpally",
        description: "Comprehensive gas repair and pipeline services for residential and commercial hubs in Kukatpally.",
        responseTime: "20-25 minutes",
        customers: "480+",
        landmarks: ["Forum Sujana Mall", "JNTU", "Kukatpally Housing Board"],
        specialties: ["Residential focus", "High-density apartments", "Quick service"],
      },
      {
        name: "KPHB Colony",
        slug: "kphb-colony",
        description: "Expert gas appliance repair tailored for the densely populated KPHB Colony.",
        responseTime: "20-25 minutes",
        customers: "400+",
        landmarks: ["Manjeera Mall", "Remedy Hospital", "JNTU Road"],
        specialties: ["Family-friendly", "Evening appointments", "Trusted locally"],
      },
      {
        name: "Miyapur",
        slug: "miyapur",
        description: "Affordable and fast gas repair services for growing families and modern societies in Miyapur.",
        responseTime: "25-30 minutes",
        customers: "350+",
        landmarks: ["Miyapur Metro Station", "Allwyn X Road", "Ameenpur"],
        specialties: ["Metro connectivity", "New connection setup", "Affordable pricing"],
      },
      {
        name: "Bachupally",
        slug: "bachupally",
        description: "Reliable gas repair and installation services for the rapidly developing Bachupally area.",
        responseTime: "25-30 minutes",
        customers: "300+",
        landmarks: ["VNR VJIET", "Silver Oaks School", "Mallampet Road"],
        specialties: ["Educational hub support", "New pipeline installations", "Weekend service"],
      },
      {
        name: "Kompally",
        slug: "kompally",
        description: "Premium gas solutions for the spacious villas and gated communities of Kompally.",
        responseTime: "25-30 minutes",
        customers: "280+",
        landmarks: ["CinePlanet", "Dhola-ri-Dhani", "Kompally Highway"],
        specialties: ["Villa maintenance", "Concealed pipelines", "Weekend booking"],
      },
      {
        name: "Bowenpally",
        slug: "bowenpally",
        description: "Trusted gas stove repair and maintenance serving Bowenpally's established neighborhoods.",
        responseTime: "20-25 minutes",
        customers: "320+",
        landmarks: ["Bowenpally Market", "Dairy Farm Road", "Cantonment border"],
        specialties: ["Market area access", "Established community", "Quick response"],
      },
      {
        name: "Uppal",
        slug: "uppal",
        description: "Reliable gas pipeline and stove repair services for residential and industrial zones in Uppal.",
        responseTime: "25-30 minutes",
        customers: "320+",
        landmarks: ["Uppal Stadium", "Uppal Metro Station", "Ramanthapur"],
        specialties: ["Metro-accessible", "Industrial zone support", "Emergency service"],
      },
      {
        name: "LB Nagar",
        slug: "lb-nagar",
        description: "Fast and professional gas repair covering LB Nagar's expansive residential sectors.",
        responseTime: "25-30 minutes",
        customers: "350+",
        landmarks: ["LB Nagar Ring Road", "Kamineni Hospital", "Sagar Ring Road"],
        specialties: ["Central connectivity", "Family service", "24/7 availability"],
      },
      {
        name: "Dilsukhnagar",
        slug: "dilsukhnagar",
        description: "Dedicated gas repair services serving the bustling commercial and residential streets of Dilsukhnagar.",
        responseTime: "20-25 minutes",
        customers: "380+",
        landmarks: ["Sai Baba Temple", "Dilsukhnagar Bus Depot", "Chaitanyapuri"],
        specialties: ["Busy locality support", "Commercial kitchens", "Affordable rates"],
      },
      {
        name: "Manikonda",
        slug: "manikonda",
        description: "Specialized gas services for the dense IT-corridor adjacent residential area of Manikonda.",
        responseTime: "20-25 minutes",
        customers: "380+",
        landmarks: ["Lanco Hills", "Puppalaguda", "Khajaguda X Road"],
        specialties: ["IT professional friendly", "High-rise apartments", "Flexible timing"],
      },
      {
        name: "Mehdipatnam",
        slug: "mehdipatnam",
        description: "Quick-response gas appliance repair for Mehdipatnam's bustling households and eateries.",
        responseTime: "15-20 minutes",
        customers: "420+",
        landmarks: ["Rythu Bazar", "Sarojini Naidu Hospital", "Rethibowli"],
        specialties: ["Fast scheduling", "Restaurant pipeline setup", "Local expertise"],
      },
      {
        name: "Tolichowki",
        slug: "tolichowki",
        description: "Expert gas repair and maintenance catering to Tolichowki's diverse food joints and homes.",
        responseTime: "15-20 minutes",
        customers: "400+",
        landmarks: ["Paramount Colony", "Shaikpet", "Seven Tombs Road"],
        specialties: ["Heritage area care", "Restaurant support", "Emergency response"],
      },
      {
        name: "Rajendra Nagar",
        slug: "rajendra-nagar",
        description: "Affordable gas repair and installation services serving Rajendra Nagar and surrounding communities.",
        responseTime: "25-30 minutes",
        customers: "300+",
        landmarks: ["Agricultural University", "Attapur", "Upperpally"],
        specialties: ["Wide coverage", "Community focus", "Safety inspections"],
      },
      {
        name: "Secunderabad",
        slug: "secunderabad",
        description: "Top-rated gas pipeline and stove repair across the historic and commercial hubs of Secunderabad.",
        responseTime: "15-20 minutes",
        customers: "500+",
        landmarks: ["Secunderabad Railway Station", "Paradise Circle", "Tarnaka"],
        specialties: ["Central access", "Heritage area experience", "24/7 emergency support"],
      },
      {
        name: "Abids",
        slug: "abids",
        description: "Specialized commercial and residential gas services for the iconic Abids shopping district.",
        responseTime: "15-20 minutes",
        customers: "400+",
        landmarks: ["GPO", "Taj Mahal Hotel", "Jagdish Market"],
        specialties: ["Commercial focus", "Fast service in narrow lanes", "Established trust"],
      },
      {
        name: "Himayatnagar",
        slug: "himayatnagar",
        description: "Premium gas repair solutions for homes and food outlets in bustling Himayatnagar.",
        responseTime: "15-20 minutes",
        customers: "420+",
        landmarks: ["Narayanaguda", "Liberty X Road", "Domalguda"],
        specialties: ["Café kitchen service", "Residential support", "Quick daytime service"],
      },
      {
        name: "Nampally",
        slug: "nampally",
        description: "Trusted gas repair and emergency services near Nampally station and central exhibition grounds.",
        responseTime: "15-20 minutes",
        customers: "380+",
        landmarks: ["Nampally Railway Station", "Exhibition Grounds", "Public Gardens"],
        specialties: ["Central connectivity", "Emergency priority", "Cost-effective"],
      },
      {
        name: "Moosapet",
        slug: "moosapet",
        description: "Reliable gas appliance servicing for Moosapet's mixed residential and industrial localities.",
        responseTime: "25-30 minutes",
        customers: "280+",
        landmarks: ["Moosapet Metro", "IDL Lake", "Kukatpally Y Junction"],
        specialties: ["Industrial zone support", "Metro-accessible", "Safety audits"],
      },
      {
        name: "Erragadda",
        slug: "erragadda",
        description: "Fast and professional gas stove repair for the busy Erragadda area.",
        responseTime: "20-25 minutes",
        customers: "300+",
        landmarks: ["Chest Hospital", "Gokul Theatre", "Sanathnagar"],
        specialties: ["Quick response", "Affordable rates", "Reliable workmanship"],
      },
      {
        name: "SR Nagar",
        slug: "sr-nagar",
        description: "Expert gas services in SR Nagar, suitable for student hostels, families, and small eateries.",
        responseTime: "20-25 minutes",
        customers: "320+",
        landmarks: ["SR Nagar X Road", "Umesh Chandra Statue", "Vengal Rao Nagar"],
        specialties: ["Hostel kitchen support", "Educational hub service", "Evening appointments"],
      },
      {
        name: "Chandanagar",
        slug: "chandanagar",
        description: "Quality gas repair and installation tailored for Chandanagar's modern residential blocks.",
        responseTime: "25-30 minutes",
        customers: "280+",
        landmarks: ["Chandanagar Railway Station", "BHEL X Road", "Gangaram"],
        specialties: ["Family-focused service", "New connection setup", "Weekend availability"],
      },
      {
        name: "Hafeezpet",
        slug: "hafeezpet",
        description: "Dependable gas repair services serving Hafeezpet's rapidly expanding apartment complexes.",
        responseTime: "25-30 minutes",
        customers: "280+",
        landmarks: ["Hafeezpet Flyover", "Marthanda Nagar", "Madeenaguda"],
        specialties: ["High-rise societies", "Quick scheduling", "Pipeline modifications"],
      },
      {
        name: "Malakpet",
        slug: "malakpet",
        description: "Comprehensive gas repair and pipeline maintenance for the culturally rich Malakpet area.",
        responseTime: "20-25 minutes",
        customers: "320+",
        landmarks: ["Malakpet Metro Station", "TV Tower", "Moosarambagh"],
        specialties: ["Heritage area care", "Metro connectivity", "Emergency service"],
      }
    ],
    totalCustomers: "2000+",
    avgResponseTime: "20-25 minutes",
    establishedYear: "2018",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    testimonials: [
      {
        name: "Srinivas Reddy",
        area: "Gachibowli",
        profession: "Software Architect",
        rating: 5,
        text: "Excellent service for gas pipeline installation. Professional team with proper safety measures and documentation.",
        service: "Pipeline Installation",
        date: "December 2024",
      },
      {
        name: "Neha Sharma",
        area: "HITEC City",
        profession: "Product Manager",
        rating: 5,
        text: "Quick response for gas stove repair. Fixed the ignition problem efficiently. Highly recommended for IT professionals!",
        service: "Gas Stove Repair",
        date: "November 2024",
      },
    ],
    advantages: [
      {
        title: "IT Hub Expertise",
        description: "Specialized service for Hyderabad's tech professionals since 2018",
        icon: "MapPin",
      },
      {
        title: "Cyberabad Speed",
        description: "20-25 minute response time across Hyderabad's IT corridor",
        icon: "Clock",
      },
      {
        title: "Hyderabad Trusted",
        description: "2000+ customers in Hyderabad and Cyberabad areas",
        icon: "Users",
      },
      {
        title: "Telangana Licensed",
        description: "Fully licensed and compliant with Telangana state regulations",
        icon: "Shield",
      },
    ],
    seoContent: {
      whyChoose: [
        "Tech City Expertise: Specialized service for Hyderabad's IT professionals and modern homes",
        "Quick Response: Average 20-25 minute response time across Hyderabad metro",
        "Licensed Technicians: Certified for gas work in Telangana",
        "Comprehensive Coverage: Serving major areas including HITEC City, Gachibowli, Banjara Hills",
        "Customer Satisfaction: 2000+ happy customers across Hyderabad",
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
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: cityParam } = await params
  const city = cityData[cityParam as keyof typeof cityData]

  if (!city) {
    return {
      title: "City Not Found",
    }
  }

  return {
    title: `Gas Repair Services in ${city.name} | Gas Stove Repair, Pipeline Services | Gas Repair Wale`,
    description: `⭐ #1 Gas Repair Service in ${city.name}, ${city.state} ✅ ${city.totalCustomers} Happy Customers ✅ ${city.avgResponseTime} Response Time ✅ 24/7 Emergency Service. Call +91 83027 13127 for instant quote!`,
    keywords: `gas repair ${city.name.toLowerCase()}, gas stove repair ${city.name.toLowerCase()}, gas pipeline service ${city.name.toLowerCase()}, gas leak repair ${city.state.toLowerCase()}, emergency gas service ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Gas Repair Services in ${city.name} | Gas Repair Wale`,
      description: `Professional gas repair services in ${city.name} with ${city.totalCustomers} satisfied customers and ${city.avgResponseTime} response time.`,
      url: `https://gasrepairwale.com/locations/${cityParam}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }))
}

export default async function CityPage({ params }: Props) {
  const { city: cityParam } = await params
  const city = cityData[cityParam as keyof typeof cityData]

  if (!city) {
    notFound()
  }

  return <LocationPageContent city={city} citySlug={cityParam} />
}
