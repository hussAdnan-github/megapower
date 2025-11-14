

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
      title: siteMetadata.openGraph.title[locale],
      description: siteMetadata.openGraph.description[locale],
      url: siteMetadata.openGraph.url,
      siteName: siteMetadata.openGraph.siteName[locale],
      locale: siteMetadata.openGraph.locale[locale],
      type: siteMetadata.openGraph.type,
      images: [
        {
          url: "/assets/mega-power-og.jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "ar"
              ? "ميجا باور | حلول الطاقة المتكاملة"
              : "Mega Power | Integrated Energy Solutions",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title[locale],
      description: siteMetadata.description[locale],
      images: ["/assets/mega-power-og.jpg"],
    },
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