import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'Read the Digital Expert Hub terms and conditions for using our website and digital marketing services.',
  path: '/terms-and-conditions',
})

export default function TermsPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="wrap max-w-3xl mx-auto">
        <h1 className="text-display-lg font-display font-bold text-ink mb-4">Terms &amp; Conditions</h1>
        <p className="text-ink/65 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8">
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and using the Digital Expert Hub website (digitalexperthub.com) and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.',
            },
            {
              title: '2. Services',
              content: 'Digital Expert Hub provides digital marketing services including SEO, Google Ads management, social media marketing, website design and development, content marketing, and related services. Service terms are defined in individual service agreements.',
            },
            {
              title: '3. Client Responsibilities',
              content: 'Clients are responsible for providing accurate information, timely feedback and necessary access to accounts and tools. Clients must ensure they have rights to all materials provided to us.',
            },
            {
              title: '4. Intellectual Property',
              content: 'All content created by Digital Expert Hub for clients (upon full payment) becomes the client\'s property. Our proprietary methodologies, tools and processes remain our intellectual property.',
            },
            {
              title: '5. Payment Terms',
              content: 'Services are invoiced monthly in advance. Payment is due within 7 days of invoice. Late payments may result in service suspension. All prices are in Indian Rupees (INR) and exclusive of applicable taxes.',
            },
            {
              title: '6. Confidentiality',
              content: 'Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business data, strategies, and client information.',
            },
            {
              title: '7. Limitation of Liability',
              content: 'Digital Expert Hub is not liable for indirect, incidental or consequential damages. Our liability is limited to the amount paid for services in the preceding month. We do not guarantee specific search engine rankings.',
            },
            {
              title: '8. Termination',
              content: 'Either party may terminate the agreement with 30 days written notice. Upon termination, all client-owned assets, accounts and data will be transferred to the client.',
            },
            {
              title: '9. Governing Law',
              content: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Ludhiana, Punjab, India.',
            },
            {
              title: '10. Contact',
              content: 'For questions about these Terms, contact us at info@digitalexperthub.com or +91 79866 05418.',
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-display font-bold text-ink mb-3">{section.title}</h2>
              <p className="text-ink/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
