import Link from 'next/link'
import Image from 'next/image'

const caseStudies = [
  {
    slug: 'techspark-seo',
    industry: 'SaaS',
    client: 'TechSpark Solutions',
    title: '340% Organic Traffic Growth in 6 Months',
    metrics: [
      { label: 'Traffic increase', value: '+340%' },
      { label: 'Keywords ranked', value: '1,200+' },
      { label: 'Timeline', value: '6 months' },
    ],
    services: ['SEO', 'Content'],
    color: 'from-lime/20 to-lime/5',
    accentColor: 'text-lime',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&q=80&auto=format&fit=crop',
  },
  {
    slug: 'craftbazaar-ecommerce',
    industry: 'E-commerce',
    client: 'CraftBazaar',
    title: '₹2L to ₹18L Monthly Revenue With SEO + Ads',
    metrics: [
      { label: 'Revenue growth', value: '9×' },
      { label: 'ROAS', value: '6.5×' },
      { label: 'Timeline', value: '12 months' },
    ],
    services: ['SEO', 'Google Ads'],
    color: 'from-orange-500/20 to-orange-500/5',
    accentColor: 'text-orange-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&q=80&auto=format&fit=crop',
  },
  {
    slug: 'greenlaw-lead-gen',
    industry: 'Law Firm',
    client: 'GreenLaw Associates',
    title: '30 Qualified Leads/Month From Local SEO',
    metrics: [
      { label: 'Monthly leads', value: '30+' },
      { label: 'Ranking position', value: '#1 local' },
      { label: 'Timeline', value: '4 months' },
    ],
    services: ['Local SEO', 'ORM'],
    color: 'from-violet-500/20 to-violet-500/5',
    accentColor: 'text-violet-400',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&q=80&auto=format&fit=crop',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="section bg-paper" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">
              Proven Results
            </p>
            <h2 id="case-studies-heading" className="text-display-md font-display font-bold text-ink">
              Case studies that speak{' '}
              <span className="font-serif italic text-lime-deep">for themselves</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="btn btn-ghost-light shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            View All Case Studies
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col bg-paper-2 border border-ink/8 rounded-3xl overflow-hidden hover:border-lime-deep/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {/* Visual header */}
              <div className={`h-44 bg-gradient-to-br ${cs.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                {/* Background photo */}
                <Image
                  src={cs.image}
                  alt=""
                  fill
                  className="object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  aria-hidden="true"
                />
                {/* Large background number */}
                <div className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none" aria-hidden="true">
                  <span
                    className="font-display font-bold text-white/6 select-none"
                    style={{ fontSize: '5.5rem', letterSpacing: '-0.05em', lineHeight: 1 }}
                  >
                    {cs.metrics[0].value}
                  </span>
                </div>
                <div className="relative flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-ink/15 backdrop-blur-sm text-paper text-xs font-display font-bold uppercase tracking-wide">
                    {cs.industry}
                  </span>
                  <div className="flex gap-1.5">
                    {cs.services.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-paper text-[11px] font-display font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={`relative text-sm font-display font-semibold ${cs.accentColor}`}>{cs.client}</p>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-ink text-base leading-snug mb-4 group-hover:text-lime-deep transition-colors">
                  {cs.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg font-display font-bold text-ink">{m.value}</div>
                      <div className="text-[11px] text-ink/65 font-display uppercase tracking-wide leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
