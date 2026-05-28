import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Careers — Join the Digital Expert Hub Team',
  description: 'Join the Digital Expert Hub team and build your career in digital marketing. We\'re always looking for talented SEO specialists, PPC managers, content writers and developers.',
  path: '/careers',
})

const openings = [
  { title: 'SEO Specialist', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–4 years', desc: 'We\'re looking for an experienced SEO Specialist to manage and grow organic search campaigns for our clients.' },
  { title: 'Google Ads Manager', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–3 years', desc: 'Manage and optimise Google Ads campaigns across search, display, shopping and video for a portfolio of clients.' },
  { title: 'Content Writer & Strategist', type: 'Full-time', location: 'Remote', experience: '1–3 years', desc: 'Create high-quality, SEO-optimised blog posts, landing page copy, case studies and email content.' },
  { title: 'Social Media Manager', type: 'Full-time', location: 'Ludhiana / Remote', experience: '1–2 years', desc: 'Manage social media presence for multiple clients across Instagram, Facebook, LinkedIn and more.' },
  { title: 'Web Developer (React/Next.js)', type: 'Full-time', location: 'Ludhiana / Remote', experience: '2–4 years', desc: 'Build fast, SEO-optimised websites for clients using React, Next.js, TypeScript and Tailwind CSS.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Join Our Team</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Build your career in{' '}
            <span className="font-serif italic text-lime">digital marketing</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
            Work on exciting projects, grow fast and make a real impact. Join a team that celebrates initiative and rewards results.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">Why Join Us</p>
              <h2 className="text-display-md font-display font-bold text-ink mb-6">
                A culture built on growth, ownership &amp; impact
              </h2>
              <p className="text-ink/60 leading-relaxed">
                At Digital Expert Hub, you&apos;re not just an employee — you&apos;re a growth partner. We invest in your development, give you real ownership of your work and celebrate wins together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Fast Career Growth' },
                { icon: '📚', title: 'Learning & Development' },
                { icon: '🏠', title: 'Flexible / Remote Work' },
                { icon: '💰', title: 'Competitive Compensation' },
                { icon: '🎯', title: 'High-Impact Work' },
                { icon: '🤝', title: 'Supportive Team' },
              ].map((b) => (
                <div key={b.title} className="bg-paper-2 rounded-2xl p-5 flex items-center gap-3 border border-ink/6">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-sm font-display font-semibold text-ink">{b.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Openings */}
          <h2 className="text-display-md font-display font-bold text-ink mb-8">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-paper-2 rounded-3xl p-7 border border-ink/8 hover:border-lime/30 hover:shadow-card transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-ink mb-2">{job.title}</h3>
                    <p className="text-sm text-ink/60 mb-4 leading-relaxed">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">{job.type}</span>
                      <span className="px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">📍 {job.location}</span>
                      <span className="px-3 py-1 bg-ink/6 rounded-full text-xs font-display font-semibold text-ink/70">⏱ {job.experience}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn-ink self-start shrink-0">Apply Now →</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink rounded-3xl p-8 text-center">
            <p className="text-xl font-display font-bold text-paper mb-2">Don&apos;t see the right role?</p>
            <p className="text-paper/60 mb-6">Send us your CV anyway. We&apos;re always open to exceptional talent.</p>
            <a href="mailto:careers@digitalexperthub.com" className="btn btn-lime btn-lg">Send Your CV →</a>
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
