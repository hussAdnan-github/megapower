

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
      className="px-3 py-2 border-2 text-xl rounded-full "
    >
      {otherLocale === 'ar' ? 'Ar' : 'En'}
    </button>
  );
 
}
