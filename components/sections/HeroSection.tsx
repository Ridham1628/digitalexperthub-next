'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

const dashboardMetrics = [
  { label: 'Organic Traffic', value: '+340%', pct: 88 },
  { label: 'Lead Volume',     value: '+180%', pct: 72 },
  { label: 'Revenue Growth',  value: '9×',    pct: 94 },
  { label: 'Google Ads ROAS', value: '6.4×',  pct: 64 },
]

const clientWins = [
  { val: '#1',  desc: 'Local ranking · MedCare Clinic · 4 months' },
  { val: '9×',  desc: 'Revenue growth · CraftBazaar · 12 months'  },
  { val: '30+', desc: 'Leads/month · GreenLaw Firm'               },
]

const stats = [
  { value: '7+',   label: 'Years'     },
  { value: '1k+',  label: 'Brands'    },
  { value: '340%', label: 'Avg Growth'},
  { value: '4.9',  label: 'Rating', star: true },
]

const trustBadges = ['Google Partner', 'Meta Certified', 'Semrush Expert', 'Shopify Partner']

const sparkHeights = [28, 45, 38, 60, 52, 78, 65, 92, 84, 100, 95, 100]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      {/* Top-right lime bloom */}
      <div
        className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 30%, rgba(200,242,80,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Bottom-left forest depth */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 70%, rgba(26,46,31,0.55) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Diagonal accent line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" aria-hidden="true" preserveAspectRatio="none">
        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="white" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="10%" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* ── Main grid ── */}
      <div className="wrap relative z-10 w-full py-28 lg:py-0 lg:min-h-[100svh] lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center w-full">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Rating badge */}
            <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-lime/10 border border-lime/25 text-xs font-display font-semibold text-lime">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                Rated 4.9 · 40+ reviews · 7+ years in India
              </span>
            </motion.div>

            {/* H1 — editorial left-aligned */}
            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="font-display font-bold text-paper mb-6 text-balance"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)', lineHeight: 1.04, letterSpacing: '-0.03em' }}
            >
              Your Trusted{' '}
              <span className="relative inline-block" style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: '#c8f250' }}>
                Digital Marketing
                {/* Animated underline flourish */}
                <motion.svg
                  viewBox="0 0 340 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1 left-0 w-full"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 6C60 2 120 2 170 4C220 6 280 6 338 3"
                    stroke="#c8f250"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
              </span>{' '}
              Agency in India
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="text-lg lg:text-xl text-paper/70 max-w-xl leading-relaxed mb-10"
            >
              SEO, Google Ads, social media & web design strategies that drive measurable,
              compounding growth for Indian businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="btn btn-lime btn-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Get Free Strategy Call
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="btn btn-ghost-dark btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                See Client Results
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.35}
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-12"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/4 text-xs font-display font-semibold text-paper/70"
                >
                  <svg viewBox="0 0 12 12" fill="#c8f250" className="w-2.5 h-2.5 shrink-0" aria-hidden="true">
                    <path d="M6 1l1.2 2.9H11L8.4 5.8l.8 3.1L6 7.3l-3.2 1.6.8-3.1L1 3.9h3.8L6 1z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
              className="grid grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden max-w-sm border border-white/8"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center py-4 px-2 bg-ink hover:bg-lime/[0.05] transition-colors duration-200"
                >
                  <span className="flex items-center gap-0.5 text-lg sm:text-xl font-display font-bold text-paper leading-none mb-1">
                    {s.value}
                    {s.star && (
                      <svg viewBox="0 0 16 16" fill="#c8f250" aria-hidden="true" className="w-3.5 h-3.5">
                        <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[10px] font-display font-semibold uppercase tracking-wide text-paper/40 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Growth Dashboard (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-3 shrink-0"
            aria-hidden="true"
          >
            {/* Analytics card */}
            <div className="bg-forest/65 border border-white/12 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-lime mb-0.5">
                    Client Performance
                  </p>
                  <p className="text-[10px] text-paper/40 font-display">Average across active clients</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-lime/15 border border-lime/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  <span className="text-[10px] font-display font-bold text-lime tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Animated bar metrics */}
              <div className="space-y-4">
                {dashboardMetrics.map((m, i) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-display font-medium text-paper/60">{m.label}</span>
                      <span className="text-xs font-display font-bold text-lime tabular-nums">{m.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, rgba(200,242,80,0.4) 0%, #c8f250 100%)' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${m.pct}%` }}
                        transition={{ duration: 1.4, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini sparkline chart */}
              <div className="mt-5 pt-4 border-t border-white/8">
                <div className="flex items-end gap-1 h-10">
                  {sparkHeights.map((h, i) => (
                    <div key={i} className="flex-1 flex items-end">
                      <motion.div
                        className="w-full rounded-sm"
                        style={{
                          background: i >= 9 ? '#c8f250' : 'rgba(200,242,80,0.22)',
                          minHeight: '2px',
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 0.4}px` }}
                        transition={{ delay: 1.6 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[9px] text-paper/30 font-display mt-1.5 text-right">
                  12-month growth trajectory
                </p>
              </div>
            </div>

            {/* Client win chips */}
            {clientWins.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.13, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 bg-forest/45 border border-white/10 rounded-2xl px-4 py-3 hover:border-lime/20 hover:bg-forest/60 transition-all duration-200"
              >
                <span className="text-2xl font-display font-bold text-lime leading-none w-12 shrink-0 text-center tabular-nums">
                  {w.val}
                </span>
                <div className="w-px h-6 bg-white/10 shrink-0" />
                <span className="text-xs font-display font-medium text-paper/60 leading-snug">{w.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-display font-semibold uppercase tracking-[0.25em] text-paper/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-paper/25 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
