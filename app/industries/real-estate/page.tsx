import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'real-estate'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Real Estate',
  description: 'Generate qualified buyer & seller leads with digital marketing for real estate in India. SEO, Google Ads & social media for property businesses. Free consult.',
  path: '/industries/real-estate',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
