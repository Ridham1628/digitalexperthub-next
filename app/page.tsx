import type { Metadata } from 'next'
import { faqSchema } from '@/lib/schema'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import ProcessSection from '@/components/sections/ProcessSection'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingPreview from '@/components/sections/PricingPreview'
import BlogPreviewSection from '@/components/sections/BlogPreviewSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in India | Digital Expert Hub',
  description:
    'Results-driven digital marketing agency in India — SEO, Google Ads, social media & web design. Trusted by 1,000+ brands. 7+ years. Book your free strategy call today.',
  alternates: {
    canonical: 'https://digitalexperthub.com',
  },
  openGraph: {
    title: 'Digital Marketing Agency in India | Digital Expert Hub',
    description:
      'Results-driven digital marketing agency in India — SEO, Google Ads, social media & web design. 1,000+ brands. 7+ years. 4.9/5 rated. Free strategy call.',
    url: 'https://digitalexperthub.com',
    siteName: 'Digital Expert Hub',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 200,
        alt: 'Digital Expert Hub — Digital Marketing Agency in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | Digital Expert Hub',
    description:
      'SEO, Google Ads, social media & web design for 1,000+ brands across India. 7+ years. 4.9/5 rated. Free strategy call.',
    images: ['/logo.png'],
  },
}

const homeFaqs = [
  {
    question: 'What is SEO and why is it important?',
    answer: 'SEO improves your website ranking on Google, driving consistent organic traffic that converts into customers — compounding in value over time.',
  },
  {
    question: 'How much does digital marketing cost?',
    answer: 'Packages start from ₹15,000/month. We build custom proposals around your budget and goals.',
  },
  {
    question: 'When can I see results?',
    answer: 'PPC delivers immediate traffic. SEO shows meaningful results in 3–6 months, with significant growth by month 9–12.',
  },
  {
    question: 'What services do you provide?',
    answer:
      'SEO, Google Ads, social media, email marketing, website design & development, content marketing, branding, CRO, ORM and consulting.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />

      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CaseStudiesPreview />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingPreview />
      <BlogPreviewSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
