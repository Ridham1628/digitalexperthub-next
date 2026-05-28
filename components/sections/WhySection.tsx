'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { n: '7+', label: 'Years Experience' },
  { n: '1,000+', label: 'Clients Served' },
  { n: '₹3Cr+', label: 'Ad Spend Managed' },
  { n: '4.9', label: 'Avg Rating', star: true },
]

const reasons = [
  {
    title: 'Results-First Approach',
    desc: 'Every strategy built around measurable outcomes — revenue, leads, ROI. Nothing else matters.',
  },
  {
    title: 'Data-Driven Decisions',
    desc: 'Advanced analytics and A/B testing back every single recommendation we make.',
  },
  {
    title: 'Technical Expertise',
    desc: 'Marketing strategy meets deep technical knowledge in SEO, development and data analytics.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Monthly reports, real-time dashboards, full data access. Zero surprises, ever.',
  },
  {
    title: 'Agile & Responsive',
    desc: 'Fast pivots, rapid testing and continuous optimisation as markets evolve.',
  },
  {
    title: '7+ Years Proven',
    desc: 'Over 1,000 brands helped across 20+ industries with sustainable, compounding growth.',
  },
]

export default function WhySection() {
  return (
    <section className="section bg-paper overflow-hidden" id="why" aria-labelledby="why-heading">
      <div className="wrap">

        {/* Stats band — grid cells separated by 1px ink/8 lines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 rounded-2xl overflow-hidden mb-16 lg:mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-6 py-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-1.5">
                <span className="text-4xl lg:text-5xl font-display font-bold text-lime-deep leading-none tracking-tight">
                  {s.n}
                </span>
                {s.star && (
                  <svg viewBox="0 0 16 16" fill="#a7d92c" aria-hidden="true" className="w-5 h-5 mb-1 shrink-0">
                    <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
                  </svg>
                )}
              </div>
              <p className="text-[11px] font-display font-semibold uppercase tracking-[0.15em] text-ink/45">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main 2-col split */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-start">

          {/* Left: headline — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-lime-deep mb-5">
              Why Choose Us
            </p>
            <h2
              id="why-heading"
              className="text-display-lg font-display font-bold text-ink mb-6 leading-[1.05]"
            >
              The agency that treats your budget like{' '}
              <span className="font-serif italic text-lime-deep">their own.</span>
            </h2>
            <p className="text-ink/65 text-lg leading-relaxed mb-10">
              We don&apos;t just run campaigns. We build growth engines — every decision rooted in data,
              every action aimed at your bottom line.
            </p>
            <Link
              href="/contact"
              className="btn btn-ink btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              See How We Work
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

            {/* Team at work photo */}
            <div className="mt-10 rounded-3xl overflow-hidden relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format&fit=crop"
                alt="Digital Expert Hub team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink/70 backdrop-blur-sm border border-white/10 rounded-full text-xs font-display font-semibold text-paper/80">
                  <span className="w-2 h-2 rounded-full bg-lime inline-block" aria-hidden="true" />
                  Our team in Ludhiana, Punjab
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: numbered text list */}
          <div>
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 py-7 border-b border-ink/8 last:border-0"
              >
                {/* Ghost number */}
                <span
                  className="text-5xl font-display font-bold text-ink/[0.07] group-hover:text-lime-deep/20 transition-colors duration-300 w-14 shrink-0 leading-none select-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-display font-bold text-ink group-hover:text-lime-deep transition-colors duration-200 mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
