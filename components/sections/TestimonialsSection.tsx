'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Founder, TechSpark Solutions',
    rating: 5,
    quote:
      'Digital Expert Hub transformed our online presence completely. Our organic traffic increased by 340% in just 6 months. Their SEO team is exceptional — they truly understand what drives results.',
    initials: 'RS',
    avatar: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=80&h=80&q=80&auto=format&fit=crop&crop=face',
    result: '+340% organic traffic',
    featured: true,
  },
  {
    name: 'Priya Malhotra',
    role: 'Marketing Head, StyleHive',
    rating: 5,
    quote:
      "We've tried 3 digital marketing agencies before Digital Expert Hub. The difference is night and day. They're data-obsessed, proactive and genuinely care about our growth. Our ROAS went from 2× to 6.5×.",
    initials: 'PM',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&q=80&auto=format&fit=crop&crop=face',
    result: '6.5× ROAS achieved',
    featured: false,
  },
  {
    name: 'Amit Gupta',
    role: 'CEO, MedCare Clinic',
    rating: 5,
    quote:
      "As a doctor, I was skeptical about digital marketing. Digital Expert Hub showed me exactly how they'd grow my practice online. Within 4 months, we're the top result for all major keywords in our city.",
    initials: 'AG',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&q=80&auto=format&fit=crop&crop=face',
    result: '#1 local ranking',
    featured: false,
  },
  {
    name: 'Deepika Singh',
    role: 'E-commerce Director, CraftBazaar',
    rating: 5,
    quote:
      'Our Shopify store went from ₹2L to ₹18L monthly revenue in one year. Their combined SEO + Google Ads strategy was the game-changer. The reporting is incredibly transparent and actionable.',
    initials: 'DS',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&q=80&auto=format&fit=crop&crop=face',
    result: '9× revenue growth',
    featured: false,
  },
  {
    name: 'Suresh Nair',
    role: 'Partner, GreenLaw Associates',
    rating: 5,
    quote:
      'Digital Expert Hub understands the law firm marketing landscape. They built us a credibility-first strategy that now generates 25–30 qualified leads per month. Worth every rupee.',
    initials: 'SN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&auto=format&fit=crop&crop=face',
    result: '30 leads/month',
    featured: false,
  },
]

function StarRow({ rating, onLime }: { rating: number; onLime: boolean }) {
  return (
    <div className="flex gap-0.5 mb-5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={onLime ? '#0b0f0c' : '#c8f250'}
          aria-hidden="true"
          className={`w-4 h-4 ${onLime ? 'opacity-50' : ''}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="section bg-ink" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <p className="section-label mb-4">Client Stories</p>
          <h2 id="testimonials-heading" className="text-display-lg font-display font-bold text-paper mb-4">
            Real results from{' '}
            <span className="serif-it">real brands</span>
          </h2>
          <p className="text-paper/65 text-lg leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={[
                'relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300',
                t.featured
                  ? 'sm:col-span-2 lg:col-span-2 bg-lime text-ink hover:shadow-[0_12px_48px_rgba(200,242,80,0.2)]'
                  : 'bg-forest/40 border border-white/10 text-paper hover:border-white/20 hover:bg-forest/55 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]',
              ].join(' ')}
            >
              {/* Decorative oversized quote mark */}
              <div
                className={[
                  'pointer-events-none select-none absolute top-2 right-5',
                  'text-[120px] sm:text-[140px] font-serif leading-none',
                  t.featured ? 'text-ink/[0.07]' : 'text-white/[0.05]',
                ].join(' ')}
                aria-hidden="true"
              >
                &rdquo;
              </div>

              <div className="relative z-10">
                <StarRow rating={t.rating} onLime={t.featured} />

                <blockquote
                  className={[
                    'font-display leading-relaxed mb-6',
                    t.featured
                      ? 'text-base sm:text-lg lg:text-xl text-ink/90'
                      : 'text-sm sm:text-base text-paper/85',
                  ].join(' ')}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white/10">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className={`font-display font-bold text-sm ${t.featured ? 'text-ink' : 'text-paper'}`}>
                        {t.name}
                      </p>
                      <p className={`text-xs ${t.featured ? 'text-ink/60' : 'text-paper/55'}`}>
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Result badge */}
                  <span
                    className={[
                      'text-xs font-display font-bold px-3 py-1.5 rounded-full shrink-0',
                      t.featured
                        ? 'bg-ink/10 text-ink'
                        : 'bg-lime/15 text-lime border border-lime/25',
                    ].join(' ')}
                  >
                    {t.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
