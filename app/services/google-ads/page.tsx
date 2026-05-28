import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { getServiceData, getServiceBreadcrumbs } from '@/lib/services-data'
import { constructMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'

const SLUG = 'google-ads'

export const metadata: Metadata = constructMetadata({
  title: 'Google Ads Management India',
  description: 'Get more leads and sales with expert Google Ads management. We optimise Search, Shopping & Display campaigns for maximum ROI with zero wasted spend. Free PPC audit.',
  path: '/services/google-ads',
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
