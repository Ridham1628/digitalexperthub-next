import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'branding'

export const metadata: Metadata = constructMetadata({
  title: 'Branding Services India',
  description: 'Build a memorable brand identity with expert branding services. Logo design, brand strategy, brand guidelines & visual identity that resonates. Free brand consult.',
  path: '/services/branding',
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
