import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'About Us — Digital Expert Hub',
  description: 'Learn about Digital Expert Hub — a results-driven digital marketing agency with 7+ years of experience helping 1,000+ businesses grow online. Meet our team and story.',
  path: '/about',
})

const team = [
  { name: 'Ridham Singh', role: 'Founder & CEO', expertise: 'SEO & Growth Strategy', avatar: 'RS' },
  { name: 'Priya Kapoor', role: 'Head of SEO', expertise: 'Technical & On-Page SEO', avatar: 'PK' },
  { name: 'Amit Verma', role: 'PPC Lead', expertise: 'Google Ads & Meta Ads', avatar: 'AV' },
  { name: 'Sneha Gupta', role: 'Content Strategist', expertise: 'Content & Copywriting', avatar: 'SG' },
  { name: 'Rahul Sharma', role: 'Web Developer', expertise: 'React & WordPress', avatar: 'RS2' },
  { name: 'Deepak Nair', role: 'Design Lead', expertise: 'UI/UX & Branding', avatar: 'DN' },
]

const values = [
  { icon: '🎯', title: 'Results First', desc: 'Everything we do is tied to measurable outcomes. If it doesn\'t move the needle, we don\'t do it.' },
  { icon: '🔬', title: 'Data-Driven', desc: 'Every decision, recommendation and strategy is backed by real data — not gut feeling or guesswork.' },
  { icon: '🤝', title: 'Radical Transparency', desc: 'You always know exactly what we\'re doing, why we\'re doing it and how it\'s performing.' },
  { icon: '🌱', title: 'Long-Term Thinking', desc: 'We build relationships, not transactions. Your long-term success is the only metric we care about.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-6">About Us</p>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6">
              We&apos;re on a mission to make{' '}
              <span className="font-serif italic text-lime">digital marketing work</span>{' '}
              for every business
            </h1>
            <p className="text-lg text-paper/65 leading-relaxed max-w-2xl">
              Digital Expert Hub was founded with one simple belief: every business deserves access to expert digital marketing that delivers real, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Our Story</p>
              <h2 className="text-display-md font-display font-bold text-ink mb-6">
                From a small team to 1,000+ brands served
              </h2>
              <div className="space-y-4 text-ink/70 leading-relaxed">
                <p>
                  Digital Expert Hub was started in Ludhiana, Punjab with a simple but powerful idea: most businesses were getting burned by digital marketing agencies that over-promised and under-delivered.
                </p>
                <p>
                  We built our agency differently — transparent reporting from day one, strategies backed by data, and a genuine commitment to our clients&apos; growth. Word spread quickly, and what started as a small local agency grew into a team serving 1,000+ brands across India.
                </p>
                <p>
                  Today, we&apos;re a full-service digital marketing agency with expertise across SEO, PPC, web development, content marketing, social media and more. But our core commitment hasn&apos;t changed: we only win when you win.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '7+', l: 'Years in Business' },
                { n: '1k+', l: 'Brands Served' },
                { n: '25+', l: 'Projects Delivered' },
                { n: '₹3Cr+', l: 'Ad Spend Managed' },
                { n: '4.9★', l: 'Average Rating' },
                { n: '100%', l: 'Client Ownership' },
              ].map((s) => (
                <div key={s.n} className="bg-ink rounded-2xl p-5 text-center">
                  <div className="text-2xl font-display font-bold text-lime mb-1">{s.n}</div>
                  <div className="text-xs text-paper/50 font-display uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ink">
        <div className="wrap">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="section-label mb-4">Our Values</p>
            <h2 className="text-display-lg font-display font-bold text-paper">
              The principles that guide everything we do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-forest/40 border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-display font-bold text-paper mb-3">{v.title}</h3>
                <p className="text-paper/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Meet the Team</p>
            <h2 className="text-display-lg font-display font-bold text-ink">
              The people behind your growth
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-ink text-lime flex items-center justify-center font-display font-bold text-lg mb-3">
                  {m.avatar.slice(0, 2)}
                </div>
                <p className="font-display font-bold text-ink text-sm">{m.name}</p>
                <p className="text-xs text-ink/60 mt-0.5">{m.role}</p>
                <p className="text-xs text-lime-deep mt-0.5">{m.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-sm bg-ink border-t border-white/10">
        <div className="wrap text-center">
          <p className="section-label mb-8">Certifications & Partnerships</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Google Partner', 'Meta Business Partner', 'Semrush Certified', 'HubSpot Certified', 'Google Analytics 4 Certified'].map((cert) => (
              <span key={cert} className="px-5 py-2.5 bg-forest/40 border border-white/10 rounded-full text-sm font-display font-semibold text-paper/70">
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
