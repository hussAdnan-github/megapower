

'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';


export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  const handleClick = () => {
    const segments = pathname.split('/');
    segments[1] = otherLocale;
    const newPathname = segments.join('/');
    router.replace(newPathname);
  };

  return (
    <button
      onClick={handleClick}
      className="px-2 pt-[4px] pb-1 border-2 text-xl rounded-full hover:cursor-pointer"
    >
      {otherLocale === 'ar' ? 'Ar' : 'En'}
    </button>
  );
 
} 
