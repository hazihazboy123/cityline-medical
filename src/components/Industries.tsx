import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  HardHat,
  Factory,
  Film,
  UtensilsCrossed,
  Calendar,
  ShieldCheck,
} from 'lucide-react'

const industries = [
  {
    icon: HardHat,
    slug: 'construction',
    name: 'Construction',
    description:
      'Full-time site medics, first aid stations, OSHA compliance support, and injury tracking for projects of any size.',
    color: 'bg-amber-500',
  },
  {
    icon: Factory,
    slug: 'industrial',
    name: 'Industrial',
    description:
      'Occupational health clinics, respirator fit testing, wellness programs, and emergency response for manufacturing and plant operations.',
    color: 'bg-blue-600',
  },
  {
    icon: Film,
    slug: 'media',
    name: 'Media & Film',
    description:
      'Set medics and safety coordinators for film, television, and commercial productions. Fast-paced, flexible coverage.',
    color: 'bg-violet-600',
  },
  {
    icon: UtensilsCrossed,
    slug: 'hospitality',
    name: 'Hospitality',
    description:
      'Medical professionals who blend seamlessly into your venue — invisible until the moment they\'re needed.',
    color: 'bg-emerald-600',
  },
  {
    icon: Calendar,
    slug: 'events',
    name: 'Events',
    description:
      'Scalable medical teams that stay out of sight and out of the way, until seconds matter.',
    color: 'bg-rose-600',
  },
  {
    icon: ShieldCheck,
    slug: 'safety',
    name: 'Safety Consulting',
    description:
      'Site evaluations, emergency response planning, EHS program development, and regulatory compliance across all industries.',
    color: 'bg-navy-600',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-3"
          >
            Industries We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-5"
          >
            Wherever Work Happens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-300 leading-relaxed"
          >
            From high-rise construction to Hollywood sets, we provide tailored
            medical support for every work environment.
          </motion.p>
        </div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/${industry.slug}`}
                className="group block bg-white/[0.04] hover:bg-white/[0.08] rounded-2xl p-7 transition-all duration-300 border border-white/[0.06] hover:border-red-500/30 h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-navy-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-200 mt-2" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
