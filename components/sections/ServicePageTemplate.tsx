import Link from 'next/link'
import CtaSection from './CtaSection'
import FaqSection from './FaqSection'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'

export interface ServicePageProps {
  slug: string
  title: string
  headline: string
  subheadline: string
  description: string
  benefits: { icon: string; title: string; desc: string }[]
  includes: string[]
  process: { step: string; title: string; desc: string }[]
  tools?: string[]
  faqs: { q: string; a: string }[]
  relatedServices: { label: string; href: string }[]
  breadcrumbs: { name: string; href: string }[]
}

export default function ServicePageTemplate({
  slug,
  title,
  headline,
  subheadline,
  description,
  benefits,
  includes,
  process,
  tools,
  faqs,
  relatedServices,
  breadcrumbs,
}: ServicePageProps) {
  const url = `${siteConfig.url}/services/${slug}`

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: title, description, url })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map(f => ({ question: f.q, answer: f.a })))) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-paper/40 font-display mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((bc, i) => (
              <span key={bc.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-paper/70">{bc.name}</span>
                ) : (
                  <Link href={bc.href} className="hover:text-lime transition-colors">{bc.name}</Link>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-bold uppercase tracking-wider text-lime mb-6">
              ✦ Digital Expert Hub Service
            </div>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6 text-balance">
              {headline}
            </h1>
            <p className="text-lg lg:text-xl text-paper/65 leading-relaxed mb-10 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-lime btn-lg">
                Get a Free Audit →
              </Link>
              <a href="tel:+917986713605" className="btn btn-ghost-dark btn-lg">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">Why It Matters</p>
            <h2 className="text-display-md font-display font-bold text-ink">
              Benefits of our {title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-paper-2 rounded-3xl p-7 border border-ink/6">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-display font-bold text-ink mb-2">{b.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-ink">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">What's Included</p>
              <h2 className="text-display-md font-display font-bold text-paper mb-6">
                Everything in our {title} package
              </h2>
              <p className="text-paper/60 mb-8 leading-relaxed">
                A comprehensive, done-for-you service with no corners cut and no fluff.
              </p>
              <Link href="/contact" className="btn btn-lime">
                Get Started Today →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-forest/40 border border-white/10 rounded-2xl">
                  <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span className="text-sm font-display font-medium text-paper">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">How It Works</p>
            <h2 className="text-display-md font-display font-bold text-ink">Our {title} Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <div key={i} className="relative bg-paper-2 rounded-3xl p-6 border border-ink/6">
                <div className="text-4xl font-display font-bold text-ink/8 mb-3">{s.step}</div>
                <h3 className="font-display font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      {tools && tools.length > 0 && (
        <section className="section-sm bg-ink">
          <div className="wrap">
            <h2 className="text-display-sm font-display font-bold text-paper text-center mb-10">
              Tools We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 bg-forest/60 border border-white/10 rounded-full text-sm font-display font-semibold text-paper/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-ink">
        <div className="wrap max-w-3xl mx-auto">
          <h2 className="text-display-md font-display font-bold text-paper text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 divide-y divide-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer text-paper font-display font-semibold hover:text-lime transition-colors list-none">
                  {f.q}
                  <span className="w-6 h-6 flex-shrink-0 text-paper/40 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-5 text-paper/60 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-sm bg-forest/30 border-t border-white/10">
        <div className="wrap">
          <h2 className="text-display-sm font-display font-bold text-paper text-center mb-8">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link key={s.href} href={s.href} className="px-5 py-2.5 bg-ink border border-white/15 rounded-full text-sm font-display font-semibold text-paper/80 hover:border-lime hover:text-lime transition-colors">
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to get started with our ${title}?`}
        subtitle="Book a free strategy call and we'll show you exactly how we can grow your business."
      />
    </>
  )
}
