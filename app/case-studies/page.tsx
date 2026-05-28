import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Case Studies — Client Success Stories',
  description: 'Read detailed digital marketing case studies from Digital Expert Hub. See how we\'ve helped businesses achieve 300%+ traffic growth, 9x revenue and more.',
  path: '/case-studies',
})

const caseStudies = [
  { slug: 'techspark-seo', client: 'TechSpark Solutions', industry: 'SaaS', service: 'SEO', metric: '+340%', label: 'Organic Traffic', desc: 'How we took a SaaS startup from zero organic presence to 340% traffic growth in 6 months with a content-led SEO strategy.' },
  { slug: 'craftbazaar-ecommerce', client: 'CraftBazaar', industry: 'E-commerce', service: 'SEO + Google Ads', metric: '9×', label: 'Revenue Growth', desc: 'How we grew a Shopify store from ₹2L to ₹18L monthly revenue in 12 months.' },
  { slug: 'medcare-local-seo', client: 'MedCare Clinic', industry: 'Healthcare', service: 'Local SEO', metric: '#1', label: 'Google Maps', desc: 'How we took a local medical clinic to the top of Google Maps for 20+ target keywords.' },
  { slug: 'greenlaw-lead-gen', client: 'GreenLaw Associates', industry: 'Law', service: 'SEO + PPC', metric: '30+', label: 'Leads/Month', desc: 'How we built a consistent 30+ qualified lead per month pipeline for a law firm using SEO and Google Ads.' },
  { slug: 'buildSmart-construction', client: 'BuildSmart Construction', industry: 'Construction', service: 'Google Ads + Local SEO', metric: '10×', label: 'Online Inquiries', desc: 'From 5 to 50+ monthly online inquiries in 4 months using a Google Ads + local SEO strategy.' },
  { slug: 'devtech-app-launch', client: 'DevTech Startup', industry: 'Tech', service: 'Full Digital Marketing', metric: '10k+', label: 'App Downloads', desc: 'How we took a new app from zero to 10,000+ downloads in 4 months with a multi-channel digital launch.' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Portfolio</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Client Success Stories &amp;{' '}
            <span className="font-serif italic text-lime">Case Studies</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto">Real results from real campaigns. Dive deep into how we help businesses grow online.</p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col bg-paper-2 rounded-3xl overflow-hidden border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-ink to-forest relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-lime">{cs.metric}</div>
                    <div className="text-xs text-paper/60 uppercase tracking-wider font-display mt-1">{cs.label}</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 bg-lime text-ink rounded-full text-xs font-display font-bold">{cs.industry}</span>
                  <span className="px-2.5 py-1 bg-white/10 text-paper rounded-full text-xs font-display font-semibold">{cs.service}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-ink/50 font-display mb-1">{cs.client}</p>
                <h2 className="font-display font-bold text-ink text-base mb-3 group-hover:text-lime-deep transition-colors leading-snug">{cs.desc}</h2>
                <span className="text-sm font-display font-semibold text-lime-deep mt-auto flex items-center gap-1.5">Read case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
