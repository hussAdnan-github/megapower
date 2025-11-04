

import { Tajawal } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import ThemeProvider from '@/providers/theme-provider';
import QueryPovider from '@/providers/query-povider';
import { siteMetadata } from './metadata';

const tajawalFont = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
});



export async function generateMetadata({ params }) {
  const { locale } = await params; 

  return {
    title: siteMetadata.title[locale],
    description: siteMetadata.description[locale],
    keywords: siteMetadata.keywords[locale],
    openGraph: {
      ...siteMetadata.openGraph,
      title: siteMetadata.openGraph.title[locale],
      description: siteMetadata.openGraph.description[locale],
      siteName: siteMetadata.openGraph.siteName[locale],
      locale: siteMetadata.openGraph.locale[locale],
      // images: siteMetadata.openGraph.images.map((img) => ({
      //   ...img,
      //   alt: img.alt[locale],
      // })),
    },
    // twitter: {
    //   ...siteMetadata.twitter,
    //   title: siteMetadata.twitter.title[locale],
    //   description: siteMetadata.twitter.description[locale],
    // },
    // icons: siteMetadata.icons,
  };
}


export default async function RootLayout({ children, params }) {


  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale == 'en' ? 'ltr' : 'rtl'} suppressHydrationWarning>


      <body className={`${tajawalFont.className}`}>

        <ThemeProvider>
          <NextIntlClientProvider>
            <QueryPovider>
              <Header />
              <main>{children}</main>
              <Footer />
            </QueryPovider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}