import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    slug: 'seo-guide-2025',
    category: 'SEO',
    title: 'The Complete SEO Guide for 2025: Rank #1 on Google',
    excerpt: 'Everything you need to know about modern SEO — from technical foundations to link building strategies that actually work in 2025.',
    date: '2025-01-15',
    readTime: 12,
    featured: true,
    image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=900&h=500&q=80&auto=format&fit=crop',
    accent: 'from-lime/25 via-lime/8 to-forest/40',
    accentDot: 'bg-lime',
  },
  {
    slug: 'google-ads-roi',
    category: 'Google Ads',
    title: 'How to Maximise Google Ads ROI: 10 Proven Strategies',
    excerpt: 'Stop burning money on Google Ads. These 10 battle-tested strategies will help you get more leads for less spend.',
    date: '2025-01-08',
    readTime: 8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&q=80&auto=format&fit=crop',
    accent: 'from-blue-500/20 via-blue-500/8 to-forest/40',
    accentDot: 'bg-blue-400',
  },
  {
    slug: 'local-seo-tips',
    category: 'Local SEO',
    title: 'Local SEO in 2025: How to Dominate Your City',
    excerpt: 'A step-by-step guide to outranking local competitors and filling your calendar with customers.',
    date: '2024-12-20',
    readTime: 10,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&q=80&auto=format&fit=crop',
    accent: 'from-orange-500/20 via-orange-500/8 to-forest/40',
    accentDot: 'bg-orange-400',
  },
]

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPreviewSection() {
  const [featured, ...rest] = posts

  return (
    <section className="section bg-ink" id="blog" aria-labelledby="blog-heading">
      <div className="wrap">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lime mb-3">
              From The Blog
            </p>
            <h2 id="blog-heading" className="text-display-md font-display font-bold text-paper">
              Insights &amp;{' '}
              <span className="font-serif italic text-lime">strategies</span>{' '}
              from our team
            </h2>
          </div>
          <Link href="/blog" className="btn btn-ghost-dark shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            View All Posts
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Magazine grid: featured 2/3 + stack 1/3 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Featured post — spans 2 cols */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group lg:col-span-2 flex flex-col bg-forest/30 border border-white/10 rounded-3xl overflow-hidden hover:border-lime/30 hover:shadow-[0_8px_48px_rgba(200,242,80,0.08)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {/* Visual header */}
            <div className={`h-56 sm:h-64 lg:h-72 bg-gradient-to-br ${featured.accent} relative overflow-hidden`}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="px-3 py-1.5 bg-lime text-ink rounded-full text-xs font-display font-bold uppercase tracking-wide">
                  {featured.category}
                </span>
                <span className="text-xs text-paper/60 font-display bg-ink/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {featured.readTime} min read
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <h3 className="font-display font-bold text-paper text-xl lg:text-2xl leading-snug mb-3 group-hover:text-lime transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-paper/65 text-sm leading-relaxed flex-1 mb-4">{featured.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <span className="text-xs text-paper/65 font-display">{formatDate(featured.date)}</span>
                <span className="text-sm font-display font-semibold text-lime flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                  Read Article
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary posts — stack in 1 col */}
          <div className="flex flex-col gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row lg:flex-col bg-forest/30 border border-white/10 rounded-3xl overflow-hidden hover:border-lime/30 hover:shadow-[0_4px_32px_rgba(200,242,80,0.07)] transition-all duration-300 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {/* Compact visual */}
                <div className={`h-32 sm:h-auto sm:w-36 lg:w-auto lg:h-32 shrink-0 bg-gradient-to-br ${post.accent} relative overflow-hidden`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 144px, 144px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`w-2 h-2 rounded-full ${post.accentDot} inline-block`} aria-hidden="true" />
                    <span className="ml-1.5 px-2 py-0.5 bg-white/10 text-paper rounded-full text-[10px] font-display font-bold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-paper text-sm leading-snug mb-2 group-hover:text-lime transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-paper/60 text-xs leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/8">
                    <span className="text-[11px] text-paper/65 font-display">{formatDate(post.date)}</span>
                    <span className="text-[11px] text-paper/50 font-display ml-auto">{post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
