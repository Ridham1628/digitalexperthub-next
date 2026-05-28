import type { Metadata } from 'next'

const siteConfig = {
  name: 'Digital Expert Hub',
  url: 'https://digitalexperthub.com',
  description:
    'Digital Expert Hub is a results-driven digital marketing agency offering SEO, PPC, social media, email & content marketing services. Grow your business with proven digital strategies.',
  phone: '+91-7986713605',
  email: 'info@digitalexperthub.com',
  address: 'House No. 785, Street No. 7, Master Colony, Santokh Nagar, Shivpuri, Ludhiana, Punjab 141008',
}

export { siteConfig }

export function constructMetadata({
  title,
  description,
  path = '/',
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const fullTitle = title
    ? `${title} | Digital Expert Hub`
    : 'Digital Marketing Agency in Ludhiana | Digital Expert Hub'

  const metaDescription =
    description ?? siteConfig.description

  const canonical = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  }
}
