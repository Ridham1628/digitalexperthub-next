import Link from 'next/link'
import Image from 'next/image'
import CtaSection from './CtaSection'
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

/* Reusable SVG icons — replaces all emoji usage */
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
    <path d="M3 8l3 3 7-6" />
  </svg>
)

const BenefitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5">
    <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
  </svg>
)

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
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden" aria-labelledby={`${slug}-h1`}>
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" aria-hidden="true" />
        {/* Right-side hero photo — desktop only */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none" aria-hidden="true">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-paper/50 font-display flex-wrap">
              {breadcrumbs.map((bc, i) => (
                <li key={bc.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-paper/25">/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-paper/80" aria-current="page">{bc.name}</span>
                  ) : (
                    <Link href={bc.href} className="hover:text-lime transition-colors">{bc.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-bold uppercase tracking-wider text-lime mb-6">
              <StarIcon />
              Digital Expert Hub Service
            </div>
            <h1 id={`${slug}-h1`} className="text-display-xl font-display font-bold text-paper mb-6 text-balance">
              {headline}
            </h1>
            <p className="text-lg lg:text-xl text-paper/75 leading-relaxed mb-10 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn btn-lime btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Get a Free Audit <ArrowIcon />
              </Link>
              <a
                href="tel:+917986605418"
                className="btn btn-ghost-dark btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <PhoneIcon />
                +91 79866 05418
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-paper" aria-labelledby={`${slug}-benefits`}>
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">Why It Matters</p>
            <h2 id={`${slug}-benefits`} className="text-display-md font-display font-bold text-ink">
              Benefits of our {title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-paper-2 rounded-3xl p-7 border border-ink/8 hover:border-lime-deep/20 hover:shadow-card transition-all duration-300">
                {/* Consistent SVG icon — no emojis */}
                <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center text-lime mb-4">
                  <BenefitIcon />
                </div>
                <h3 className="font-display font-bold text-ink mb-2">{b.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-ink" aria-labelledby={`${slug}-includes`}>
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">What&apos;s Included</p>
              <h2 id={`${slug}-includes`} className="text-display-md font-display font-bold text-paper mb-6">
                Everything in our {title} package
              </h2>
              <p className="text-paper/70 mb-8 leading-relaxed">
                A comprehensive, done-for-you service with no corners cut and no fluff.
              </p>
              <Link
                href="/contact"
                className="btn btn-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Get Started Today <ArrowIcon />
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-3" aria-label={`${title} package inclusions`}>
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 bg-forest/40 border border-white/10 rounded-2xl">
                  <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-display font-medium text-paper leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-paper" aria-labelledby={`${slug}-process`}>
        <div className="wrap">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">How It Works</p>
            <h2 id={`${slug}-process`} className="text-display-md font-display font-bold text-ink">
              Our {title} Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((s, i) => (
              <div key={i} className="relative bg-paper-2 rounded-3xl p-6 border border-ink/8">
                <div className="text-4xl font-display font-bold text-ink/8 mb-3 select-none" aria-hidden="true">{s.step}</div>
                <h3 className="font-display font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-xs text-ink/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      {tools && tools.length > 0 && (
        <section className="py-14 bg-ink" aria-labelledby={`${slug}-tools`}>
          <div className="wrap">
            <h2 id={`${slug}-tools`} className="text-display-sm font-display font-bold text-paper text-center mb-8">
              Tools We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2.5 bg-forest/60 border border-white/10 rounded-full text-sm font-display font-semibold text-paper/75">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-ink" aria-labelledby={`${slug}-faq`}>
        <div className="wrap max-w-3xl mx-auto">
          <h2 id={`${slug}-faq`} className="text-display-md font-display font-bold text-paper text-center mb-12">
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

      {/* Related Services */}
      <section className="py-14 bg-forest/30 border-t border-white/10" aria-labelledby={`${slug}-related`}>
        <div className="wrap">
          <h2 id={`${slug}-related`} className="text-display-sm font-display font-bold text-paper text-center mb-8">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-5 py-2.5 bg-ink border border-white/15 rounded-full text-sm font-display font-semibold text-paper/80 hover:border-lime/50 hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {s.label}
                <span aria-hidden="true"> →</span>
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
