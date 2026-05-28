import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'ecommerce-seo'

export const metadata: Metadata = constructMetadata({
  title: 'E-commerce SEO Services India',
  description: 'Rank your online store higher and drive more sales with e-commerce SEO. Product page optimisation, category structure & link building. Free store audit.',
  path: '/services/ecommerce-seo',
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
