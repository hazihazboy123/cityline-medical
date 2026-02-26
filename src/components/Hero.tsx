import { ArrowRight, Shield, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const industryButtons = [
  { label: 'Construction', slug: 'construction' },
  { label: 'Industrial', slug: 'industrial' },
  { label: 'Media & Film', slug: 'media' },
  { label: 'Hospitality', slug: 'hospitality' },
  { label: 'Events', slug: 'events' },
  { label: 'Safety', slug: 'safety' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_-10%,rgba(30,50,90,0.6),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_80%,rgba(220,38,38,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — headline + copy */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-2 text-[11px] font-semibold text-navy-400 uppercase tracking-[0.12em] border border-white/10 px-3.5 py-1.5 rounded-full">
                <MapPin className="w-3 h-3 text-red-500" />
                Nationwide
              </span>
              <span className="flex items-center gap-2 text-[11px] font-semibold text-navy-400 uppercase tracking-[0.12em] border border-white/10 px-3.5 py-1.5 rounded-full">
                <Shield className="w-3 h-3 text-red-500" />
                OSHA Certified
              </span>
            </div>

            <h1 className="font-display font-800 text-[clamp(3.5rem,9vw,7rem)] text-white leading-[1.05] tracking-[-0.025em] mb-6">
              You run the operation.
              <br />
              <span className="text-red-500">We protect your people.</span>
            </h1>

            <p className="text-lg text-navy-400 max-w-lg mb-10 leading-relaxed">
              On-site medics for construction, film sets, and events nationwide.
              Fast response. Full OSHA compliance. Zero production delays.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white pl-6 pr-5 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
              >
                Get a Free Site Evaluation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="tel:5164769665"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-[15px] transition-colors duration-200"
              >
                (516) 476-9665
              </a>
            </div>
          </div>

          {/* Right — industry buttons grid */}
          <div className="flex flex-col h-full">
            <p className="text-xs text-navy-400 uppercase tracking-[0.15em] font-semibold mb-5">
              Select Your Industry
            </p>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {industryButtons.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  className="group bg-navy-800 hover:bg-navy-700 border border-white/[0.08] hover:border-red-500/40 rounded-2xl px-8 py-10 text-white font-display font-semibold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/15 hover:-translate-y-0.5 flex items-center justify-center text-center"
                >
                  {ind.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

{}
    </section>
  )
}
