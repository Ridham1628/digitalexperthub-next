import type { Metadata } from 'next'
import { faqSchema } from '@/lib/schema'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import ProcessSection from '@/components/sections/ProcessSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreviewSection from '@/components/sections/BlogPreviewSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Ludhiana | Digital Expert Hub',
  description:
    'Digital Expert Hub is a results-driven digital marketing agency in Ludhiana offering SEO, PPC, social media, email & content marketing services. Get measurable results.',
  alternates: {
    canonical: 'https://digitalexperthub.com',
  },
}

const homeFaqs = [
  { question: 'What is SEO and why is it important?', answer: 'SEO improves your website ranking on Google, driving consistent organic traffic.' },
  { question: 'How much does digital marketing cost?', answer: 'Packages start from ₹15,000/month. We build custom proposals around your budget.' },
  { question: 'When can I see results?', answer: 'PPC delivers immediate traffic. SEO shows meaningful results in 3–6 months.' },
  { question: 'What services do you provide?', answer: 'SEO, PPC, social media, email marketing, website design & development, content marketing, branding and consulting.' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
