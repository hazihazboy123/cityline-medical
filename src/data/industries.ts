export interface IndustryTestimonial {
  quote: string
  name: string
  title: string
}

export interface IndustryService {
  title: string
  description: string
}

export interface Industry {
  slug: string
  name: string
  tagline: string
  heroHeadline: string
  heroSub: string
  description: string
  services: IndustryService[]
  testimonials: IndustryTestimonial[]
}

export const industries: Industry[] = [
  {
    slug: 'construction',
    name: 'Construction',
    tagline: 'From high-rises to infrastructure — medics who know your site.',
    heroHeadline: 'Built for the Job Site.',
    heroSub:
      'Full-time on-site medics, OSHA compliance, and injury management for construction projects of any scale nationwide. Headquartered in New York.',
    description:
      "Construction sites are high-risk environments where seconds matter. CityLine Medical is a certified Minority Business Enterprise (MBE) deploying experienced on-site medics directly to your project. Our teams integrate with your existing safety staff, manage injury documentation, and keep your OSHA 300 log clean — so your crew stays working and your project stays on schedule.",
    services: [
      {
        title: 'On-Site Medics',
        description:
          'Dedicated on-site medics stationed on your site every shift. Immediate first response for any injury or medical event. From high-rise towers and infrastructure projects to bridges, tunnels, residential developments, commercial buildouts, and demolition sites — our teams deploy to any construction environment, on any timeline.',
      },
      {
        title: 'OSHA Compliance & 300 Log Management',
        description:
          'Full compliance with OSHA 1926.23, 1926.50, and Army Corps EM385 1-1. Our medics evaluate whether incidents meet OSHA recordability criteria under 29 CFR 1904 — proper first-report documentation and on-site treatment capability means the difference between a recordable incident and a first-aid case, keeping your OSHA 300 log clean and your Total Recordable Incident Rate (TRIR) low.',
      },
      {
        title: 'Protect Your EMR',
        description:
          'Every OSHA recordable and workers\' compensation claim impacts your Experience Modification Rate (EMR) — the metric that determines your insurance premiums and your ability to bid on projects. Our on-site medical protocols keep treatment on-site, prevent unnecessary ER visits, and ensure proper first-report documentation so incidents that qualify as first-aid cases aren\'t incorrectly logged as recordables. The result: fewer claims, lower premiums, and a competitive EMR that wins work.',
      },
      {
        title: 'Injury Tracking (IRAMP)',
        description:
          'Proprietary HIPAA-compliant software tracks every incident in real time. Downloadable reports, trend analysis, and 24/7 data access.',
      },
      {
        title: 'Drug & Alcohol Testing',
        description:
          'Pre-employment, random, and post-incident screening administered directly on-site. DOT and non-DOT protocols.',
      },
      {
        title: 'Occupational Health',
        description:
          'DOT physicals, respirator fit testing, audiometric testing, and vaccinations — all performed on your job site.',
      },
      {
        title: 'Claims Management & OCIP/CCIP Support',
        description:
          "Workers' comp administration, insurance documentation, and claims oversight. We work within Owner Controlled Insurance Programs (OCIP) and Contractor Controlled Insurance Programs (CCIP), providing the documentation, incident tracking, and claims management that wrap-up programs require — while helping to reduce overall program costs.",
      },
      {
        title: 'Protect Your Bottom Line',
        description:
          'On-site medical support reduces unnecessary ER visits, minimizes lost workdays, and keeps your OSHA recordable rate low — directly impacting your insurance premiums, project bids, and overall project costs. Every dollar saved on avoidable claims is a dollar back on your bottom line.',
      },
      {
        title: 'NYC Regulatory Compliance',
        description:
          'In addition to federal OSHA standards, New York City construction projects must comply with Local Law 196 site safety training requirements and Department of Buildings safety mandates. Our medical support staff work alongside your Site Safety Managers and Coordinators to ensure full compliance with city, state, and federal regulations.',
      },
    ],
    testimonials: [
      {
        quote:
          'We brought them onto the Hudson Yards project. Recordables dropped by half in the first quarter. Their medics actually understand construction — not just first aid.',
        name: 'Michael B.',
        title: 'Safety Director',

      },
      {
        quote:
          "Most medical providers don't understand OSHA 1926. CityLine does. Their documentation alone saved us from two potential citations last year.",
        name: 'Nicole R.',
        title: 'Site Safety Manager',

      },
    ],
  },
  {
    slug: 'industrial',
    name: 'Industrial',
    tagline: 'Plant operations, manufacturing, and warehousing coverage.',
    heroHeadline: 'Keeping the Floor Running.',
    heroSub:
      'Occupational health clinics, wellness programs, and emergency response for manufacturing, plant operations, and warehouse facilities.',
    description:
      "Industrial environments demand medical teams that understand the unique hazards of plant operations — from chemical exposure to heavy machinery incidents. CityLine Medical is a certified Minority Business Enterprise (MBE) providing on-site occupational health services tailored to your facility. We serve manufacturing floors, warehouse and distribution centers, food processing facilities, pharmaceutical plants, data centers, energy and utility operations, and heavy industrial facilities — each with protocols tailored to their unique hazards and compliance requirements.",
    services: [
      {
        title: 'On-Site Medics',
        description:
          'Round-the-clock EMTs and paramedics embedded in your facility. Shift coverage that matches your operation.',
      },
      {
        title: 'Occupational Health Clinics',
        description:
          'Full-service clinics with DOT physicals, respirator fit testing, audiometric testing, pulmonary function tests, and vaccinations. Full compliance with OSHA 1910 General Industry standards, including 1910.151 (Medical Services and First Aid), as well as industry-specific regulatory requirements for your facility.',
      },
      {
        title: 'Drug & Alcohol Testing',
        description:
          'Pre-employment, random, reasonable suspicion, and post-incident screenings. Certified collectors and MRO coordination.',
      },
      {
        title: 'Ergonomics & Injury Prevention',
        description:
          'Musculoskeletal disorders are the leading cause of lost workdays in industrial settings. Our teams implement stretch-and-flex programs, ergonomic assessments, and early intervention protocols. Depending on your facility\'s needs, we can coordinate periodic on-site chiropractic or physical therapy services to keep your workforce healthy and productive.',
      },
      {
        title: 'Heat Illness Prevention',
        description:
          'Heat illness prevention and monitoring for both outdoor and indoor industrial environments — including manufacturing floors, foundries, and processing facilities where ambient temperatures create risk.',
      },
      {
        title: 'Fatigue Risk Management',
        description:
          'For 24/7 operations and multi-shift facilities, fatigue is a leading contributor to workplace incidents. Our teams monitor for fatigue-related risk indicators and implement countermeasures to keep your workforce alert and safe across all shifts.',
      },
      {
        title: 'Return-to-Work Coordination',
        description:
          'Structured modified duty and transitional return-to-work programs that keep injured employees productive, reduce disability claim duration, and protect your Experience Modification Rate.',
      },
      {
        title: 'Wellness Programs',
        description:
          'Health screenings, flu shots, blood pressure monitoring, and wellness education programs for your workforce.',
      },
      {
        title: 'Incident Tracking',
        description:
          'Real-time injury data, OSHA reporting, and trend analysis through our HIPAA-compliant platform.',
      },
      {
        title: 'Safety Consulting',
        description:
          'Hazard assessments, emergency action plans, and regulatory compliance support specific to your facility.',
      },
    ],
    testimonials: [
      {
        quote:
          'CityLine set up an occupational health clinic inside our facility in under two weeks. DOT physicals, respirator testing, flu shots — all handled without sending workers off-site.',
        name: 'Frank D.',
        title: 'Plant Manager',

      },
      {
        quote:
          'We run three shifts. Having consistent medical coverage across all of them changed how we handle incidents. Response time went from 20 minutes to under two.',
        name: 'Angela M.',
        title: 'EHS Director',

      },
    ],
  },
  {
    slug: 'media',
    name: 'Media & Film',
    tagline: "Set medics for productions that can't afford downtime.",
    heroHeadline: 'Your Set Stays Moving.',
    heroSub:
      'Set medics, safety coordinators, and medical standby for film, television, commercial, and branded content productions nationwide. Headquartered in New York.',
    description:
      "Productions run on tight schedules and tight budgets. A medical incident that sends someone to the ER can shut down your set for hours. CityLine Medical provides experienced set medics who integrate with your production team, understand the pace of a working set, and meet SAG-AFTRA and IATSE safety requirements — without getting in the way. Whether you're shooting for a major streaming platform, a network series, an independent feature, or a branded content campaign, our set medics integrate with your production team on day one.",
    services: [
      {
        title: 'Set Medics',
        description:
          'Licensed EMTs and paramedics experienced on film and TV sets. They work with your ADs and know when to step in and when to stay back.',
      },
      {
        title: 'Union & Production Compliance',
        description:
          'Full compliance with SAG-AFTRA safety requirements, IATSE collective bargaining agreement provisions, and industry Safety Bulletin protocols. Our set medics meet the specific first aid and medical standby requirements mandated by union contracts, production insurance carriers, and stunt coordination guidelines.',
      },
      {
        title: 'NYC Film Permit Compliance',
        description:
          "The NYC Mayor's Office of Media and Entertainment requires medical coverage for certain production types as part of the film permitting process. We handle the medical component of your permit application and ensure your production meets all city requirements before cameras roll.",
      },
      {
        title: 'Safety Coordinators',
        description:
          'Stunt medical standby, location risk assessments, and safety plans required by production insurance and union guidelines.',
      },
      {
        title: 'Water Safety & Marine Medical',
        description:
          'For waterfront and water-involved shoots across NYC and the tri-state, we provide water safety personnel and medics with rescue certifications to cover marine, pool, and open-water filming environments.',
      },
      {
        title: 'Branded Content & Commercial Production',
        description:
          "Agency shoots, direct-to-brand content, and commercial productions run on compressed timelines with smaller crews — but still need medical coverage. We deploy fast, flex to your schedule, and provide the same level of care whether it's a one-day shoot or a multi-week campaign.",
      },
      {
        title: 'Production Health & Safety Protocols',
        description:
          'From COVID-19 compliance to ongoing infectious disease preparedness, our teams implement health monitoring, testing coordination, and safety protocols that keep your cast and crew healthy and your production on schedule.',
      },
      {
        title: 'First Aid Stations',
        description:
          'Mobile first aid setups for base camp or on-location shoots. Fully stocked, discreet, and positioned where your crew needs them.',
      },
      {
        title: 'Hot & Cold Weather Protocols',
        description:
          'Heat illness prevention, cold exposure monitoring, and weather-related safety plans for exterior shoots.',
      },
      {
        title: 'Incident Documentation',
        description:
          'HIPAA-compliant records for every medical contact. Clean documentation for production insurance and union reporting.',
      },
    ],
    testimonials: [
      {
        quote:
          "We've used CityLine on three productions at Steiner Studios. They show up early, handle everything from set bumps to real emergencies, and never slow us down. That's all I care about.",
        name: 'James M.',
        title: 'Line Producer',

      },
      {
        quote:
          "On a 60-day shoot with 200 crew, you can't afford medical delays. Their team integrated with our ADs on day one. We didn't lose a single hour to medical downtime.",
        name: 'Rachel T.',
        title: 'Production Manager',

      },
      {
        quote:
          "Having CityLine on-site means our productions stay insured and our crews stay safe. They've been our go-to for every shoot since 2019.",
        name: 'David O.',
        title: 'VP Operations',

      },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    tagline: 'Discreet medical presence for venues and private events.',
    heroHeadline: 'Invisible Until You Need Us.',
    heroSub:
      'Medical staffing for hotels, restaurants, private events, and venues where discretion matters as much as capability.',
    description:
      "In hospitality, a medical emergency handled poorly can damage your reputation, disrupt your guests, and expose your business to liability. CityLine Medical provides trained medical professionals who blend seamlessly into your venue environment — handling everything from guest cardiac events and allergic reactions to staff injuries and intoxication incidents with professionalism and complete discretion. Whether you operate a luxury hotel, a high-volume restaurant group, a casino property, or a convention center, our teams are invisible until the moment they're needed.",
    services: [
      {
        title: 'Venue Medical Staff',
        description:
          'Licensed medics embedded in your venue operation. Professional appearance, discreet positioning, immediate availability.',
      },
      {
        title: 'AED Programs & Cardiac Preparedness',
        description:
          'We supply, place, maintain, and train your staff on Automated External Defibrillators (AEDs) to meet local and state requirements. Our medics are positioned and equipped for immediate cardiac emergency response in hotels, venues, and large hospitality properties.',
      },
      {
        title: 'Anaphylaxis & Allergy Response',
        description:
          'Allergic reactions are one of the most common medical emergencies in restaurants and hotels. Our medics are trained in epinephrine administration, anaphylaxis management, and rapid stabilization — providing immediate response before EMS arrival and protecting your guests and your liability exposure.',
      },
      {
        title: 'Convention & Large Venue Medical',
        description:
          'For convention centers, conference facilities, and large-format hospitality venues, we provide scalable medical staffing — from a single medic for a multi-day conference to a full medical operations team for major trade shows and expos.',
      },
      {
        title: 'Casino & Gaming Properties',
        description:
          'Medical staffing for casino floors, gaming venues, and entertainment complexes. Our teams handle guest medical events, staff injuries, and the unique health and safety challenges of 24/7 gaming environments — including addiction-related incidents and patron welfare.',
      },
      {
        title: 'Intoxication & Liquor Liability Management',
        description:
          'Our medics are trained in managing intoxicated guests, documenting incidents for liquor liability defense, and coordinating safe transport when necessary. Professional, discreet handling that protects your venue and your guests.',
      },
      {
        title: 'Private Event Coverage',
        description:
          'Medical standby for gallery openings, private dinners, charity galas, rooftop parties, and intimate gatherings.',
      },
      {
        title: 'Staff Injury Management',
        description:
          'On-site treatment for kitchen burns, slips, falls, and repetitive strain injuries. Keep your team working, reduce ER visits.',
      },
      {
        title: 'Claims Oversight',
        description:
          "Workers' comp documentation and claims management for hospitality-specific injuries and incidents.",
      },
    ],
    testimonials: [
      {
        quote:
          "We host 300+ events a year. CityLine handles our medical coverage for everything from intimate wine dinners to New Year's Eve. Our guests never even know they're there.",
        name: 'Thomas A.',
        title: 'Director of Operations',

      },
      {
        quote:
          "When a guest had a cardiac event during a private dinner, CityLine's medic had it handled before the ambulance arrived. That level of response is why we use them exclusively.",
        name: 'Maria S.',
        title: 'General Manager',

      },
    ],
  },
  {
    slug: 'events',
    name: 'Events',
    tagline: 'From corporate dinners to concerts — medical teams that scale.',
    heroHeadline: 'Every Event Covered.',
    heroSub:
      'Medical standby teams for concerts, galas, fashion shows, corporate events, product launches, popup markets, and everything in between.',
    description:
      "Whether it's a 50-person product launch in SoHo or a 10,000-seat concert at Forest Hills Stadium, your event needs a medical plan. CityLine Medical provides scalable medical teams, equipment, and event medical plans that satisfy venue requirements, insurance carriers, and permitting agencies — while staying completely invisible to your guests. For events over 5,000 attendees, we deploy a full medical operations center with roving BLS teams positioned based on crowd flow analysis and a medical director coordinating all response.",
    services: [
      {
        title: 'Medical Standby',
        description:
          'Medical teams scaled to your event size and risk profile. From a single medic to a full medical operations center.',
      },
      {
        title: 'Event Permitting & Regulatory Compliance',
        description:
          'NYC special event permits (NYPD, FDNY, DOH) often require a medical action plan as part of the application. We prepare the medical component of your permit paperwork and ensure your event meets all city, state, and venue requirements before doors open.',
      },
      {
        title: 'Mass Gathering Medical Operations',
        description:
          'For large-scale events over 1,000 attendees, we deploy mass gathering medicine protocols — including a dedicated medical operations center, roving BLS teams, and a medical director coordinating all response.',
      },
      {
        title: 'Marathon & Endurance Event Medical',
        description:
          'Medical teams for road races, marathons, triathlons, obstacle courses, and endurance events — including course medical stations, roving medic teams, finish line medical tents, and post-race monitoring.',
      },
      {
        title: 'Music Festival & Multi-Day Event Medical',
        description:
          'Multi-day festivals require sustained medical infrastructure — rotating medic shifts, overnight coverage, weather monitoring, and overdose response capability. We deploy comprehensive medical operations for festivals of any scale. Our event medics carry and administer naloxone (Narcan) and are trained in overdose recognition and response.',
      },
      {
        title: 'First Aid Stations',
        description:
          'Staffed medical tents or discreet room setups for guest-facing events. Professional, low-profile, fully equipped.',
      },
      {
        title: 'Crowd Medical Coverage',
        description:
          'Roving medical teams for large-scale events. Positioned strategically based on crowd flow and risk assessment.',
      },
      {
        title: 'Weather Protocols',
        description:
          'Heat illness prevention and cold exposure plans for outdoor events. Monitoring, hydration stations, and cooling areas.',
      },
      {
        title: 'Post-Event Reporting',
        description:
          'Incident logs, treatment records, and summary reports for your insurance carrier and venue management.',
      },
    ],
    testimonials: [
      {
        quote:
          "From 50-person corporate dinners to 2,000-guest galas at The Plaza — CityLine scales without missing a beat. Our event insurance providers specifically request them.",
        name: 'Sarah K.',
        title: 'Events Director',

      },
      {
        quote:
          'We book CityLine for every fashion week activation. They get the pace, they stay out of the way, and when something happens they handle it quietly. Exactly what you want at a branded event.',
        name: 'Priya P.',
        title: 'Senior Producer',

      },
    ],
  },
  {
    slug: 'safety',
    name: 'Safety Consulting',
    tagline: 'Site evaluations, compliance, and EHS program development.',
    heroHeadline: 'Compliance Without the Guesswork.',
    heroSub:
      'Site evaluations, emergency action plans, OSHA compliance audits, and EHS program development for organizations that take safety seriously.',
    description:
      "Regulatory compliance isn't optional — but it doesn't have to be painful. CityLine Medical's safety consulting team works with your EHS staff to evaluate your site, identify gaps, develop actionable plans, and ensure you're audit-ready at all times. We don't just tell you what's wrong — we fix it with you.",
    services: [
      {
        title: 'Site Evaluations',
        description:
          'Comprehensive walk-throughs identifying hazards, compliance gaps, and opportunities to improve your safety program.',
      },
      {
        title: 'Mock OSHA Inspections',
        description:
          "We conduct comprehensive mock OSHA inspections that simulate a real compliance officer visit — identifying violations, documenting findings, and providing prioritized corrective actions so you're prepared before an inspector arrives.",
      },
      {
        title: 'Job Hazard Analysis (JHA)',
        description:
          'We develop detailed Job Hazard Analyses and Activity Hazard Analyses for your specific operations — identifying potential hazards for each task and establishing controls before work begins.',
      },
      {
        title: 'Incident Investigation & Root Cause Analysis',
        description:
          'When incidents occur, we conduct thorough investigations to identify root causes, develop corrective actions, and implement controls that prevent recurrence — helping you limit future recordables and demonstrate a proactive safety culture to regulators and clients.',
      },
      {
        title: 'Safety Culture Assessment',
        description:
          "Beyond compliance, we assess your organization's safety culture — measuring leading indicators, evaluating behavioral safety practices, and identifying gaps between your written programs and how work actually happens in the field.",
      },
      {
        title: 'Emergency Action Plans',
        description:
          'Written EAPs tailored to your site, facility, or venue. Evacuation procedures, medical response protocols, communication plans.',
      },
      {
        title: 'OSHA Compliance Audits',
        description:
          'Detailed audits against OSHA 1926, 1910, and industry-specific standards. Clear findings, prioritized recommendations.',
      },
      {
        title: 'EHS Program Development',
        description:
          'Build or upgrade your environmental health & safety program. Policies, training, documentation, and accountability systems.',
      },
      {
        title: 'Training Programs',
        description:
          'OSHA 10/30, first aid/CPR/AED, bloodborne pathogens, confined space, and custom safety training for your team.',
      },
      {
        title: 'Regulatory Support',
        description:
          'OSHA citation response, abatement planning, and ongoing compliance monitoring. Stay ahead of inspectors.',
      },
    ],
    testimonials: [
      {
        quote:
          "CityLine audited three of our sites and found gaps our internal team missed. They didn't just hand us a report — they helped us fix everything before our next OSHA visit.",
        name: 'Robert C.',
        title: 'VP of Safety',

      },
      {
        quote:
          'We needed an EHS program built from scratch for a new facility. CityLine had us fully compliant and audit-ready in six weeks.',
        name: 'Karen W.',
        title: 'Operations Director',

      },
    ],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
