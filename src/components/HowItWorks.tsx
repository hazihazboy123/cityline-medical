import { motion } from 'motion/react'
import { ArrowRight, ClipboardList, ShieldCheck, Users, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Free Site Evaluation',
    description:
      'Tell us about your project. We assess your site, crew size, and compliance needs.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Custom Safety Plan',
    description:
      'We build a tailored medical support plan that fits your operation and budget.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Medic Deployment',
    description:
      'Our EMTs, paramedics, and medical support staff deploy directly to your site.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Real-Time Tracking',
    description:
      'Monitor every incident through our HIPAA-compliant platform with 24/7 data access.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-900 tracking-tight"
          >
            Four Steps to Full Coverage
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-100 group hover:border-red-200 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-navy-300 uppercase tracking-wider">
                  Step {step.number}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white pl-6 pr-5 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
          >
            Get Your Free Site Evaluation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
