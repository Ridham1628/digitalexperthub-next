'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your business, competitors and current digital presence to identify opportunities and gaps.',
    color: 'from-lime/20 to-lime/5',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    desc: 'A tailored, data-backed digital marketing strategy mapped to your specific goals, budget and timeline.',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    number: '03',
    title: 'Execution & Launch',
    desc: 'Our expert team executes with precision — content, campaigns, technical fixes, ads and more.',
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    number: '04',
    title: 'Monitor & Optimise',
    desc: 'Continuous monitoring, A/B testing and optimisation ensures your campaigns improve every week.',
    color: 'from-orange-500/20 to-orange-500/5',
  },
  {
    number: '05',
    title: 'Report & Scale',
    desc: 'Transparent monthly reports + growth sessions to review results, set new targets and plan the next sprint.',
    color: 'from-pink-500/20 to-pink-500/5',
  },
]

export default function ProcessSection() {
  return (
    <section className="section bg-ink relative overflow-hidden" id="process">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="wrap relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label mb-4">How We Work</p>
          <h2 className="text-display-lg font-display font-bold text-paper mb-4">
            Our{' '}
            <span className="serif-it">5-step</span>{' '}
            growth process
          </h2>
          <p className="text-paper/60 text-lg leading-relaxed">
            A proven, repeatable framework that takes you from where you are to where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-b ${s.color} border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center md:items-start md:text-left`}
            >
              <span className="text-4xl font-display font-bold text-white/10 mb-4 block">
                {s.number}
              </span>
              <h3 className="text-base font-display font-bold text-paper mb-2">{s.title}</h3>
              <p className="text-xs text-paper/55 leading-relaxed">{s.desc}</p>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <svg className="w-4 h-4 text-white/20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0l8 8-8 8V0z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
