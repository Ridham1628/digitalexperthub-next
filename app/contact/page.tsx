import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import ContactFormSection from '@/components/sections/ContactFormSection'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us — Get a Free Strategy Call',
  description: 'Contact Digital Expert Hub for a free 30-minute strategy call. We\'ll analyse your digital presence and show you exactly how to grow your business online.',
  path: '/contact',
})

const breadcrumbs = [
  { name: 'Home', href: siteConfig.url },
  { name: 'Contact', href: `${siteConfig.url}/contact` },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="wrap relative z-10 text-center">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="text-display-xl font-display font-bold text-paper mb-6 max-w-3xl mx-auto">
            Let&apos;s talk about{' '}
            <span className="font-serif italic text-lime">growing your business</span>
          </h1>
          <p className="text-lg text-paper/65 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Phone / WhatsApp</p>
                    <a href="tel:+917986713605" className="text-paper/70 hover:text-lime transition-colors">+91 79867 13605</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-paper mb-1">Email</p>
                    <a href="mailto:info@digitalexperthub.com" className="text-paper/70 hover:text-lime transition-colors">info@digitalexperthub.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
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
                  <div className="w-12 h-12 bg-lime/10 border border-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
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
                <div className="space-y-3">
                  {[
                    'We respond within 2 business hours',
                    'Schedule a free 30-min strategy call',
                    'We analyse your current digital presence',
                    'You receive a custom growth proposal',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-lime/20 text-lime rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-paper/70">{s}</span>
                    </div>
                  ))}
                </div>
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
