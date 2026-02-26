import { motion } from 'motion/react'

const logos = [
  { name: 'St. Regis Hotel', alt: 'St. Regis Hotel logo' },
  { name: 'Mondrian', alt: 'Mondrian Hotel logo' },
  { name: 'Hilton', alt: 'Hilton Hotels logo' },
  { name: 'American Red Cross', alt: 'American Red Cross logo' },
  { name: 'Disney', alt: 'Disney logo' },
  { name: 'NYC Marathon', alt: 'NYC Marathon logo' },
]

export default function TrustedBy() {
  return (
    <section className="py-10 sm:py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] text-slate-400 uppercase tracking-[0.15em] font-semibold mb-8"
        >
          Trusted By Industry Leaders
        </motion.p>

        {/* Auto-scrolling logo carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center h-12"
              >
                {/* Placeholder: replace with actual logo images */}
                <div className="bg-slate-100 rounded-lg px-6 py-3 border border-slate-200/60">
                  <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
