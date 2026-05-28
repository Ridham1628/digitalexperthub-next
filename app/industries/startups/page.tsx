import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'startups'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Startups India',
  description: 'Build your growth engine with digital marketing for startups in India. SEO, Google Ads, content & social strategies to scale fast from day one. Free consult.',
  path: '/industries/startups',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
