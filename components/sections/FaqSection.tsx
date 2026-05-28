'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What is SEO and why is it important for my business?',
    a: 'SEO (Search Engine Optimisation) is the practice of improving your website so it ranks higher on search engines like Google. It\'s important because 93% of online experiences begin with a search engine, and ranking on page 1 can deliver consistent, cost-effective organic traffic that compounds over time.',
  },
  {
    q: 'How much does digital marketing cost?',
    a: 'Our digital marketing packages start from ₹15,000/month for SEO and go up depending on the scope, channels and goals. We offer transparent pricing with no hidden fees. Book a free strategy call and we\'ll build a custom proposal around your budget.',
  },
  {
    q: 'When can I expect to see results?',
    a: 'PPC and social media campaigns can drive traffic almost immediately. SEO typically shows meaningful improvement within 3–6 months, with significant results by month 9–12. We\'ll set realistic expectations based on your specific situation from day one.',
  },
  {
    q: 'What makes Digital Expert Hub different from other agencies?',
    a: 'Three things: transparency, technical depth and a genuine results-first mindset. We give you full access to your data, we don\'t outsource your work, and every strategy decision is backed by data and tied to your business goals.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. We work with businesses of all sizes — from local small businesses and startups to large enterprises. We have specific packages designed for businesses at every stage of growth.',
  },
  {
    q: 'What services do you provide?',
    a: 'We provide SEO (local, technical, e-commerce), Google Ads (PPC), social media marketing, website design and development, content marketing, email marketing, branding, CRO, ORM and digital marketing consulting.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={cn('font-display font-semibold text-base transition-colors', open ? 'text-lime' : 'text-paper group-hover:text-lime')}>
          {q}
        </span>
        <span className={cn('w-7 h-7 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 transition-all', open ? 'border-lime text-lime rotate-45' : 'text-paper/60')}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 1v12M1 7h12" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-paper/65 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="section bg-ink" id="faq">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="section-label mb-4">Frequently Asked</p>
            <h2 className="text-display-lg font-display font-bold text-paper mb-6">
              Questions we get{' '}
              <span className="serif-it">all the time</span>
            </h2>
            <p className="text-paper/60 leading-relaxed mb-8">
              Still not sure? We&apos;re happy to answer any question on a free 30-minute strategy call.
            </p>
            <a
              href="/contact"
              className="btn btn-lime btn-lg"
            >
              Ask Us Anything →
            </a>
          </div>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
