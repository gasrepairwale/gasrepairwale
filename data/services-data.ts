export interface ServiceDetail {
  id: string
  title: string
  shortTitle: string
  tagline: string
  badge: string
  heroImage: string
  iconName: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  overview: string
  deepDescription: string[]
  commonIssues: Array<{
    symptom: string
    cause: string
    solution: string
  }>
  processSteps: Array<{
    step: string
    title: string
    description: string
  }>
  genuineSpares: string[]
  supportedBrands: string[]
  warrantyInfo: string
  pricingPolicy: string
  emergencyAvailability: string
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const servicesData: Record<string, ServiceDetail> = {
  "gas-stove-repair": {
    id: "gas-stove-repair",
    title: "Gas Stove Repair & Blue Flame Calibration",
    shortTitle: "Gas Stove Repair",
    tagline: "Certified doorstep repair for 2, 3, and 4-burner glass and stainless steel domestic gas stoves.",
    badge: "Most Requested",
    heroImage: "/images/burner-after.jpg",
    iconName: "Flame",
    metaTitle: "Gas Stove Repair Service | Blue Flame Tuning & Doorstep Repair",
    metaDescription: "Professional doorstep gas stove repair in Pune, Mumbai & Hyderabad. 15-25 min arrival, genuine brass burners, nozzle tuning & 90-day warranty. Call now!",
    keywords: [
      "gas stove repair",
      "gas stove service near me",
      "gas burner repair",
      "yellow flame fix",
      "gas stove low flame",
      "gas stove knob repair",
      "doorstep gas stove repair pune mumbai hyderabad",
    ],
    overview:
      "A malfunctioning gas stove isn't just an inconvenience in your daily cooking routine; it can also be a serious fire and health risk. Gas Repair Wale provides comprehensive doorstep gas stove repair across Pune, Mumbai, and Hyderabad. Our certified technicians carry heavy-duty brass replacement parts, specialized jet reamers, and digital combustible gas sniffers to restore your stove to peak efficiency.",
    deepDescription: [
      "Whether you are dealing with persistent yellow flames that blacken your cookware, low gas flow on large burners, gas smells leaking from the control knobs, or sticky valves that refuse to turn smoothly, our expert technicians troubleshoot the root cause.",
      "Every service includes complete disassembly of the burner assembly, ultrasonic jet nozzle clearing, air-fuel venturi tuning for a crisp blue flame, spindle re-greasing with heat-resistant synthetic lubricant, and a post-repair digital gas leak sniff check.",
    ],
    commonIssues: [
      {
        symptom: "Yellow / Orange Flame & Black Soot",
        cause: "Incomplete fuel combustion caused by carbon-choked burner ports or incorrect air-to-gas ratio.",
        solution: "Ultrasonic cleaning of burner ports, venturi chamber de-carbonization, and precision air-shutter calibration.",
      },
      {
        symptom: "Low Gas Pressure / Weak Flame",
        cause: "Microscopic food particles, boiled-over milk grease, or carbon encrusted inside the brass jet nozzle orifice.",
        solution: "Precision reaming of nozzle with calibrated micro-tools or replacement with original factory-spec brass jet.",
      },
      {
        symptom: "Gas Odor Around Control Knobs",
        cause: "Dried out valve grease, degraded internal spindle O-rings, or loose gas manifold connections.",
        solution: "Disassembly of brass spindle, replacement of internal high-temperature sealing rings, and pressure testing.",
      },
      {
        symptom: "Stiff / Jammed Burner Knobs",
        cause: "Accumulated cooking grease solidified inside the brass gas cock mechanism over months of heat exposure.",
        solution: "Chemical degreasing, ultrasonic bath of brass cock, re-alignment, and food-grade heat-resistant greasing.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "On-Site Diagnosis & Sniff Test",
        description: "Our certified technician arrives with calibrated digital sniffers, inspects the stove, checks regulator pressure, and explains the required fix.",
      },
      {
        step: "02",
        title: "Clear Upfront Estimate",
        description: "We provide an honest, itemized quote before touching any component. Zero hidden charges, completely transparent.",
      },
      {
        step: "03",
        title: "Genuine Brass Part Installation",
        description: "We carry 100% genuine ISI-marked heavy brass burners, spindles, and jets directly in our mobile inventory van.",
      },
      {
        step: "04",
        title: "Blue Flame Tuning & Warranty Handover",
        description: "We calibrate the flame to 100% pure blue, conduct a final electronic leak check, and provide a 90-day service warranty card.",
      },
    ],
    genuineSpares: [
      "Heavy-gauge forged brass burner tops (Small, Medium, Jumbo)",
      "Factory-calibrated brass gas jets & injector nozzles",
      "Heat-resistant brass spindle valves & manifold cocks",
      "Reinforced steel wire braided LPG/PNG safety hose",
      "Original Bakelite heat-insulated ergonomic control knobs",
    ],
    supportedBrands: [
      "Prestige",
      "Sunflame",
      "Glen",
      "Faber",
      "Elica",
      "Pigeon",
      "Butterfly",
      "Vidiem",
      "Kaff",
      "Hindware",
      "Bajaj",
      "Suraksha",
    ],
    warrantyInfo: "90-Day Standard Warranty on Replaced Spare Parts & Workmanship",
    pricingPolicy: "Transparent Upfront Estimate • Pay After 100% Satisfactory Service",
    emergencyAvailability: "15 to 25 Minute Doorstep Arrival Across All Major Sectors",
    faqs: [
      {
        question: "Why is my gas stove giving an orange or yellow flame instead of blue?",
        answer: "A yellow or orange flame indicates incomplete combustion of LPG/PNG, usually caused by clogged burner holes, grease deposits in the mixing tube, or improper air-fuel mixture. It wastes gas and deposits black soot on cookware. Our technicians de-carbonize the assembly and recalibrate it to a clean blue flame.",
      },
      {
        question: "How long does a typical gas stove repair take?",
        answer: "Most routine gas stove repairs, including burner descaling, nozzle tuning, and valve greasing, take between 30 to 45 minutes right at your kitchen countertop.",
      },
      {
        question: "Do you use original company spare parts?",
        answer: "Yes, we exclusively carry 100% genuine heavy-gauge brass burners, original valves, and high-temperature seals compatible with all major Indian and international brands.",
      },
      {
        question: "What should I do if I smell gas near my stove right now?",
        answer: "Turn off the cylinder regulator or PNG main valve immediately, open all kitchen windows for ventilation, DO NOT switch on or off any electric appliances, and call our emergency helpline (+91 83027 13127) for rapid dispatch.",
      },
    ],
  },

  "gas-hob-repair": {
    id: "gas-hob-repair",
    title: "Built-In Glass Hob & Cooktop Auto-Ignition Repair",
    shortTitle: "Gas Hob Repair",
    tagline: "Specialized doorstep repair for built-in toughened glass hobs, auto-ignition spark units, and micro-switches.",
    badge: "Hob Specialists",
    heroImage: "/images/hob-glass-repair.jpg",
    iconName: "Wrench",
    metaTitle: "Built-In Gas Hob Repair | Auto Ignition & Glass Cooktop Service",
    metaDescription: "Expert built-in gas hob repair for Faber, Glen, Bosch, Elica, Prestige & Kaff. Auto-ignition pulse repair, brass spindle tuning & 90-day warranty in Pune, Mumbai & Hyderabad.",
    keywords: [
      "gas hob repair",
      "built in hob service",
      "hob auto ignition repair",
      "gas cooktop repair",
      "faber hob repair",
      "glen hob service near me",
      "hob glass repair pune mumbai hyderabad",
    ],
    overview:
      "Modern built-in glass hobs require specialized technical expertise compared to traditional stainless steel stoves. Underneath the toughened glass surface lies an intricate network of high-voltage spark pulse generators, micro-switches, and precision gas brass valves. Gas Repair Wale has dedicated hob technicians trained to repair premium European and Indian built-in cooktops safely without damaging countertop cutouts or glass panels.",
    deepDescription: [
      "Common hob issues such as endless spark clicking when knobs are released, completely dead auto-ignition, broken ceramic spark plugs, or jammed brass spindles that won't depress require surgical precision.",
      "We carry original electronic pulse generators (DC battery & AC 230V systems), micro-switches, heat-shield silicon gaskets, and Italian/Indian brass spindle assemblies for seamless on-site repair.",
    ],
    commonIssues: [
      {
        symptom: "Continuous Spark Clicking Even When Released",
        cause: "Moisture or oil seepage into the micro-switch beneath the knob, keeping the electrical circuit permanently closed.",
        solution: "Cleaning and chemical drying of micro-switches or replacing worn switches with waterproof silicone sealed units.",
      },
      {
        symptom: "No Spark from Auto-Ignition",
        cause: "Exhausted D-type battery, faulty electronic pulse generator box, or cracked ceramic spark electrode.",
        solution: "Testing battery voltage, replacing defective pulse generator, and resetting ceramic electrode gap to 3.5mm.",
      },
      {
        symptom: "Jammed / Cannot Push Down Knob to Ignite",
        cause: "Solidified kitchen oil vapor seizing the spring-loaded brass spindle shaft mechanism.",
        solution: "Disassembly of spindle mechanism, solvent degreasing, shaft polishing, and synthetic lubricant repacking.",
      },
      {
        symptom: "Flame Goes Out Immediately When Knob is Released",
        cause: "Malfunctioning thermocouple or flame failure device (FFD) failing to register heat from the flame.",
        solution: "Cleaning carbon buildup from thermocouple tip, testing millivolt output, or replacing defective FFD sensor.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Glass Inspection & Isolation",
        description: "Carefully inspect glass integrity, isolate electrical power supply (or battery), and turn off gas supply safely.",
      },
      {
        step: "02",
        title: "Sub-Glass Diagnostic Disassembly",
        description: "Remove burner caps, bezels, and lift the glass panel safely to access the internal pulse generator and gas rail.",
      },
      {
        step: "03",
        title: "Component Replacement & Wiring Check",
        description: "Replace faulty pulse generators, micro-switches, or brass spindles using high-temp silicone wiring.",
      },
      {
        step: "04",
        title: "Multi-Point Safety Testing",
        description: "Verify instant single-click ignition across all burners, check flame failure safety, and test with electronic sniffer.",
      },
    ],
    genuineSpares: [
      "AC 230V & DC 1.5V Electronic Pulse Generators",
      "Ceramic insulation spark electrodes with high-temp silicon cables",
      "Waterproof micro-switches for push-to-turn knobs",
      "Original Italian style SABAF / Somipress compatible brass valves",
      "Flame Failure Device (FFD) magnetic thermocouple probes",
    ],
    supportedBrands: [
      "Faber",
      "Glen",
      "Bosch",
      "Elica",
      "Kaff",
      "Prestige",
      "Hafele",
      "Siemens",
      "Hindware",
      "Whirlpool",
      "Sunflame",
      "Franke",
    ],
    warrantyInfo: "90-Day Comprehensive Warranty on Auto-Ignition Components & Spares",
    pricingPolicy: "Transparent Upfront Estimate • Pay After 100% Satisfactory Service",
    emergencyAvailability: "Same-Day Specialist Dispatch across Pune, Mumbai & Hyderabad",
    faqs: [
      {
        question: "Can you fix the auto-ignition without replacing the whole hob?",
        answer: "Yes, in 95% of cases, the issue is simply a faulty micro-switch, worn ceramic electrode, or depleted pulse generator. We replace only the defective component on-site, saving you thousands compared to buying a new cooktop.",
      },
      {
        question: "Do you repair European brands like Bosch, Hafele, and Siemens?",
        answer: "Yes, our technicians are trained on European SABAF burner configurations and have compatible high-precision spares for Bosch, Hafele, Siemens, and Faber hobs.",
      },
      {
        question: "Why does my hob spark continuously after cleaning?",
        answer: "Water or liquid soap often seeps down into the micro-switches around the knob stems during countertop cleaning, shorting the circuit. If it doesn't stop after drying, our technician can replace the affected switch with a moisture-sealed unit.",
      },
    ],
  },

  "gas-pipeline-installation": {
    id: "gas-pipeline-installation",
    title: "Copper Gas Pipeline Installation & Safety Audits",
    shortTitle: "Copper Pipeline Service",
    tagline: "Commercial & residential heavy-gauge seamless copper pipeline installation, relocation, and safety certification.",
    badge: "BIS / PESO Compliant",
    heroImage: "/images/copper-pipeline.jpg",
    iconName: "Settings",
    metaTitle: "Copper Gas Pipeline Installation | Certified PNG & LPG Piping",
    metaDescription: "Heavy-duty copper gas pipeline installation for apartments, modular kitchens & restaurants. PESO/BIS compliant, digital pressure tested & 1-year certified warranty.",
    keywords: [
      "copper gas pipeline installation",
      "lpg gas pipeline installation",
      "png pipeline installation",
      "gas pipe fitting near me",
      "gas pipeline repair",
      "gas pipeline testing certificate pune mumbai hyderabad",
    ],
    overview:
      "Modern modular kitchens demand safe, durable, and concealed gas pipeline systems. Flexible rubber hoses deteriorate, become brittle, or get gnawed by rodents over time, creating catastrophic fire hazards behind wooden cabinetry. Gas Repair Wale specializes in heavy-duty seamless copper gas pipeline installations for high-rise residential societies, villas, and commercial kitchens across Pune, Mumbai, and Hyderabad.",
    deepDescription: [
      "We use 100% solid drawn seamless copper tubes adhering to IS:1239 / ASTM B88 standards, joined using high-temperature silver alloy brazing for leak-proof permanence.",
      "Every installation includes dual isolation brass forged ball valves (at the cylinder bank and cooktop), heavy-gauge brass compression adaptors, and rigid wall clamping to prevent vibration fatigue. After installation, we conduct digital hydraulic/pneumatic pressure drop testing at 1.5 times the operating pressure.",
    ],
    commonIssues: [
      {
        symptom: "Aged or Cracked Rubber Hose Behind Cabinets",
        cause: "Natural degradation of synthetic rubber after 2+ years of exposure to oil, heat, and moisture.",
        solution: "Complete replacement with rigid copper pipeline or steel-reinforced corrugated flexible metallic hose.",
      },
      {
        symptom: "Pipeline Relocation During Kitchen Renovation",
        cause: "New modular kitchen design placing cooktop further away from the gas cylinder utility balcony.",
        solution: "Custom wall-routed copper line extension with protective sleeves through partition walls.",
      },
      {
        symptom: "Low Gas Pressure at Cooktop",
        cause: "Undersized pipeline diameter, excessive sharp elbows, or choked inline filters.",
        solution: "Re-engineering pipeline sizing (1/2 inch vs 3/8 inch) and installing high-flow brass ball valves.",
      },
      {
        symptom: "Housing Society Safety Audit Failure",
        cause: "Uncertified non-metallic piping violating local fire department or society safety regulations.",
        solution: "Installation of certified copper pipeline with pressure gauge and formal safety certificate issuance.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Site Routing & Blueprint Survey",
        description: "Inspect the kitchen layout, calculate shortest safe distance between cylinder/meter and cooktop, and plan clamping path.",
      },
      {
        step: "02",
        title: "Seamless Copper Line Laying",
        description: "Install heavy-gauge copper pipe using certified silver brazing or forged brass compression fittings.",
      },
      {
        step: "03",
        title: "Dual Isolation Valve Setup",
        description: "Mount full-bore brass ball valves at the source and cooktop for instantaneous emergency shut-off.",
      },
      {
        step: "04",
        title: "Digital Pressure Decay Test & Certification",
        description: "Hold pressure for 30 minutes to verify zero drop, test joints with electronic sniffer, and issue compliance card.",
      },
    ],
    genuineSpares: [
      "Heavy-gauge seamless copper tubes (1/2\" and 3/8\" outer diameter)",
      "High-pressure forged brass isolation ball valves with safety handles",
      "Silver brazing alloy rods (cadmium-free) for leak-proof joints",
      "Brass flared nuts, unions, and quick-disconnect manifold fittings",
      "Corrosion-resistant galvanized iron saddle clamps with rubber lining",
    ],
    supportedBrands: [
      "Adani Total Gas",
      "Mahanagar Gas (MGL)",
      "Maharashtra Natural Gas (MNGL)",
      "Bhagyanagar Gas (BGL)",
      "Indian Oil (Indane)",
      "Bharat Gas",
      "HP Gas",
    ],
    warrantyInfo: "1-Year Certified Warranty on Pipeline Integrity & Joint Sealing",
    pricingPolicy: "Transparent Per-Foot Upfront Estimate • Pay After Pressure Testing",
    emergencyAvailability: "Same-Day Emergency Pipeline Repair & New Connection Scheduling",
    faqs: [
      {
        question: "Why is copper pipeline better than regular rubber gas hose?",
        answer: "Copper does not degrade with age, is completely impervious to rodent biting, withstands high heat, and cannot puncture easily. It is approved by fire safety norms for concealed kitchen routing and lasts over 25+ years without maintenance.",
      },
      {
        question: "Do you provide safety certificates for housing societies?",
        answer: "Yes, our certified technicians issue an official pressure test certificate confirming that the pipeline was pressure-tested and is free of leaks, which satisfies society management and insurance requirements.",
      },
      {
        question: "Can copper pipeline be used for both LPG cylinders and piped natural gas (PNG)?",
        answer: "Yes, our copper pipeline installations are multi-fuel rated and fully compatible with both LPG cylinder systems and PNG city piped gas connections (MGL, MNGL, Adani Gas, BGL).",
      },
    ],
  },

  "emergency-gas-repair": {
    id: "emergency-gas-repair",
    title: "24/7 Emergency Gas Leak Detection & Safety Dispatch",
    shortTitle: "Emergency Gas Repair",
    tagline: "Rapid 15 to 25 minute emergency dispatch for sudden gas smells, hissing regulators, and pipeline ruptures.",
    badge: "24/7 Urgent Dispatch",
    heroImage: "/images/gas-leak-detector.jpg",
    iconName: "AlertTriangle",
    metaTitle: "24/7 Emergency Gas Leak Repair | 15-25 Min Response",
    metaDescription: "Immediate emergency gas leak detection & repair across Pune, Mumbai & Hyderabad. Electronic sniffer sensors, 15-25 min arrival, licensed technicians. Call +91 83027 13127!",
    keywords: [
      "emergency gas repair",
      "gas leak repair near me",
      "gas leak detection",
      "smell gas in kitchen",
      "emergency gas cylinder leak",
      "24 hour gas technician pune mumbai hyderabad",
    ],
    overview:
      "A gas leak is a life-threatening emergency that cannot wait. Liquefied Petroleum Gas (LPG) and Piped Natural Gas (PNG) are heavily odorized with ethyl mercaptan specifically to alert occupants of leaks. If you smell rotten eggs, hear a distinct hissing sound from your cylinder regulator, or suspect micro-leaks behind your kitchen cabinets, Gas Repair Wale provides immediate 24/7 emergency dispatch across all sectors of Pune, Mumbai, and Hyderabad.",
    deepDescription: [
      "Our emergency response mobile units carry multi-sensor digital hydrocarbon sniffer instruments capable of detecting sub-surface gas leaks down to 10 parts per million (PPM), far below flammable thresholds.",
      "Upon arrival, our technician immediately isolates the source, ventilates the space safely, pinpoints the micro-leak, and replaces perished regulator O-rings, punctured hoses, or cracked manifold joints on the spot.",
    ],
    commonIssues: [
      {
        symptom: "Strong Rotten Egg Odor in Kitchen",
        cause: "Leaking gas accummulating due to a failed regulator seal, loose hose clamp, or defective burner valve.",
        solution: "Immediate isolation, electronic sniffer localization, seal replacement, and combustible clearance testing.",
      },
      {
        symptom: "Hissing Sound from Cylinder Regulator Collar",
        cause: "Perished or displaced internal rubber O-ring inside the cylinder neck valve, causing gas escape under pressure.",
        solution: "Extraction of damaged O-ring with specialized tool and insertion of factory-grade high-density safety ring.",
      },
      {
        symptom: "Gas Smell Lingering Inside Closed Cabinets",
        cause: "Microscopic hairline crack in concealed copper line or porous rubber pipe behind wooden drawers.",
        solution: "Pressure decay test of pipeline, locating micro-fissure with electronic probe, and replacing affected pipe segment.",
      },
      {
        symptom: "Regulator Knob Stuck or Won't Turn Off",
        cause: "Internal mechanical lock failure of domestic regulator ball bearing assembly.",
        solution: "Emergency disengagement using safety technique and immediate replacement with brand new certified regulator.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Immediate Telephonic Triage",
        description: "Our dispatch coordinator guides you through immediate safety steps (regulator off, windows open, no electrical sparks).",
      },
      {
        step: "02",
        title: "15-25 Min Rapid Arrival",
        description: "The nearest stationed technician in your area is immediately redirected with priority emergency status.",
      },
      {
        step: "03",
        title: "Multi-Sensor Electronic Sniffing",
        description: "Calibrated digital sniffer scans joints, valves, cylinder necks, and concealed walls to pinpoint the exact leak.",
      },
      {
        step: "04",
        title: "Permanent Fix & Clearance Handover",
        description: "Defective component is replaced, system is re-pressurized, and a zero-PPM clean safety clearance is certified.",
      },
    ],
    genuineSpares: [
      "High-density neoprene cylinder neck valve O-rings",
      "ISI-certified heavy-duty domestic LPG regulators",
      "Steel wire braided explosion-proof flexible hoses",
      "High-pressure forged brass PNG isolation valves",
      "High-temperature PTFE gas thread sealing tapes",
    ],
    supportedBrands: [
      "Indane",
      "Bharat Gas",
      "HP Gas",
      "MGL",
      "MNGL",
      "Adani Gas",
      "Bhagyanagar Gas",
    ],
    warrantyInfo: "Immediate Zero-PPM Safety Clearance Certificate Handover",
    pricingPolicy: "Transparent Upfront Estimate • Pay After Service",
    emergencyAvailability: "Active 24 Hours a Day, 7 Days a Week, 365 Days a Year",
    faqs: [
      {
        question: "What is the very first thing I should do if I smell gas in my home?",
        answer: "1. Turn OFF the regulator knob or PNG main valve immediately. 2. Open all kitchen doors and windows wide. 3. DO NOT turn on or off any electrical switches, exhaust fans, or lights (electric arcing can ignite gas). 4. Do not strike matches or lighters. 5. Evacuate to a safe area and call our emergency line (+91 83027 13127).",
      },
      {
        question: "How fast can your technician reach my location?",
        answer: "Our technicians are stationed locally across Mumbai, Pune, and Hyderabad with mobile vans. Our average emergency arrival time is between 15 to 25 minutes.",
      },
      {
        question: "Do you have digital equipment to detect leaks inside walls?",
        answer: "Yes, our technicians carry electronic combustible gas sniffers with flexible gooseneck probes capable of detecting gas concentrations behind modular kitchen panels and inside wall cavities down to parts-per-million sensitivity.",
      },
    ],
  },

  "burner-descaling": {
    id: "burner-descaling",
    title: "Ultrasonic Deep Burner Descaling & Preventive AMC",
    shortTitle: "Burner Descaling & AMC",
    tagline: "Chemical carbon descaling, jet bath, and annual maintenance contracts to reduce domestic gas consumption by up to 20%.",
    badge: "Fuel Efficiency",
    heroImage: "/images/stove-flame-test.jpg",
    iconName: "Sparkles",
    metaTitle: "Gas Stove Burner Descaling & AMC | Fuel Saving Service",
    metaDescription: "Deep chemical burner descaling & ultrasonic jet cleaning in Pune, Mumbai & Hyderabad. Save up to 20% on gas cylinders. Calibrated blue flame & 90-day warranty.",
    keywords: [
      "burner descaling service",
      "gas stove cleaning service",
      "gas stove AMC",
      "gas burner deep cleaning",
      "save gas cylinder consumption",
      "gas stove maintenance pune mumbai hyderabad",
    ],
    overview:
      "Over months of cooking, fine carbon encrustation, boiled-over milk, cooking oils, and mineral deposits choke the micro-orifices of gas burners and mixing tubes. This choking restricts secondary aeration, resulting in inefficient, sputtering yellow flames that consume up to 20% more LPG/PNG to generate the same cooking heat. Gas Repair Wale provides comprehensive ultrasonic deep burner descaling and preventive maintenance contracts for homes and residential societies.",
    deepDescription: [
      "Our technicians perform an ultrasonic chemical bath on brass burner tops and injector nozzles, thoroughly dissolving baked-on carbon and grease deposits.",
      "The mixing venturi tube is cleared of soot and cobwebs, spindle manifold chambers are cleaned, and calibrated blue flame air-fuel synchronization is restored to maximize thermal efficiency.",
    ],
    commonIssues: [
      {
        symptom: "Gas Cylinder Finishing Much Faster Than Usual",
        cause: "Carbon buildup choking burner holes, causing unburned fuel to escape without producing heat.",
        solution: "Full ultrasonic chemical descaling and jet recalibration, restoring standard gas consumption.",
      },
      {
        symptom: "Uneven Flame Ring (Burner Lit Only on One Side)",
        cause: "Food spillover dried solid inside individual burner cap perimeter slots.",
        solution: "Precision mechanical clearing and chemical bath, ensuring 360-degree uniform blue flame crown.",
      },
      {
        symptom: "Sputtering / Popping Sound When Burning",
        cause: "Moisture or debris trapped inside the burner mixing throat.",
        solution: "Thermal dryout, venturi chamber de-carbonization, and air shutter re-alignment.",
      },
      {
        symptom: "Cooking Takes Significantly Longer Time",
        cause: "Reduced BTU heat output due to constricted injector nozzle aperture.",
        solution: "Jet nozzle micro-reaming or replacement with factory-calibrated genuine brass orifice.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Thermal Output Inspection",
        description: "Evaluate flame temperature, flame color profile, and check burner caps for warpage or blockages.",
      },
      {
        step: "02",
        title: "Disassembly & Ultrasonic Chemical Bath",
        description: "Submerge brass burners and nozzles in specialized non-corrosive carbon-dissolving solution.",
      },
      {
        step: "03",
        title: "Venturi Reaming & Degreasing",
        description: "Scrape and clear interior mixing tubes, check air shutter dampers, and lubricate spindle valves.",
      },
      {
        step: "04",
        title: "Thermal Calibration & Efficiency Test",
        description: "Reassemble and fine-tune for 100% blue flame output with complete fuel burn efficiency.",
      },
    ],
    genuineSpares: [
      "High-precision factory-drilled brass gas jets",
      "Original forged brass burner caps with precision slots",
      "Heat-resistant silicone burner base gaskets",
      "Synthetic food-grade high-temp valve lubricant",
    ],
    supportedBrands: [
      "Prestige",
      "Sunflame",
      "Glen",
      "Faber",
      "Elica",
      "Pigeon",
      "Butterfly",
      "Kaff",
      "All Domestic Cooktops",
    ],
    warrantyInfo: "90-Day Blue Flame Efficiency Guarantee",
    pricingPolicy: "Transparent Upfront Estimate • Pay After Service",
    emergencyAvailability: "15 to 25 Minute Doorstep Scheduling",
    faqs: [
      {
        question: "How often should gas stove burners be descaled?",
        answer: "For standard Indian households with daily cooking, we recommend professional burner descaling every 6 to 12 months. Regular descaling prevents heavy carbon buildup, maintains cooking speed, and reduces monthly cylinder refills.",
      },
      {
        question: "Will burner cleaning really reduce my monthly gas cylinder bill?",
        answer: "Yes, when burner slots are choked, a significant amount of gas passes through unburned or burns with a weak orange flame, requiring more time and gas to cook. A clean, properly calibrated blue flame delivers up to 20% higher thermal efficiency.",
      },
    ],
  },

  "commercial-bhatti": {
    id: "commercial-bhatti",
    title: "Commercial Kitchen Stove & Bhatti Repair Service",
    shortTitle: "Commercial Bhatti Repair",
    tagline: "Heavy-duty on-call repair and preventive maintenance contracts for restaurants, cloud kitchens, and catering setups.",
    badge: "Commercial / AMC",
    heroImage: "/images/commercial-stove.jpg",
    iconName: "Building2",
    metaTitle: "Commercial Kitchen Stove & Bhatti Repair | Restaurant Gas AMC",
    metaDescription: "Commercial gas stove & bhatti repair for restaurants, cloud kitchens & cafes in Pune, Mumbai & Hyderabad. High-pressure burner tuning, manifold testing & 24/7 priority response.",
    keywords: [
      "commercial gas stove repair",
      "bhatti repair near me",
      "restaurant gas pipeline repair",
      "commercial kitchen gas AMC",
      "high pressure bhatti burner service",
      "commercial kitchen stove maintenance pune mumbai hyderabad",
    ],
    overview:
      "In commercial food and beverage operations, a sudden breakdown of your cooking range, Chinese wok bhatti, or gas manifold can halt kitchen production, resulting in lost revenue and dissatisfied patrons. Gas Repair Wale provides specialized commercial gas maintenance services for restaurants, cloud kitchens, hotels, food courts, and catering cooking ranges across Pune, Mumbai, and Hyderabad.",
    deepDescription: [
      "Our commercial technicians are trained on high-pressure T-22, T-35, and G-10 bhatti burners, multi-cylinder LPG manifold banks, automatic flame failure safety systems, and pilot light assemblies.",
      "We offer emergency rapid dispatch, night-shift maintenance options to prevent lunch/dinner rush downtime, and customized Annual Maintenance Contracts (AMC) with periodic safety leak audits.",
    ],
    commonIssues: [
      {
        symptom: "Bhatti Low Pressure / Flickering Flame Under Load",
        cause: "Clogged high-pressure nozzle, regulator freezing, or manifold pressure drop during simultaneous cooking.",
        solution: "Installation of commercial high-pressure regulator, manifold tuning, and burner jet resizing.",
      },
      {
        symptom: "Chinese Wok Range Pilot Flame Keeps Extinguishing",
        cause: "Soot-coated pilot nozzle, draft interference, or defective pilot valve.",
        solution: "Ultrasonic pilot cleaning, flame shield alignment, and pilot valve replacement.",
      },
      {
        symptom: "Gas Odor Around Cylinder Manifold Bank",
        cause: "Vibration fatigue at pigtail pipe connections or worn manifold ball valves.",
        solution: "Hydrocarbon sniffer leak scan, replacement with stainless steel braided pigtails, and new ball valves.",
      },
      {
        symptom: "Commercial Kitchen Safety Compliance Notice",
        cause: "Non-compliant rubber connections or absence of fire emergency shut-off valves.",
        solution: "Upgrade to industrial copper/MS pipeline system with master lever ball valves and compliance certification.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Commercial Kitchen Assessment",
        description: "Inspect cooking line ranges, manifold pressure, pigtail conditions, and emergency shut-off accessibility.",
      },
      {
        step: "02",
        title: "High-Pressure Burner & Manifold Overhaul",
        description: "De-carbonize high-output bhatti jets, re-pack high-temp commercial needle valves, and check manifold joints.",
      },
      {
        step: "03",
        title: "Pressure Testing & Pilot Calibration",
        description: "Test line pressure under simultaneous cooking load, balance flame heights, and ensure reliable pilot ignition.",
      },
      {
        step: "04",
        title: "Safety Audit Certificate & AMC Scheduling",
        description: "Issue inspection clearance report and setup scheduled preventive maintenance visits.",
      },
    ],
    genuineSpares: [
      "Commercial heavy-cast iron bhatti burners (T-22, T-35, M-10)",
      "High-pressure commercial adjustable LPG regulators",
      "Stainless steel wire-braided flexible manifold pigtails",
      "Industrial high-temperature forged brass needle valves",
      "Commercial pilot light burner kits with mounting brackets",
    ],
    supportedBrands: [
      "All Commercial Kitchen Cooking Ranges",
      "Chinese Wok Ranges",
      "Continental Ranges",
      "Tandoor Gas Burners",
      "Commercial Manifold Banks (4 to 12 Cylinders)",
      "Bakery Ovens & Boiling Pans",
    ],
    warrantyInfo: "Commercial Warranty & Priority 24/7 Breakdown Assistance",
    pricingPolicy: "Transparent Itemized Upfront Estimate • Corporate Invoicing Available",
    emergencyAvailability: "Priority Commercial Dispatch with Minimum Kitchen Downtime",
    faqs: [
      {
        question: "Can you service our kitchen during non-operating hours (early morning or late night)?",
        answer: "Yes, we schedule routine commercial kitchen maintenance, manifold upgrades, and deep burner servicing during early morning (6 AM - 10 AM) or after closing hours (11 PM onwards) so your active food service is never disrupted.",
      },
      {
        question: "Do you offer Annual Maintenance Contracts (AMC) for restaurants?",
        answer: "Yes, we provide quarterly and bi-monthly AMC packages that include periodic leak detection audits, burner descaling, regulator testing, and priority 24/7 emergency breakdown support.",
      },
      {
        question: "Do you supply and install multi-cylinder commercial manifold systems?",
        answer: "Yes, we design, fabricate, and install certified 4, 6, 8, and 12-cylinder LPG commercial manifold banks with auto-changeover regulators and safety isolation valves.",
      },
    ],
  },
}
