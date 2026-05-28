import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Pricing India',
  description: 'Transparent digital marketing pricing from ₹15,000/month. No hidden fees, no lock-in contracts. SEO, Google Ads, social media & web design packages. Free call.',
  path: '/pricing',
})

const plans = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: '/month',
    desc: 'Perfect for small businesses getting started with digital marketing.',
    highlight: false,
    features: [
      'SEO (up to 10 keywords)',
      'Google Business Profile optimisation',
      '2 blog posts/month',
      'Basic on-page SEO',
      'Monthly reporting',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '₹35,000',
    period: '/month',
    desc: 'For businesses ready to accelerate their online growth.',
    highlight: true,
    features: [
      'SEO (up to 30 keywords)',
      'Google Ads management (up to ₹50k ad spend)',
      'Social media (2 platforms)',
      '4 blog posts/month',
      'Technical SEO fixes',
      'Link building (5 links/month)',
      'Bi-weekly strategy calls',
      'Priority support',
    ],
    cta: 'Most Popular →',
  },
  {
    name: 'Scale',
    price: '₹75,000',
    period: '/month',
    desc: 'Full-service digital marketing for serious growth.',
    highlight: false,
    features: [
      'Comprehensive SEO (unlimited keywords)',
      'Google Ads (up to ₹1.5L ad spend)',
      'Social media (all platforms)',
      '8 blog posts + content strategy',
      'Advanced link building (15 links/month)',
      'Email marketing automation',
      'CRO & landing page optimisation',
      'Weekly strategy calls',
      'Dedicated account manager',
    ],
    cta: 'Get a Custom Quote',
  },
]

const addons = [
  { service: 'Website Design (5 pages)', price: '₹25,000', type: 'one-time' },
  { service: 'Website Development (custom)', price: 'From ₹50,000', type: 'one-time' },
  { service: 'Logo & Brand Identity', price: '₹15,000', type: 'one-time' },
  { service: 'Landing Page Design', price: '₹10,000', type: 'one-time' },
  { service: 'Email Marketing Setup', price: '₹12,000', type: 'one-time' },
  { service: 'Extra Blog Posts', price: '₹2,000/post', type: 'add-on' },
  { service: 'Extra Link Building', price: '₹3,000/link', type: 'add-on' },
  { service: 'Digital Marketing Consulting', price: '₹5,000/hour', type: 'add-on' },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Digital marketing pricing{' '}
            <span className="font-serif italic text-lime">that makes sense</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No long-term lock-ins. Just transparent pricing tied to real results.
            Start with a free strategy call.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-4xl p-8 flex flex-col ${
                  plan.highlight
                    ? 'bg-ink text-paper ring-2 ring-lime shadow-lime scale-[1.02]'
                    : 'bg-paper-2 border border-ink/10 text-ink'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lime text-ink rounded-full text-xs font-display font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h2 className={`text-xl font-display font-bold mb-1 ${plan.highlight ? 'text-lime' : 'text-ink'}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-paper/60' : 'text-ink/60'}`}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-display font-bold ${plan.highlight ? 'text-paper' : 'text-ink'}`}>{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? 'text-paper/65' : 'text-ink/65'}`}>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 text-lime flex-shrink-0">
                        <path d="M3 8l3 3 7-6" />
                      </svg>
                      <span className={plan.highlight ? 'text-paper/80' : 'text-ink/70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn btn-lg w-full justify-center ${plan.highlight ? 'btn-lime' : 'btn-ink'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ink/65 mt-8">
            All plans exclude ad spend. Minimum 3-month commitment. <Link href="/contact" className="text-lime-deep hover:underline">Request custom quote →</Link>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section bg-ink">
        <div className="wrap">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="section-label mb-4">Add-On Services</p>
            <h2 className="text-display-md font-display font-bold text-paper">One-time &amp; add-on services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {addons.map((a) => (
              <div key={a.service} className="bg-forest/40 border border-white/10 rounded-2xl p-5">
                <p className="text-sm font-display font-semibold text-paper mb-2">{a.service}</p>
                <p className="text-lg font-display font-bold text-lime">{a.price}</p>
                <span className="text-xs text-paper/65 capitalize">{a.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-paper">
        <div className="wrap max-w-3xl mx-auto">
          <h2 className="text-display-md font-display font-bold text-ink text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'Are these prices fixed or can I customise a plan?', a: 'These are our standard packages. Every business is different, so we often build custom packages. Book a free call and we\'ll put together a proposal tailored to your goals and budget.' },
              { q: 'Is there a long-term contract?', a: 'Our minimum commitment is 3 months (to give SEO time to show results). After that, plans continue month-to-month. You can pause or cancel with 30 days notice.' },
              { q: 'Does the price include ad spend?', a: 'No. Ad spend (Google Ads, Meta Ads) is billed directly by the platform. Our fee covers campaign management. We\'ll recommend minimum budgets per your goals.' },
              { q: 'What\'s the free strategy call about?', a: 'A free 30-minute call where we audit your current digital presence, identify your biggest opportunities, and show you exactly what it would take to grow. No hard sell, just honest advice.' },
            ].map((f) => (
              <details key={f.q} className="bg-paper-2 rounded-2xl overflow-hidden group">
                <summary className="flex items-center justify-between gap-4 p-5 min-h-[48px] cursor-pointer text-ink font-display font-semibold hover:text-lime-deep transition-colors list-none">
                  {f.q}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="w-5 h-5 text-ink/65 group-open:rotate-45 transition-transform flex-shrink-0"><path d="M8 3v10M3 8h10"/></svg>
                </summary>
                <p className="px-5 pb-5 text-sm text-ink/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which plan is right for you?"
        subtitle="Book a free strategy call and we'll recommend the best package for your specific goals and budget."
      />
    </>
  )
}
