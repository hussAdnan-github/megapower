

import { Tajawal } from 'next/font/google'; 
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

 import ThemeProvider from '@/providers/theme-provider';
import QueryPovider from '@/providers/query-povider';

const tajawalFont = Tajawal({
   subsets: ['arabic', 'latin'],  
  weight: ['400', '700'], 
});
export const metadata = {
  title: 'مشروعي الجديد',
  description: 'تم إنشاؤه بواسطة Next.js',
};
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