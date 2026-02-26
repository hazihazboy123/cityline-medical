export interface IndustryTestimonial {
  quote: string
  name: string
  title: string
  company: string
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
      'Full-time on-site medics, OSHA compliance, and injury management for construction projects of any scale across the tri-state.',
    description:
      "Construction sites are high-risk environments where seconds matter. City Line Medical deploys experienced EMTs, paramedics, and health & safety medical technicians directly to your project. Our teams integrate with your existing safety staff, manage injury documentation, and keep your OSHA 300 log clean — so your crew stays working and your project stays on schedule.",
    services: [
      {
        title: 'On-Site Medics',
        description:
          'Dedicated EMTs and paramedics stationed on your site every shift. Immediate first response for any injury or medical event.',
      },
      {
        title: 'OSHA Compliance',
        description:
          'Full compliance with OSHA 1926.23, 1926.50, and Army Corps EM385 1-1. Documentation and reporting that keeps your site audit-ready.',
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
        title: 'Claims Management',
        description:
          "Workers' comp administration, insurance documentation, and claims oversight. Reduce disputes and control costs.",
      },
    ],
    testimonials: [
      {
        quote:
          'We brought them onto the Hudson Yards project. Recordables dropped by half in the first quarter. Their medics actually understand construction — not just first aid.',
        name: 'Michael Brennan',
        title: 'Safety Director',
        company: 'Turner Construction',
      },
      {
        quote:
          "Most medical providers don't understand OSHA 1926. City Line does. Their documentation alone saved us from two potential citations last year.",
        name: 'Nicole Russo',
        title: 'Site Safety Manager',
        company: 'Lendlease',
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
      "Industrial environments demand medical teams that understand the unique hazards of plant operations — from chemical exposure to heavy machinery incidents. City Line Medical provides on-site occupational health services tailored to your facility, including respirator fit testing, wellness screenings, and round-the-clock emergency medical coverage.",
    services: [
      {
        title: 'On-Site Medics',
        description:
          'Round-the-clock EMTs and paramedics embedded in your facility. Shift coverage that matches your operation.',
      },
      {
        title: 'Occupational Health Clinics',
        description:
          'Full-service clinics with DOT physicals, respirator fit testing, audiometric testing, pulmonary function tests, and vaccinations.',
      },
      {
        title: 'Drug & Alcohol Testing',
        description:
          'Pre-employment, random, reasonable suspicion, and post-incident screenings. Certified collectors and MRO coordination.',
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
          'City Line set up an occupational health clinic inside our facility in under two weeks. DOT physicals, respirator testing, flu shots — all handled without sending workers off-site.',
        name: 'Frank DeLuca',
        title: 'Plant Manager',
        company: 'Pratt Industries',
      },
      {
        quote:
          'We run three shifts. Having consistent medical coverage across all of them changed how we handle incidents. Response time went from 20 minutes to under two.',
        name: 'Angela Martinez',
        title: 'EHS Director',
        company: 'Amazon Fulfillment',
      },
    ],
  },
  {
    slug: 'media',
    name: 'Media & Film',
    tagline: "Set medics for productions that can't afford downtime.",
    heroHeadline: 'Your Set Stays Moving.',
    heroSub:
      'Set medics, safety coordinators, and medical standby for film, television, commercial, and branded content productions across NYC and the tri-state.',
    description:
      "Productions run on tight schedules and tight budgets. A medical incident that sends someone to the ER can shut down your set for hours. City Line Medical provides experienced set medics who integrate with your production team, understand the pace of a working set, and meet SAG-AFTRA and IATSE safety requirements — without getting in the way.",
    services: [
      {
        title: 'Set Medics',
        description:
          'Licensed EMTs and paramedics experienced on film and TV sets. They work with your ADs and know when to step in and when to stay back.',
      },
      {
        title: 'Safety Coordinators',
        description:
          'Stunt medical standby, location risk assessments, and safety plans required by production insurance and union guidelines.',
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
        title: 'Drug & Alcohol Testing',
        description:
          'Pre-production and on-set testing services. Confidential, fast, and compliant with all production requirements.',
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
          "We've used City Line on three productions at Steiner Studios. They show up early, handle everything from set bumps to real emergencies, and never slow us down. That's all I care about.",
        name: 'James Moriarty',
        title: 'Line Producer',
        company: 'Steiner Studios',
      },
      {
        quote:
          "On a 60-day shoot with 200 crew, you can't afford medical delays. Their team integrated with our ADs on day one. We didn't lose a single hour to medical downtime.",
        name: 'Rachel Torres',
        title: 'Production Manager',
        company: 'Silvercup Studios',
      },
      {
        quote:
          "Having City Line on-site means our productions stay insured and our crews stay safe. They've been our go-to for every shoot since 2019.",
        name: 'David Okafor',
        title: 'VP Operations',
        company: 'Broadway Stages',
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
      "In hospitality, the last thing you want is a medical emergency disrupting your guests' experience. City Line Medical provides trained medical professionals who blend seamlessly into your venue environment — handling everything from guest medical events to staff injuries with professionalism and discretion.",
    services: [
      {
        title: 'Venue Medical Staff',
        description:
          'Licensed medics embedded in your venue operation. Professional appearance, discreet positioning, immediate availability.',
      },
      {
        title: 'Private Event Coverage',
        description:
          'Medical standby for gallery openings, private dinners, charity galas, rooftop parties, and intimate gatherings.',
      },
      {
        title: 'Guest Medical Response',
        description:
          'Trained in handling medical events with discretion. Allergic reactions, cardiac events, intoxication — handled without disrupting your space.',
      },
      {
        title: 'Staff Injury Management',
        description:
          'On-site treatment for kitchen burns, slips, falls, and repetitive strain injuries. Keep your team working, reduce ER visits.',
      },
      {
        title: 'Drug & Alcohol Testing',
        description:
          'Pre-employment and random screening for hospitality staff. On-site administration, confidential results.',
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
          "We host 300+ events a year. City Line handles our medical coverage for everything from intimate wine dinners to New Year's Eve. Our guests never even know they're there.",
        name: 'Thomas Andersen',
        title: 'Director of Operations',
        company: 'The Plaza Hotel',
      },
      {
        quote:
          "When a guest had a cardiac event during a private dinner, City Line's medic had it handled before the ambulance arrived. That level of response is why we use them exclusively.",
        name: 'Maria Santos',
        title: 'General Manager',
        company: 'Tao Group Hospitality',
      },
    ],
  },
  {
    slug: 'events',
    name: 'Events',
    tagline: 'From corporate dinners to concerts — medical teams that scale.',
    heroHeadline: 'Every Event Covered.',
    heroSub:
      'ALS and BLS standby teams for concerts, galas, fashion shows, corporate events, product launches, popup markets, and everything in between.',
    description:
      "Whether it's a 50-person product launch in SoHo or a 10,000-seat concert at Forest Hills Stadium, your event needs a medical plan. City Line Medical provides scalable medical teams, equipment, and event medical plans that satisfy venue requirements, insurance carriers, and permitting agencies — while staying completely invisible to your guests.",
    services: [
      {
        title: 'ALS & BLS Standby',
        description:
          'Paramedic and EMT teams scaled to your event size and risk profile. From a single medic to a full medical operations center.',
      },
      {
        title: 'Event Medical Plans',
        description:
          'Written medical action plans required by venues, insurers, and city permitting. We handle the paperwork so you handle the event.',
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
          "From 50-person corporate dinners to 2,000-guest galas at The Plaza — City Line scales without missing a beat. Our event insurance providers specifically request them.",
        name: 'Sarah Kim',
        title: 'Events Director',
        company: 'Cipriani',
      },
      {
        quote:
          'We book City Line for every fashion week activation. They get the pace, they stay out of the way, and when something happens they handle it quietly. Exactly what you want at a branded event.',
        name: 'Priya Patel',
        title: 'Senior Producer',
        company: 'IMG Live',
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
      "Regulatory compliance isn't optional — but it doesn't have to be painful. City Line Medical's safety consulting team works with your EHS staff to evaluate your site, identify gaps, develop actionable plans, and ensure you're audit-ready at all times. We don't just tell you what's wrong — we fix it with you.",
    services: [
      {
        title: 'Site Evaluations',
        description:
          'Comprehensive walk-throughs identifying hazards, compliance gaps, and opportunities to improve your safety program.',
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
          "City Line audited three of our sites and found gaps our internal team missed. They didn't just hand us a report — they helped us fix everything before our next OSHA visit.",
        name: 'Robert Chung',
        title: 'VP of Safety',
        company: 'Skanska USA',
      },
      {
        quote:
          'We needed an EHS program built from scratch for a new facility. City Line had us fully compliant and audit-ready in six weeks.',
        name: 'Karen Williams',
        title: 'Operations Director',
        company: 'Brookfield Properties',
      },
    ],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
