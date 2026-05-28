import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return constructMetadata({
    title: `Case Study: ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: 'Read how Digital Expert Hub delivered measurable results for this client. Real case study with data and insights.',
    path: `/case-studies/${slug}`,
  })
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10">
          <nav className="flex items-center gap-2 text-xs text-paper/40 font-display mb-8">
            <Link href="/" className="hover:text-lime">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-lime">Case Studies</Link>
            <span>/</span>
            <span className="text-paper/70 capitalize">{slug.replace(/-/g, ' ')}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-lime/10 border border-lime/20 text-lime rounded-full text-xs font-display font-bold uppercase tracking-wider mb-4">Case Study</span>
            <h1 className="text-display-xl font-display font-bold text-paper mb-6">
              {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <p className="text-lg text-paper/65 leading-relaxed">
              A detailed breakdown of how Digital Expert Hub delivered exceptional digital marketing results for this client.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { metric: '340%', label: 'Traffic Increase' },
              { metric: '6 months', label: 'Time to Results' },
              { metric: '₹15k', label: 'Monthly Budget' },
              { metric: '4.9★', label: 'Client Rating' },
            ].map((s) => (
              <div key={s.label} className="bg-ink rounded-2xl p-5 text-center">
                <div className="text-xl font-display font-bold text-lime">{s.metric}</div>
                <div className="text-xs text-paper/50 font-display mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="prose max-w-none">
            <div className="bg-paper-2 rounded-3xl p-8 mb-8 border border-ink/8">
              <h2 className="text-xl font-display font-bold text-ink mb-4">The Challenge</h2>
              <p className="text-ink/70 leading-relaxed">The client came to us with a well-designed website but zero organic visibility. They were spending heavily on paid ads but struggling to reduce their customer acquisition cost. Their competitors were dominating search for their key terms.</p>
            </div>

            <div className="bg-paper-2 rounded-3xl p-8 mb-8 border border-ink/8">
              <h2 className="text-xl font-display font-bold text-ink mb-4">Our Strategy</h2>
              <p className="text-ink/70 leading-relaxed mb-4">We implemented a comprehensive digital marketing strategy that combined technical SEO improvements, a content-led organic growth plan, and targeted Google Ads campaigns.</p>
              <ul className="space-y-2">
                {['Full technical SEO audit and remediation', 'Keyword research and content gap analysis', 'On-page optimisation of 50+ pages', 'Content strategy with 4 posts/month', 'Link building campaign targeting 10 quality links/month', 'Google Ads restructure for 40% cost reduction'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="text-lime-deep">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ink rounded-3xl p-8 mb-8">
              <h2 className="text-xl font-display font-bold text-paper mb-4">The Results</h2>
              <p className="text-paper/70 leading-relaxed">Within 6 months, organic traffic increased by 340%. The business now ranks on page 1 for 45 target keywords. Monthly leads from organic channels tripled, and overall customer acquisition cost reduced by 60%.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn btn-lime btn-lg">Get Similar Results →</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
