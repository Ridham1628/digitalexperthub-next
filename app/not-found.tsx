import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — Digital Expert Hub',
  description: 'The page you\'re looking for could not be found. Return to the Digital Expert Hub homepage.',
}

const quickLinks = [
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Website Design', href: '/services/website-design' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '/about' },
]

export default function NotFound() {
  return (
    <section className="min-h-screen bg-ink flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 */}
        <div className="relative inline-block mb-8">
          <span className="text-[10rem] font-display font-bold text-white/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-20 h-20 text-lime/30">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        <h1 className="text-display-md font-display font-bold text-paper mb-4">
          Page not found
        </h1>
        <p className="text-paper/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Don&apos;t worry —
          let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link href="/" className="btn btn-lime btn-lg">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn btn-ghost-dark btn-lg">
            Get Free Consultation
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-paper/60 mb-5">
            You might be looking for
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-display font-medium text-paper/70 hover:bg-lime hover:text-ink hover:border-lime transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
