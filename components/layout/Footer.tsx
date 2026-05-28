'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
  ],
  services: [
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'Local SEO', href: '/services/local-seo' },
    { label: 'Technical SEO', href: '/services/technical-seo' },
    { label: 'Google Ads (PPC)', href: '/services/google-ads' },
    { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { label: 'Website Design', href: '/services/website-design' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'Content Marketing', href: '/services/content-marketing' },
    { label: 'Email Marketing', href: '/services/email-marketing' },
    { label: 'Branding Services', href: '/services/branding' },
  ],
  industries: [
    { label: 'SEO for Doctors', href: '/industries/doctors' },
    { label: 'SEO for Dentists', href: '/industries/dentists' },
    { label: 'SEO for Real Estate', href: '/industries/real-estate' },
    { label: 'SEO for E-commerce', href: '/industries/ecommerce' },
    { label: 'SEO for SaaS', href: '/industries/saas' },
    { label: 'SEO for Law Firms', href: '/industries/law-firms' },
    { label: 'SEO for Small Business', href: '/industries/small-business' },
    { label: 'SEO for Startups', href: '/industries/startups' },
  ],
  resources: [
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Sitemap', href: '/sitemap-page' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
  locations: [
    { label: 'SEO Company India', href: '/locations/seo-company-india' },
    { label: 'SEO Company Mohali', href: '/locations/seo-company-mohali' },
    { label: 'SEO Company Chandigarh', href: '/locations/seo-company-chandigarh' },
    { label: 'SEO Company Delhi', href: '/locations/seo-company-delhi' },
    { label: 'SEO Company Mumbai', href: '/locations/seo-company-mumbai' },
    { label: 'SEO Company Bangalore', href: '/locations/seo-company-bangalore' },
  ],
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/digitalexperthub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/digitalexperthub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/digitalexperthub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/digitalexperthub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@digitalexperthub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/8">
      {/* CTA Band */}
      <div className="bg-lime">
        <div className="wrap py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-wider text-ink/60 mb-1">
              Ready to grow?
            </p>
            <h2 className="text-display-sm font-display font-bold text-ink">
              Get your free strategy call today
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-ink text-paper rounded-full font-display font-bold text-sm hover:bg-ink-light transition-colors"
            >
              Book Free Call →
            </Link>
            <a
              href="tel:+917986713605"
              className="px-7 py-3.5 border-2 border-ink text-ink rounded-full font-display font-bold text-sm hover:bg-ink/10 transition-colors"
            >
              📞 +91 79867 13605
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="wrap py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Logo className="mb-6" />
            <p className="text-sm text-paper/60 leading-relaxed mb-6">
              A results-driven digital marketing agency helping businesses build, grow and scale online with
              proven SEO, PPC, web design and content marketing strategies.
            </p>
            <div className="space-y-2 text-sm text-paper/60">
              <a href="tel:+917986713605" className="flex items-center gap-2 hover:text-lime transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 79867 13605
              </a>
              <a href="mailto:info@digitalexperthub.com" className="flex items-center gap-2 hover:text-lime transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@digitalexperthub.com
              </a>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ludhiana, Punjab 141008, India</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-paper/60 hover:bg-lime hover:text-ink transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-4">Locations</h3>
              <ul className="space-y-2">
                {footerLinks.locations.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h3 className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-3">Newsletter</h3>
                <p className="text-xs text-paper/50 mb-3">Get SEO tips straight to your inbox.</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-xs text-paper placeholder:text-paper/40 focus:outline-none focus:border-lime/50"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-lime text-ink rounded-xl text-xs font-display font-bold hover:bg-lime-deep transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} Digital Expert Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-paper transition-colors">Terms</Link>
            <Link href="/sitemap-page" className="hover:text-paper transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
