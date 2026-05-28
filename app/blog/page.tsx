import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Tips & SEO Insights',
  description: 'Read expert digital marketing tips, SEO guides, Google Ads strategies & content marketing insights. Stay ahead with the latest trends from Digital Expert Hub.',
  path: '/blog',
})

const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Content Marketing', 'Technical SEO', 'Web Design', 'Email Marketing']

const posts = [
  { slug: 'seo-guide-2025', category: 'SEO', title: 'The Complete SEO Guide for 2025: How to Rank #1 on Google', excerpt: 'Everything you need to know about modern SEO — technical foundations, keyword research, link building and content strategy that works in 2025.', date: '2025-01-15', readTime: 12, featured: true, image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=900&h=500&q=80&auto=format&fit=crop' },
  { slug: 'google-ads-roi', category: 'Google Ads', title: 'How to Maximise Google Ads ROI: 10 Proven Strategies', excerpt: 'Stop burning money on Google Ads. These 10 strategies will help you get more leads and sales for less spend.', date: '2025-01-08', readTime: 8, featured: false, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'local-seo-guide', category: 'SEO', title: 'Local SEO in 2025: The Complete Guide to Dominating Your City', excerpt: 'A step-by-step local SEO guide for businesses that want to outrank competitors in local search and Google Maps.', date: '2024-12-20', readTime: 10, featured: false, image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'content-marketing-strategy', category: 'Content Marketing', title: 'Content Marketing Strategy: How to Build an Organic Traffic Machine', excerpt: 'The exact content marketing framework we use to drive 10x organic traffic growth for our clients in 12 months.', date: '2024-12-10', readTime: 15, featured: false, image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'technical-seo-checklist', category: 'Technical SEO', title: 'Technical SEO Checklist 2025: 50 Must-Fix Issues', excerpt: 'A comprehensive technical SEO checklist covering Core Web Vitals, crawlability, indexation and schema markup.', date: '2024-11-28', readTime: 20, featured: false, image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'social-media-marketing-tips', category: 'Social Media', title: 'Social Media Marketing in 2025: What Actually Works', excerpt: 'Cut through the noise. These social media marketing strategies are generating real results for businesses right now.', date: '2024-11-15', readTime: 9, featured: false, image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'email-marketing-automation', category: 'Email Marketing', title: 'Email Marketing Automation: 7 Sequences Every Business Needs', excerpt: 'The 7 email automation sequences that drive the most revenue — and exactly how to build each one.', date: '2024-11-05', readTime: 11, featured: false, image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'shopify-seo-guide', category: 'SEO', title: 'Shopify SEO Guide: How to Rank Your Store on Google', excerpt: 'The complete guide to Shopify SEO — from technical setup to product page optimisation and link building.', date: '2024-10-22', readTime: 14, featured: false, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&q=80&auto=format&fit=crop' },
  { slug: 'website-design-conversion', category: 'Web Design', title: 'Website Design for Conversions: 15 Principles That Actually Work', excerpt: 'Design your website to convert, not just impress. These 15 CRO-backed design principles will increase your leads.', date: '2024-10-10', readTime: 10, featured: false, image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&q=80&auto=format&fit=crop' },
]

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">The Blog</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Digital Marketing Insights &amp;{' '}
            <span className="font-serif italic text-lime">Actionable Strategies</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
            Expert guides, proven strategies and industry insights from our team of digital marketing specialists.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-paper border-b border-ink/10">
        <div className="wrap">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-wider transition-colors ${
                  cat === 'All'
                    ? 'bg-ink text-paper'
                    : 'bg-paper-2 text-ink/70 hover:bg-ink hover:text-paper border border-ink/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          {/* Featured Post */}
          {featured && (
            <div className="mb-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-0 bg-ink rounded-4xl overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="h-72 lg:h-auto bg-gradient-to-br from-forest to-ink relative overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-lime text-ink rounded-full text-xs font-display font-bold">
                      Featured · {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-paper mb-4 group-hover:text-lime transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-paper/65 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-paper/65">
                    <span>{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>{featured.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* All Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-paper-2 rounded-3xl overflow-hidden border border-ink/6 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 bg-gradient-to-br from-ink to-forest relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-lime text-ink rounded-full text-xs font-display font-bold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-ink text-base leading-snug mb-3 group-hover:text-lime-deep transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink/60 leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink/8 text-xs text-ink/65">
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want digital marketing tips in your inbox?"
        subtitle="Subscribe to our newsletter and get actionable SEO, PPC and content marketing insights every week."
        primaryLabel="Subscribe Free"
        primaryHref="/contact"
        secondaryLabel="View All Topics"
        secondaryHref="/blog"
      />
    </>
  )
}
