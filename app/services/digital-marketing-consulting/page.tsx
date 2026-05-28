import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'digital-marketing-consulting'

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Consulting India',
  description: 'Expert digital marketing consulting — strategy development, competitor analysis, audits & a clear growth roadmap for your business. Free 30-min consultation.',
  path: '/services/digital-marketing-consulting',
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
