'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: '🔍',
    title: 'Search Engine Optimisation',
    desc: 'Dominate search results and drive consistent organic traffic with our data-driven SEO strategies.',
    href: '/services/seo',
    tags: ['Technical SEO', 'On-Page', 'Link Building'],
  },
  {
    icon: '📈',
    title: 'Google Ads & PPC',
    desc: 'Maximise ROI with laser-targeted pay-per-click campaigns managed by certified Google Ads experts.',
    href: '/services/google-ads',
    tags: ['Search Ads', 'Display', 'Shopping'],
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build a loyal audience and drive conversions with strategic social media marketing across all platforms.',
    href: '/services/social-media-marketing',
    tags: ['Instagram', 'Facebook', 'LinkedIn'],
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    desc: 'Fast, beautiful, conversion-optimised websites that represent your brand and rank on Google.',
    href: '/services/website-design',
    tags: ['WordPress', 'Shopify', 'Custom'],
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    desc: 'Authority-building content that attracts, engages and converts your target audience at scale.',
    href: '/services/content-marketing',
    tags: ['Blog Content', 'Copywriting', 'Strategy'],
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with beautifully designed, high-converting email campaigns.',
    href: '/services/email-marketing',
    tags: ['Automation', 'Campaigns', 'Analytics'],
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesSection() {
  return (
    <section className="section bg-ink" id="services">
      <div className="wrap">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="text-display-lg font-display font-bold text-paper mb-4">
            Full-Stack Digital Marketing{' '}
            <span className="serif-it">Services</span>
          </h2>
          <p className="text-paper/60 text-lg leading-relaxed">
            Everything your brand needs to dominate online — from search to social to web and beyond.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.href} variants={item}>
              <Link
                href={s.href}
                className="group flex flex-col h-full bg-forest/40 border border-white/10 rounded-3xl p-7 hover:border-lime/30 hover:bg-forest/60 transition-all duration-300"
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-lg font-display font-bold text-paper mb-3 group-hover:text-lime transition-colors">
                  {s.title}
                </h3>
                <p className="text-paper/60 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/8 text-[11px] font-display font-semibold text-paper/60 uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-display font-semibold text-lime flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-ghost-dark btn-lg">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
