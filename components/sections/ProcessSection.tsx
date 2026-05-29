'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your business, competitors and current digital presence to identify opportunities and gaps.',
    color: 'text-lime',
    dot: 'bg-lime',
    gradient: 'from-lime/20 via-lime/8 to-transparent',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    desc: 'A tailored, data-backed digital marketing strategy mapped to your specific goals, budget and timeline.',
    color: 'text-blue-400',
    dot: 'bg-blue-400',
    gradient: 'from-blue-500/20 via-blue-500/8 to-transparent',
  },
  {
    number: '03',
    title: 'Execution & Launch',
    desc: 'Our expert team executes with precision — content, campaigns, technical fixes, ads and more.',
    color: 'text-violet-400',
    dot: 'bg-violet-400',
    gradient: 'from-violet-500/20 via-violet-500/8 to-transparent',
  },
  {
    number: '04',
    title: 'Monitor & Optimise',
    desc: 'Continuous monitoring, A/B testing and optimisation ensures your campaigns improve every week.',
    color: 'text-orange-400',
    dot: 'bg-orange-400',
    gradient: 'from-orange-500/20 via-orange-500/8 to-transparent',
  },
  {
    number: '05',
    title: 'Report & Scale',
    desc: 'Transparent monthly reports + growth sessions to review results, set new targets and plan the next sprint.',
    color: 'text-pink-400',
    dot: 'bg-pink-400',
    gradient: 'from-pink-500/20 via-pink-500/8 to-transparent',
  },
]

export default function ProcessSection() {
  return (
    <section className="section bg-ink relative overflow-hidden" id="process" aria-labelledby="process-heading">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="wrap relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <p className="section-label mb-4">How We Work</p>
          <h2 id="process-heading" className="text-display-lg font-display font-bold text-paper mb-4">
            Our{' '}
            <span className="serif-it">5-step</span>{' '}
            growth process
          </h2>
          <p className="text-paper/70 text-lg leading-relaxed">
            A proven, repeatable framework that takes you from where you are to where you want to be.
          </p>
        </div>

        {/* Desktop: horizontal 5-col (lg+) */}
        {/* Connecting progress line behind cards */}
        <div className="hidden lg:block relative mb-4" aria-hidden="true">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
        </div>
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 xl:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-b ${s.gradient} border border-white/10 rounded-3xl p-6 flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Step number — large ghost */}
              <span className={`text-4xl font-display font-bold ${s.color} opacity-25 mb-4 block select-none`}>
                {s.number}
              </span>
              <h3 className={`text-base font-display font-bold ${s.color} mb-2`}>{s.title}</h3>
              <p className="text-xs text-paper/65 leading-relaxed">{s.desc}</p>

              {/* Connector chevron */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-8 z-10" aria-hidden="true">
                  <svg className="w-5 h-5 text-white/15" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0l8 8-8 8V0z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2-col + 1 centered (sm–lg) */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b ${s.gradient} border border-white/10 rounded-3xl p-6 flex flex-col ${i === 4 ? 'col-span-2 max-w-sm mx-auto w-full' : ''}`}
            >
              <span className={`text-3xl font-display font-bold ${s.color} opacity-30 mb-3 block`}>
                {s.number}
              </span>
              <h3 className={`text-base font-display font-bold ${s.color} mb-2`}>{s.title}</h3>
              <p className="text-sm text-paper/65 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline (< sm) */}
        <div className="sm:hidden relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-lime/40 via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* Step number node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-ink border border-white/15 flex items-center justify-center`}>
                    <span className={`text-sm font-display font-bold ${s.color}`}>{s.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-gradient-to-r ${s.gradient} border border-white/10 rounded-2xl p-5 mt-1.5`}>
                  <h3 className={`text-base font-display font-bold ${s.color} mb-1.5`}>{s.title}</h3>
                  <p className="text-sm text-paper/65 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
