import { motion } from 'motion/react'
import {
  TrendingDown,
  Clock3,
  BadgeCheck,
  Users,
  Activity,
  ShieldAlert,
} from 'lucide-react'

const reasons = [
  {
    icon: TrendingDown,
    title: 'Reduce Recordables by Up to 90%',
    description:
      'Our on-site medical protocols enable medics to evaluate injuries and provide immediate care that prevents unnecessary OSHA recordables.',
  },
  {
    icon: Clock3,
    title: 'Immediate Response Time',
    description:
      'Dedicated on-site medics provide instant first response, dramatically reducing the time between incident and treatment.',
  },
  {
    icon: BadgeCheck,
    title: 'Full Regulatory Compliance',
    description:
      'OSHA 1926.23, 1926.50, and Army Corps EM385 1-1 compliant. We ensure your site meets every standard.',
  },
  {
    icon: Users,
    title: 'Seamless Team Integration',
    description:
      'Our medical support staff work alongside your existing EHS team, supporting safety walks, orientations, and administrative tasks.',
  },
  {
    icon: Activity,
    title: 'Real-Time Incident Tracking',
    description:
      'Proprietary HIPAA-compliant software provides 24/7 access to incident data, charting, and downloadable reports.',
  },
  {
    icon: ShieldAlert,
    title: 'Fraud Deterrent',
    description:
      'On-site medical presence acts as a powerful deterrent against fraudulent workers\' compensation claims.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(37,61,107,0.3),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3"
          >
            Why CityLine Medical
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-5"
          >
            The Difference Is On-Site
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-300 leading-relaxed"
          >
            Having dedicated medical professionals on your job site transforms how you handle
            injuries, compliance, and worker safety. Here's what sets us apart.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative group"
            >
              <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-7 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-red-600/15 flex items-center justify-center mb-5">
                  <reason.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
