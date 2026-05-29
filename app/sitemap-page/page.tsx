import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Sitemap — All Pages',
  description: 'Complete sitemap of the Digital Expert Hub website. Find all our service pages, industry pages, blog posts, case studies and more.',
  path: '/sitemap-page',
})

const sections = [
  {
    id: '01',
    title: 'Main Pages',
    links: [
      { label: 'Home',         href: '/' },
      { label: 'About Us',     href: '/about' },
      { label: 'Services',     href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog',         href: '/blog' },
      { label: 'Pricing',      href: '/pricing' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQs',         href: '/faqs' },
      { label: 'Careers',      href: '/careers' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    id: '02',
    title: 'SEO Services',
    links: [
      { label: 'SEO Services',    href: '/services/seo' },
      { label: 'Local SEO',       href: '/services/local-seo' },
      { label: 'Technical SEO',   href: '/services/technical-seo' },
      { label: 'E-commerce SEO',  href: '/services/ecommerce-seo' },
      { label: 'AI SEO',          href: '/services/ai-seo' },
    ],
  },
  {
    id: '03',
    title: 'Paid & Social',
    links: [
      { label: 'Google Ads (PPC)',       href: '/services/google-ads' },
      { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { label: 'Lead Generation',        href: '/services/lead-generation' },
      { label: 'Email Marketing',        href: '/services/email-marketing' },
    ],
  },
  {
    id: '04',
    title: 'Web & Design',
    links: [
      { label: 'Website Design',         href: '/services/website-design' },
      { label: 'Website Development',    href: '/services/website-development' },
      { label: 'WordPress Development',  href: '/services/wordpress-development' },
      { label: 'Shopify Development',    href: '/services/shopify-development' },
      { label: 'Landing Page Design',    href: '/services/landing-page-design' },
    ],
  },
  {
    id: '05',
    title: 'Growth Services',
    links: [
      { label: 'Content Marketing',           href: '/services/content-marketing' },
      { label: 'Branding Services',            href: '/services/branding' },
      { label: 'CRO',                          href: '/services/cro' },
      { label: 'ORM',                          href: '/services/orm' },
      { label: 'Digital Marketing Consulting', href: '/services/digital-marketing-consulting' },
    ],
  },
  {
    id: '06',
    title: 'Industries',
    links: [
      { label: 'Doctors & Clinics',  href: '/industries/doctors' },
      { label: 'Dentists',           href: '/industries/dentists' },
      { label: 'Real Estate',        href: '/industries/real-estate' },
      { label: 'Realtors & Agents',  href: '/industries/realtors' },
      { label: 'E-commerce',         href: '/industries/ecommerce' },
      { label: 'SaaS & Tech',        href: '/industries/saas' },
      { label: 'Law Firms',          href: '/industries/law-firms' },
      { label: 'Small Business',     href: '/industries/small-business' },
      { label: 'Startups',           href: '/industries/startups' },
    ],
  },
  {
    id: '07',
    title: 'Locations',
    links: [
      { label: 'SEO Company India',      href: '/locations/seo-company-india' },
      { label: 'SEO Company Mohali',     href: '/locations/seo-company-mohali' },
      { label: 'SEO Company Chandigarh', href: '/locations/seo-company-chandigarh' },
      { label: 'SEO Company Delhi',      href: '/locations/seo-company-delhi' },
      { label: 'SEO Company Mumbai',     href: '/locations/seo-company-mumbai' },
      { label: 'SEO Company Bangalore',  href: '/locations/seo-company-bangalore' },
    ],
  },
  {
    id: '08',
    title: 'Blog Posts',
    links: [
      { label: 'All Blog Posts',               href: '/blog' },
      { label: 'Complete SEO Guide 2025',       href: '/blog/seo-guide-2025' },
      { label: 'Maximise Google Ads ROI',       href: '/blog/google-ads-roi' },
      { label: 'Local SEO Guide',               href: '/blog/local-seo-guide' },
      { label: 'Content Marketing Strategy',    href: '/blog/content-marketing-strategy' },
      { label: 'Technical SEO Checklist',       href: '/blog/technical-seo-checklist' },
    ],
  },
  {
    id: '09',
    title: 'Legal & Resources',
    links: [
      { label: 'Privacy Policy',      href: '/privacy-policy' },
      { label: 'Terms & Conditions',  href: '/terms-and-conditions' },
      { label: 'Refund Policy',       href: '/refund-policy' },
      { label: 'Cookie Policy',       href: '/cookie-policy' },
      { label: 'XML Sitemap',         href: '/sitemap.xml' },
    ],
  },
]

const totalLinks = sections.reduce((acc, s) => acc + s.links.length, 0)

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen bg-ink overflow-hidden">

      {/* ── Blueprint grid background ── */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      {/* Giant ghost watermark */}
      <div
        className="pointer-events-none select-none absolute top-20 left-0 right-0 text-center font-display font-bold text-white/[0.025] leading-none overflow-hidden"
        style={{ fontSize: 'clamp(6rem, 22vw, 18rem)', letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        SITEMAP
      </div>

      {/* Lime radial accent — top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle at 70% 30%, rgba(200,242,80,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* ── Page content ── */}
      <div className="relative z-10 wrap pt-28 lg:pt-36 pb-24">

        {/* ── Header ── */}
        <header className="mb-16 lg:mb-20">

          {/* Coordinate meta row */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] font-display font-bold uppercase tracking-[0.35em] text-lime/70 flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-lime"
                aria-hidden="true"
              />
              Digital Expert Hub · Site Index
            </span>
            <span className="hidden sm:block text-[10px] font-display text-paper/20 tabular-nums tracking-wider">
              {totalLinks} PAGES · {sections.length} ZONES
            </span>
          </div>

          {/* Primary heading */}
          <h1
            className="font-display font-bold leading-[0.95] text-balance mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '-0.04em' }}
          >
            <span className="text-paper/90">SITE</span>
            <span className="text-lime">MAP</span>
          </h1>

          {/* Rule with metadata */}
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-lime/40 via-white/10 to-transparent" aria-hidden="true" />
            <p className="text-xs font-display text-paper/40 shrink-0">
              A complete directory of every page on this site
            </p>
            <div className="w-6 h-px bg-white/10 shrink-0" aria-hidden="true" />
          </div>
        </header>

        {/* ── Sections grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {sections.map((section) => (
            <div
              key={section.id}
              className="group relative border border-white/8 rounded-2xl p-6 bg-forest/10 hover:bg-forest/25 hover:border-lime/20 transition-all duration-300"
            >
              {/* Ghost zone number — background watermark */}
              <span
                className="pointer-events-none select-none absolute bottom-3 right-4 font-display font-bold text-white/[0.04] group-hover:text-lime/[0.07] transition-colors leading-none"
                style={{ fontSize: '5rem', letterSpacing: '-0.04em' }}
                aria-hidden="true"
              >
                {section.id}
              </span>

              {/* Section header */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                {/* Lime zone indicator */}
                <span
                  className="flex-shrink-0 text-[10px] font-display font-bold tabular-nums text-lime/60 border border-lime/20 rounded px-1.5 py-0.5 leading-none group-hover:text-lime group-hover:border-lime/40 transition-colors"
                >
                  {section.id}
                </span>
                <h2 className="text-xs font-display font-bold uppercase tracking-[0.18em] text-paper/60 group-hover:text-paper/85 transition-colors flex-1">
                  {section.title}
                </h2>
                {/* Link count badge */}
                <span className="text-[10px] font-display text-paper/20 tabular-nums shrink-0">
                  {section.links.length}
                </span>
              </div>

              {/* Lime divider line */}
              <div
                className="h-px mb-5 relative z-10"
                style={{ background: 'linear-gradient(90deg, rgba(200,242,80,0.25) 0%, rgba(200,242,80,0.05) 60%, transparent 100%)' }}
                aria-hidden="true"
              />

              {/* Link list */}
              <ul className="space-y-0.5 relative z-10">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 py-1.5 px-1 rounded-lg text-sm font-display text-paper/55 hover:text-paper hover:bg-white/4 transition-all duration-150 group/link"
                    >
                      {/* Dot marker */}
                      <span
                        className="flex-shrink-0 w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-lime transition-colors"
                        aria-hidden="true"
                      />
                      <span className="flex-1 leading-snug">{link.label}</span>
                      {/* Arrow — appears on hover */}
                      <svg
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-3 h-3 text-lime/60 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 shrink-0"
                      >
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Footer strip ── */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime mb-1">
              Also Available
            </p>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 text-sm font-display text-paper/55 hover:text-paper transition-colors group/xml"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 text-lime/60">
                <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6M9 2l4 4M9 2v4h4" />
              </svg>
              XML Sitemap for search engines →
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lime px-5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Get Free Strategy Call
            </Link>
            <Link
              href="/"
              className="btn btn-ghost-dark px-5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
