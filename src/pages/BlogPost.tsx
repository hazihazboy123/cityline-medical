import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import { getBlogBySlug } from '../data/blogs'
import CTA from '../components/CTA'

const categoryColors: Record<string, string> = {
  Construction: 'bg-amber-100 text-amber-800',
  Industrial: 'bg-blue-100 text-blue-800',
  'Media & Film': 'bg-purple-100 text-purple-800',
  Hospitality: 'bg-emerald-100 text-emerald-800',
  Events: 'bg-pink-100 text-pink-800',
  'Safety Consulting': 'bg-slate-100 text-slate-700',
}

const industrySlugMap: Record<string, string> = {
  construction: 'Construction',
  industrial: 'Industrial',
  media: 'Media & Film',
  hospitality: 'Hospitality',
  events: 'Events',
  safety: 'Safety Consulting',
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogBySlug(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean)

  const formattedDate = new Date(post.publishDate).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

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
            className="flex items-center gap-2 text-sm text-navy-400 mb-8"
          >
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              to="/blog"
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-navy-500 truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex flex-wrap gap-1.5 mb-5"
          >
            {post.categories.map((cat) => (
              <span
                key={cat}
                className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'}`}
              >
                {cat}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-800 text-[clamp(2rem,5vw,3.25rem)] text-white leading-[1.1] tracking-[-0.025em] mb-6 max-w-3xl"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-5 text-sm text-navy-400"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            {/* Main Content */}
            <article className="max-w-3xl">
              {post.content.map((section, i) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="mb-10"
                >
                  <h2 className="font-display font-bold text-2xl text-navy-900 tracking-tight mb-4">
                    {section.heading}
                  </h2>
                  {section.body.split('\n\n').map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-[15px] text-slate-600 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              ))}

              {/* Industry Links */}
              {post.industryLinks.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <p className="text-sm font-semibold text-navy-900 mb-3">
                    Related services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.industryLinks.map((indSlug) => (
                      <Link
                        key={indSlug}
                        to={`/${indSlug}`}
                        className="bg-slate-50 border border-slate-200 hover:border-red-300 rounded-lg px-4 py-2 text-sm font-semibold text-navy-900 hover:text-red-600 transition-colors duration-200"
                      >
                        {industrySlugMap[indSlug] ?? indSlug}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                {/* Back to blog */}
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-red-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Articles
                </Link>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="font-display font-semibold text-sm text-navy-900 uppercase tracking-wider mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related!.slug}
                          to={`/blog/${related!.slug}`}
                          className="group block"
                        >
                          <p className="text-sm font-semibold text-navy-900 group-hover:text-red-600 transition-colors leading-snug mb-1">
                            {related!.title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {related!.readTime} min read
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="bg-navy-950 rounded-xl p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    Need on-site medical?
                  </h3>
                  <p className="text-sm text-navy-400 leading-relaxed mb-4">
                    Get a free site evaluation from City Line Medical.
                  </p>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts (Mobile + Bottom) */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 tracking-tight mb-8">
              Keep reading
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related, i) => (
                <motion.div
                  key={related!.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/blog/${related!.slug}`}
                    className="group block bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 p-6 h-full"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {related!.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-base text-navy-900 leading-snug mb-2 group-hover:text-red-600 transition-colors duration-200">
                      {related!.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {related!.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
