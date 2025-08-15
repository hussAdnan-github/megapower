import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname();
  // استخراج المسار بدون اللغة
  const pathWithoutLocale = pathname.replace(/^\/[a-zA-Z-]+/, '');

  return (
    <div className="flex gap-2 items-center">
      {routing.locales.map(locale => (
        <Link
          key={locale}
          href={`/${locale}${pathWithoutLocale}`}
          className={`px-3 py-1 rounded border text-sm font-semibold transition-colors duration-200 ${locale === currentLocale ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
