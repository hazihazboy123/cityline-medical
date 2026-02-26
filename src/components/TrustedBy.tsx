import { motion } from 'motion/react'

const logos = [
  { name: 'St. Regis Hotel', src: '/logos/stregis.svg' },
  { name: 'Mondrian', src: '/logos/mondrian.svg' },
  { name: 'Hilton', src: '/logos/hilton.svg' },
  { name: 'American Red Cross', src: '/logos/redcross.png' },
  { name: 'Disney', src: '/logos/disney.svg' },
  { name: 'Monadnock Construction', src: '/logos/monadnock.svg' },
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

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex items-center animate-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 mx-10 sm:mx-14 flex items-center justify-center h-10"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-8 sm:h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
