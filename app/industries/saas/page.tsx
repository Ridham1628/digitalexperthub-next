import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'saas'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for SaaS Companies',
  description: 'Grow MRR and reduce CAC with digital marketing for SaaS & tech companies. SEO, Google Ads, content & social strategies for software businesses. Free audit.',
  path: '/industries/saas',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
