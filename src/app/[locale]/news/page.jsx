// src/app/news/page.js

// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Headerpage from '@/components/Headerpage';
import { baseUrl } from '@/context/baseURL';
import PaginationControls from '@/components/PaginationControls';
import FillterNews from '@/components/FillterNews';
import Link from 'next/link';
import Image from 'next/image';
import { getLocale } from 'next-intl/server';
const ITEMS_PER_PAGE = 1;

async function getNews(page , typeArticle) {
    let url = `${baseUrl}news/news-articles/?page=${page}`;

     if (typeArticle) {
    url += `&type_article=${typeArticle}`;
  }
   const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getNewsArticles() {
  const res = await fetch(`${baseUrl}news/type-articles/`,
     );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function NewsPage({ searchParams }) {
  const currentPage = Number(searchParams['page'] ?? 1);
    const selectedArticleType = searchParams['type_article'] ?? '';

  const news = await getNews(currentPage , selectedArticleType);
  const articles = await getNewsArticles();
 


  const totalnews = news['data'].count;
  const totalPages = Math.ceil(totalnews / ITEMS_PER_PAGE);

     const hasNextPage = news['data'].next !== null;
  const hasPrevPage = news['data'].previous !== null;
  const locale = await getLocale();

  return (
    <>

      {/* <Headerpage title={t('titleNews')} subTitle={t('subTitleNews')}/> */}

      {/* News Listing Section */}
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
         <FillterNews articles={articles['data']['result']}   />

         <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news['data']['result'].map((article) => (
            <div
                    key={article.id}
                    className=" dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    
                  >
                    <Link href={`/news/${article.id}`} className="block">
                      <div className="relative h-60 w-full">
                        <Image 
                          src={article.image} 
                          alt={`${locale == 'ar' ? article.title_ar : article.title_en}`} 
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="  text-xs font-bold    border-2 px-4 py-2   rounded-full">{`${locale == 'ar' ? article.title_ar : article.title_en}`}</span>
                        <span>{article.created_at.split('T')[0]}</span>
                      </div>
                      <h3 className="text-xl font-bold   mb-2">
                        <Link href={`/news/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        {`${locale == 'ar' ? article.name_type_article_ar : article.name_type_article_en}`}
                        </Link>
                      </h3>
                      {/* <p className=" ">{article.type_article}</p> */}
                    </div>
                  </div>  
                

          ))}
        </div>
          <PaginationControls
                nameApi={'/news?'}
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
              />
      </section>
    </>
  );
}