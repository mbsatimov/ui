import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/next.fonts';
import { ThemeProvider } from '@/providers/themeProvider';
import { cn } from '@/utils/cn';

import '@/styles/index.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
  authors: [
    {
      name: 'Mahkambek Satimov',
      url: 'https://mbsatimov.vercel.app',
    },
  ],
  creator: 'mbsatimov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const fontClasses = cn(fontMono.variable, fontSans.variable);

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={fontClasses}>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
