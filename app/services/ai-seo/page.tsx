import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'
import Link from 'next/link'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'AI SEO Services India',
  description:
    'Future-proof your rankings with AI SEO services. Optimise for Google SGE, AI Overviews & voice search before your competitors do. Free AI SEO audit.',
  path: '/services/ai-seo',
})

const faqs = [
  {
    question: 'What is AI SEO?',
    answer:
      'AI SEO refers to optimising your website for AI-powered search experiences including Google\'s Search Generative Experience (SGE), ChatGPT, Perplexity, and voice assistants. It involves structuring content so it is selected and cited by AI systems.',
  },
  {
    question: 'How is AI SEO different from traditional SEO?',
    answer:
      'Traditional SEO focuses on ranking in the 10 blue links. AI SEO focuses on being featured in AI-generated answers, knowledge panels and conversational search results. Both require technical excellence and quality content, but AI SEO emphasises E-E-A-T signals, structured data and topic authority even more strongly.',
  },
  {
    question: 'Is AI SEO important in 2025?',
    answer:
      'Absolutely. Google\'s AI Overviews are now appearing in over 60% of searches. Optimising for AI visibility is no longer optional — it directly affects organic traffic and brand authority.',
  },
  {
    question: 'Will AI SEO replace traditional SEO?',
    answer:
      'No — AI SEO builds on top of traditional SEO. Technical foundations, quality content and authoritative backlinks remain critical. AI SEO adds a layer of optimisation for how AI systems discover, evaluate and present your content.',
  },
]

const benefits = [
  {
    title: 'Google SGE Visibility',
    desc: 'Get featured in Google\'s AI Overviews and generative search results where traditional rankings matter less than content authority.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: 'E-E-A-T Optimisation',
    desc: 'Build Expertise, Experience, Authoritativeness and Trustworthiness signals that AI systems use to evaluate your content quality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Structured Data & Schema',
    desc: 'Advanced schema markup implementation that helps AI systems understand, parse and feature your content accurately.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Conversational Content',
    desc: 'Craft content that answers the exact questions AI systems retrieve for queries in your industry — capturing zero-click and featured placements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'LLM.txt & AI Crawler Optimisation',
    desc: 'Implement llms.txt and configure your site so AI models like ChatGPT, Claude and Perplexity correctly index and credit your content.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Voice & Multimodal Search',
    desc: 'Optimise for voice queries, image search and the emerging multimodal AI search patterns being driven by Google and ChatGPT plugins.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
]

export default function AiSeoPage() {
  const url = `${siteConfig.url}/services/ai-seo`
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI SEO Optimization' },
  ]

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({
        name: 'AI SEO Optimization',
        description: 'Future-proof SEO services optimised for Google SGE, ChatGPT, Perplexity and voice search.',
        url,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="wrap relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-paper/50">
              {breadcrumbs.map((b, i) => (
                <li key={b.name} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-paper transition-colors">{b.name}</Link>
                  ) : (
                    <span className="text-paper/80" aria-current="page">{b.name}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden="true" className="text-paper/25">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-semibold uppercase tracking-wider text-lime mb-6">
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
              </svg>
              Future-Proof SEO
            </div>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6">
              AI SEO Optimization{' '}
              <span className="font-serif italic text-lime">That Wins</span>{' '}in the AI Era
            </h1>
            <p className="text-xl text-paper/75 leading-relaxed mb-8">
              Google SGE. ChatGPT. Perplexity. Voice search. The way people find information is changing fast.
              Our AI SEO services ensure your brand stays visible, cited and trusted — wherever people search.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-lime btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
                Get AI SEO Audit
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/services/seo" className="btn btn-ghost-dark btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
                View Traditional SEO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-paper" aria-labelledby="benefits-heading">
        <div className="wrap">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="section-label-light mb-4">What&apos;s Included</p>
            <h2 id="benefits-heading" className="text-display-md font-display font-bold text-ink mb-4">
              Everything you need for AI-first search visibility
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-paper-2 rounded-3xl p-7 border border-ink/8">
                <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center text-lime mb-4">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-ink mb-2">{b.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink" aria-labelledby="ai-seo-faq-heading">
        <div className="wrap max-w-3xl mx-auto">
          <h2 id="ai-seo-faq-heading" className="text-display-sm font-display font-bold text-paper mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-white/10 rounded-2xl px-6 py-5 open:bg-forest/30">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-paper group-open:text-lime">
                  {faq.question}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="w-4 h-4 shrink-0 transition-transform group-open:rotate-45">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </summary>
                <p className="mt-3 text-paper/70 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 bg-paper">
        <div className="wrap">
          <h2 className="text-display-sm font-display font-bold text-ink mb-8 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'SEO Services', href: '/services/seo' },
              { label: 'Technical SEO', href: '/services/technical-seo' },
              { label: 'Local SEO', href: '/services/local-seo' },
              { label: 'Content Marketing', href: '/services/content-marketing' },
              { label: 'Website Development', href: '/services/website-development' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-5 py-2.5 rounded-full border border-ink/15 bg-paper-2 text-sm font-display font-semibold text-ink hover:border-lime-deep/40 hover:bg-lime-pale/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to future-proof your SEO?"
        subtitle="Get a free AI SEO audit and discover how to capture visibility in the AI-powered search landscape."
        primaryLabel="Get Free AI SEO Audit"
      />
    </>
  )
}
