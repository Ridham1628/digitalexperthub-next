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
    <section className={`section-sm ${dark ? 'bg-forest' : 'bg-lime'}`}>
      <div className="wrap">
        <div className={`relative rounded-4xl overflow-hidden p-10 lg:p-16 text-center ${dark ? 'bg-gradient-to-br from-forest via-ink to-forest border border-white/10' : 'bg-lime'}`}>
          {/* BG elements */}
          {dark && (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime/8 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
            </>
          )}

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className={`text-display-md font-display font-bold mb-4 ${dark ? 'text-paper' : 'text-ink'}`}>
              {title}
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${dark ? 'text-paper/70' : 'text-ink/70'}`}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={primaryHref} className={`btn btn-lg ${dark ? 'btn-lime' : 'btn-ink'}`}>
                {primaryLabel} →
              </Link>
              <Link href={secondaryHref} className={`btn btn-lg ${dark ? 'btn-ghost-dark' : 'btn-ghost-light'}`}>
                {secondaryLabel}
              </Link>
            </div>

            {/* Trust line */}
            <p className={`text-sm mt-6 ${dark ? 'text-paper/40' : 'text-ink/50'}`}>
              Free consultation · No commitment · Results guaranteed or we work for free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
