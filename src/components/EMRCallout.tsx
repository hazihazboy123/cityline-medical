import { motion } from 'motion/react'
import { TrendingDown } from 'lucide-react'

export default function EMRCallout() {
  return (
    <section className="py-16 sm:py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(220,38,38,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy-800 rounded-2xl p-8 sm:p-12 border border-white/[0.06] flex flex-col lg:flex-row items-start gap-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-red-600/15 flex items-center justify-center shrink-0">
            <TrendingDown className="w-7 h-7 text-red-400" />
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              Protect Your Bottom Line
            </h3>
            <p className="text-navy-300 leading-relaxed text-base max-w-3xl">
              Our on-site medical protocols reduce OSHA recordables, lower workers' compensation
              claims frequency, and protect your Experience Modification Rate (EMR) — keeping your
              bids competitive and your insurance costs down. With dedicated medical professionals
              on your site, incidents that qualify as first-aid cases are properly documented and
              treated, preventing unnecessary recordables that inflate your EMR and drive up premiums.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
