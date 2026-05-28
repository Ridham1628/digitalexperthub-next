'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What is SEO and why is it important for my business?',
    a: "SEO (Search Engine Optimisation) is the practice of improving your website so it ranks higher on search engines like Google. It's important because 93% of online experiences begin with a search engine, and ranking on page 1 can deliver consistent, cost-effective organic traffic that compounds over time.",
  },
  {
    q: 'How much does digital marketing cost?',
    a: 'Our digital marketing packages start from ₹15,000/month for SEO and go up depending on the scope, channels and goals. We offer transparent pricing with no hidden fees. Book a free strategy call and we\'ll build a custom proposal around your budget.',
  },
  {
    q: 'When can I expect to see results?',
    a: "PPC and social media campaigns can drive traffic almost immediately. SEO typically shows meaningful improvement within 3–6 months, with significant results by month 9–12. We'll set realistic expectations based on your specific situation from day one.",
  },
  {
    q: 'What makes Digital Expert Hub different from other agencies?',
    a: "Three things: transparency, technical depth and a genuine results-first mindset. We give you full access to your data, we don't outsource your work, and every strategy decision is backed by data and tied to your business goals.",
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. We work with businesses of all sizes — from local small businesses and startups to large enterprises. We have specific packages designed for businesses at every stage of growth.',
  },
  {
    q: 'What services do you provide?',
    a: 'We provide SEO (local, technical, e-commerce, AI), Google Ads (PPC), social media marketing, website design and development, content marketing, email marketing, branding, CRO, ORM and digital marketing consulting.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const btnId = `${id}-btn`
  const panelId = `${id}-panel`

  return (
    <div className="border-b border-ink/8">
      <button
        id={btnId}
        className="w-full flex items-center gap-5 sm:gap-8 py-6 text-left group min-h-[68px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-deep focus-visible:rounded"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {/* Number */}
        <span
          className={cn(
            'text-sm font-display font-bold tabular-nums w-7 shrink-0 transition-colors duration-200',
            open ? 'text-lime-deep' : 'text-ink/25 group-hover:text-lime-deep/60',
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question */}
        <span
          className={cn(
            'flex-1 font-display font-semibold text-base sm:text-lg leading-snug transition-colors duration-200',
            open ? 'text-lime-deep' : 'text-ink group-hover:text-lime-deep',
          )}
        >
          {q}
        </span>

        {/* Toggle */}
        <span
          className={cn(
            'w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200',
            open
              ? 'border-lime-deep text-lime-deep bg-lime-deep/10 rotate-45'
              : 'border-ink/20 text-ink/50 group-hover:border-lime-deep/50 group-hover:text-lime-deep/70',
          )}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 14 14"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M7 1v12M1 7h12" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Indent to align under question text (number w-7 + gap-5 = ~48px, gap-8 sm = ~80px) */}
            <p className="pb-6 pl-12 sm:pl-[calc(1.75rem+2rem)] text-ink/70 text-sm sm:text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="section bg-paper" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">
            Frequently Asked
          </p>
          <h2 id="faq-heading" className="text-display-lg font-display font-bold text-ink mb-4">
            Questions we get{' '}
            <span className="font-serif italic text-lime-deep">all the time</span>
          </h2>
          <p className="text-ink/65 text-lg leading-relaxed">
            Still not sure? We&apos;re happy to answer any question on a free 30-minute strategy call.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-ink/8">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <p className="text-ink/65 text-sm">Still have questions?</p>
            <Link
              href="/contact"
              className="btn btn-ink btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Ask Us Anything
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
