import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Golla Design — Lead UI/UX Designer | Enterprise Product Design | Design Systems | UX Strategy',
  description:
    'Golla Design — Lead UI/UX Designer with 12+ years of enterprise experience in cloud platforms, FinTech, HealthTech, and B2B SaaS. Expert in Design Systems, UX Strategy, and Enterprise Product Design.',
  keywords: [
    'Golla Design', 'UI/UX Designer', 'Product Designer', 'Enterprise Design', 'Design System',
    'UX Strategy', 'User Research', 'Figma', 'Design Lead', 'Portfolio',
  ],
  authors: [{ name: 'Golla Design' }],
  creator: 'Golla Design',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://swamydesign.io',
    title: 'Golla Design — Lead UI/UX Designer',
    description: 'Lead UI/UX Designer | Enterprise Product Design | Design Systems | UX Strategy',
    siteName: 'Golla Design Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golla Design — Lead UI/UX Designer',
    description: 'Lead UI/UX Designer | Enterprise Product Design | Design Systems | UX Strategy',
    creator: '@swamy_ux',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

import MotionProvider from '@/components/providers/MotionProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ?? (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased font-body"
        style={{ fontFamily: 'var(--font-body), Inter, sans-serif' }}
        suppressHydrationWarning
      >
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
