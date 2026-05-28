import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

const BASE = siteConfig.url

const staticPages = [
  { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
  { url: `${BASE}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${BASE}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
  { url: `${BASE}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${BASE}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: 'weekly' as const },
  { url: `${BASE}/blog`, priority: 0.8, changeFrequency: 'daily' as const },
  { url: `${BASE}/testimonials`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${BASE}/faqs`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${BASE}/careers`, priority: 0.6, changeFrequency: 'monthly' as const },
  { url: `${BASE}/industries`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${BASE}/locations`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  { url: `${BASE}/terms-and-conditions`, priority: 0.3, changeFrequency: 'yearly' as const },
]

const servicePages = [
  'seo', 'local-seo', 'technical-seo', 'ecommerce-seo', 'google-ads',
  'social-media-marketing', 'content-marketing', 'website-design',
  'website-development', 'wordpress-development', 'shopify-development',
  'landing-page-design', 'cro', 'orm', 'email-marketing',
  'lead-generation', 'branding', 'digital-marketing-consulting',
].map((slug) => ({
  url: `${BASE}/services/${slug}`,
  priority: 0.9,
  changeFrequency: 'monthly' as const,
}))

const industryPages = [
  'doctors', 'dentists', 'real-estate', 'ecommerce',
  'saas', 'law-firms', 'small-business', 'startups',
].map((slug) => ({
  url: `${BASE}/industries/${slug}`,
  priority: 0.8,
  changeFrequency: 'monthly' as const,
}))

const locationPages = [
  'seo-company-india', 'seo-company-mohali', 'seo-company-chandigarh',
  'seo-company-delhi', 'seo-company-mumbai', 'seo-company-bangalore',
].map((slug) => ({
  url: `${BASE}/locations/${slug}`,
  priority: 0.8,
  changeFrequency: 'monthly' as const,
}))

const blogPosts = [
  'seo-guide-2025', 'google-ads-roi', 'local-seo-guide',
  'content-marketing-strategy', 'technical-seo-checklist',
  'social-media-marketing-tips', 'email-marketing-automation',
  'shopify-seo-guide', 'website-design-conversion',
].map((slug) => ({
  url: `${BASE}/blog/${slug}`,
  priority: 0.7,
  changeFrequency: 'monthly' as const,
}))

const caseStudies = [
  'techspark-seo', 'craftbazaar-ecommerce', 'medcare-local-seo',
  'greenlaw-lead-gen', 'buildSmart-construction', 'devtech-app-launch',
].map((slug) => ({
  url: `${BASE}/case-studies/${slug}`,
  priority: 0.7,
  changeFrequency: 'monthly' as const,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...locationPages,
    ...blogPosts,
    ...caseStudies,
  ]

  return allPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
