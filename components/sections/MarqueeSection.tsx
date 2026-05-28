const brands = [
  'Google Partner',
  'Meta Business Partner',
  'Semrush Certified',
  'HubSpot Partner',
  'Shopify Experts',
  'WordPress Experts',
  'Mailchimp Partner',
  'Ahrefs Certified',
  'Google Analytics 4',
  'Facebook Blueprint',
]

export default function MarqueeSection() {
  return (
    <section className="py-8 border-y border-white/8 overflow-hidden bg-forest/30">
      <p className="text-center text-xs font-display font-bold uppercase tracking-[0.2em] text-paper/40 mb-6">
        Trusted Tools &amp; Partnerships
      </p>
      <div className="relative flex overflow-hidden gap-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track 1 */}
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center mx-6 px-6 py-3 rounded-full border border-white/10 bg-white/3 text-sm font-display font-semibold text-paper/60 shrink-0"
            >
              <span className="text-lime mr-2">✦</span>
              {b}
            </div>
          ))}
        </div>
        {/* Track 2 (duplicate for infinite) */}
        <div className="flex animate-marquee whitespace-nowrap shrink-0" aria-hidden="true">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center mx-6 px-6 py-3 rounded-full border border-white/10 bg-white/3 text-sm font-display font-semibold text-paper/60 shrink-0"
            >
              <span className="text-lime mr-2">✦</span>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
