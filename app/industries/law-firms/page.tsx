import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'law-firms'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Law Firms India',
  description: 'Generate high-quality client enquiries with digital marketing for law firms in India. SEO, Google Ads & content marketing for legal practices. Free consultation.',
  path: '/industries/law-firms',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
