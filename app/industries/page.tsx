import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Industry-Specific Digital Marketing',
  description: 'Digital Expert Hub offers specialised digital marketing strategies for doctors, dentists, real estate, e-commerce, SaaS, law firms, small businesses and startups.',
  path: '/industries',
})

const industries = [
  { icon: '🏥', title: 'Doctors & Clinics', href: '/industries/doctors', desc: 'Help patients find your practice online.' },
  { icon: '🦷', title: 'Dentists', href: '/industries/dentists', desc: 'Fill your appointment calendar with new patients.' },
  { icon: '🏠', title: 'Real Estate', href: '/industries/real-estate', desc: 'Generate qualified buyer and seller leads.' },
  { icon: '🛒', title: 'E-commerce', href: '/industries/ecommerce', desc: 'Drive more sales with less ad spend.' },
  { icon: '💻', title: 'SaaS & Tech', href: '/industries/saas', desc: 'Reduce CAC and grow MRR organically.' },
  { icon: '⚖️', title: 'Law Firms', href: '/industries/law-firms', desc: 'Generate high-quality client inquiries.' },
  { icon: '🏪', title: 'Small Businesses', href: '/industries/small-business', desc: 'Compete and win against larger competitors.' },
  { icon: '🚀', title: 'Startups', href: '/industries/startups', desc: 'Build your growth engine from day one.' },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Industries We Serve</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Digital Marketing Expertise{' '}
            <span className="font-serif italic text-lime">For Every Industry</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges. Our industry-specific strategies are built around your audience, competition and business model.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link key={ind.href} href={ind.href} className="group flex flex-col p-8 bg-paper-2 rounded-3xl border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center">
                <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{ind.icon}</span>
                <h2 className="font-display font-bold text-ink text-lg mb-2 group-hover:text-lime-deep transition-colors">{ind.title}</h2>
                <p className="text-sm text-ink/60 leading-relaxed flex-1">{ind.desc}</p>
                <span className="text-sm font-display font-semibold text-lime-deep mt-4 flex items-center justify-center gap-1.5">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
