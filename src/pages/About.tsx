import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

const differentiators = [
  'Rapid on-site response to injuries and medical incidents',
  'Coverage for construction sites, events, sports, and productions',
  'Coordination with local EMS and venue security',
  'Professional documentation and incident reporting',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(30,50,90,0.5),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_80%,rgba(220,38,38,0.06),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-[-0.025em] mb-6"
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-navy-400 max-w-xl leading-relaxed"
          >
            Professional on-site medical coverage built for operations that can't afford downtime.
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-6">
                CityLine Medical
              </h2>
              <div className="space-y-4 text-[15px] text-slate-600 leading-relaxed">
                <p>
                  CityLine Medical provides professional on-site medical standby and emergency
                  preparedness services for construction sites, events, sports, and productions.
                </p>
                <p>
                  Our team delivers rapid response, injury management, and medical readiness
                  planning to keep operations running safely and efficiently.
                </p>
                <p>
                  Based in New York, CityLine Medical supports projects and events across NYC
                  and the Northeast.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/logo-primary.png"
                alt="CityLine Medical"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-10"
          >
            Operationally Ready Medical Coverage
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-100"
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-10"
          >
            Leadership
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="border-l-2 border-red-500 pl-6 py-2">
              <h3 className="font-display font-bold text-xl text-navy-900 mb-1">
                Syed Hussain
              </h3>
              <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-4">
                Founder
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Syed founded CityLine Medical with a focus on providing reliable, professional
                medical standby services for high-risk environments. With experience working in
                emergency medical services across New York, he built CityLine Medical to support
                construction projects, events, and venues with rapid response and preparedness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4"
          >
            Ready to work with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-lg text-navy-400 mb-8 max-w-xl mx-auto"
          >
            Get a free site evaluation and see how CityLine Medical can support your operation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white pl-6 pr-5 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
