

import './globals.css';
import { ThemeProvider } from "./providers/theme-provider";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

 

export default async function RootLayout({ children ,  params }) {


const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale == 'ar' ? 'ltr' : 'rtl'} suppressHydrationWarning>
      <body >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}