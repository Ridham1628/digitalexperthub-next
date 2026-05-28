import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'lead-generation'

export const metadata: Metadata = constructMetadata({
  title: 'Lead Generation Services India',
  description: 'Fill your sales pipeline with qualified leads using proven lead generation strategies — SEO, Google Ads, social media & landing page funnels. Free consult.',
  path: '/services/lead-generation',
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
