import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'website-design'

export const metadata: Metadata = constructMetadata({
  title: 'Website Design Services India',
  description: 'Get a beautiful, fast & conversion-optimised website designed for your business. Mobile-first, SEO-ready web design with measurable results. Free quote today.',
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
