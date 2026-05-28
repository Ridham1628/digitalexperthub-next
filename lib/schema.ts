import { siteConfig } from './metadata'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description:
      'Digital marketing agency offering SEO, PPC, social media, email and content marketing services.',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House No. 785, Street No. 7, Master Colony, Santokh Nagar, Shivpuri',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141008',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '40',
    },
    sameAs: [
      'https://www.facebook.com/digitalexperthub',
      'https://www.instagram.com/digitalexperthub',
      'https://www.linkedin.com/company/digitalexperthub',
      'https://twitter.com/digitalexperthub',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url?: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ?? item.href,
    })),
  }
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    url,
    areaServed: { '@type': 'Country', name: 'India' },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }
}
