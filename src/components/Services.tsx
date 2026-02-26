import { motion } from 'motion/react'
import {
  Stethoscope,
  ShieldCheck,
  FlaskConical,
  Building2,
  BarChart3,
  HeartPulse,
  RefreshCw,
  ClipboardCheck,
} from 'lucide-react'

const services = [
  {
    icon: HeartPulse,
    title: 'On-Site Medics',
    description:
      'Full-time or on-call EMTs, paramedics, and nurses deployed directly to your site for immediate first response.',
  },
  {
    icon: Stethoscope,
    title: 'First Aid Support',
    description:
      'Comprehensive first aid stations and infirmaries with proprietary injury protocols to minimize recordables.',
  },
  {
    icon: FlaskConical,
    title: 'Drug & Alcohol Screening',
    description:
      'Pre-employment, random, and post-incident testing services administered on-site with certified protocols.',
  },
  {
    icon: Building2,
    title: 'Occupational Health Clinics',
    description:
      'Full-service clinics with DOT physicals, respirator fit testing, audiometric testing, and vaccinations.',
  },
  {
    icon: BarChart3,
    title: 'Data & Incident Tracking',
    description:
      'HIPAA-compliant proprietary software to track, categorize, and manage every on-site incident in real time.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Consulting',
    description:
      'Site evaluations, emergency response planning, OSHA compliance support, and safety team integration.',
  },
  {
    icon: RefreshCw,
    title: 'Return-to-Work Coordination',
    description:
      'Structured return-to-work and modified duty programs that keep injured workers productive, reduce disability claims, and protect your Experience Modification Rate.',
  },
  {
    icon: ClipboardCheck,
    title: 'Claims Administration',
    description:
      'Streamlined workers compensation management, insurance documentation, and comprehensive claims oversight.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(30,50,90,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(220,38,38,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-3"
          >
            Services &amp; Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-5"
          >
            Comprehensive Medical Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-300 leading-relaxed"
          >
            From emergency first response to full-service occupational health clinics,
            we deliver tailored medical solutions that protect your workforce and your bottom line.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-red-500/30 rounded-2xl p-7 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/15 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
