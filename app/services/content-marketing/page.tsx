import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'content-marketing'

export const metadata: Metadata = constructMetadata({
  title: 'Content Marketing Services India',
  description: 'Attract, engage and convert with expert content marketing. SEO-optimised blog posts, landing pages, case studies & video content. Free content strategy audit.',
  path: '/services/content-marketing',
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
