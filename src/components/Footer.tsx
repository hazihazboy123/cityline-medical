import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const industryLinks = [
  { label: 'Construction', slug: 'construction' },
  { label: 'Industrial', slug: 'industrial' },
  { label: 'Media & Film', slug: 'media' },
  { label: 'Hospitality', slug: 'hospitality' },
  { label: 'Events', slug: 'events' },
  { label: 'Safety Consulting', slug: 'safety' },
]

const serviceLinks = [
  { label: 'On-Site Medics', href: '/#services' },
  { label: 'First Aid Support', href: '/#services' },
  { label: 'Drug & Alcohol Screening', href: '/#services' },
  { label: 'Occupational Health', href: '/#services' },
  { label: 'Safety Consulting', href: '/#services' },
]

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Safety', href: '/#safety' },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '/#contact' },
  { label: 'Join Our Team', href: '/#contact' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img src="/logo-light.png" alt="CityLine Medical" className="h-14 w-auto mb-5" />
            <p className="text-sm text-navy-400 leading-relaxed mb-6 max-w-sm">
              On-site medical solutions for construction, film, events, and
              industry nationwide. Headquartered in New York.
            </p>
            <div className="space-y-3">
              <a
                href="tel:5164769665"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500" />
                (516) 476-9665
              </a>
              <a
                href="mailto:info@citylinemedical.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500" />
                info@citylinemedical.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                Long Island City, NY
              </div>
            </div>
          </div>

          {/* Industries column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industryLinks.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    to={`/${ind.slug}`}
                    className="text-sm text-navy-400 hover:text-white transition-colors duration-200"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {'isRoute' in link && link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-navy-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-navy-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} CityLine Medical. All Rights
            Reserved.
          </p>
          <p className="text-xs text-navy-500">
            Headquartered in New York, serving projects nationwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
