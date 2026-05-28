import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = constructMetadata({
  title: 'Client Testimonials & Reviews',
  description: 'Read real reviews and testimonials from businesses that have grown with Digital Expert Hub\'s digital marketing services. Rated 4.9 stars from 40+ verified reviews.',
  path: '/testimonials',
})

const testimonials = [
  { name: 'Rajiv Sharma', role: 'Founder, TechSpark Solutions', rating: 5, result: '+340% organic traffic', industry: 'SaaS', quote: 'Digital Expert Hub transformed our online presence completely. Our organic traffic increased by 340% in just 6 months. Their SEO team is exceptional — they truly understand what drives results.' },
  { name: 'Priya Malhotra', role: 'Marketing Head, StyleHive', rating: 5, result: '6.5x ROAS', industry: 'E-commerce', quote: 'We\'ve tried 3 agencies before. The difference is night and day. They\'re data-obsessed and genuinely care about our growth. Our ROAS went from 2x to 6.5x.' },
  { name: 'Dr. Amit Gupta', role: 'Medical Director, MedCare Clinic', rating: 5, result: '#1 local ranking', industry: 'Healthcare', quote: 'Within 4 months, we\'re now the top result for all major keywords in our city. New patient inquiries have tripled.' },
  { name: 'Deepika Singh', role: 'E-commerce Director, CraftBazaar', rating: 5, result: '9x revenue growth', industry: 'E-commerce', quote: 'Our Shopify store went from ₹2L to ₹18L monthly revenue in one year. Their combined SEO + Google Ads strategy was the game-changer.' },
  { name: 'Suresh Nair', role: 'Partner, GreenLaw Associates', rating: 5, result: '30 leads/month', industry: 'Law', quote: 'They understand the law firm marketing landscape. We now generate 25-30 qualified leads per month. Worth every rupee.' },
  { name: 'Anita Joshi', role: 'Owner, Aroma Café Chain', rating: 5, result: '3× footfall increase', industry: 'F&B', quote: 'Our local SEO results have been incredible. All three of our café locations now rank on Google Maps and we\'ve seen a 3x increase in customer footfall from online search.' },
  { name: 'Vikram Patel', role: 'CEO, BuildSmart Construction', rating: 5, result: '50+ leads/month', industry: 'Construction', quote: 'Before Digital Expert Hub, we were getting maybe 5 online inquiries a month. Now we\'re getting 50+. Our entire lead generation is now online and it\'s more qualified than ever.' },
  { name: 'Neha Agarwal', role: 'Founder, FitLife Studios', rating: 5, result: '5x membership growth', industry: 'Fitness', quote: 'Their social media strategy completely transformed our gym\'s online presence. We went from 200 to 1,000+ Instagram followers in 3 months, and our membership enquiries 5x\'d.' },
  { name: 'Rohit Khanna', role: 'MD, Khanna Exports', rating: 5, result: '200% more B2B inquiries', industry: 'Manufacturing', quote: 'The LinkedIn B2B strategy and SEO work has opened up international markets we never thought possible. International inquiries have increased by 200%.' },
  { name: 'Savita Mehra', role: 'Principal, Sunrise Academy', rating: 5, result: '100 new admissions', industry: 'Education', quote: 'Digital Expert Hub helped us fill our institution with 100 extra admissions this year through Google Ads and local SEO. Their team is responsive, professional and genuinely committed.' },
  { name: 'Arjun Dev', role: 'Founder, DevTech Startup', rating: 5, result: '10k+ app downloads', industry: 'Tech', quote: 'They built our entire digital marketing strategy from scratch. From zero digital presence to 10,000+ app downloads in 4 months. Absolutely phenomenal work.' },
  { name: 'Kavya Reddy', role: 'Owner, KR Interior Design', rating: 5, result: '4× portfolio enquiries', industry: 'Design', quote: 'Our portfolio website and SEO has us ranking for design keywords in Hyderabad. Enquiries have quadrupled and the quality of leads is so much better.' },
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Client Success Stories</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Real results from{' '}
            <span className="font-serif italic text-lime">real businesses</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lime text-2xl">★</span>)}
          </div>
          <p className="text-paper/65 text-lg">Rated 4.9 out of 5 from 40+ verified client reviews</p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="break-inside-avoid bg-paper-2 rounded-3xl p-7 border border-ink/8 mb-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-lime">★</span>)}
                </div>
                <blockquote className="text-ink/80 text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-lime/15 border border-lime/20 rounded-full text-xs font-display font-bold text-lime-deep">
                    {t.result}
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-ink/8">
                  <span className="text-xs text-ink/40 font-display uppercase tracking-wide">{t.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to become our next success story?"
        subtitle="Join 1,000+ businesses that trust Digital Expert Hub to grow their online presence."
      />
    </>
  )
}
