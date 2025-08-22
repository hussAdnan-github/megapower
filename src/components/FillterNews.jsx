'use client'


import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useSearchParams ,useRouter} from 'next/navigation';
 import React, { useState, useTransition } from 'react'

export default function FillterNews({ articles, locales }) {

  const searchParams = useSearchParams();
 
    const router = useRouter();
    const pathname = usePathname();

  const activeType = searchParams.get('type_article');
  const t = useTranslations('Layout');

  // ؟؟؟؟؟؟؟

  const [isPending, startTransition] = useTransition();

  const handleFilterClick = (typeId) => {
    const params = new URLSearchParams(searchParams.toString());
    if (typeId) {
      params.set('type_article', typeId);
    } else {
      params.delete('type_article');
    }
     params.set('page', '1');

     startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };
  return (

    // <div
    //   className="flex flex-wrap items-center justify-center gap-4 mb-8">
    //   {/* زر لإلغاء الفلتر وعرض الكل */}
    //   <Link
    //     href="/news"
    //     className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${!activeType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    //       }`}
    //   >
    //     {t('All')}
    //   </Link>

    //   {/* عرض أزرار الفلترة بناءً على أنواع المقالات */}
    //   {articles.map((articleType) => (
    //     <Link
    //       key={articleType.id}
    //       href={`/news?type_article=${articleType.id}`}
    //       className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${String(articleType.id) === activeType
    //         ? 'bg-blue-600 text-white' // Style for active filter
    //         : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Style for inactive filter
    //         }`}
    //     >
    //      {`${locales == 'ar' ? articleType.name_ar : articleType.name_en}`}
    //     </Link>
    //   ))}
    // </div>


    <nav
    aria-label="تصفية الأخبار حسب الفئة"
    className={`flex flex-wrap items-center justify-center gap-4 mb-8 transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
     
      <button
        onClick={() => handleFilterClick(null)}
        disabled={isPending}
        className={`hover:cursor-pointer px-5 py-2 text-sm font-medium rounded-full transition-colors ${!activeType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
      >
        {t('All')}
      </button>

       {articles.map((articleType) => (
        <button
          key={articleType.id}
          onClick={() => handleFilterClick(String(articleType.id))}
          disabled={isPending}
          className={`hover:cursor-pointer px-5 py-2 text-sm font-medium rounded-full transition-colors ${String(articleType.id) === activeType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {`${locales === 'ar' ? articleType.name_ar : articleType.name_en}`}
        </button>
      ))}
    </nav>


  )
}
