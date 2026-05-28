import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'landing-page-design'

export const metadata: Metadata = constructMetadata({
  title: 'Landing Page Design India',
  description: 'Convert more visitors with high-performance landing pages built to generate leads and sales. A/B tested, conversion-optimised designs. Free quote today.',
  path: '/services/landing-page-design',
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
