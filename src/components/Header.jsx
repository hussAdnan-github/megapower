// src/components/Header.js

'use client'; // هذا السطر ضروري

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="flex justify-between items-center py-4 px-5 md:px-10">
        <Link href="/" className="logo">
          <Image src="/assets/mega-power-logo.png" alt="شعار ميجا باور" width={150} height={65} className="h-16 w-auto" priority />
        </Link>
        <ul className="hidden md:flex gap-10 items-center list-none">
          <li className="relative">
            <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 font-semibold transition-colors">
              الرئيسية
            </Link>
          </li>
          <li className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
            <a href="#" className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-blue-500 font-semibold transition-colors">
              المنتجات <i className="fas fa-chevron-down text-xs"></i>
            </a>
            <div className={`absolute top-full right-0 w-max bg-white shadow-lg p-8 rounded-b-lg opacity-0 invisible transform -translate-y-2 transition-all duration-300 dark:bg-gray-800 ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : ''}`}>
              <div className="flex gap-12">
                <div>
                  <h3 className="text-blue-600 dark:text-blue-400 text-sm mb-4">حسب الفئة</h3>
                  <Link href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">سلسلة السكنية</Link>
                  <Link href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">سلسلة التجارية</Link>
                </div>
                <div>
                  <h3 className="text-blue-600 dark:text-blue-400 text-sm mb-4">حسب السعة</h3>
                  <Link href="/single-product" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">5.12 كيلوواط ساعة (MP-H5)</Link>
                  <Link href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">10.24 كيلوواط ساعة (MP-H10)</Link>
                </div>
                <div className="min-w-[150px]">
                  <Image src="/assets/product1.png" alt="منتج مميز" width={150} height={150} />
                  <h4 className="mt-2 text-center text-sm font-semibold">منتج مميز: MP-H10</h4>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 font-semibold transition-colors">
              المشاريع
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 font-semibold transition-colors">
              الأخبار
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="تبديل الوضع" className="bg-transparent border border-gray-400 dark:border-gray-600 rounded-full w-9 h-9 cursor-pointer text-lg text-gray-600 dark:text-gray-400 transition-colors">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;