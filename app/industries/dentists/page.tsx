import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'dentists'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Dentists India',
  description: 'Fill your appointment book with digital marketing for dentists in India. Local SEO, Google Ads & social media strategies proven for dental practices. Free call.',
  path: '/industries/dentists',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
