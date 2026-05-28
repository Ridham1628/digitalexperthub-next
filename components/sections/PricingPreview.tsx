import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: '/month',
    tagline: 'For small businesses getting started',
    popular: false,
    features: [
      'SEO audit & strategy',
      'On-page optimisation (10 pages)',
      'Google Business Profile setup',
      '2 blog posts/month',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get Started',
    href: '/contact?plan=starter',
  },
  {
    name: 'Growth',
    price: '₹35,000',
    period: '/month',
    tagline: 'Most popular for growing businesses',
    popular: true,
    features: [
      'Everything in Starter',
      'Full SEO campaign (30 pages)',
      'Google Ads management (up to ₹1L spend)',
      '4 blog posts/month',
      'Social media (2 platforms)',
      'Bi-weekly strategy calls',
      'Priority support',
    ],
    cta: 'Start Growing',
    href: '/contact?plan=growth',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For established brands scaling fast',
    popular: false,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Full-funnel digital strategy',
      'Custom reporting dashboard',
      'CRO & conversion audits',
      'Website development included',
      'Unlimited support & revisions',
    ],
    cta: 'Talk to Sales',
    href: '/contact?plan=enterprise',
  },
]

export default function PricingPreview() {
  return (
    <section className="section bg-ink" id="pricing" aria-labelledby="pricing-heading">
      <div className="wrap">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-16">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h2 id="pricing-heading" className="text-display-lg font-display font-bold text-paper mb-4">
            Simple plans,{' '}
            <span className="serif-it">real results</span>
          </h2>
          <p className="text-paper/70 text-lg leading-relaxed">
            No hidden fees. No lock-in contracts. Just measurable growth for your business.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-lime text-ink shadow-[0_0_0_1px_#c8f250,0_12px_48px_rgba(200,242,80,0.25)] hover:shadow-[0_0_0_1px_#c8f250,0_16px_64px_rgba(200,242,80,0.35)] hover:-translate-y-1'
                  : 'bg-forest/40 border border-white/10 text-paper hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-ink text-lime text-xs font-display font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3 className={`text-sm font-display font-bold uppercase tracking-wider mb-4 ${plan.popular ? 'text-ink/60' : 'text-paper/60'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-display font-bold ${plan.popular ? 'text-ink' : 'text-paper'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm mb-1.5 ${plan.popular ? 'text-ink/65' : 'text-paper/65'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-xs leading-relaxed ${plan.popular ? 'text-ink/65' : 'text-paper/55'}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Divider */}
              <div className={`border-t mb-6 ${plan.popular ? 'border-ink/15' : 'border-white/10'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke={plan.popular ? '#0b0f0c' : '#c8f250'}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="w-4 h-4 shrink-0 mt-0.5"
                    >
                      <path d="M3 8l3 3 7-6" />
                    </svg>
                    <span className={`text-sm leading-snug ${plan.popular ? 'text-ink/80' : 'text-paper/75'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`btn btn-lg justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.popular
                    ? 'bg-ink text-lime hover:bg-ink-light focus-visible:ring-ink focus-visible:ring-offset-lime'
                    : 'btn-lime focus-visible:ring-lime focus-visible:ring-offset-ink'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-paper/65 text-sm mt-10">
          All plans include onboarding + setup. Need something custom?{' '}
          <Link href="/contact" className="text-lime hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime focus-visible:rounded">
            Let&apos;s talk
          </Link>
        </p>
      </div>
    </section>
  )
}
