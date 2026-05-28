import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing FAQs — Expert Answers',
  description: 'Expert answers to common digital marketing questions — SEO costs, timelines, Google Ads ROI, what results to expect & more. Everything before you choose us.',
  path: '/faqs',
})

const faqCategories = [
  {
    category: 'About Digital Marketing',
    faqs: [
      { q: 'What is digital marketing?', a: 'Digital marketing is the promotion of businesses, products or services through digital channels including search engines (SEO/PPC), social media, email, content and websites. It allows businesses to reach targeted audiences online and measure results precisely.' },
      { q: 'How important is digital marketing for my business?', a: 'In today\'s world, digital marketing is essential for virtually every business. 93% of all online experiences begin with a search engine, and most buying decisions are influenced by online research. Without digital marketing, you\'re invisible to a huge portion of your potential customers.' },
      { q: 'Which digital marketing channel should I start with?', a: 'It depends on your business type and goals. For local businesses, start with Local SEO. For immediate leads, Google Ads is powerful. For brand building, social media is effective. We always recommend starting with a free strategy call to identify the best channel mix for your specific situation.' },
    ],
  },
  {
    category: 'SEO Questions',
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'SEO typically shows meaningful movement within 3–6 months. Significant results, including consistent lead generation from organic traffic, are usually visible by month 6–12. SEO is a long-term investment — but the results compound over time and continue even after you stop spending.' },
      { q: 'Can you guarantee #1 rankings on Google?', a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm is complex and constantly changing. We do guarantee our process, our transparency, and our relentless commitment to improving your rankings through proven, white-hat SEO strategies.' },
      { q: 'What\'s the difference between SEO and PPC?', a: 'SEO (organic) is free traffic that requires time and effort to build. PPC (paid ads like Google Ads) provides immediate traffic but stops when you stop paying. The best strategy usually combines both: PPC for immediate results while SEO builds your long-term organic foundation.' },
    ],
  },
  {
    category: 'Google Ads & PPC',
    faqs: [
      { q: 'How much should I spend on Google Ads?', a: 'We recommend a minimum ad budget of ₹20,000–₹30,000/month to generate enough data for meaningful optimisation. The right budget depends on your industry, competition and goals. Our management fee is separate from your ad spend.' },
      { q: 'Why are my Google Ads not converting?', a: 'The most common reasons are: targeting wrong keywords, poor quality landing pages, wrong audience, no conversion tracking, or high competition. We\'ll identify the specific issue in a free account audit.' },
    ],
  },
  {
    category: 'Working With Us',
    faqs: [
      { q: 'How do I get started with Digital Expert Hub?', a: 'Start by booking a free 30-minute strategy call. We\'ll review your current digital presence, identify your biggest opportunities and recommend a custom action plan. No obligation, no hard sell.' },
      { q: 'Do you require long-term contracts?', a: 'Our minimum commitment is 3 months (to give SEO and other strategies time to show results). After that, we work month-to-month. You can pause or cancel with 30 days notice.' },
      { q: 'How do you report on results?', a: 'You receive a monthly performance report covering all key metrics — traffic, rankings, leads, ROI and more. We also have monthly strategy calls to review results and plan the next month.' },
      { q: 'Do I own my accounts and data?', a: 'Absolutely. You own your Google Ads account, your website, your social media accounts, and all your data. We never hold clients\' accounts hostage.' },
    ],
  },
]

const allFaqs = faqCategories.flatMap(c => c.faqs.map(f => ({ question: f.q, answer: f.a })))

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }} />

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Help Centre</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Frequently Asked{' '}
            <span className="font-serif italic text-lime">Questions</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto">
            Everything you need to know about digital marketing and working with Digital Expert Hub.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap max-w-4xl mx-auto space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-display-sm font-display font-bold text-ink mb-6 pb-4 border-b border-ink/10">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((f) => (
                  <details key={f.q} className="bg-paper-2 rounded-2xl overflow-hidden group">
                    <summary className="flex items-center justify-between gap-4 p-5 min-h-[48px] cursor-pointer text-ink font-display font-semibold hover:text-lime-deep transition-colors list-none">
                      {f.q}
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="w-5 h-5 text-ink/65 group-open:rotate-45 transition-transform flex-shrink-0"><path d="M8 3v10M3 8h10"/></svg>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-ink/60 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-ink rounded-3xl p-8 text-center">
            <p className="text-xl font-display font-bold text-paper mb-3">Still have questions?</p>
            <p className="text-paper/60 mb-6">We&apos;re happy to answer any question on a free strategy call.</p>
            <Link href="/contact" className="btn btn-lime btn-lg">Book Free Strategy Call →</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
