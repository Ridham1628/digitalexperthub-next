'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CtaSectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

const socialProof = [
  { v: '40+', l: 'Reviews' },
  { v: '4.9★', l: 'Rating' },
  { v: '1k+', l: 'Clients' },
  { v: '7+', l: 'Years' },
]

export default function CtaSection({
  title = 'Ready to grow your business online?',
  subtitle = 'Book a free 30-minute strategy call and discover exactly how we can help you get more traffic, leads and revenue.',
  primaryLabel = 'Get Free Strategy Call',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryHref = '/services',
  dark = true,
}: CtaSectionProps) {
  return (
    <section className={`section-sm ${dark ? 'bg-ink' : 'bg-paper'}`} aria-label="Call to action">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-4xl overflow-hidden p-10 lg:p-16 ${
            dark
              ? 'bg-gradient-to-br from-forest via-ink/80 to-forest border border-white/10'
              : 'bg-lime'
          }`}
        >
          {dark && (
            <>
              {/* Grid texture */}
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden="true" />
              {/* Stripe overlay */}
              <div className="absolute inset-0 stripe-bg pointer-events-none opacity-80" aria-hidden="true" />
              {/* Large lime radial bloom */}
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(200,242,80,0.07) 0%, transparent 65%)' }}
                aria-hidden="true"
              />
              <div
                className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(200,242,80,0.05) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Concentric rings — decorative */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-lime/[0.04] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-lime/[0.06] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-lime/[0.08] pointer-events-none"
                aria-hidden="true"
              />
            </>
          )}

          {/* ── Content ── */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">

            {/* Eyebrow */}
            <p className={`text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 ${dark ? 'text-lime' : 'text-ink/55'}`}>
              Let&apos;s Work Together
            </p>

            {/* Headline */}
            <h2 className={`text-display-md font-display font-bold mb-5 text-balance ${dark ? 'text-paper' : 'text-ink'}`}>
              {dark ? (
                <>
                  {title.split(' ').slice(0, 4).join(' ')}{' '}
                  <span className="font-serif italic text-lime">
                    {title.split(' ').slice(4).join(' ')}
                  </span>
                </>
              ) : (
                title
              )}
            </h2>

            <p className={`text-lg mb-8 leading-relaxed max-w-xl mx-auto ${dark ? 'text-paper/70' : 'text-ink/70'}`}>
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                href={primaryHref}
                className={`btn btn-lg glow-cta w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  dark
                    ? 'btn-lime focus-visible:ring-lime focus-visible:ring-offset-ink'
                    : 'btn-ink focus-visible:ring-ink focus-visible:ring-offset-lime'
                }`}
              >
                {primaryLabel}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href={secondaryHref}
                className={`btn btn-lg w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  dark
                    ? 'btn-ghost-dark focus-visible:ring-lime focus-visible:ring-offset-ink'
                    : 'btn-ghost-light focus-visible:ring-ink focus-visible:ring-offset-lime'
                }`}
              >
                {secondaryLabel}
              </Link>
            </div>

            {/* Trust micro-copy */}
            <p className={`text-sm ${dark ? 'text-paper/50' : 'text-ink/55'}`}>
              Free consultation · No commitment · Results guaranteed or we work for free
            </p>

            {/* Divider */}
            <div className={`my-6 divider-glow ${dark ? '' : 'opacity-30'}`} />

            {/* Social proof chips */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialProof.map((s) => (
                <div
                  key={s.l}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display ${
                    dark
                      ? 'bg-white/6 border border-white/10 text-paper/65'
                      : 'bg-ink/8 border border-ink/15 text-ink/65'
                  }`}
                >
                  <span className="font-bold">{s.v}</span>
                  <span className="opacity-60">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
