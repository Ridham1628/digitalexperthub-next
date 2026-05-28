import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'cro'

export const metadata: Metadata = constructMetadata({
  title: 'Conversion Rate Optimisation India',
  description: 'Increase conversions without increasing ad spend. Expert CRO services — A/B testing, heatmaps, UX analysis & data-driven website optimisation. Free CRO audit.',
  path: '/services/cro',
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
