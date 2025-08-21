'use client'


import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function FillterNews({ articles , locales }) {

  const searchParams = useSearchParams();
  const activeType = searchParams.get('type_article');
  const t = useTranslations('Layout');


  return (

    <div
      data-aos="fade-up" data-aos-delay="100"

      className="flex flex-wrap items-center justify-center gap-4 mb-8">
      {/* زر لإلغاء الفلتر وعرض الكل */}
      <Link
        href="/news"
        className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${!activeType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
      >
        {t('All')}
      </Link>

      {/* عرض أزرار الفلترة بناءً على أنواع المقالات */}
      {articles.map((articleType) => (
        <Link
          key={articleType.id}
          href={`/news?type_article=${articleType.id}`}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${String(articleType.id) === activeType
            ? 'bg-blue-600 text-white' // Style for active filter
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Style for inactive filter
            }`}
        >
         {`${locales == 'ar' ? articleType.name_ar : articleType.name_en}`}
        </Link>
      ))}
    </div>



   
  )
}
