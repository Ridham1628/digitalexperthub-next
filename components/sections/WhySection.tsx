'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🎯',
    title: 'Results-First Approach',
    desc: 'Every strategy is built around one thing: measurable business outcomes. We track what matters — revenue, leads, ROI.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Decisions',
    desc: 'No guesswork. We use advanced analytics, A/B testing and industry-leading tools to back every recommendation.',
  },
  {
    icon: '🔬',
    title: 'Technical Expertise',
    desc: 'Our team combines marketing strategy with deep technical knowledge in SEO, development and data analytics.',
  },
  {
    icon: '🤝',
    title: 'Transparent Reporting',
    desc: 'You always know exactly what we\'re doing and why. Monthly reports, real-time dashboards, zero surprises.',
  },
  {
    icon: '⚡',
    title: 'Agile & Responsive',
    desc: 'Markets change. So do we. Our agile process means fast pivots, rapid testing and continuous optimisation.',
  },
  {
    icon: '🏆',
    title: '7+ Years of Proven Experience',
    desc: 'We\'ve helped 1,000+ brands across industries achieve sustainable growth. Our track record speaks for itself.',
  },
]

export default function WhySection() {
  return (
    <section className="section bg-paper" id="why">
      <div className="wrap">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">
              Why Choose Us
            </p>
            <h2 className="text-display-lg font-display font-bold text-ink mb-6">
              The agency that treats your budget like{' '}
              <span className="font-serif italic text-lime-deep">their own</span>
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed">
              We don't just run campaigns — we build growth engines. Every decision is rooted in data, every action
              aimed at your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '7+', l: 'Years Experience' },
              { n: '1k+', l: 'Clients Served' },
              { n: '₹3Cr+', l: 'Ad Spend Managed' },
              { n: '4.9★', l: 'Average Rating' },
            ].map((s) => (
              <div key={s.n} className="bg-ink rounded-2xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-lime mb-1">{s.n}</div>
                <div className="text-xs text-paper/50 font-display uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-paper-2 rounded-3xl p-7 border border-ink/6 hover:border-lime/30 hover:shadow-card transition-all duration-300"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-base font-display font-bold text-ink mb-2">{r.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
