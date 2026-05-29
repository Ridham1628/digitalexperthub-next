'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const services = [
  {
    category: 'SEO Services',
    items: [
      { label: 'SEO Services', href: '/services/seo', desc: 'Rank higher on Google' },
      { label: 'AI SEO Optimization', href: '/services/ai-seo', desc: 'Future-proof for SGE & AI' },
      { label: 'Local SEO', href: '/services/local-seo', desc: 'Dominate local search' },
      { label: 'Technical SEO', href: '/services/technical-seo', desc: 'Fix site foundations' },
      { label: 'E-commerce SEO', href: '/services/ecommerce-seo', desc: 'More product visibility' },
    ],
  },
  {
    category: 'Paid & Social',
    items: [
      { label: 'Google Ads (PPC)', href: '/services/google-ads', desc: 'Instant targeted traffic' },
      { label: 'Social Media Marketing', href: '/services/social-media-marketing', desc: 'Build your community' },
      { label: 'Lead Generation', href: '/services/lead-generation', desc: 'Fill your pipeline' },
      { label: 'Email Marketing', href: '/services/email-marketing', desc: 'Nurture & convert' },
    ],
  },
  {
    category: 'Web & Design',
    items: [
      { label: 'Website Design', href: '/services/website-design', desc: 'Beautiful, fast sites' },
      { label: 'Website Development', href: '/services/website-development', desc: 'Custom-built solutions' },
      { label: 'WordPress Development', href: '/services/wordpress-development', desc: 'CMS-powered sites' },
      { label: 'Shopify Development', href: '/services/shopify-development', desc: 'E-commerce stores' },
    ],
  },
  {
    category: 'Growth',
    items: [
      { label: 'Content Marketing', href: '/services/content-marketing', desc: 'Authority-building content' },
      { label: 'Branding Services', href: '/services/branding', desc: 'Memorable brand identity' },
      { label: 'CRO', href: '/services/cro', desc: 'Convert more visitors' },
      { label: 'Consulting', href: '/services/digital-marketing-consulting', desc: 'Expert strategy sessions' },
    ],
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  // Close mega menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-ink/95 backdrop-blur-xl border-b border-white/8 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.href} className="relative" ref={servicesRef}>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-display font-medium transition-colors duration-200',
                        megaOpen || pathname.startsWith('/services')
                          ? 'text-lime'
                          : 'text-paper/80 hover:text-paper'
                      )}
                      onClick={() => setMegaOpen((v) => !v)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        className={cn('w-3.5 h-3.5 transition-transform', megaOpen ? 'rotate-180' : '')}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
                        <path d="M6 7.4L1.8 3.2.7 4.3 6 9.6l5.3-5.3L10.2 3.2z" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-display font-medium transition-colors duration-200',
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'text-lime'
                        : 'text-paper/80 hover:text-paper'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917986713605"
                className="flex items-center gap-2 px-4 py-2 text-sm font-display font-medium text-paper/80 hover:text-lime transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 79867 13605
              </a>
              <Link
                href="/contact"
                className="btn btn-lime px-5 py-2.5 text-sm glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Free Strategy Call
              </Link>
            </div>

            {/* Mobile: Phone + Burger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+917986713605"
                className="flex items-center gap-1.5 px-4 py-2 bg-lime text-ink rounded-full text-sm font-display font-semibold"
                aria-label="Call us"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </a>
              <button
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-paper/80 hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-lg"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="hidden lg:block absolute top-full left-0 right-0 bg-ink/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="wrap py-8">
              <div className="grid grid-cols-4 gap-8">
                {services.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-xs font-display font-bold uppercase tracking-[0.15em] text-lime mb-4">
                      {cat.category}
                    </p>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex flex-col p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span className="text-sm font-display font-semibold text-paper group-hover:text-lime transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-paper/50 mt-0.5">{item.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-sm text-paper/60">
                  Not sure where to start?{' '}
                  <Link href="/services" className="text-lime hover:underline" onClick={() => setMegaOpen(false)}>
                    View all services →
                  </Link>
                </p>
                <Link
                  href="/contact"
                  className="btn btn-lime text-sm px-5 py-2.5"
                  onClick={() => setMegaOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl overflow-y-auto">
          <div className="wrap pt-24 pb-12">
            <nav className="space-y-1" aria-label="Mobile navigation">
              <Link href="/about" className="flex items-center justify-between p-4 min-h-[56px] rounded-2xl hover:bg-white/5 text-paper font-display font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:rounded-2xl">
                About Us
                <span className="text-paper/40">→</span>
              </Link>

              <div>
                <button
                  className="w-full flex items-center justify-between p-4 min-h-[56px] rounded-2xl hover:bg-white/5 text-paper font-display font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:rounded-2xl"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  Services
                  <svg
                    className={cn('w-5 h-5 text-paper/40 transition-transform', mobileServicesOpen ? 'rotate-180' : '')}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 8l5 5 5-5" strokeWidth={2} />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-4 bg-white/3 rounded-2xl p-4">
                    {services.map((cat) => (
                      <div key={cat.category}>
                        <p className="text-xs font-display font-bold uppercase tracking-wider text-lime mb-2">
                          {cat.category}
                        </p>
                        <div className="space-y-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 px-3 rounded-xl text-paper/80 hover:text-lime font-display font-medium text-sm"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-4 min-h-[56px] rounded-2xl hover:bg-white/5 text-paper font-display font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:rounded-2xl"
                >
                  {link.label}
                  <span className="text-paper/40">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-4 bg-lime text-ink rounded-2xl font-display font-bold text-lg"
              >
                Get Free Strategy Call
              </Link>
              <a
                href="tel:+917986713605"
                className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 text-paper rounded-2xl font-display font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 79867 13605
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
