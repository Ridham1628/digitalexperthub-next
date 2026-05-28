import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Careers at Digital Expert Hub',
  description: "Join the Digital Expert Hub team. We're hiring SEO specialists, Google Ads managers, content writers & web developers. Competitive pay + remote work options.",
  path: '/careers',
})

const openings = [
  { title: 'SEO Specialist', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–4 years', desc: 'We\'re looking for an experienced SEO Specialist to manage and grow organic search campaigns for our clients.' },
  { title: 'Google Ads Manager', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–3 years', desc: 'Manage and optimise Google Ads campaigns across search, display, shopping and video for a portfolio of clients.' },
  { title: 'Content Writer & Strategist', type: 'Full-time', location: 'Remote', experience: '1–3 years', desc: 'Create high-quality, SEO-optimised blog posts, landing page copy, case studies and email content.' },
  { title: 'Social Media Manager', type: 'Full-time', location: 'Ludhiana / Remote', experience: '1–2 years', desc: 'Manage social media presence for multiple clients across Instagram, Facebook, LinkedIn and more.' },
  { title: 'Web Developer (React/Next.js)', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–4 years', desc: 'Build fast, SEO-optimised websites for clients using React, Next.js, TypeScript and Tailwind CSS.' },
]

/* SVG icons for culture benefits */
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
  </svg>
)
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
)
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const CurrencyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
)
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3.5 h-3.5">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3.5 h-3.5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

const cultureBenefits = [
  { Icon: RocketIcon, title: 'Fast Career Growth' },
  { Icon: BookIcon, title: 'Learning & Development' },
  { Icon: HomeIcon, title: 'Flexible / Remote Work' },
  { Icon: CurrencyIcon, title: 'Competitive Compensation' },
  { Icon: TargetIcon, title: 'High-Impact Work' },
  { Icon: UsersIcon, title: 'Supportive Team' },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden" aria-labelledby="careers-h1">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" aria-hidden="true" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Join Our Team</p>
          <h1 id="careers-h1" className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Build your career in{' '}
            <span className="font-serif italic text-lime">digital marketing</span>
          </h1>
          <p className="text-lg text-paper/70 max-w-2xl mx-auto leading-relaxed">
            Work on exciting projects, grow fast and make a real impact. Join a team that celebrates initiative and rewards results.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="section bg-paper" aria-labelledby="careers-culture">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Why Join Us</p>
              <h2 id="careers-culture" className="text-display-md font-display font-bold text-ink mb-6">
                A culture built on growth, ownership &amp; impact
              </h2>
              <p className="text-ink/65 leading-relaxed">
                At Digital Expert Hub, you&apos;re not just an employee — you&apos;re a growth partner. We invest in your development, give you real ownership of your work and celebrate wins together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cultureBenefits.map(({ Icon, title }) => (
                <div key={title} className="bg-paper-2 rounded-2xl p-5 flex items-center gap-3 border border-ink/6">
                  <div className="w-9 h-9 rounded-lg bg-ink flex items-center justify-center text-lime flex-shrink-0">
                    <Icon />
                  </div>
                  <span className="text-sm font-display font-semibold text-ink">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Openings */}
          <h2 className="text-display-md font-display font-bold text-ink mb-8" id="careers-openings">Current Openings</h2>
          <div className="space-y-4" aria-labelledby="careers-openings">
            {openings.map((job) => (
              <div key={job.title} className="bg-paper-2 rounded-3xl p-7 border border-ink/8 hover:border-lime/30 hover:shadow-card transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-ink mb-2">{job.title}</h3>
                    <p className="text-sm text-ink/65 mb-4 leading-relaxed">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">{job.type}</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">
                        <MapPinIcon />{job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">
                        <ClockIcon />{job.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-ink self-start shrink-0 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
                  >
                    Apply Now <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink rounded-3xl p-8 text-center">
            <p className="text-xl font-display font-bold text-paper mb-2">Don&apos;t see the right role?</p>
            <p className="text-paper/65 mb-6">Send us your CV anyway. We&apos;re always open to exceptional talent.</p>
            <a
              href="mailto:careers@digitalexperthub.com"
              className="btn btn-lime btn-lg inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Send Your CV <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <CtaSection
        title="Great careers. Real impact."
        subtitle="Join a team that's passionate about digital marketing and genuinely committed to client success."
        primaryLabel="View Open Roles"
        primaryHref="/careers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
