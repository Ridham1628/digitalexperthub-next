import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'SEO Company Across India',
  description: 'Digital Expert Hub provides SEO and digital marketing services across India — Ludhiana, Mohali, Chandigarh, Delhi, Mumbai and Bangalore.',
  path: '/locations',
})

const locations = [
  { href: '/locations/seo-company-india', city: 'Pan India', desc: 'Nationwide SEO and digital marketing services.' },
  { href: '/locations/seo-company-mohali', city: 'Mohali', desc: 'SEO company in Mohali, Punjab.' },
  { href: '/locations/seo-company-chandigarh', city: 'Chandigarh', desc: 'Digital marketing agency in Chandigarh.' },
  { href: '/locations/seo-company-delhi', city: 'Delhi', desc: 'SEO company in Delhi NCR.' },
  { href: '/locations/seo-company-mumbai', city: 'Mumbai', desc: 'Digital marketing services in Mumbai.' },
  { href: '/locations/seo-company-bangalore', city: 'Bangalore', desc: 'SEO agency in Bangalore.' },
]

export default function LocationsPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 bg-ink relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Service Locations</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6">
            Digital Marketing Services <span className="font-serif italic text-lime">Across India</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto">We serve clients across India with remote-first, data-driven digital marketing services.</p>
        </div>
      </section>
      <section className="section bg-paper">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((l) => (
            <Link key={l.href} href={l.href} className="group p-8 bg-paper-2 rounded-3xl border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all">
              <h2 className="text-xl font-display font-bold text-ink mb-2 group-hover:text-lime-deep transition-colors">{l.city}</h2>
              <p className="text-sm text-ink/60">{l.desc}</p>
              <span className="text-sm font-display font-semibold text-lime-deep mt-4 block">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
