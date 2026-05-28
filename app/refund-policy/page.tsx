import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = constructMetadata({
  title: 'Refund & Cancellation Policy',
  description: 'Read Digital Expert Hub\'s refund and cancellation policy for digital marketing services. Transparent terms with no hidden clauses.',
  path: '/refund-policy',
})

const sections = [
  {
    title: 'Service Commitment',
    content:
      'At Digital Expert Hub, we are deeply committed to delivering measurable results. Before any engagement begins, we align on clear goals, timelines and deliverables. Our refund policy reflects our confidence in the quality of work we produce.',
  },
  {
    title: 'Monthly Retainer Services',
    content:
      'For monthly retainer-based services (SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing), clients may cancel with 30 days written notice. No refunds are provided for work already completed or for the current billing month. Cancellation requests must be submitted by email to info@digitalexperthub.com.',
  },
  {
    title: 'Project-Based Services',
    content:
      'For fixed-scope project services (Website Design, Website Development, Branding, Landing Pages), payments made for completed project milestones are non-refundable. If a project is cancelled before a milestone is reached, a prorated refund may be issued for work not yet started, at our discretion.',
  },
  {
    title: 'Onboarding & Setup Fees',
    content:
      'One-time onboarding and setup fees are non-refundable as they cover initial research, strategy development, account setup and resource allocation that occur at the start of each engagement.',
  },
  {
    title: 'Refund Eligibility',
    content:
      'Refunds may be considered on a case-by-case basis in situations where: (a) Digital Expert Hub is unable to deliver the agreed services due to circumstances within our control; (b) a duplicate payment has been made in error; or (c) a service was paid for but never commenced. Refund requests must be submitted within 14 days of the billing date.',
  },
  {
    title: 'How to Request a Refund',
    content:
      'To request a refund or cancellation, please email info@digitalexperthub.com with your name, company name, invoice number and reason for the request. We aim to respond within 3 business days and process approved refunds within 7–10 business days.',
  },
  {
    title: 'Ad Spend & Third-Party Costs',
    content:
      'Any funds spent on advertising platforms (Google Ads, Meta Ads, LinkedIn Ads, etc.) are managed on your behalf and are not refundable by Digital Expert Hub, as these are direct costs paid to third-party platforms. We always operate with full transparency on ad spend.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We reserve the right to update this policy at any time. Changes will be communicated via email and posted on this page. Continued use of our services after changes constitutes acceptance of the updated terms.',
  },
]

export default function RefundPolicyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="wrap max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-ink/65">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li className="text-ink" aria-current="page">Refund Policy</li>
          </ol>
        </nav>

        <h1 className="text-display-lg font-display font-bold text-ink mb-4">Refund & Cancellation Policy</h1>
        <p className="text-ink/65 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-paper-2 rounded-2xl p-7 border border-ink/6">
              <h2 className="text-lg font-display font-bold text-ink mb-3">{s.title}</h2>
              <p className="text-ink/70 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-ink rounded-2xl text-center">
          <p className="text-paper/70 text-sm mb-3">Questions about our refund policy?</p>
          <Link
            href="/contact"
            className="btn btn-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
