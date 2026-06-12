import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Geist } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&family=Jost:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
