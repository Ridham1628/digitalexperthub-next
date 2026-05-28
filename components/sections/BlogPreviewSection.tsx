import Link from 'next/link'

const posts = [
  {
    slug: 'seo-guide-2025',
    category: 'SEO',
    title: 'The Complete SEO Guide for 2025: Rank #1 on Google',
    excerpt: 'Everything you need to know about modern SEO — from technical foundations to link building strategies that actually work in 2025.',
    date: '2025-01-15',
    readTime: 12,
  },
  {
    slug: 'google-ads-roi',
    category: 'Google Ads',
    title: 'How to Maximise Google Ads ROI: 10 Proven Strategies',
    excerpt: 'Stop burning money on Google Ads. These 10 battle-tested strategies will help you get more leads and sales for less spend.',
    date: '2025-01-08',
    readTime: 8,
  },
  {
    slug: 'local-seo-tips',
    category: 'Local SEO',
    title: 'Local SEO in 2025: How to Dominate Your City',
    excerpt: 'A step-by-step guide to outranking competitors in local search results and filling your calendar with local customers.',
    date: '2024-12-20',
    readTime: 10,
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="section bg-paper" id="blog">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime-deep mb-3">
              From The Blog
            </p>
            <h2 className="text-display-md font-display font-bold text-ink">
              Insights &amp; strategies from our team
            </h2>
          </div>
          <Link href="/blog" className="btn btn-ghost-light shrink-0">
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-paper-2 rounded-3xl overflow-hidden border border-ink/6 hover:border-lime/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-ink to-forest relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-lime text-ink rounded-full text-xs font-display font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-ink text-base leading-snug mb-3 group-hover:text-lime-deep transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink/8">
                  <span className="text-xs text-ink/40 font-display">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="text-xs text-ink/40 font-display">{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
