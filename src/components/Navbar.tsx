import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Services', hash: '#services' },
  { label: 'Safety', hash: '#safety' },
  { label: 'Contact', hash: '#contact' },
]

const industryLinks = [
  { label: 'Construction', slug: 'construction' },
  { label: 'Industrial', slug: 'industrial' },
  { label: 'Media & Film', slug: 'media' },
  { label: 'Hospitality', slug: 'hospitality' },
  { label: 'Events', slug: 'events' },
  { label: 'Safety Consulting', slug: 'safety' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const hashHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo — hard left */}
          <Link to="/" className="shrink-0">
            <img src="/logo-light.png" alt="City Line Medical" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-200 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                Industries
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-navy-800 border border-white/10 rounded-xl shadow-2xl shadow-black/30 py-2">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={`/${ind.slug}`}
                      className="block px-4 py-2.5 text-sm text-navy-200 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={hashHref(link.hash)}
                className="px-4 py-2 text-sm font-medium text-navy-200 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5164769665"
              className="flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(516) 476-9665</span>
            </a>
            <a
              href={hashHref('#contact')}
              className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-300 hover:text-white transition-colors"
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
        <div className="lg:hidden bg-navy-900 border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            <p className="px-4 pt-2 pb-1 text-[11px] text-navy-500 uppercase tracking-widest font-semibold">
              Industries
            </p>
            {industryLinks.map((ind) => (
              <Link
                key={ind.slug}
                to={`/${ind.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-navy-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {ind.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/5" />
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={hashHref(link.hash)}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-navy-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href={hashHref('#contact')}
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
