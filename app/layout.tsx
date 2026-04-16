import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

// @ts-ignore
import './globals.css'


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = 'https://www.tempcontacts.space'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Temp Contacts — Contacts That Expire',
    template: '%s | Temp Contacts',
  },
  description:
    'Save phone contacts with an expiry timer — they automatically delete after a set period. Perfect for dating, deliveries, gig workers, events, travel, and service providers.',
  keywords: [
    'temporary contacts',
    'expiring contacts',
    'auto delete contacts',
    'contact manager',
    'phone number expiry',
    'temp contacts app',
    'dating contacts',
    'delivery contacts',
    'gig worker contacts',
    'clean address book',
    'self destructing contacts',
    'temporary phone numbers',
    'disposable contacts',
    'contact expiry app',
    'delete old contacts automatically',
    'caller id app',
    'organize phone contacts',
    'contact cleanup app',
    'temporary contact storage',
    'privacy contacts app',
  ],
  authors: [{ name: 'Temp Contacts' }],
  creator: 'Temp Contacts',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Temp Contacts',
    title: 'Temp Contacts — Contacts That Expire',
    description:
      'Save phone contacts with an expiry timer — they automatically delete after a set period. Keep your address book clean.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temp Contacts — Contacts That Expire',
    description:
      'Save phone contacts with an expiry timer — they automatically delete after a set period.',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1406957651189163&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1406957651189163');
              fbq('track', 'PageView');
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
