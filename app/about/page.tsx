import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'About Us — Digital Expert Hub',
  description: 'Meet the team behind Digital Expert Hub — 7+ years helping 1,000+ Indian businesses grow online with SEO, Google Ads, social media & web design. Our story.',
  path: '/about',
})

const team = [
  { name: 'Ridham Singh', role: 'Founder & CEO', expertise: 'SEO & Growth Strategy', avatar: 'RS', photo: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Priya Kapoor', role: 'Head of SEO', expertise: 'Technical & On-Page SEO', avatar: 'PK', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Amit Verma', role: 'PPC Lead', expertise: 'Google Ads & Meta Ads', avatar: 'AV', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Sneha Gupta', role: 'Content Strategist', expertise: 'Content & Copywriting', avatar: 'SG', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Rahul Sharma', role: 'Web Developer', expertise: 'React & WordPress', avatar: 'RS', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Deepak Nair', role: 'Design Lead', expertise: 'UI/UX & Branding', avatar: 'DN', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80&auto=format&fit=crop&crop=face' },
]

/* SVG icons for values */
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.97M21 6s-1 10-8 13M3.82 19.97A10 10 0 0122 6c0 3.87-1.02 8-6 12" />
  </svg>
)

const values = [
  { Icon: TargetIcon, title: 'Results First', desc: 'Everything we do is tied to measurable outcomes. If it doesn\'t move the needle, we don\'t do it.' },
  { Icon: ChartIcon, title: 'Data-Driven', desc: 'Every decision, recommendation and strategy is backed by real data — not gut feeling or guesswork.' },
  { Icon: UsersIcon, title: 'Radical Transparency', desc: 'You always know exactly what we\'re doing, why we\'re doing it and how it\'s performing.' },
  { Icon: LeafIcon, title: 'Long-Term Thinking', desc: 'We build relationships, not transactions. Your long-term success is the only metric we care about.' },
]

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M3 8l3 3 7-6" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5 text-lime">
    <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" />
  </svg>
)

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ink overflow-hidden" aria-labelledby="about-h1">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" aria-hidden="true" />
        <div className="wrap relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-6">About Us</p>
            <h1 id="about-h1" className="text-display-xl font-display font-bold text-paper mb-6">
              We&apos;re on a mission to make{' '}
              <span className="font-serif italic text-lime">digital marketing work</span>{' '}
              for every business
            </h1>
            <p className="text-lg text-paper/70 leading-relaxed max-w-2xl">
              Digital Expert Hub was founded with one simple belief: every business deserves access to expert digital marketing that delivers real, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-paper" aria-labelledby="about-story">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Our Story</p>
              <h2 id="about-story" className="text-display-md font-display font-bold text-ink mb-6">
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
            <div className="relative">
              {/* Office / team hero photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                  alt="Digital Expert Hub office in Ludhiana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </div>
              {/* Floating stat card overlay */}
              <div className="absolute -bottom-5 -left-5 bg-lime rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-3xl font-display font-bold text-ink leading-none">1,000+</div>
                <div className="text-xs font-display font-semibold text-ink/60 mt-1 uppercase tracking-wide">Brands Served</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-ink border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-1 text-2xl font-display font-bold text-lime leading-none">
                  4.9 <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-lime"><path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 1z" /></svg>
                </div>
                <div className="text-xs font-display font-semibold text-paper/50 mt-1 uppercase tracking-wide">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ink" aria-labelledby="about-values">
        <div className="wrap">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="section-label mb-4">Our Values</p>
            <h2 id="about-values" className="text-display-lg font-display font-bold text-paper">
              The principles that guide everything we do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-forest/40 border border-white/10 rounded-3xl p-8">
                <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-display font-bold text-paper mb-3">{title}</h3>
                <p className="text-paper/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-paper" aria-labelledby="about-team">
        <div className="wrap">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Meet the Team</p>
            <h2 id="about-team" className="text-display-lg font-display font-bold text-ink">
              The people behind your growth
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden relative mb-3 ring-2 ring-ink/10">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
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
      <section className="section-sm bg-ink border-t border-white/10" aria-labelledby="about-certs">
        <div className="wrap text-center">
          <p id="about-certs" className="section-label mb-8">Certifications &amp; Partnerships</p>
          <ul className="flex flex-wrap justify-center gap-4" aria-label="Certifications list">
            {['Google Partner', 'Meta Business Partner', 'Semrush Certified', 'HubSpot Certified', 'Google Analytics 4 Certified'].map((cert) => (
              <li key={cert}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest/40 border border-white/10 rounded-full text-sm font-display font-semibold text-paper/80">
                  <CheckIcon />
                  {cert}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
