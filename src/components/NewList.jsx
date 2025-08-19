'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
 
 

export default function NewList({ news, locales }) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article, index) => (
        <div
             data-aos="fade-up" data-aos-delay="200"
          key={article.id}
          className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        
        >
          <Link href={`/news/${article.id}`} className="block">
            <div className="relative h-60 w-full">
              <Image
                src={article.image}
                alt={`${locales == 'ar' ? article.title_ar : article.title_en}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Link>
          <div className="p-6">
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span className="  text-xs font-bold    border-2 px-4 py-2   rounded-full">{`${locales == 'ar' ? article.title_ar : article.title_en}`}</span>
              <span>{article.created_at.split('T')[0]}</span>
            </div>
            <h3 className="text-xl font-bold   mb-2">
              <Link href={`/news/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {`${locales == 'ar' ? article.name_type_article_ar : article.name_type_article_en}`}
              </Link>
            </h3>

          </div>
        </div>


      ))}
    </div>
  )
}
