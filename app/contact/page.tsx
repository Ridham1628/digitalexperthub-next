import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import ContactFormSection from '@/components/sections/ContactFormSection'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us — Free Strategy Call',
  description: "Book a free 30-minute digital marketing strategy call with Digital Expert Hub. We'll analyse your business and show you exactly how to grow online. Call now.",
  path: '/contact',
})

const breadcrumbs = [
  { name: 'Home', href: siteConfig.url },
  { name: 'Contact', href: `${siteConfig.url}/contact` },
]

const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 bg-ink overflow-hidden" aria-labelledby="contact-h1">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" aria-hidden="true" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 id="contact-h1" className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Let&apos;s talk about{' '}
            <span className="font-serif italic text-lime">growing your business</span>
          </h1>
          <p className="text-lg text-paper/70 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll review your current digital presence and show you exactly what it would take to grow your business online.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-ink">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="text-display-md font-display font-bold text-paper mb-8">
                How can we help you?
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-lime">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Phone / WhatsApp</p>
                    <a href="tel:+917986605418" className="text-paper/70 hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">+91 79866 05418</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-lime">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Email</p>
                    <a href="mailto:info@digitalexperthub.com" className="text-paper/70 hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">info@digitalexperthub.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-lime">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Office</p>
                    <p className="text-paper/70 text-sm leading-relaxed">
                      House No. 785, Street No. 7, Master Colony,<br />
                      Santokh Nagar, Shivpuri, Ludhiana,<br />
                      Punjab 141008, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-lime">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Business Hours</p>
                    <p className="text-paper/70 text-sm">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-forest/40 border border-white/10 rounded-3xl p-6">
                <p className="font-display font-bold text-paper mb-4">What happens after you contact us:</p>
                <ol className="space-y-3" aria-label="Next steps after contact">
                  {[
                    'We respond within 2 business hours',
                    'Schedule a free 30-min strategy call',
                    'We analyse your current digital presence',
                    'You receive a custom growth proposal',
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-lime/20 text-lime rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="text-sm text-paper/70">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <ContactFormSection />
          </div>
        </div>
      </section>
    </>
  )
}
