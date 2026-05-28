import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { bricolage, hanken, fraunces } from '@/lib/fonts'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/widgets/WhatsAppButton'
import BackToTop from '@/components/widgets/BackToTop'
import ScrollProgress from '@/components/widgets/ScrollProgress'
import GoogleAnalytics from '@/components/widgets/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Digital Marketing Agency in Ludhiana | Digital Expert Hub',
    template: '%s | Digital Expert Hub',
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Digital Marketing Agency',
    'Digital marketing company',
    'Digital marketing services',
    'SEO services',
    'PPC services',
    'Social Media Marketing',
    'Content Marketing',
    'Digital Expert Hub',
    'Digital marketing Ludhiana',
  ],
  authors: [{ name: 'Digital Expert Hub', url: siteConfig.url }],
  creator: 'Digital Expert Hub',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Digital Marketing Agency in Ludhiana | Digital Expert Hub',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | Digital Expert Hub',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFY ?? '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="bg-ink text-paper font-body antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
