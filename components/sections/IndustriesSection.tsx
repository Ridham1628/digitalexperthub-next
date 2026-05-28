import Link from 'next/link'

/* ── Industry SVG icons ── */
const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    <line x1="12" y1="8" x2="12" y2="13" /><line x1="9.5" y1="10.5" x2="14.5" y2="10.5" />
  </svg>
)
const ToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M12 2C8 2 5 5 5 8c0 2 .5 3.5 1 5l1 6c.2 1 .8 3 2 3s1.8-2 2-3l.5-3a.5.5 0 011 0l.5 3c.2 1 .8 3 2 3s1.8-2 2-3l1-6c.5-1.5 1-3 1-5 0-3-3-6-7-6z" />
  </svg>
)
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
)
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)
const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <line x1="12" y1="3" x2="12" y2="21" /><path d="M5 21h14" />
    <path d="M5 8l7-5 7 5" /><path d="M3 12h4l-2 5-2-5z" /><path d="M17 12h4l-2 5-2-5z" />
  </svg>
)
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M3 9l1-5h16l1 5" /><path d="M3 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
    <path d="M5 9v11a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V9" />
  </svg>
)
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)
const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
)

const industries = [
  {
    icon: HospitalIcon,
    label: 'Doctors & Clinics',
    sub: 'Healthcare & Medical',
    href: '/industries/doctors',
    iconBg: 'bg-rose-500/15 group-hover:bg-rose-500/25',
    iconColor: 'text-rose-400',
    hoverCls: 'hover:border-rose-400/30 hover:shadow-[0_8px_32px_rgba(248,113,113,0.12)]',
  },
  {
    icon: ToothIcon,
    label: 'Dentists',
    sub: 'Dental Practices',
    href: '/industries/dentists',
    iconBg: 'bg-sky-500/15 group-hover:bg-sky-500/25',
    iconColor: 'text-sky-400',
    hoverCls: 'hover:border-sky-400/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]',
  },
  {
    icon: HomeIcon,
    label: 'Real Estate',
    sub: 'Property & Housing',
    href: '/industries/real-estate',
    iconBg: 'bg-emerald-500/15 group-hover:bg-emerald-500/25',
    iconColor: 'text-emerald-400',
    hoverCls: 'hover:border-emerald-400/30 hover:shadow-[0_8px_32px_rgba(52,211,153,0.12)]',
  },
  {
    icon: KeyIcon,
    label: 'Realtors & Agents',
    sub: 'Real Estate Agents',
    href: '/industries/realtors',
    iconBg: 'bg-amber-500/15 group-hover:bg-amber-500/25',
    iconColor: 'text-amber-400',
    hoverCls: 'hover:border-amber-400/30 hover:shadow-[0_8px_32px_rgba(251,191,36,0.12)]',
  },
  {
    icon: CartIcon,
    label: 'E-commerce',
    sub: 'Online Retail',
    href: '/industries/ecommerce',
    iconBg: 'bg-violet-500/15 group-hover:bg-violet-500/25',
    iconColor: 'text-violet-400',
    hoverCls: 'hover:border-violet-400/30 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]',
  },
  {
    icon: MonitorIcon,
    label: 'SaaS & Tech',
    sub: 'Technology & Software',
    href: '/industries/saas',
    iconBg: 'bg-blue-500/15 group-hover:bg-blue-500/25',
    iconColor: 'text-blue-400',
    hoverCls: 'hover:border-blue-400/30 hover:shadow-[0_8px_32px_rgba(96,165,250,0.12)]',
  },
  {
    icon: ScaleIcon,
    label: 'Law Firms',
    sub: 'Legal Services',
    href: '/industries/law-firms',
    iconBg: 'bg-yellow-500/15 group-hover:bg-yellow-500/25',
    iconColor: 'text-yellow-400',
    hoverCls: 'hover:border-yellow-400/30 hover:shadow-[0_8px_32px_rgba(234,179,8,0.12)]',
  },
  {
    icon: StoreIcon,
    label: 'Small Business',
    sub: 'Local & SMBs',
    href: '/industries/small-business',
    iconBg: 'bg-lime-500/15 group-hover:bg-lime-500/25',
    iconColor: 'text-lime-400',
    hoverCls: 'hover:border-lime-400/30 hover:shadow-[0_8px_32px_rgba(163,230,53,0.12)]',
  },
  {
    icon: RocketIcon,
    label: 'Startups',
    sub: 'Ventures & Scale-ups',
    href: '/industries/startups',
    iconBg: 'bg-pink-500/15 group-hover:bg-pink-500/25',
    iconColor: 'text-pink-400',
    hoverCls: 'hover:border-pink-400/30 hover:shadow-[0_8px_32px_rgba(244,114,182,0.12)]',
  },
]

export default function IndustriesSection() {
  return (
    <section className="section bg-ink" id="industries" aria-labelledby="industries-heading">
      <div className="wrap">
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-20">
          <p className="section-label mb-4">Industries We Serve</p>
          <h2 id="industries-heading" className="text-display-lg font-display font-bold text-paper mb-4">
            Digital marketing{' '}
            <span className="serif-it">for every industry</span>
          </h2>
          <p className="text-paper/65 text-lg leading-relaxed">
            Whether you&apos;re a local clinic or a fast-growing SaaS company, we have
            industry-specific strategies that work.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            const isLast = i === industries.length - 1
            return (
              <Link
                key={ind.href}
                href={ind.href}
                className={[
                  'group flex flex-col items-center text-center p-5 sm:p-6',
                  'bg-forest/20 rounded-3xl border border-white/8',
                  ind.hoverCls,
                  'hover:-translate-y-1.5 transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink',
                  isLast ? 'col-span-2 sm:col-span-1' : '',
                ].join(' ')}
              >
                <div
                  className={[
                    'w-14 h-14 rounded-2xl flex items-center justify-center mb-3',
                    'group-hover:scale-110 transition-all duration-300',
                    ind.iconBg,
                    ind.iconColor,
                  ].join(' ')}
                >
                  <Icon />
                </div>
                <span className="text-sm font-display font-semibold text-paper/80 group-hover:text-paper transition-colors leading-tight">
                  {ind.label}
                </span>
                <span
                  className="text-[11px] text-paper/35 mt-1 group-hover:text-paper/60 transition-colors"
                  aria-hidden="true"
                >
                  {ind.sub}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
