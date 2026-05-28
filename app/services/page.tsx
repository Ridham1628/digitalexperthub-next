import type { Metadata } from 'next'
import Link from 'next/link'
import CtaSection from '@/components/sections/CtaSection'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Services',
  description: 'Explore our full range of digital marketing services — SEO, PPC, social media, web design, content marketing and more. Proven strategies for business growth.',
  path: '/services',
})

const allServices = [
  {
    category: 'SEO Services',
    items: [
      { title: 'SEO Services', href: '/services/seo', desc: 'Data-driven SEO to rank higher and drive organic growth.' },
      { title: 'Local SEO', href: '/services/local-seo', desc: 'Dominate local search and Google Maps in your city.' },
      { title: 'Technical SEO', href: '/services/technical-seo', desc: 'Fix the technical issues holding your site back.' },
      { title: 'E-commerce SEO', href: '/services/ecommerce-seo', desc: 'Rank your products and drive more sales organically.' },
    ],
  },
  {
    category: 'Paid Marketing',
    items: [
      { title: 'Google Ads (PPC)', href: '/services/google-ads', desc: 'Maximise ROI with expert Google Ads management.' },
      { title: 'Lead Generation', href: '/services/lead-generation', desc: 'Multi-channel lead gen systems that fill your pipeline.' },
    ],
  },
  {
    category: 'Social & Content',
    items: [
      { title: 'Social Media Marketing', href: '/services/social-media-marketing', desc: 'Build brand, community and sales across all platforms.' },
      { title: 'Content Marketing', href: '/services/content-marketing', desc: 'Authority-building content that ranks and converts.' },
      { title: 'Email Marketing', href: '/services/email-marketing', desc: 'Nurture leads and drive repeat revenue with email.' },
    ],
  },
  {
    category: 'Web & Design',
    items: [
      { title: 'Website Design', href: '/services/website-design', desc: 'Beautiful, conversion-focused website design.' },
      { title: 'Website Development', href: '/services/website-development', desc: 'Custom-built websites with Next.js and React.' },
      { title: 'WordPress Development', href: '/services/wordpress-development', desc: 'Fast, SEO-friendly WordPress websites.' },
      { title: 'Shopify Development', href: '/services/shopify-development', desc: 'High-converting Shopify stores for e-commerce brands.' },
      { title: 'Landing Page Design', href: '/services/landing-page-design', desc: 'Purpose-built landing pages that convert.' },
    ],
  },
  {
    category: 'Growth & Optimisation',
    items: [
      { title: 'CRO', href: '/services/cro', desc: 'Convert more visitors without more traffic.' },
      { title: 'Online Reputation Management', href: '/services/orm', desc: 'Protect and build your brand\'s online reputation.' },
      { title: 'Branding Services', href: '/services/branding', desc: 'Create a memorable, professional brand identity.' },
      { title: 'Digital Marketing Consulting', href: '/services/digital-marketing-consulting', desc: 'Expert strategy sessions for your team.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">All Services</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Full-Stack Digital Marketing{' '}
            <span className="font-serif italic text-lime">Services</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
            Everything your business needs to build, grow and scale online. From organic search to paid ads,
            web development to branding — we do it all, and we do it well.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-paper">
        <div className="wrap space-y-16">
          {allServices.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-display-sm font-display font-bold text-ink mb-8 pb-4 border-b border-ink/10">
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.items.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex flex-col p-6 bg-paper-2 rounded-3xl border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="font-display font-bold text-ink mb-2 group-hover:text-lime-deep transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink/60 leading-relaxed flex-1">{s.desc}</p>
                    <span className="text-sm font-display font-semibold text-lime-deep mt-4 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
