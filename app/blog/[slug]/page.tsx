import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { constructMetadata } from '@/lib/metadata'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

// Sample post data — in production, fetch from CMS/DB
const posts: Record<string, {
  slug: string
  category: string
  title: string
  description: string
  content: string
  date: string
  modifiedDate?: string
  readTime: number
  author: string
  tags: string[]
  related: string[]
}> = {
  'seo-guide-2025': {
    slug: 'seo-guide-2025',
    category: 'SEO',
    title: 'The Complete SEO Guide for 2025: How to Rank #1 on Google',
    description: 'Everything you need to know about modern SEO — technical foundations, keyword research, link building and content strategy that works in 2025.',
    content: `
## What is SEO in 2025?

Search Engine Optimisation (SEO) in 2025 is the practice of optimising your website and online presence to rank higher in search engine results pages (SERPs), primarily Google.

With over 8.5 billion searches per day on Google, appearing at the top of relevant searches is one of the most valuable things any business can do for long-term growth.

## The 4 Pillars of Modern SEO

### 1. Technical SEO
Your website's technical foundation must be solid before any other SEO work will have maximum impact.

Key technical SEO priorities in 2025:
- **Core Web Vitals** — LCP, FID/INP, and CLS must meet Google's thresholds
- **Mobile-first indexing** — Your mobile site is what Google primarily indexes
- **Page speed** — Aim for sub-2-second load times
- **HTTPS** — Non-negotiable for trust and rankings
- **Structured data** — Schema markup for rich results

### 2. On-Page SEO
Every page on your site should be optimised for a primary keyword and supporting semantically related terms.

On-page SEO checklist:
- One H1 containing your primary keyword
- Natural keyword usage in the first 100 words
- Descriptive, click-worthy meta title and description
- Internal links to relevant pages
- Optimised images with alt text

### 3. Content Strategy
Google's helpful content system rewards websites that produce genuinely useful, authoritative content for their target audience.

In 2025, great content means:
- Comprehensive coverage of the topic
- First-hand expertise and experience (EEAT)
- Clear, readable formatting
- Answering the full search intent

### 4. Link Building
Backlinks remain one of Google's most powerful ranking factors. The quality of links pointing to your site signals authority to Google.

Effective link building in 2025:
- Digital PR and brand mentions
- Guest posting on authoritative sites
- Building linkable assets (studies, tools, guides)
- Broken link building

## Keyword Research in 2025

Start every SEO campaign with thorough keyword research. Focus on:

1. **Search intent** — Informational, navigational, commercial or transactional?
2. **Search volume** — How many people search for this per month?
3. **Keyword difficulty** — How hard is it to rank?
4. **Business relevance** — Will ranking for this bring qualified traffic?

### Tools for Keyword Research
- Ahrefs
- Semrush
- Google Search Console
- Google Keyword Planner

## Local SEO

For businesses with a physical location, local SEO is crucial. Key local SEO factors:

- **Google Business Profile** — Fully optimised with photos, posts and reviews
- **NAP consistency** — Same Name, Address, Phone across all directories
- **Local keywords** — Target "[service] in [city]" keywords
- **Reviews** — Build a strong review profile (aim for 4.5+ stars)

## Measuring SEO Success

Track these key metrics:

- **Organic traffic** (Google Analytics 4)
- **Keyword rankings** (Ahrefs / Semrush)
- **Click-through rate** (Google Search Console)
- **Conversions from organic traffic** (GA4)
- **Domain Rating / Authority** (Ahrefs)

## Conclusion

SEO in 2025 is about building a genuinely authoritative, technically excellent website that serves users better than the competition. Focus on creating value, fix the technical foundation, build authority through links, and be patient — SEO is a long-term investment with compounding returns.

Need help with your SEO strategy? [Book a free consultation](/contact) with our team.
    `,
    date: '2025-01-15',
    modifiedDate: '2025-01-15',
    readTime: 12,
    author: 'Ridham Singh',
    tags: ['SEO', 'Digital Marketing', 'Google', '2025 Guide'],
    related: ['local-seo-guide', 'technical-seo-checklist'],
  },
  'google-ads-roi': {
    slug: 'google-ads-roi',
    category: 'Google Ads',
    title: 'How to Maximise Google Ads ROI: 10 Proven Strategies',
    description: 'Stop burning money on Google Ads. These 10 battle-tested strategies will help you get more leads and sales for less spend.',
    content: `
## Why Most Google Ads Campaigns Underperform

Most businesses launch Google Ads campaigns, spend thousands of rupees, and see disappointing results. The #1 reason: poor account structure and setup.

Here are 10 proven strategies to dramatically improve your Google Ads ROI.

## 1. Get Your Campaign Structure Right

A well-structured account makes everything easier to optimise. Use the SKAG (Single Keyword Ad Group) or STAG (Single Theme Ad Group) structure depending on your scale.

## 2. Master Negative Keywords

Negative keywords prevent your ads from showing for irrelevant searches. This is one of the fastest ways to reduce wasted spend.

Start with obvious negatives like "free", "jobs", "how to" for commercial campaigns.

## 3. Use All Available Ad Extensions

Ad extensions (now called "assets") increase your ad's real estate on the SERP and improve CTR with no extra cost per click.

Use: Sitelinks, Callouts, Call extensions, Location extensions, Lead forms.

## 4. Target the Right Match Types

In 2025, Exact Match and Phrase Match are your safest options for high-intent campaigns. Broad Match works well with Smart Bidding on mature accounts.

## 5. Optimise Your Landing Pages

Your landing page is where the conversion happens. A 1% improvement in landing page conversion rate can double your leads.

## 6. Use Conversion Tracking Properly

You can't optimise what you can't measure. Set up GA4 conversion tracking for every meaningful action — form submissions, calls, purchases.

## 7. Leverage Smart Bidding

Once you have sufficient conversion data (50+ conversions in 30 days), switch to Target CPA or Target ROAS smart bidding.

## 8. Implement Remarketing

Remarketing targets people who have already visited your website. These audiences convert at 2–3× the rate of cold traffic.

## 9. Run Regular Search Term Reports

Review your search terms weekly. Find new negative keywords, discover new keywords to add, and understand how Google is matching your ads.

## 10. A/B Test Your Ads

Always have 2–3 ad variations running per ad group. Test different headlines, descriptions and CTAs. Let data decide what wins.

## Conclusion

Google Ads can deliver exceptional ROI when managed correctly. The key is constant testing, rigorous tracking and a willingness to cut what isn't working.

[Book a free Google Ads audit](/contact) to see where your campaigns can improve.
    `,
    date: '2025-01-08',
    readTime: 8,
    author: 'Amit Verma',
    tags: ['Google Ads', 'PPC', 'ROI', 'Digital Marketing'],
    related: ['seo-guide-2025', 'local-seo-guide'],
  },
}

// For all other slugs, we generate a placeholder
const defaultPost = (slug: string) => ({
  slug,
  category: 'Digital Marketing',
  title: `Digital Marketing Guide: ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
  description: 'Comprehensive guide from Digital Expert Hub on the latest digital marketing strategies.',
  content: `## Introduction\n\nThis is a comprehensive guide on ${slug.replace(/-/g, ' ')}. Our team at Digital Expert Hub covers everything you need to know to succeed with this strategy.\n\n## Key Concepts\n\nDigital marketing is constantly evolving. Stay ahead with data-driven strategies and continuous optimisation.\n\n## Conclusion\n\n[Book a free strategy call](/contact) to discuss how we can help your business grow online.`,
  date: '2025-01-01',
  readTime: 8,
  author: 'Digital Expert Hub Team',
  tags: ['Digital Marketing'],
  related: ['seo-guide-2025', 'google-ads-roi'],
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug] ?? defaultPost(slug)
  return constructMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug] ?? defaultPost(slug)

  const url = `${siteConfig.url}/blog/${slug}`
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url },
  ]

  // Convert simple markdown-like content to paragraphs
  const contentSections = post.content.trim().split('\n\n').filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: post.title, description: post.description, url, datePublished: post.date, authorName: post.author })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-12 lg:pt-36 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-paper/40 font-display mb-8">
            <Link href="/" className="hover:text-lime">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-lime">Blog</Link>
            <span>/</span>
            <span className="text-paper/70 truncate max-w-xs">{post.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-lime/10 border border-lime/20 text-lime rounded-full text-xs font-display font-bold uppercase tracking-wider mb-4">
            {post.category}
          </span>
          <h1 className="text-display-lg font-display font-bold text-paper mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-paper/50">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section bg-paper">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <div className="prose prose-slate max-w-none">
              {contentSections.map((section, i) => {
                if (section.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-display font-bold text-ink mt-10 mb-4">{section.slice(3)}</h2>
                }
                if (section.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-display font-bold text-ink mt-8 mb-3">{section.slice(4)}</h3>
                }
                if (section.startsWith('- ')) {
                  const items = section.split('\n').filter(l => l.startsWith('- '))
                  return <ul key={i} className="list-disc pl-6 space-y-1 my-4">{items.map((item, j) => <li key={j} className="text-ink/70" dangerouslySetInnerHTML={{ __html: item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-lime-deep hover:underline">$1</a>') }} />)}</ul>
                }
                return <p key={i} className="text-ink/70 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-lime-deep hover:underline">$1</a>') }} />
              })}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Author */}
              <div className="bg-paper-2 rounded-3xl p-6 border border-ink/8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-ink text-lime flex items-center justify-center font-display font-bold">
                    {post.author.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-ink text-sm">{post.author}</p>
                    <p className="text-xs text-ink/50">Digital Marketing Expert</p>
                  </div>
                </div>
                <p className="text-xs text-ink/60 leading-relaxed">7+ years of experience helping businesses grow online with proven digital marketing strategies.</p>
              </div>

              {/* Tags */}
              <div className="bg-paper-2 rounded-3xl p-6 border border-ink/8">
                <p className="font-display font-bold text-ink mb-3 text-sm">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-ink/8 rounded-full text-xs font-display font-semibold text-ink/70">{t}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-ink rounded-3xl p-6 text-center">
                <p className="text-sm font-display font-bold text-paper mb-2">Need help implementing this?</p>
                <p className="text-xs text-paper/60 mb-4">Book a free 30-min strategy call.</p>
                <Link href="/contact" className="btn btn-lime w-full justify-center text-sm">Free Strategy Call →</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {post.related.length > 0 && (
        <section className="section-sm bg-paper border-t border-ink/10">
          <div className="wrap">
            <h2 className="text-display-sm font-display font-bold text-ink mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {post.related.slice(0, 2).map((relSlug) => {
                const relPost = posts[relSlug]
                if (!relPost) return null
                return (
                  <Link key={relSlug} href={`/blog/${relSlug}`} className="group flex flex-col bg-paper-2 rounded-3xl p-6 border border-ink/8 hover:border-lime/30 hover:-translate-y-1 transition-all">
                    <span className="px-2.5 py-0.5 bg-lime/10 text-lime-deep rounded-full text-xs font-display font-bold uppercase tracking-wide self-start mb-3">{relPost.category}</span>
                    <h3 className="font-display font-bold text-ink group-hover:text-lime-deep transition-colors leading-snug">{relPost.title}</h3>
                    <span className="text-sm font-display font-semibold text-lime-deep mt-3">Read more →</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  )
}
