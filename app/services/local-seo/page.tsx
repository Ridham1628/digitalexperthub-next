import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'local-seo'

export const metadata: Metadata = constructMetadata({
  title: 'Local SEO Services India',
  description: 'Dominate local search results and Google Maps with Local SEO. Rank for near-me searches, attract nearby customers & grow your local business. Free audit.',
  path: '/services/local-seo',
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
