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
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'SEO Services',
    links: [
      { label: 'SEO Services', href: '/services/seo' },
      { label: 'Local SEO', href: '/services/local-seo' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'E-commerce SEO', href: '/services/ecommerce-seo' },
    ],
  },
  {
    title: 'Paid & Social',
    links: [
      { label: 'Google Ads (PPC)', href: '/services/google-ads' },
      { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { label: 'Lead Generation', href: '/services/lead-generation' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
    ],
  },
  {
    title: 'Web & Design',
    links: [
      { label: 'Website Design', href: '/services/website-design' },
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'WordPress Development', href: '/services/wordpress-development' },
      { label: 'Shopify Development', href: '/services/shopify-development' },
      { label: 'Landing Page Design', href: '/services/landing-page-design' },
    ],
  },
  {
    title: 'Growth Services',
    links: [
      { label: 'Content Marketing', href: '/services/content-marketing' },
      { label: 'Branding Services', href: '/services/branding' },
      { label: 'CRO', href: '/services/cro' },
      { label: 'ORM', href: '/services/orm' },
      { label: 'Digital Marketing Consulting', href: '/services/digital-marketing-consulting' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'SEO for Doctors', href: '/industries/doctors' },
      { label: 'SEO for Dentists', href: '/industries/dentists' },
      { label: 'SEO for Real Estate', href: '/industries/real-estate' },
      { label: 'SEO for E-commerce', href: '/industries/ecommerce' },
      { label: 'SEO for SaaS', href: '/industries/saas' },
      { label: 'SEO for Law Firms', href: '/industries/law-firms' },
      { label: 'SEO for Small Business', href: '/industries/small-business' },
      { label: 'SEO for Startups', href: '/industries/startups' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'SEO Company India', href: '/locations/seo-company-india' },
      { label: 'SEO Company Mohali', href: '/locations/seo-company-mohali' },
      { label: 'SEO Company Chandigarh', href: '/locations/seo-company-chandigarh' },
      { label: 'SEO Company Delhi', href: '/locations/seo-company-delhi' },
      { label: 'SEO Company Mumbai', href: '/locations/seo-company-mumbai' },
      { label: 'SEO Company Bangalore', href: '/locations/seo-company-bangalore' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'All Blog Posts', href: '/blog' },
      { label: 'Complete SEO Guide 2025', href: '/blog/seo-guide-2025' },
      { label: 'Maximise Google Ads ROI', href: '/blog/google-ads-roi' },
      { label: 'Local SEO Guide', href: '/blog/local-seo-guide' },
      { label: 'Content Marketing Strategy', href: '/blog/content-marketing-strategy' },
      { label: 'Technical SEO Checklist', href: '/blog/technical-seo-checklist' },
    ],
  },
  {
    title: 'Legal & Resources',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'XML Sitemap', href: '/sitemap.xml' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="wrap">
        <div className="mb-12">
          <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">All Pages</p>
          <h1 className="text-display-lg font-display font-bold text-ink">Sitemap</h1>
          <p className="text-ink/60 mt-3">A complete directory of all pages on the Digital Expert Hub website.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xs font-display font-bold uppercase tracking-[0.15em] text-lime-deep mb-4 pb-2 border-b border-ink/10">
                {s.title}
              </h2>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/70 hover:text-lime-deep transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="text-lime-deep opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
