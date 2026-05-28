import Link from 'next/link'
import Image from 'next/image'
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

/* Generic SVG icon used for all solution cards (consistent, no emojis) */
const SolutionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

/* X mark for challenges */
const XMark = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" className="w-4 h-4 shrink-0 mt-0.5 text-red-400">
    <path d="M12 4 4 12M4 4l8 8" />
  </svg>
)

/* Phone icon */
const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4 shrink-0">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

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
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
    { name: title },
  ]

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: title, description, url })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map(f => ({ question: f.q, answer: f.a })))) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden" aria-labelledby={`${slug}-h1`}>
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" aria-hidden="true" />
        {/* Right-side hero photo — desktop only */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none" aria-hidden="true">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-35"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
          </div>
        </div>
        <div className="wrap relative z-10">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-paper/50 font-display flex-wrap">
              {breadcrumbs.map((bc, i) => (
                <li key={bc.name} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-paper/25">/</span>}
                  {bc.href ? (
                    <Link href={bc.href} className="hover:text-lime transition-colors">{bc.name}</Link>
                  ) : (
                    <span className="text-paper/80" aria-current="page">{bc.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-bold uppercase tracking-wider text-lime mb-6">
              Industry Expertise · {industry}
            </div>
            <h1 id={`${slug}-h1`} className="text-display-xl font-display font-bold text-paper mb-6">{headline}</h1>
            <p className="text-lg text-paper/75 leading-relaxed mb-10 max-w-2xl">{subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn btn-lime btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Get a Free Audit
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <a
                href="tel:+917986713605"
                className="btn btn-ghost-dark btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <PhoneIcon />
                +91 79867 13605
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="section-sm bg-lime" aria-label={`Key results for ${industry}`}>
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
      <section className="section bg-paper" aria-labelledby={`${slug}-challenges`}>
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">The Problem</p>
              <h2 id={`${slug}-challenges`} className="text-display-md font-display font-bold text-ink mb-6">
                Common digital marketing challenges for {industry}
              </h2>
              <p className="text-ink/65 mb-8 leading-relaxed">
                We understand the unique challenges your industry faces. Here&apos;s what most {industry.toLowerCase()} businesses struggle with online.
              </p>
              <Link
                href="/contact"
                className="btn btn-ink btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Tell Us Your Challenge
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
            <ul className="space-y-3" aria-label="Common challenges">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-paper-2 rounded-2xl border border-ink/6">
                  <XMark />
                  <span className="text-sm text-ink/70 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section bg-ink" aria-labelledby={`${slug}-solutions`}>
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-4">Our Solution</p>
            <h2 id={`${slug}-solutions`} className="text-display-md font-display font-bold text-paper">
              How we help {industry} grow online
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="bg-forest/40 border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:bg-forest/60 transition-all duration-300">
                {/* Consistent SVG icon — no emojis */}
                <div className="w-11 h-11 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-4">
                  <SolutionIcon />
                </div>
                <h3 className="font-display font-bold text-paper mb-2">{s.title}</h3>
                <p className="text-sm text-paper/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-14 bg-paper" aria-labelledby={`${slug}-services`}>
        <div className="wrap">
          <h2 id={`${slug}-services`} className="text-display-sm font-display font-bold text-ink text-center mb-8">
            Services Most Relevant to {industry}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-5 py-2.5 bg-paper-2 border border-ink/10 rounded-full text-sm font-display font-semibold text-ink hover:border-lime-deep/40 hover:text-lime-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {s.label}
                <span aria-hidden="true"> →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-ink" aria-labelledby={`${slug}-faq`}>
        <div className="wrap max-w-3xl mx-auto">
          <h2 id={`${slug}-faq`} className="text-display-sm font-display font-bold text-paper text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border border-white/10 rounded-2xl px-6 py-5 open:bg-forest/30">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-paper group-open:text-lime transition-colors min-h-[48px]">
                  <span>{f.q}</span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="w-4 h-4 shrink-0 transition-transform group-open:rotate-45">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </summary>
                <p className="mt-3 text-paper/75 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to grow your ${industry.toLowerCase()} business online?`}
        subtitle="Join hundreds of businesses in your industry that trust Digital Expert Hub for measurable digital marketing results."
      />
    </>
  )
}
