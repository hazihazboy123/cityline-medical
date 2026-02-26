export interface FAQItem {
  question: string
  answer: string
}

export interface PageFAQ {
  pageSlug: string
  items: FAQItem[]
}

export const faqs: PageFAQ[] = [
  {
    pageSlug: 'home',
    items: [
      {
        question: 'What does an on-site medic do at a job site?',
        answer:
          'An on-site medic is a licensed EMT, paramedic, or medical support professional stationed directly at your work site. They provide immediate first response for injuries and medical events, manage first aid stations, document incidents for OSHA compliance, administer drug and alcohol screenings, and coordinate with your safety team to prevent injuries before they happen. Having a dedicated medic on-site means treatment starts in seconds — not the 20+ minutes it takes for an ambulance to arrive.',
      },
      {
        question:
          'How does on-site medical support reduce my insurance costs?',
        answer:
          "Every workers' compensation claim impacts your Experience Modification Rate (EMR), which directly determines your insurance premiums. On-site medics treat injuries immediately, keeping treatment at the first-aid level whenever clinically appropriate. This reduces ER visits, prevents incidents from becoming OSHA recordables, and lowers your overall claims frequency — all of which drive your EMR down and save you money on premiums. Many of our clients see EMR improvements within the first policy year.",
      },
      {
        question: 'What industries does CityLine Medical serve?',
        answer:
          'We provide on-site medical services for construction, industrial and manufacturing, film and television production, hospitality, events, and safety consulting. Our teams are experienced in the unique hazards, compliance requirements, and operational pace of each industry — from OSHA-regulated construction sites to fast-moving film sets to large-scale public events.',
      },
      {
        question: 'How quickly can you deploy medics to my site?',
        answer:
          'For planned projects, we typically deploy within 48–72 hours of contract execution. For urgent or short-notice needs — especially common in film production and events — we can often deploy within 24 hours. Our average on-site response time once medics are stationed is under 2 minutes.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'CityLine Medical is headquartered in New York and serves clients nationwide. Our core operations span the NYC metro area, Long Island, Westchester, Northern New Jersey, and Connecticut, with the ability to deploy medical teams to projects and events anywhere in the United States.',
      },
      {
        question: 'Is CityLine Medical a Minority Business Enterprise?',
        answer:
          'Yes. CityLine Medical is a certified Minority Business Enterprise (MBE), which can support your diversity and inclusion contracting goals on construction, industrial, and government projects.',
      },
    ],
  },
  {
    pageSlug: 'construction',
    items: [
      {
        question: 'Does OSHA require a medic on construction sites?',
        answer:
          'OSHA standard 1926.50 requires that provisions be made for prompt medical attention in case of serious injury. For sites that are not in near proximity to a hospital or clinic, OSHA requires at least one person on-site who is trained and certified in first aid. While OSHA does not explicitly mandate a full-time medic, having a dedicated on-site medical professional goes far beyond the minimum standard — and it\'s the single most effective way to reduce recordables, manage your OSHA 300 log, and protect your EMR.',
      },
      {
        question:
          'What is an Experience Modification Rate (EMR) and why does it matter?',
        answer:
          "Your EMR (also called an E-Mod or X-Mod) is a number used by insurance companies to set your workers' compensation premiums. An EMR of 1.0 is average. Below 1.0 means you're safer than average and pay lower premiums. Above 1.0 means higher premiums — and many project owners and general contractors won't award work to companies with an EMR above 1.0. On-site medical support directly reduces the claims frequency that drives EMR up, protecting both your insurance costs and your ability to bid on work.",
      },
      {
        question:
          'What is the difference between an OSHA recordable and a first-aid case?',
        answer:
          'Under 29 CFR 1904.7, an injury is OSHA recordable if it results in death, days away from work, restricted duty, job transfer, medical treatment beyond first aid, or loss of consciousness. OSHA defines a specific list of 14 treatments that count as "first aid" — including non-prescription medications at non-prescription strength, wound cleaning, bandaging, and hot/cold therapy. Anything beyond that list is "medical treatment" and makes the case recordable. Having trained on-site medics who understand this distinction means injuries are treated appropriately at the first-aid level when clinically possible, preventing unnecessary recordables.',
      },
      {
        question:
          'What does Local Law 196 require for NYC construction sites?',
        answer:
          'Local Law 196 requires workers and supervisors on New York City construction sites to complete site safety training — including OSHA 30-hour training for supervisors and OSHA 10-hour training for workers. The law applies to most permitted construction and demolition work in NYC. Our medical support staff work alongside your Site Safety Managers and Coordinators to ensure your site meets all Local Law 196 requirements in addition to federal OSHA standards.',
      },
      {
        question: 'Can you work within OCIP or CCIP insurance programs?',
        answer:
          "Yes. We work within both Owner Controlled Insurance Programs (OCIP) and Contractor Controlled Insurance Programs (CCIP). We provide the documentation, incident tracking, claims management, and reporting that wrap-up insurance programs require — and our on-site protocols help reduce the overall claims experience for the program.",
      },
      {
        question: 'What types of construction projects do you support?',
        answer:
          'We deploy to high-rise commercial towers, residential developments, infrastructure and bridge projects, tunnel construction, demolition sites, interior renovations, and institutional builds. Our teams scale from single-site medic coverage to multi-site programs for large general contractors running dozens of projects simultaneously.',
      },
    ],
  },
  {
    pageSlug: 'industrial',
    items: [
      {
        question:
          'What occupational health services can you provide on-site at my facility?',
        answer:
          'We set up full-service occupational health clinics inside your facility — including DOT physicals, respirator fit testing (qualitative and quantitative), audiometric testing, pulmonary function testing, drug and alcohol screening, vaccinations, and wellness screenings. Everything your workforce needs, without leaving the premises.',
      },
      {
        question: 'Do you provide medical coverage for all shifts?',
        answer:
          "Yes. We staff around the clock to match your operation. Whether you run two shifts, three shifts, or continuous 24/7 operations, we provide consistent medical coverage across every shift — so your third-shift workers get the same level of care as your first shift.",
      },
      {
        question:
          'What is a return-to-work program and why does it matter?',
        answer:
          "A return-to-work (also called modified duty or transitional duty) program allows injured workers to remain productive in a limited capacity while they recover. This keeps employees engaged, reduces the duration of disability claims, prevents claim costs from escalating, and protects your EMR. Our teams coordinate return-to-work plans with treating physicians, your HR department, and your insurance carrier.",
      },
      {
        question: 'Can your medics help with ergonomic assessments?',
        answer:
          'Yes. Musculoskeletal disorders (MSDs) are the leading cause of lost workdays in industrial settings. Our teams conduct ergonomic assessments, implement stretch-and-flex programs, and provide early intervention when workers report discomfort — before minor issues become lost-time injuries. Depending on your needs, we can also coordinate periodic on-site chiropractic or physical therapy services.',
      },
      {
        question: 'What types of industrial facilities do you serve?',
        answer:
          'We serve manufacturing plants, warehouse and distribution centers, food processing facilities, pharmaceutical operations, data centers, energy and utility sites, and heavy industrial facilities. Each facility type has unique hazards, and we tailor our protocols and staffing accordingly.',
      },
    ],
  },
  {
    pageSlug: 'media',
    items: [
      {
        question: 'Does my production need a set medic?',
        answer:
          "If you're running a SAG-AFTRA or IATSE production, union safety requirements typically mandate medical coverage. Even for non-union productions, having a set medic is standard practice — production insurance carriers often require it, and NYC film permits may mandate medical coverage depending on the production type and scale. Beyond compliance, a set medic prevents minor injuries from becoming ER visits that shut down your set.",
      },
      {
        question:
          "What's the difference between a set medic and a safety coordinator?",
        answer:
          'A set medic is a licensed EMT or paramedic who provides direct medical care to cast and crew — treating injuries, managing medical events, and serving as the on-set first responder. A safety coordinator focuses on hazard identification, risk assessment, and safety planning for stunts, special effects, and high-risk locations. Many productions need both, and we provide both.',
      },
      {
        question:
          'Can you cover productions outside of studio facilities?',
        answer:
          'Absolutely. We cover studio shoots, location work, exterior sets, waterfront filming, and remote locations throughout the NYC metro area and beyond. Our set medics are equipped with portable medical kits and are experienced in operating in the non-standard environments that location work demands.',
      },
      {
        question:
          'Do your set medics understand how a production set works?',
        answer:
          "Yes — and this is a critical differentiator. Our set medics are experienced in the pace and protocol of working sets. They know how to coordinate with ADs, when to step in and when to stay back, how to handle medical contacts without slowing production, and how to position themselves for immediate response without getting in the shot.",
      },
      {
        question:
          'Do you handle COVID and infectious disease protocols?',
        answer:
          "Yes. We implement production health and safety protocols including health monitoring, testing coordination, and infectious disease prevention plans. While specific COVID protocols have evolved, the infrastructure and expertise we built during the pandemic translates directly into ongoing production health management.",
      },
    ],
  },
  {
    pageSlug: 'hospitality',
    items: [
      {
        question: 'Will your medics be visible to our guests?',
        answer:
          "No — discretion is our core principle in hospitality. Our medical professionals dress appropriately for your venue, position themselves in staff-only or low-visibility areas, and handle medical events with complete professionalism and discretion. Your guests won't know we're there unless they need us.",
      },
      {
        question:
          'What kind of medical emergencies do you handle in hospitality settings?',
        answer:
          'We handle cardiac events, allergic reactions and anaphylaxis, slip-and-fall injuries, intoxication incidents, diabetic emergencies, seizures, heat-related illness, and a wide range of staff injuries including kitchen burns, lacerations, and repetitive strain injuries. Our medics carry AEDs, epinephrine, and the equipment needed for immediate stabilization.',
      },
      {
        question:
          'Can you provide medical coverage for a single event at our venue?',
        answer:
          'Yes. We provide coverage for single events — gallery openings, private dinners, galas, holiday parties, rooftop events — as well as ongoing venue staffing. Whether you need a medic for one evening or year-round coverage, we scale to your needs.',
      },
      {
        question: 'Do you help with liquor liability documentation?',
        answer:
          "Yes. When we manage intoxication-related incidents, we document everything — the individual's condition, the care provided, and the disposition (including transport coordination). This documentation can support your venue's defense in any liquor liability claims.",
      },
      {
        question:
          'Can you set up an AED program for our hotel or venue?',
        answer:
          'Yes. We supply, place, and maintain Automated External Defibrillators (AEDs) and train your staff on proper use. Many jurisdictions require AEDs in hotels and large public venues, and having a maintained AED program with trained responders is both a compliance and safety issue.',
      },
    ],
  },
  {
    pageSlug: 'events',
    items: [
      {
        question: 'Do I need a medical plan for my event permit?',
        answer:
          'In most cases, yes. NYC special event permits issued through NYPD, FDNY, or DOH require a medical action plan as part of the application. Most venues and event insurance carriers also require a written medical plan. We prepare the medical component of your permit paperwork and provide the staffing to execute it.',
      },
      {
        question:
          "What's the difference between ALS and BLS event medical coverage?",
        answer:
          'BLS (Basic Life Support) teams are staffed by certified EMTs who provide first aid, CPR, AED use, and basic emergency care. ALS (Advanced Life Support) teams are staffed by paramedics who can perform advanced interventions including IV access, cardiac monitoring, medication administration, and advanced airway management. The level of coverage you need depends on your event size, risk profile, and venue requirements.',
      },
      {
        question: 'How many medics does my event need?',
        answer:
          "That depends on attendance, venue layout, event type, and risk factors. As a general guideline: events under 500 attendees typically need 1–2 EMTs. Events of 1,000–5,000 may need a BLS team of 3–4 with an ALS paramedic. Events over 5,000 attendees typically require a full medical operations team with a medical director, roving teams, first aid stations, and ALS transport capability. We assess every event individually and recommend a staffing plan based on the specific risks involved.",
      },
      {
        question: 'Do your event medics carry Narcan?',
        answer:
          'Yes. Our event medics carry and are trained to administer naloxone (Narcan) for opioid overdose recognition and response. For large-scale public events, overdose response capability is a critical component of any responsible medical plan.',
      },
      {
        question:
          'Can you provide medical coverage for multi-day festivals or events?',
        answer:
          'Yes. Multi-day events require rotating medic shifts, overnight coverage, weather monitoring, and sustained medical infrastructure. We build comprehensive medical operations plans for multi-day events of any scale — including festivals, trade shows, sporting events, and multi-day corporate programs.',
      },
    ],
  },
  {
    pageSlug: 'safety',
    items: [
      {
        question: 'What does a mock OSHA inspection involve?',
        answer:
          "We conduct a comprehensive walk-through of your site simulating a real OSHA compliance officer visit. We identify violations, document findings with photos and specific standard references, and provide a prioritized corrective action plan. The goal is to find and fix every issue before an actual inspector arrives — saving you from citations, penalties, and project shutdowns.",
      },
      {
        question: 'Can you help us respond to an OSHA citation?',
        answer:
          'Yes. If you\'ve received a citation, we assist with citation response, abatement planning, corrective action documentation, and penalty negotiation support. Our goal is to resolve the citation as quickly as possible with the least possible penalty, while putting controls in place to prevent recurrence.',
      },
      {
        question: 'What is a Job Hazard Analysis (JHA)?',
        answer:
          'A Job Hazard Analysis (also called an Activity Hazard Analysis in Army Corps work) is a document that breaks down a specific work task into individual steps, identifies potential hazards at each step, and establishes controls to eliminate or reduce those hazards. JHAs are required on many construction projects and are a best practice in all industrial settings. We develop JHAs tailored to your specific operations.',
      },
      {
        question:
          "What's the difference between leading and lagging safety indicators?",
        answer:
          "Lagging indicators measure what has already happened — OSHA recordables, lost-time injuries, EMR. Leading indicators measure what you're doing to prevent incidents — safety training completion, inspection frequency, near-miss reporting, corrective action closure rates. A strong safety program tracks both. Our safety culture assessments evaluate your leading indicators to identify risks before they become injuries.",
      },
      {
        question: 'Do you provide OSHA 10 and OSHA 30 training?',
        answer:
          'Yes. We provide OSHA 10-hour and OSHA 30-hour training for both construction and general industry, as well as first aid/CPR/AED, bloodborne pathogens, confined space, and custom safety training programs tailored to your workforce and operations.',
      },
    ],
  },
]

export function getFAQsBySlug(slug: string): FAQItem[] {
  return faqs.find((f) => f.pageSlug === slug)?.items ?? []
}
