import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { blogCategories, getBlogsByCategory } from '../data/blogs'
import CTA from '../components/CTA'

const categoryColors: Record<string, string> = {
  Construction: 'bg-amber-100 text-amber-800',
  Industrial: 'bg-blue-100 text-blue-800',
  'Media & Film': 'bg-purple-100 text-purple-800',
  Hospitality: 'bg-emerald-100 text-emerald-800',
  Events: 'bg-pink-100 text-pink-800',
  'Safety Consulting': 'bg-slate-100 text-slate-700',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const filtered = getBlogsByCategory(activeCategory)

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
            Insights
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-[-0.025em] mb-6"
          >
            The CityLine Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-navy-400 max-w-xl leading-relaxed"
          >
            OSHA compliance, EMR management, event medical planning, and on-site
            safety — written for the people who make the decisions.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Card top accent */}
                  <div className="h-1 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 flex flex-col h-full">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-lg text-navy-900 leading-snug mb-3 group-hover:text-red-600 transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} min read
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all duration-200">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                No posts in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
