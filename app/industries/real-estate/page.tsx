import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'real-estate'

export const metadata: Metadata = constructMetadata({
  title: 'SEO for Real Estate',
  description: 'Industry-specific digital marketing for real-estate — SEO, Google Ads, lead generation and more. Proven strategies from Digital Expert Hub.',
  path: '/industries/real-estate',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
