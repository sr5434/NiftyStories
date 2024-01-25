import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Suspense } from 'react';
import Loading from "./components/loading";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockparty',
  description: 'Talk on a blockchain.',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}><Suspense fallback={<Loading/>}>{children}</Suspense></body>
      </html>
    </ClerkProvider>
  )
}