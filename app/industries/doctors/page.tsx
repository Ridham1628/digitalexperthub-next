import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'doctors'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Doctors India',
  description: 'Attract more patients with digital marketing for doctors & medical clinics in India. SEO, Google Ads & local search strategies built for healthcare. Free consult.',
  path: '/industries/doctors',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
