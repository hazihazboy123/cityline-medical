import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ArrowLeft, Award } from 'lucide-react'
import { getIndustryBySlug, industries } from '../data/industries'
import { getFAQsBySlug } from '../data/faqs'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = slug ? getIndustryBySlug(slug) : undefined

  const faqItems = slug ? getFAQsBySlug(slug) : []

  if (!industry) return <Navigate to="/" replace />

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70svh] flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(30,50,90,0.5),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_80%,rgba(220,38,38,0.06),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
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
              {industry.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-[-0.025em] mb-6"
            >
              {industry.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-navy-400 max-w-xl leading-relaxed mb-8"
            >
              {industry.heroSub}
            </motion.p>

            {(slug === 'construction' || slug === 'industrial') && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-2 mb-6"
              >
                <Award className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-white">
                  Certified Minority Business Enterprise (MBE)
                </span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white pl-6 pr-5 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
              >
                Get a Quote
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
        </div>

{}
      </section>

      {/* Description */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 leading-relaxed max-w-3xl"
          >
            {industry.description}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-10"
          >
            What we provide
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-display font-semibold text-base text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {industry.testimonials.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-10"
            >
              What clients say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {industry.testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-l-2 border-red-500 pl-6 py-2"
                >
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-semibold text-navy-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Industries */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display font-semibold text-lg text-navy-900 mb-6">
            Other industries we serve
          </h3>
          <div className="flex flex-wrap gap-3">
            {industries
              .filter((ind) => ind.slug !== industry.slug)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  className="bg-white border border-slate-200 hover:border-red-300 rounded-lg px-5 py-3 text-sm font-semibold text-navy-900 hover:text-red-600 transition-colors duration-200"
                >
                  {ind.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA */}
      <CTA />
    </>
  )
}
