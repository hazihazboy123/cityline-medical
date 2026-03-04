import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Services', href: '/#services' },
  { label: 'Safety', href: '/safety', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Contact', href: '/#contact' },
]

const industryLinks = [
  { label: 'Construction', slug: 'construction' },
  { label: 'Industrial', slug: 'industrial' },
  { label: 'Events & Festivals', slug: 'events' },
  { label: 'Sports & Athletic Events', slug: 'sports' },
  { label: 'Media & Film', slug: 'media' },
  { label: 'Corporate & Private Venues', slug: 'corporate' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-visible">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo — web banner version */}
          <Link to="/" className="shrink-0 z-10">
            <img src="/logo-banner.png" alt="CityLine Medical" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors duration-200 rounded-lg hover:bg-slate-50">
                Industries
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 pt-0 w-56">
                  {/* Invisible bridge to prevent gap */}
                  <div className="h-1" />
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-black/10 py-2">
                    {industryLinks.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/${ind.slug}`}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-navy-900 hover:bg-slate-50 transition-colors"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {ind.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors duration-200 rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors duration-200 rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5164769665"
              className="flex items-center gap-2 text-sm text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(516) 476-9665</span>
            </a>
            <a
              href="/#contact"
              className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-600 hover:text-navy-900 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-1">
            <p className="px-4 pt-2 pb-1 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
              Industries
            </p>
            {industryLinks.map((ind) => (
              <Link
                key={ind.slug}
                to={`/${ind.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {ind.label}
              </Link>
            ))}
            <div className="my-2 border-t border-slate-100" />
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-4 border-t border-slate-200">
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-red-600 text-white px-5 py-3 rounded-lg font-semibold"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
