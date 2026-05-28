import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'SEO Company in Mumbai | Digital Expert Hub',
  description: 'Digital Expert Hub is a leading SEO company in Mumbai offering SEO, Google Ads, social media marketing and web design services. Get more leads from Mumbai customers.',
  path: '/locations/seo-company-mumbai',
})

const faqs = [
  { question: 'Are you an SEO company in ', answer: 'Yes. Digital Expert Hub provides full digital marketing services to businesses in Mumbai including SEO, Google Ads, social media marketing and website design.' },
  { question: 'How can Digital Expert Hub help my Mumbai business?', answer: 'We help Mumbai businesses rank higher on Google, generate more leads and grow their online presence with proven, data-driven digital marketing strategies.' },
  { question: 'Do you offer local SEO for Mumbai businesses?', answer: 'Yes. Our local SEO services are designed to help Mumbai businesses appear at the top of local search results and Google Maps.' },
]

const services = [
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Local SEO', href: '/services/local-seo' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Website Design', href: '/services/website-design' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
]

const breadcrumbs = [
  { name: 'Home', href: siteConfig.url },
  { name: 'Locations', href: siteConfig.url + '/locations' },
  { name: 'SEO Company Mumbai', href: siteConfig.url + '/locations/seo-company-mumbai' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'SEO Company Mumbai', description: 'Digital marketing and SEO services in Mumbai, Maharashtra.', url: siteConfig.url + '/locations/seo-company-mumbai' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10">
          <nav className="flex items-center gap-2 text-xs text-paper/40 font-display mb-8">
            <Link href="/" className="hover:text-lime">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-lime">Locations</Link>
            <span>/</span>
            <span className="text-paper/70">Mumbai</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/20 text-xs font-display font-bold uppercase tracking-wider text-lime mb-6">
              📍 Serving Mumbai, Maharashtra
            </div>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6">
              SEO Company in Mumbai That Delivers Measurable Results
            </h1>
            <p className="text-lg text-paper/65 leading-relaxed mb-10 max-w-2xl">
              Digital Expert Hub helps businesses in Mumbai grow online with proven SEO, Google Ads, social media marketing and website design services. Get more local customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-lime btn-lg">Get Free Mumbai SEO Audit →</Link>
              <a href="tel:+917986713605" className="btn btn-ghost-dark btn-lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">Our Services in Mumbai</p>
            <h2 className="text-display-md font-display font-bold text-ink">Digital marketing services for Mumbai businesses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group p-6 bg-paper-2 rounded-3xl border border-ink/8 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all">
                <h3 className="font-display font-bold text-ink mb-2 group-hover:text-lime-deep transition-colors">{s.label}</h3>
                <span className="text-sm font-display font-semibold text-lime-deep flex items-center gap-1 mt-2">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="wrap max-w-3xl mx-auto">
          <h2 className="text-display-sm font-display font-bold text-paper text-center mb-12">FAQs About Our Mumbai Services</h2>
          <div className="divide-y divide-white/10">
            {faqs.map((f) => (
              <details key={f.question} className="group py-2">
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer text-paper font-display font-semibold hover:text-lime list-none">
                  {f.question}
                  <span className="text-paper/40 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="pb-4 text-paper/60 text-sm leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to dominate search in " subtitle="Book a free strategy call and discover how we can help your Mumbai business get more customers online." />
    </>
  )
}
