const certs = [
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

const wins = [
  '+340% Traffic · TechSpark',
  '9× Revenue · CraftBazaar',
  '#1 Local Rank · MedCare',
  '30 Leads/Mo · GreenLaw',
  '6.5× ROAS · StyleHive',
  '60% Lower CAC',
  '1,200 Keywords Ranked',
  '+₹16L Revenue Added',
]

export default function MarqueeSection() {
  return (
    <div className="border-y border-white/8 overflow-hidden bg-ink/90">

      {/* Track 1 — Certifications — left to right */}
      <div className="py-4 border-b border-white/6 relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...certs, ...certs].map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-5 text-xs font-display font-semibold text-paper/55 uppercase tracking-[0.12em] shrink-0"
            >
              <svg viewBox="0 0 8 8" fill="#c8f250" aria-hidden="true" className="w-1.5 h-1.5 shrink-0 opacity-70">
                <circle cx="4" cy="4" r="4" />
              </svg>
              {c}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap shrink-0" aria-hidden="true">
          {[...certs, ...certs].map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-5 text-xs font-display font-semibold text-paper/55 uppercase tracking-[0.12em] shrink-0"
            >
              <svg viewBox="0 0 8 8" fill="#c8f250" aria-hidden="true" className="w-1.5 h-1.5 shrink-0 opacity-70">
                <circle cx="4" cy="4" r="4" />
              </svg>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Center label */}
      <div className="text-center py-2.5 bg-forest/20" aria-hidden="true">
        <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-paper/30">
          Trusted Tools &amp; Client Wins
        </span>
      </div>

      {/* Track 2 — Client wins — right to left */}
      <div className="py-4 border-t border-white/6 relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee-reverse whitespace-nowrap shrink-0">
          {[...wins, ...wins].map((w, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-5 text-xs font-display font-bold text-lime/80 uppercase tracking-[0.1em] shrink-0"
            >
              <svg viewBox="0 0 8 8" fill="currentColor" aria-hidden="true" className="w-1.5 h-1.5 shrink-0">
                <path d="M4 0l4 4-4 4V0z" />
              </svg>
              {w}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap shrink-0" aria-hidden="true">
          {[...wins, ...wins].map((w, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-5 text-xs font-display font-bold text-lime/80 uppercase tracking-[0.1em] shrink-0"
            >
              <svg viewBox="0 0 8 8" fill="currentColor" aria-hidden="true" className="w-1.5 h-1.5 shrink-0">
                <path d="M4 0l4 4-4 4V0z" />
              </svg>
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
