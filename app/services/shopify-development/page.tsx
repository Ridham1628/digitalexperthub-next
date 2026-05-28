import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'shopify-development'

export const metadata: Metadata = constructMetadata({
  title: 'Shopify Development Services India',
  description: 'Launch or upgrade your Shopify store with expert Shopify development. Custom themes, app integration & Shopify SEO built in. Free Shopify consultation today.',
  path: '/services/shopify-development',
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
