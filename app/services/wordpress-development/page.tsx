import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'wordpress-development'

export const metadata: Metadata = constructMetadata({
  title: 'WordPress Development India',
  description: 'Build a fast, secure & SEO-ready WordPress website. Custom themes, WooCommerce stores & plugin integration by expert WordPress developers. Quote in 24 hours.',
  path: '/services/wordpress-development',
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
