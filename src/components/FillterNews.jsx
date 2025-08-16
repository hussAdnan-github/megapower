'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function FillterNews({articles ,news }) {
 
    const [activeCategory, setActiveCategory] = useState('all');
    // const [activeCategory, setActiveCategory] = useState('all');
 
  const filteredArticles = activeCategory === 'all'
    ? news
    : news.filter(newarticle => newarticle.name_type_article_en === activeCategory);
//   const t = useTranslations('Headerpage');
  return (
   <div className="container mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {articles.map((article) => (
              <button
                key={article.id}
                onClick={() => setActiveCategory(article.name_en)}
                className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
                  activeCategory === article.name_en
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : ' dark-bg-li  border rounded hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {article.name_ar}
              </button>
              
            ))}
            <button
                
                // onClick={() => setActiveCategory(article.name_en)}
                // className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
                //   activeCategory === article.name_en
                //     ? 'bg-blue-600 text-white hover:bg-blue-700'
                //     : ' dark-bg-li  border rounded hover:bg-gray-200 dark:hover:bg-gray-600'
                // }`}
              >
                All
              </button>
          </div>

          {/* Animated Articles Grid */}
          {/* <AnimatePresence mode="wait">
            <motion.div */}
          {/* key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            > */}

          <div>
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className=" dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    // variants={itemVariants}
                    // layout
                  >
                    <Link href={`/news/${article.id}`} className="block">
                      <div className="relative h-60 w-full">
                        <Image 
                          src={article.image} 
                          alt={article.title_ar} 
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="  py-1 px-3 rounded-full font-semibold text-xs">{article.category}</span>
                        <span>{article.created_at}</span>
                      </div>
                      <h3 className="text-xl font-bold   mb-2">
                        <Link href={`/news/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                          {article.title_ar}
                        </Link>
                      </h3>
                      <p className=" ">{article.type_article}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-xl text-gray-600 dark:text-gray-400">
                  لا توجد مقالات في هذه الفئة.
                </div>
              )}
          </div>
          {/* </motion.div>
          </AnimatePresence> */}
        </div>
  )
}
