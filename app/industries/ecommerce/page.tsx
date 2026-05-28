import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'
import { getIndustryData } from '@/lib/industries-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'ecommerce'

export const metadata: Metadata = constructMetadata({
  title: 'E-commerce Digital Marketing India',
  description: 'Boost online sales with expert e-commerce digital marketing. SEO, Google Shopping ads, conversion optimisation & social media for online stores. Free audit.',
  path: '/industries/ecommerce',
})

export default function Page() {
  const data = getIndustryData(SLUG)
  if (!data) return notFound()
  return <IndustryPageTemplate {...data} />
}
