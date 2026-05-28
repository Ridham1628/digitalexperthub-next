import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'small-business'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Small Business',
  description: 'Compete and win online with digital marketing for small businesses. Affordable SEO, Google Ads & social media packages with results that scale. Free call.',
  path: '/industries/small-business',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
