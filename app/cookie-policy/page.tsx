import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = constructMetadata({
  title: 'Cookie Policy',
  description: 'Understand how Digital Expert Hub uses cookies on our website. Learn what data we collect and how to manage your cookie preferences.',
  path: '/cookie-policy',
})

const cookieTypes = [
  {
    type: 'Strictly Necessary Cookies',
    purpose: 'Required for core website functionality',
    examples: 'Session management, CSRF protection, load balancing',
    canOptOut: false,
  },
  {
    type: 'Analytics Cookies',
    purpose: 'Help us understand how visitors interact with our website',
    examples: 'Google Analytics 4 (GA4) — page views, session duration, traffic sources',
    canOptOut: true,
  },
  {
    type: 'Marketing Cookies',
    purpose: 'Used to deliver relevant ads and track campaign performance',
    examples: 'Google Ads remarketing, Meta Pixel, LinkedIn Insight Tag',
    canOptOut: true,
  },
  {
    type: 'Functional Cookies',
    purpose: 'Remember your preferences for a better experience',
    examples: 'Language preference, form autofill, chat widget',
    canOptOut: true,
  },
]

const sections = [
  {
    title: 'What Are Cookies?',
    content:
      'Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently, remember your preferences and provide information to website owners about how users interact with their sites.',
  },
  {
    title: 'How We Use Cookies',
    content:
      'We use cookies to improve your browsing experience, analyse site traffic, personalise content and measure the effectiveness of our marketing campaigns. We do not use cookies to collect personally identifiable information without your explicit consent.',
  },
  {
    title: 'Managing Your Cookie Preferences',
    content:
      'You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete them after the fact. Please note that disabling certain cookies may affect the functionality of our website. To opt out of Google Analytics tracking, you can install the Google Analytics Opt-out Browser Add-on at tools.google.com/dlpage/gaoptout.',
  },
  {
    title: 'Third-Party Cookies',
    content:
      'Some cookies on our site are set by third-party services (e.g. Google, Meta, LinkedIn). These third parties have their own privacy policies and cookie practices, which we recommend you review. We do not control the cookies set by third-party platforms.',
  },
  {
    title: 'Cookie Retention Periods',
    content:
      'Session cookies are deleted when you close your browser. Persistent cookies remain on your device until they expire or are deleted. The retention period varies by cookie type — analytics cookies typically expire after 13 months, while marketing cookies may last up to 2 years.',
  },
  {
    title: 'Updates to This Policy',
    content:
      'We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this page regularly.',
  },
]

export default function CookiePolicyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="wrap max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-ink/65">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li className="text-ink" aria-current="page">Cookie Policy</li>
          </ol>
        </nav>

        <h1 className="text-display-lg font-display font-bold text-ink mb-4">Cookie Policy</h1>
        <p className="text-ink/65 text-sm mb-10">Last updated: January 1, 2025</p>

        {/* Cookie types table */}
        <div className="mb-10 overflow-x-auto rounded-2xl border border-ink/8">
          <table className="w-full text-sm">
            <caption className="sr-only">Types of cookies used on this website</caption>
            <thead>
              <tr className="bg-ink text-paper">
                <th scope="col" className="text-left px-5 py-4 font-display font-semibold text-xs uppercase tracking-wider">Cookie Type</th>
                <th scope="col" className="text-left px-5 py-4 font-display font-semibold text-xs uppercase tracking-wider">Purpose</th>
                <th scope="col" className="text-left px-5 py-4 font-display font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Examples</th>
                <th scope="col" className="text-left px-5 py-4 font-display font-semibold text-xs uppercase tracking-wider">Opt-out</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((ct, i) => (
                <tr key={ct.type} className={i % 2 === 0 ? 'bg-paper' : 'bg-paper-2'}>
                  <td className="px-5 py-4 font-display font-semibold text-ink text-xs">{ct.type}</td>
                  <td className="px-5 py-4 text-ink/70 text-xs">{ct.purpose}</td>
                  <td className="px-5 py-4 text-ink/60 text-xs hidden md:table-cell">{ct.examples}</td>
                  <td className="px-5 py-4">
                    {ct.canOptOut ? (
                      <span className="inline-flex items-center gap-1 text-xs text-lime-deep font-display font-semibold">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="w-3 h-3">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                        Optional
                      </span>
                    ) : (
                      <span className="text-xs text-ink/65 font-display">Required</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Policy sections */}
        <div className="space-y-7">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-display font-bold text-ink mb-3">{s.title}</h2>
              <p className="text-ink/70 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-ink rounded-2xl text-center">
          <p className="text-paper/70 text-sm mb-3">Questions about how we use cookies?</p>
          <Link
            href="/contact"
            className="btn btn-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
