import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'website-design'

export const metadata: Metadata = constructMetadata({
  title: 'Website Design Services',
  description: 'Expert Website Design Services from Digital Expert Hub. Data-driven strategies that deliver measurable results for your business.',
  path: '/services/website-design',
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
