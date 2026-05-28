import Link from 'next/link'

interface CtaSectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CtaSection({
  title = 'Ready to grow your business online?',
  subtitle = 'Book a free 30-minute strategy call and discover exactly how we can help you get more traffic, leads and revenue.',
  primaryLabel = 'Get Free Strategy Call',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryHref = '/services',
  dark = true,
}: CtaSectionProps) {
  return (
    <section className={`section-sm ${dark ? 'bg-forest' : 'bg-lime'}`} aria-label="Call to action">
      <div className="wrap">
        <div className={`relative rounded-4xl overflow-hidden p-10 lg:p-16 ${dark ? 'bg-gradient-to-br from-ink via-forest to-ink border border-white/10' : 'bg-lime'}`}>

          {/* Dark mode background details */}
          {dark && (
            <>
              {/* Corner glow blobs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-lime/6 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/4 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" aria-hidden="true" />

              {/* Grid lines */}
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden="true" />

              {/* Decorative radial ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-lime/5 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-lime/8 pointer-events-none"
                aria-hidden="true"
              />
            </>
          )}

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">

            {/* Eyebrow */}
            <p className={`text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 ${dark ? 'text-lime' : 'text-ink/60'}`}>
              Let&apos;s Work Together
            </p>

            <h2 className={`text-display-md font-display font-bold mb-4 text-balance ${dark ? 'text-paper' : 'text-ink'}`}>
              {dark ? (
                <>
                  {title.split(' ').slice(0, 4).join(' ')}{' '}
                  <span className="font-serif italic text-lime">{title.split(' ').slice(4).join(' ')}</span>
                </>
              ) : (
                title
              )}
            </h2>

            <p className={`text-lg mb-8 leading-relaxed max-w-xl mx-auto ${dark ? 'text-paper/70' : 'text-ink/70'}`}>
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={primaryHref}
                className={`btn btn-lg w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${dark ? 'btn-lime focus-visible:ring-lime focus-visible:ring-offset-ink' : 'btn-ink focus-visible:ring-ink focus-visible:ring-offset-lime'}`}
              >
                {primaryLabel}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href={secondaryHref}
                className={`btn btn-lg w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${dark ? 'btn-ghost-dark focus-visible:ring-lime focus-visible:ring-offset-ink' : 'btn-ghost-light focus-visible:ring-ink focus-visible:ring-offset-lime'}`}
              >
                {secondaryLabel}
              </Link>
            </div>

            {/* Trust micro-copy */}
            <p className={`text-sm mt-6 ${dark ? 'text-paper/60' : 'text-ink/65'}`}>
              Free consultation · No commitment · Results guaranteed or we work for free
            </p>

            {/* Social proof mini-chips */}
            <div className={`flex flex-wrap items-center justify-center gap-3 mt-8 pt-8 border-t ${dark ? 'border-white/10' : 'border-ink/15'}`}>
              {[
                { v: '40+', l: 'Reviews' },
                { v: '4.9★', l: 'Rating' },
                { v: '1k+', l: 'Clients' },
                { v: '7+', l: 'Years' },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${dark ? 'bg-white/6 border border-white/10 text-paper/70' : 'bg-ink/8 border border-ink/15 text-ink/70'} text-xs font-display`}
                >
                  <span className="font-bold">{s.v}</span>
                  <span className="opacity-60">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
