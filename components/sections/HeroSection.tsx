'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

const stats = [
  { value: '7+', label: 'Years expertise' },
  { value: '1k+', label: 'Brands served' },
  { value: '340%', label: 'Avg traffic growth' },
  { value: '4.9', label: 'Client rating', star: true },
]

const trustBadges = [
  'Google Partner',
  'Meta Certified',
  'Semrush Expert',
  'Shopify Partner',
]

/* Floating proof chips — real results from real clients */
const proofChips = [
  {
    result: '+340%',
    label: 'Organic Traffic',
    sub: 'TechSpark · 6 months',
    side: 'left',
    delay: 0.9,
    top: '28%',
  },
  {
    result: '9×',
    label: 'Revenue Growth',
    sub: 'CraftBazaar · 12 months',
    side: 'right',
    delay: 1.1,
    top: '38%',
  },
  {
    result: '#1',
    label: 'Local Ranking',
    sub: 'MedCare Clinic · 4 months',
    side: 'left',
    delay: 1.3,
    top: '54%',
  },
  {
    result: '30+',
    label: 'Leads / Month',
    sub: 'GreenLaw · Law Firm',
    side: 'right',
    delay: 1.5,
    top: '58%',
  },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      {/* Central lime radial bloom */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,242,80,0.07) 0%, rgba(200,242,80,0.02) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Top-right corner accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(26,46,31,0.8) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Right-side hero visual — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:block absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center opacity-35"
            priority
            sizes="42vw"
          />
          {/* Gradient fade overlay left→right */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
          {/* Gradient fade overlay top & bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/70" />
        </div>
      </motion.div>

      {/* Diagonal decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="30%" x2="100%" y2="70%" stroke="white" strokeWidth="1" />
        <line x1="0" y1="60%" x2="100%" y2="20%" stroke="white" strokeWidth="0.5" />
        <line x1="15%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* ── Floating proof chips — desktop only ── */}
      {proofChips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, x: chip.side === 'left' ? -40 : 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: chip.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`hidden xl:flex absolute ${chip.side === 'left' ? 'left-[4%]' : 'right-[4%]'} z-10 items-center gap-3 px-4 py-3 bg-forest/70 border border-white/12 rounded-2xl backdrop-blur-sm shadow-xl`}
          style={{ top: chip.top }}
          aria-hidden="true"
        >
          <span className="text-2xl font-display font-bold text-lime leading-none">{chip.result}</span>
          <div>
            <p className="text-xs font-display font-bold text-paper leading-none mb-0.5">{chip.label}</p>
            <p className="text-[10px] text-paper/50 leading-none">{chip.sub}</p>
          </div>
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="wrap relative z-10 text-center pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">

        {/* Social proof badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-semibold uppercase tracking-wider text-lime mb-8"
        >
          <span className="flex gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span>Rated 4.9 from 40+ verified reviews</span>
        </motion.div>

        {/* H1 — editorial big type */}
        <motion.h1
          id="hero-heading"
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="font-display font-bold text-paper max-w-5xl mx-auto leading-[1.05] mb-6 text-balance"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.25rem)', letterSpacing: '-0.03em' }}
        >
          Your Trusted{' '}
          <span
            className="relative inline-block"
            style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: '#c8f250' }}
          >
            Digital Marketing
            {/* Underline flourish */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime/40 origin-left rounded-full"
              aria-hidden="true"
            />
          </span>
          {' '}Agency in India
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="text-lg lg:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Build, grow and scale your business with proven SEO, Google Ads, social media and web design strategies.
          We put your brand in front of the right audience — and convert them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 mb-10 sm:mb-14 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="btn btn-lime btn-lg group w-full xs:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Get a Free Strategy Call
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="btn btn-ghost-dark btn-lg w-full xs:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Trust partner badges */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.35}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-14"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/4 text-xs font-display font-semibold text-paper/70"
            >
              <svg viewBox="0 0 12 12" fill="#c8f250" aria-hidden="true" className="w-3 h-3 shrink-0">
                <path d="M6 1l1.2 2.9H11L8.4 5.8l.8 3.1L6 7.3l-3.2 1.6.8-3.1L1 3.9h3.8L6 1z" />
              </svg>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Stats — editorial large numbers */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden max-w-2xl mx-auto border border-white/8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-5 px-4 bg-ink relative overflow-hidden group">
              {/* Subtle lime shimmer on hover */}
              <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/4 transition-colors duration-300" aria-hidden="true" />
              <span className="relative flex items-center gap-0.5 text-2xl lg:text-3xl font-display font-bold text-paper leading-none mb-1.5">
                {s.value}
                {(s as { star?: boolean }).star && (
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-lime">
                    <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
                  </svg>
                )}
              </span>
              <span className="relative text-xs text-paper/55 font-body uppercase tracking-wide text-center leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-paper/40 uppercase tracking-wider font-display">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-paper/30 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
