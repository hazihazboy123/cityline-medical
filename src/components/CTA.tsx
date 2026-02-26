import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, CheckCircle } from 'lucide-react'

const divisions = [
  'Construction',
  'Industrial',
  'Media & Film',
  'Hospitality',
  'Events',
  'Safety Consulting',
]

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-3"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display font-bold text-4xl sm:text-5xl text-navy-900 tracking-tight mb-6"
            >
              Let's Build Your Safety Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed mb-10"
            >
              Whether you need a dedicated site medic, on-call coverage, or a full occupational
              health program, we'll customize a solution that fits your project and budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">24-Hour Nationwide Service</p>
                  <p className="text-slate-500">(516) 476-9665</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">General Inquiries</p>
                  <p className="text-slate-500">info@citylinemedical.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">Thank You!</h3>
                <p className="text-slate-500">
                  A CityLine Medical representative will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                    Division
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm">
                    <option value="">Select a division</option>
                    {divisions.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm resize-none"
                    placeholder="Tell us about your project and medical support needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
