// src/components/Header.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // ١. استيراد usePathname

import { useTranslations } from 'next-intl';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';


export default function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const t = useTranslations('hdeader');
  const pathname = usePathname(); // ٢. الحصول على المسار الحالي
console.log(pathname)
  return (
    <header className="shadow-md sticky top-0 z-50 dark-bg-li  transition-colors duration-300  ">
      <nav className="flex justify-between items-center py-4 px-5 md:px-10">
        {/* الشعار */}
        <Link href="/" className="logo">
          <Image src="/assets/mega-power-logo.png" alt="شعار ميجا باور" width={150} height={65} className="h-16 w-auto" priority />
        </Link>

        {/* قائمة سطح المكتب */}
        <ul className="hidden md:flex gap-10 items-center justify-between list-none">
          <li className="relative">
            {/* ٣. تطبيق فئة CSS النشطة بشكل شرطي */}
            <Link href="/" className={` transition-colors ${pathname === '/ar' || pathname ==='/en' ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link href="/products" className={` transition-colors ${pathname.startsWith('/ar/products') || pathname.startsWith('/en/products') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`}>
             {t('Products')}
            </Link>
          </li>
          <li>
            <Link href="/projects" className={` transition-colors ${pathname.startsWith('/ar/projects') || pathname.startsWith('/en/projects') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`}>
             {t('Projects')}
            </Link>
          </li>
          <li>
            <Link href="/news" className={` transition-colors ${pathname.startsWith('/ar/news') || pathname.startsWith('/en/news') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`}>
              {t('News')}
            </Link>
          </li>

        </ul>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* زر القائمة المنسدلة (للموبايل فقط) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* القائمة المنسدلة (للموبايل فقط) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center py-4">
          <li className="py-2">
            <Link href="/" className={`block font-semibold ${pathname === '/ar' || pathname ==='/en' ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`} onClick={toggleMobileMenu}>
              {t('home')}
            </Link>
          </li>
          <li className="py-2">
            <Link href="/products" className={`block font-semibold ${pathname.startsWith('/ar/products') || pathname.startsWith('/en/products') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`} onClick={toggleMobileMenu}>
             {t('Products')}
            </Link>
          </li>
          <li className="py-2">
            <Link href="/projects" className={`block font-semibold ${pathname.startsWith('/ar/projects') || pathname.startsWith('/en/projects') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`} onClick={toggleMobileMenu}>
             {t('Projects')}
            </Link>
          </li>
          <li className="py-2">
            <Link href="/news" className={`block font-semibold ${pathname.startsWith('/ar/news') || pathname.startsWith('/en/news') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'font-light'}`} onClick={toggleMobileMenu}>
              {t('News')}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};