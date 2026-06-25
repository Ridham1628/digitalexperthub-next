import type { Metadata } from 'next'

const siteConfig = {
  name: 'Digital Expert Hub',
  url: 'https://digitalexperthub.com',
  description:
    'Results-driven digital marketing agency in India — SEO, Google Ads, social media & web design. Trusted by 1,000+ brands. 7+ years. Free strategy call.',
  phone: '+91-7986605418',
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
    : 'Digital Marketing Agency in India | Digital Expert Hub'

  const metaDescription = description ?? siteConfig.description

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
      images: [
        {
          url: '/logo.png',
          width: 500,
          height: 200,
          alt: `${title ?? 'Digital Expert Hub'} — Digital Marketing Agency India`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: ['/logo.png'],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large',
          'max-video-preview': -1,
        },
  }
}
