// src/app/news/page.js

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const articles = [
  {
    id: 'new-residential-series',
    title: 'MEGA POWER تطلق سلسلة سكنية جديدة',
    date: 'أكتوبر 25, 2024',
    category: 'أخبار الشركة',
    categorySlug: 'company-news',
    imageSrc: '/assets/b1.jpg',
    summary: 'يسعدنا أن نعلن عن إطلاق سلسلة HomeStack™ الجديدة، المصممة لتمكين أصحاب المنازل بحلول تخزين طاقة موثوقة.',
  },
  {
    id: 'lifepo4-vs-li-ion',
    title: 'فهم LiFePO4 مقابل أيون الليثيوم: أيهما أكثر أمانًا؟',
    date: 'أكتوبر 22, 2024',
    category: 'مقالات تقنية',
    categorySlug: 'tech-articles',
    imageSrc: '/assets/b1.jpg',
    summary: 'تحليل معمق للكيمياء وميزات الأمان التي تجعل LiFePO4 الخيار الأفضل لتخزين الطاقة المنزلية.',
  },
  {
    id: 'riyadh-expo-2024',
    title: 'انضموا إلينا في معرض الرياض للطاقة الذكية 2024',
    date: 'أكتوبر 18, 2024',
    category: 'فعاليات',
    categorySlug: 'events',
    imageSrc: '/assets/b1.jpg',
    summary: 'ستعرض MEGA POWER أحدث ابتكاراتها في المعرض القادم. تفضلوا بزيارتنا في الجناح رقم 123.',
  },
];

const categories = [
  { slug: 'all', name: 'الكل' },
  { slug: 'company-news', name: 'أخبار الشركة' },
  { slug: 'events', name: 'فعاليات' },
  { slug: 'tech-articles', name: 'مقالات تقنية' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(article => article.categorySlug === activeCategory);
const t = useTranslations('HomePage');
  return (
    <>
   
      {/* Page Header */}
      <section className="bg-blue-600 text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">الأخبار والمقالات</h1>
        <p className="text-lg">ابق على اطلاع بآخر أخبار الشركة وفعالياتها ومقالاتها التقنية.</p>
      </section>

      {/* News Listing Section */}
      <section className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
                  activeCategory === cat.slug
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Animated Articles Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    variants={itemVariants}
                    layout
                  >
                    <Link href={`/news/${article.id}`} className="block">
                      <div className="relative h-60 w-full">
                        <Image 
                          src={article.imageSrc} 
                          alt={article.title} 
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="bg-gray-200 dark:bg-gray-700 py-1 px-3 rounded-full font-semibold text-xs">{article.category}</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        <Link href={`/news/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{article.summary}</p>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full text-center text-xl text-gray-600 dark:text-gray-400">
                  لا توجد مقالات في هذه الفئة.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}