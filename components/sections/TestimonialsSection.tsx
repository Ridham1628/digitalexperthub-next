'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Founder, TechSpark Solutions',
    rating: 5,
    quote:
      'Digital Expert Hub transformed our online presence completely. Our organic traffic increased by 340% in just 6 months. Their SEO team is exceptional — they truly understand what drives results.',
    avatar: 'RS',
    result: '+340% organic traffic',
  },
  {
    name: 'Priya Malhotra',
    role: 'Marketing Head, StyleHive',
    rating: 5,
    quote:
      'We\'ve tried 3 digital marketing agencies before Digital Expert Hub. The difference is night and day. They\'re data-obsessed, proactive and genuinely care about our growth. Our ROAS went from 2x to 6.5x.',
    avatar: 'PM',
    result: '6.5x ROAS achieved',
  },
  {
    name: 'Amit Gupta',
    role: 'CEO, MedCare Clinic',
    rating: 5,
    quote:
      'As a doctor, I was skeptical about digital marketing. Digital Expert Hub showed me exactly how they\'d grow my practice online. Within 4 months, we\'re now the top result for all major keywords in our city.',
    avatar: 'AG',
    result: '#1 local ranking',
  },
  {
    name: 'Deepika Singh',
    role: 'E-commerce Director, CraftBazaar',
    rating: 5,
    quote:
      'Our Shopify store went from ₹2L to ₹18L monthly revenue in one year. Their combined SEO + Google Ads strategy was the game-changer. The reporting is incredibly transparent and actionable.',
    avatar: 'DS',
    result: '9x revenue growth',
  },
  {
    name: 'Suresh Nair',
    role: 'Partner, GreenLaw Associates',
    rating: 5,
    quote:
      'Digital Expert Hub understands the law firm marketing landscape. They built us a credibility-first strategy that now generates 25-30 qualified leads per month. Worth every rupee.',
    avatar: 'SN',
    result: '30 leads/month',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const next = () => setActive((a) => (a + 1) % testimonials.length)
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="section bg-ink" id="testimonials">
      <div className="wrap">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="text-display-lg font-display font-bold text-paper mb-4">
            Real results from{' '}
            <span className="serif-it">real brands</span>
          </h2>
          <p className="text-paper/60">
            Don&apos;t take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-forest/40 border border-white/10 rounded-4xl p-8 lg:p-12 overflow-hidden">
            {/* BG accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lime text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-paper font-display leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author + result */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-lime text-ink flex items-center justify-center font-display font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-display font-bold text-paper">{t.name}</p>
                      <p className="text-sm text-paper/50">{t.role}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-lime/15 border border-lime/20 rounded-full">
                    <span className="text-sm font-display font-bold text-lime">{t.result}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-lime' : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-paper/80 hover:border-lime hover:text-lime transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-paper/80 hover:border-lime hover:text-lime transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
