'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

const stats = [
  { value: '7+', label: 'Years of expertise' },
  { value: '1k+', label: 'Brands trust us' },
  { value: '25+', label: 'Projects delivered' },
  { value: '₹3Cr+', label: 'Ad spend managed' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="wrap relative z-10 text-center pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-semibold uppercase tracking-wider text-lime mb-8"
        >
          <span>★★★★★</span>
          Rated 4.9 from 40+ verified reviews
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="text-display-2xl font-display font-bold text-paper max-w-5xl mx-auto text-balance leading-[1.05] mb-6"
        >
          Your Trusted{' '}
          <span className="font-serif italic text-lime">Digital Marketing Agency</span>
          {' '}&amp; Branding Partner
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="text-lg lg:text-xl text-paper/65 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Build, grow and scale your business with a digital marketing company that delivers measurable results.
          From SEO and PPC to social media and content marketing — we put your brand in front of the right audience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link
            href="/contact"
            className="btn btn-lime btn-lg group"
          >
            Get a Free Strategy Call
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/services"
            className="btn btn-ghost-dark btn-lg"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-display font-bold text-paper">
                {s.value}
              </span>
              <span className="text-xs text-paper/50 font-body mt-1 uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-paper/30 uppercase tracking-wider font-display">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-paper/30 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
