import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'dentists'

export const metadata: Metadata = constructMetadata({
  title: 'SEO for Dentists',
  description: 'Industry-specific digital marketing for dentists — SEO, Google Ads, lead generation and more. Proven strategies from Digital Expert Hub.',
  path: '/industries/dentists',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
