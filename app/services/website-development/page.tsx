import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'website-development'

export const metadata: Metadata = constructMetadata({
  title: 'Website Development Services India',
  description: 'Build a fast, secure & scalable website with expert web developers in India. React, Next.js & WordPress — SEO-ready from day one. Free development quote.',
  path: '/services/website-development',
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
