import { ArrowRight, Shield, MapPin, HardHat, Factory, Film, UtensilsCrossed, Calendar, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const industryButtons = [
  {
    label: 'Construction',
    slug: 'construction',
    icon: HardHat,
    color: 'bg-amber-500',
    description: 'Full-time site medics, first aid stations, OSHA compliance support, and injury tracking for projects of any size.',
  },
  {
    label: 'Industrial',
    slug: 'industrial',
    icon: Factory,
    color: 'bg-blue-600',
    description: 'Occupational health clinics, respirator fit testing, wellness programs, and emergency response for manufacturing and plant operations.',
  },
  {
    label: 'Media & Film',
    slug: 'media',
    icon: Film,
    color: 'bg-violet-600',
    description: 'Set medics and safety coordinators for film, television, and commercial productions. Fast-paced, flexible coverage.',
  },
  {
    label: 'Hospitality',
    slug: 'hospitality',
    icon: UtensilsCrossed,
    color: 'bg-emerald-600',
    description: "Medical professionals who blend seamlessly into your venue — invisible until the moment they're needed.",
  },
  {
    label: 'Events',
    slug: 'events',
    icon: Calendar,
    color: 'bg-rose-600',
    description: 'Scalable medical teams that stay out of sight and out of the way, until seconds matter.',
  },
  {
    label: 'Safety',
    slug: 'safety',
    icon: ShieldCheck,
    color: 'bg-navy-600',
    description: 'Site evaluations, emergency response planning, EHS program development, and regulatory compliance across all industries.',
  },
]

function IndustryButton({ ind, index }: { ind: typeof industryButtons[number]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = ind.icon

  return (
    <motion.div
      key={ind.slug}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 + index * 0.07 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/${ind.slug}`}
        className="group bg-navy-800 hover:bg-navy-700 border border-white/[0.08] hover:border-red-500/40 rounded-2xl px-6 py-5 text-white transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/15 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center h-full gap-3"
      >
        <div className={`w-10 h-10 ${ind.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-semibold text-base">{ind.label}</span>
      </Link>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-navy-900 border border-white/10 rounded-xl px-4 py-3 shadow-xl pointer-events-none"
          >
            <p className="text-xs text-navy-300 leading-relaxed">{ind.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_-10%,rgba(30,50,90,0.6),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_80%,rgba(220,38,38,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — headline + copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="flex items-center gap-2 text-[11px] font-semibold text-navy-400 uppercase tracking-[0.12em] border border-white/10 px-3.5 py-1.5 rounded-full">
                <MapPin className="w-3 h-3 text-red-500" />
                Nationwide
              </span>
              <span className="flex items-center gap-2 text-[11px] font-semibold text-navy-400 uppercase tracking-[0.12em] border border-white/10 px-3.5 py-1.5 rounded-full">
                <Shield className="w-3 h-3 text-red-500" />
                OSHA Certified
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display font-800 text-[clamp(2.5rem,5.5vw,4rem)] text-white leading-[1.05] tracking-[-0.025em] mb-6"
            >
              You run the operation.
              <br />
              <span className="text-red-500">We protect your people.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-lg text-navy-400 max-w-lg mb-10 leading-relaxed"
            >
              On-site medics for construction, film sets, and events nationwide.
              Fast response. Full OSHA compliance. Zero production delays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white pl-6 pr-5 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
              >
                Get a Free Site Evaluation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="tel:5164769665"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
              >
                (516) 476-9665
              </a>
            </motion.div>
          </div>

          {/* Right — industry buttons grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col h-full"
          >
            <p className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-2 text-center">
              Industries We Serve
            </p>
            <p className="text-xs text-navy-400 uppercase tracking-[0.15em] font-semibold mb-5 text-center">
              Select Your Industry
            </p>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {industryButtons.map((ind, i) => (
                <IndustryButton key={ind.slug} ind={ind} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
