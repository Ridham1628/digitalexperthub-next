import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'social-media-marketing'

export const metadata: Metadata = constructMetadata({
  title: 'Social Media Marketing Services',
  description: 'Build your brand and drive sales with expert social media marketing. Instagram, Facebook, LinkedIn & YouTube campaigns that generate real results. Free strategy call.',
  path: '/services/social-media-marketing',
})

export default function Page() {
  const data = getServiceData(SLUG)
  if (!data) return notFound()
  
  return (
    <ServicePageTemplate
      {...data}
      breadcrumbs={getServiceBreadcrumbs(SLUG, data.title)}
    />
  )
}
