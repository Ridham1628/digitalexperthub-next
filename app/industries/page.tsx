import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Industry-Specific Digital Marketing',
  description: 'Expert digital marketing tailored for every industry — doctors, dentists, real estate, e-commerce, SaaS, law firms, small businesses & startups. Free consult.',
  path: '/industries',
})

const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    <line x1="12" y1="7" x2="12" y2="12" /><line x1="9.5" y1="9.5" x2="14.5" y2="9.5" />
  </svg>
)
const ToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M12 2C8 2 5 5 5 8c0 2 .5 3.5 1 5l1 6c.2 1 .8 3 2 3s1.8-2 2-3l.5-3a.5.5 0 011 0l.5 3c.2 1 .8 3 2 3s1.8-2 2-3l1-6c.5-1.5 1-3 1-5 0-3-3-6-7-6z" />
  </svg>
)
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
)
const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
)
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)
const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <line x1="12" y1="3" x2="12" y2="21" /><path d="M5 21h14" />
    <path d="M5 8l7-5 7 5" /><path d="M3 12h4l-2 5-2-5z" /><path d="M17 12h4l-2 5-2-5z" />
  </svg>
)
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M3 9l1-5h16l1 5" /><path d="M3 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
    <path d="M5 9v11a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V9" />
  </svg>
)
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
  </svg>
)

const industries = [
  { Icon: HospitalIcon, title: 'Doctors & Clinics', href: '/industries/doctors', desc: 'Help patients find your practice online.' },
  { Icon: ToothIcon, title: 'Dentists', href: '/industries/dentists', desc: 'Fill your appointment calendar with new patients.' },
  { Icon: HomeIcon, title: 'Real Estate', href: '/industries/real-estate', desc: 'Generate qualified buyer and seller leads.' },
  { Icon: KeyIcon, title: 'Realtors & Agents', href: '/industries/realtors', desc: 'Stand out in a competitive property market.' },
  { Icon: CartIcon, title: 'E-commerce', href: '/industries/ecommerce', desc: 'Drive more sales with less ad spend.' },
  { Icon: MonitorIcon, title: 'SaaS & Tech', href: '/industries/saas', desc: 'Reduce CAC and grow MRR organically.' },
  { Icon: ScaleIcon, title: 'Law Firms', href: '/industries/law-firms', desc: 'Generate high-quality client inquiries.' },
  { Icon: StoreIcon, title: 'Small Businesses', href: '/industries/small-business', desc: 'Compete and win against larger competitors.' },
  { Icon: RocketIcon, title: 'Startups', href: '/industries/startups', desc: 'Build your growth engine from day one.' },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink relative overflow-hidden" aria-labelledby="industries-h1">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none" aria-hidden="true">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          </div>
        </div>
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Industries We Serve</p>
          <h1 id="industries-h1" className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Digital Marketing Expertise{' '}
            <span className="font-serif italic text-lime">For Every Industry</span>
          </h1>
          <p className="text-lg text-paper/70 max-w-2xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges. Our industry-specific strategies are built around your audience, competition and business model.
          </p>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="industries-grid-heading">
        <div className="wrap">
          <h2 id="industries-grid-heading" className="sr-only">All Industries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ Icon, title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col p-8 bg-paper-2 rounded-3xl border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <div className="w-16 h-16 rounded-2xl bg-ink flex items-center justify-center text-lime mx-auto mb-5 group-hover:bg-lime group-hover:text-ink transition-all duration-300">
                  <Icon />
                </div>
                <h2 className="font-display font-bold text-ink text-lg mb-2 group-hover:text-lime-deep transition-colors">{title}</h2>
                <p className="text-sm text-ink/60 leading-relaxed flex-1">{desc}</p>
                <span className="text-sm font-display font-semibold text-lime-deep mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3.5 h-3.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
