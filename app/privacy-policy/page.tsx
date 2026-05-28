import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Read the Digital Expert Hub privacy policy. Learn how we collect, use and protect your personal information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="wrap max-w-3xl mx-auto">
        <h1 className="text-display-lg font-display font-bold text-ink mb-4">Privacy Policy</h1>
        <p className="text-ink/65 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          {[
            {
              title: 'Information We Collect',
              content: 'We collect information you voluntarily provide when contacting us through forms, including your name, email address, phone number and project details. We also collect usage data through cookies and analytics tools to improve our website and services.',
            },
            {
              title: 'How We Use Your Information',
              content: 'We use your information to respond to inquiries, provide our services, send relevant marketing communications (with your consent), improve our website, and comply with legal obligations. We do not sell your personal information to third parties.',
            },
            {
              title: 'Cookies',
              content: 'We use cookies to enhance your browsing experience, analyse website traffic and personalise content. You can control cookie settings through your browser. We use Google Analytics for traffic analysis and Google Tag Manager for tracking setup.',
            },
            {
              title: 'Data Security',
              content: 'We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure or destruction.',
            },
            {
              title: 'Third-Party Services',
              content: 'We may share information with trusted third-party service providers (hosting, email marketing, analytics) who assist in operating our website and delivering our services. These parties are bound by confidentiality agreements.',
            },
            {
              title: 'Your Rights',
              content: 'You have the right to access, correct or delete your personal information. To exercise these rights, contact us at info@digitalexperthub.com. You may also unsubscribe from marketing communications at any time.',
            },
            {
              title: 'Contact Us',
              content: 'If you have questions about this privacy policy, contact us at: info@digitalexperthub.com or +91 79867 13605.',
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
