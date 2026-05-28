import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'email-marketing'

export const metadata: Metadata = constructMetadata({
  title: 'Email Marketing Services India',
  description: 'Nurture leads and drive repeat sales with email marketing services. Campaign design, automation sequences, segmentation & analytics. Free email audit today.',
  path: '/services/email-marketing',
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
