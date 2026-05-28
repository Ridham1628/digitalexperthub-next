import Link from 'next/link'

const industries = [
  { icon: '🏥', label: 'Doctors & Clinics', href: '/industries/doctors' },
  { icon: '🦷', label: 'Dentists', href: '/industries/dentists' },
  { icon: '🏠', label: 'Real Estate', href: '/industries/real-estate' },
  { icon: '🛒', label: 'E-commerce', href: '/industries/ecommerce' },
  { icon: '💻', label: 'SaaS & Tech', href: '/industries/saas' },
  { icon: '⚖️', label: 'Law Firms', href: '/industries/law-firms' },
  { icon: '🏪', label: 'Small Business', href: '/industries/small-business' },
  { icon: '🚀', label: 'Startups', href: '/industries/startups' },
]

export default function IndustriesSection() {
  return (
    <section className="section bg-paper" id="industries">
      <div className="wrap">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-4">
            Industries We Serve
          </p>
          <h2 className="text-display-lg font-display font-bold text-ink mb-4">
            Digital marketing{' '}
            <span className="font-serif italic text-lime-deep">for every industry</span>
          </h2>
          <p className="text-ink/60 text-lg leading-relaxed">
            Whether you&apos;re a local clinic or a fast-growing SaaS company, we have industry-specific strategies that work.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group flex flex-col items-center text-center p-6 bg-paper-2 rounded-3xl border border-ink/6 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {ind.icon}
              </span>
              <span className="text-sm font-display font-semibold text-ink group-hover:text-lime-deep transition-colors">
                {ind.label}
              </span>
              <span className="text-xs text-ink/40 mt-1 group-hover:text-lime-deep/60 transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
