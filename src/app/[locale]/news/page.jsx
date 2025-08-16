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
const ITEMS_PER_PAGE = 10;

async function getNews(page) {
  const res = await fetch(`${baseUrl}news/news-articles/?page=${page}`,
    { cache: 'no-store' });

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
// const articles = [
//   {
//     id: 'new-residential-series',
//     title: 'MEGA POWER تطلق سلسلة سكنية جديدة',
//     date: 'أكتوبر 25, 2024',
//     category: 'أخبار الشركة',
//     categorySlug: 'company-news',
//     imageSrc: '/assets/b1.jpg',
//     summary: 'يسعدنا أن نعلن عن إطلاق سلسلة HomeStack™ الجديدة، المصممة لتمكين أصحاب المنازل بحلول تخزين طاقة موثوقة.',
//   },
//   {
//     id: 'lifepo4-vs-li-ion',
//     title: 'فهم LiFePO4 مقابل أيون الليثيوم: أيهما أكثر أمانًا؟',
//     date: 'أكتوبر 22, 2024',
//     category: 'مقالات تقنية',
//     categorySlug: 'tech-articles',
//     imageSrc: '/assets/b1.jpg',
//     summary: 'تحليل معمق للكيمياء وميزات الأمان التي تجعل LiFePO4 الخيار الأفضل لتخزين الطاقة المنزلية.',
//   },
//   {
//     id: 'riyadh-expo-2024',
//     title: 'انضموا إلينا في معرض الرياض للطاقة الذكية 2024',
//     date: 'أكتوبر 18, 2024',
//     category: 'فعاليات',
//     categorySlug: 'events',
//     imageSrc: '/assets/b1.jpg',
//     summary: 'ستعرض MEGA POWER أحدث ابتكاراتها في المعرض القادم. تفضلوا بزيارتنا في الجناح رقم 123.',
//   },
// ];

// const categories = [
//   { slug: 'all', name: 'الكل' },
//   { slug: 'company-news', name: 'أخبار الشركة' },
//   { slug: 'events', name: 'فعاليات' },
//   { slug: 'tech-articles', name: 'مقالات تقنية' },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

export default async function NewsPage({ searchParams }) {
  const page = Number(searchParams['page'] ?? 1);
  const news = await getNews(page);
  const articles = await getNewsArticles();
 
  const totalnews = news['data'].count;
  const totalPages = Math.ceil(totalnews / ITEMS_PER_PAGE);

  // console.log(totalnews)

  // 

  // const filteredArticles = activeCategory === 'all'
  //   ? articles
  //   : articles.filter(article => article.categorySlug === activeCategory);
  // const t = useTranslations('Headerpage');
  return (
    <>

      {/* <Headerpage title={t('titleNews')} subTitle={t('subTitleNews')}/> */}

      {/* News Listing Section */}
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
         <FillterNews articles={articles['data']['result']}  news={news['data']['result']}/>
        <PaginationControls
          nameApi={'?page='}
          currentPage={page}
          totalPages={totalPages}
        />
      </section>
    </>
  );
}