import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { UrlSegmentProvider } from '@/app/api/urlSegment';
import { PathNameProvider } from '@/app/api/path';
import { ReduxProvider } from '@/redux/provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import MessageLayout from '@/components/MessageLayout';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Забронировать отель',
  description: 'Забронировать отель в любой точке мира',
};

const HeaderLayout = dynamic(() => import('@/components/HeaderLayout'), {
  ssr: false,
});

const FooterLayout = dynamic(() => import('@/components/FooterLayout'), {
  ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UrlSegmentProvider>
          <Suspense fallback={<Loading />}>
          <ReduxProvider>
            <MessageLayout />
            <HeaderLayout />
            <PathNameProvider>
            {children}
            </PathNameProvider>
            <FooterLayout />
            </ReduxProvider>
          </Suspense>
        </UrlSegmentProvider> 
      </body>
    </html>
  )
}
