'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: 'Search Engine Optimisation',
    desc: 'Dominate search results and drive consistent organic traffic with data-driven SEO strategies that compound in value.',
    href: '/services/seo',
    tags: ['Technical SEO', 'On-Page', 'Link Building'],
    featured: true,
    gradient: 'from-lime/15 via-lime/5 to-transparent',
    accent: 'text-lime',
    accentBg: 'bg-lime/10 border-lime/20',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Google Ads & PPC',
    desc: 'Maximise ROI with laser-targeted pay-per-click campaigns managed by certified Google Ads experts.',
    href: '/services/google-ads',
    tags: ['Search Ads', 'Display', 'Shopping'],
    featured: false,
    gradient: 'from-blue-500/15 via-blue-500/5 to-transparent',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /><path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    title: 'Social Media Marketing',
    desc: 'Build a loyal audience and drive conversions with strategic social media across all platforms.',
    href: '/services/social-media-marketing',
    tags: ['Instagram', 'Facebook', 'LinkedIn'],
    featured: false,
    gradient: 'from-pink-500/15 via-pink-500/5 to-transparent',
    accent: 'text-pink-400',
    accentBg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h10M7 12h6" />
      </svg>
    ),
    title: 'Website Design & Dev',
    desc: 'Fast, beautiful, conversion-optimised websites that represent your brand and rank on Google.',
    href: '/services/website-design',
    tags: ['WordPress', 'Shopify', 'Custom'],
    featured: false,
    gradient: 'from-violet-500/15 via-violet-500/5 to-transparent',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
      </svg>
    ),
    title: 'Content Marketing',
    desc: 'Authority-building content that attracts, engages and converts your target audience at scale.',
    href: '/services/content-marketing',
    tags: ['Blog Content', 'Copywriting', 'Strategy'],
    featured: false,
    gradient: 'from-orange-500/15 via-orange-500/5 to-transparent',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    num: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with beautifully designed, high-converting email campaigns.',
    href: '/services/email-marketing',
    tags: ['Automation', 'Campaigns', 'Analytics'],
    featured: false,
    gradient: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesSection() {
  const [featured, ...rest] = services

  return (
    <section className="section bg-ink" id="services" aria-labelledby="services-heading">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <p className="section-label mb-4">What We Do</p>
          <h2 id="services-heading" className="text-display-lg font-display font-bold text-paper mb-4">
            Full-Stack Digital Marketing{' '}
            <span className="font-serif italic text-lime">Services</span>
          </h2>
          <p className="text-paper/70 text-lg leading-relaxed">
            Everything your brand needs to dominate online — from search to social to web and beyond.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-5"
        >
          {/* Featured service row — full width on mobile, 2-col on md+ */}
          <motion.div variants={item}>
            <Link
              href={featured.href}
              className="group flex flex-col md:flex-row md:items-center bg-forest/40 border border-white/10 rounded-3xl overflow-hidden hover:border-lime/35 hover:shadow-[0_8px_48px_rgba(200,242,80,0.1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {/* Visual left side */}
              <div className={`md:w-72 lg:w-96 shrink-0 h-48 md:h-full md:min-h-[200px] bg-gradient-to-br ${featured.gradient} relative flex items-center justify-center`}>
                <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
                {/* Large number watermark */}
                <span
                  className="absolute font-display font-bold text-white/5 select-none pointer-events-none"
                  style={{ fontSize: '8rem', letterSpacing: '-0.05em' }}
                  aria-hidden="true"
                >
                  01
                </span>
                <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${featured.gradient} border border-lime/20 flex items-center justify-center ${featured.accent} shadow-xl`}>
                  <div className="scale-150">{featured.icon}</div>
                </div>
              </div>

              {/* Content right side */}
              <div className="flex-1 p-7 lg:p-9">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className={`text-2xl font-display font-bold text-paper group-hover:${featured.accent} transition-colors`}>
                    {featured.title}
                  </h3>
                  <span className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-bold border ${featured.accentBg} ${featured.accent} shrink-0`}>
                    Most Popular
                  </span>
                </div>
                <p className="text-paper/70 leading-relaxed mb-5">{featured.desc}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/8 text-[11px] font-display font-semibold text-paper/65 uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={`ml-auto text-sm font-display font-semibold ${featured.accent} flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200`}>
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Remaining 5 services — 2-col on sm, 3-col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((s) => (
              <motion.div key={s.href} variants={item}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-forest/30 border border-white/10 rounded-3xl p-7 hover:border-white/25 hover:bg-forest/50 hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} border border-white/8 flex items-center justify-center ${s.accent} transition-transform duration-300 group-hover:scale-110`}>
                      {s.icon}
                    </div>
                    <span className="text-3xl font-display font-bold text-white/8 group-hover:text-white/12 transition-colors">
                      {s.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-display font-bold text-paper mb-3 group-hover:${s.accent} transition-colors`}>
                    {s.title}
                  </h3>
                  <p className="text-paper/65 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/7 text-[11px] font-display font-semibold text-paper/55 uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className={`text-sm font-display font-semibold ${s.accent} flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200`}>
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn btn-ghost-dark btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            View All 18 Services
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
