import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'realtors'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Realtors India',
  description:
    'Stand out in a competitive market with digital marketing for realtors in India. SEO, Google Ads & social strategies for real estate agents. Free strategy call.',
  path: '/industries/realtors',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
