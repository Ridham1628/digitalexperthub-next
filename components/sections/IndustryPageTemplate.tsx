import Link from 'next/link'
import CtaSection from './CtaSection'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'

export interface IndustryPageProps {
  slug: string
  industry: string
  title: string
  headline: string
  subheadline: string
  description: string
  challenges: string[]
  solutions: { icon: string; title: string; desc: string }[]
  results: { metric: string; label: string }[]
  faqs: { q: string; a: string }[]
  services: { label: string; href: string }[]
}

export default function IndustryPageTemplate({
  slug,
  industry,
  title,
  headline,
  subheadline,
  description,
  challenges,
  solutions,
  results,
  faqs,
  services,
}: IndustryPageProps) {
  const url = `${siteConfig.url}/industries/${slug}`
  const breadcrumbs = [
    { name: 'Home', href: siteConfig.url },
    { name: 'Industries', href: `${siteConfig.url}/industries` },
    { name: title, href: url },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: title, description, url })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map(f => ({ question: f.q, answer: f.a })))) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10">
          <nav className="flex items-center gap-2 text-xs text-paper/40 font-display mb-8">
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
              Industry Expertise · {industry}
            </div>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6">{headline}</h1>
            <p className="text-lg text-paper/65 leading-relaxed mb-10 max-w-2xl">{subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-lime btn-lg">Get a Free Audit →</Link>
              <a href="tel:+917986713605" className="btn btn-ghost-dark btn-lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-sm bg-lime">
        <div className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {results.map((r) => (
              <div key={r.label}>
                <div className="text-3xl lg:text-4xl font-display font-bold text-ink">{r.metric}</div>
                <div className="text-xs font-display font-semibold uppercase tracking-wider text-ink/60 mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">The Problem</p>
              <h2 className="text-display-md font-display font-bold text-ink mb-6">
                Common digital marketing challenges for {industry}
              </h2>
              <p className="text-ink/60 mb-8 leading-relaxed">
                We understand the unique challenges your industry faces. Here&apos;s what most {industry.toLowerCase()} struggle with online.
              </p>
              <Link href="/contact" className="btn btn-ink btn-lg">Tell Us Your Challenge →</Link>
            </div>
            <div className="space-y-3">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-paper-2 rounded-2xl border border-ink/6">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span className="text-sm text-ink/70">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section bg-ink">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-4">Our Solution</p>
            <h2 className="text-display-md font-display font-bold text-paper">
              How we help {industry} grow online
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-forest/40 border border-white/10 rounded-3xl p-7">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-paper mb-2">{s.title}</h3>
                <p className="text-sm text-paper/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section-sm bg-paper">
        <div className="wrap">
          <h2 className="text-display-sm font-display font-bold text-ink text-center mb-8">
            Services Most Relevant to {industry}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="px-5 py-2.5 bg-paper-2 border border-ink/10 rounded-full text-sm font-display font-semibold text-ink hover:border-lime/50 hover:text-lime-deep transition-colors">
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-ink">
        <div className="wrap max-w-3xl mx-auto">
          <h2 className="text-display-sm font-display font-bold text-paper text-center mb-12">Frequently Asked Questions</h2>
          <div className="divide-y divide-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer text-paper font-display font-semibold hover:text-lime transition-colors list-none">
                  {f.q}
                  <span className="w-6 h-6 flex-shrink-0 text-paper/40 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="pb-4 text-paper/60 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to grow your ${industry.toLowerCase()} practice online?`}
        subtitle="Join hundreds of businesses in your industry that trust Digital Expert Hub for measurable digital marketing results."
      />
    </>
  )
}
