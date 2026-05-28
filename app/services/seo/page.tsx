import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'seo'

export const metadata: Metadata = constructMetadata({
  title: 'SEO Services in India',
  description: 'Grow organic traffic with expert SEO services across India. On-page, technical, local & e-commerce SEO with proven, measurable results. Free SEO audit.',
  path: '/services/seo',
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
