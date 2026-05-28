import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'technical-seo'

export const metadata: Metadata = constructMetadata({
  title: 'Technical SEO Services India',
  description: 'Fix crawl issues, improve Core Web Vitals and build a technically sound website with expert Technical SEO. Schema, site speed & indexation covered. Free audit.',
  path: '/services/technical-seo',
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
