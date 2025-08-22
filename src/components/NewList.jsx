'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';

export default function NewList({ news, locales }) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article, index) => (

        <motion.div
          variants={fadIn('up', .1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}
          key={article.id}
          className="dark-bg-li rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
        >
          <Link href={`/news/${article.id}`} className="block h-full">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={article.image}
                alt={`${locales == 'ar' ? article.title_ar : article.title_en}`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-500 group-hover:scale-115"
              />
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="text-xs font-bold border-2 px-4 py-2 rounded-full transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {`${locales == 'ar' ? article.title_ar : article.title_en}`}
                </span>
                <span>{article.created_at.split('T')[0]}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <div className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {`${locales == 'ar' ? article.name_type_article_ar : article.name_type_article_en}`}
                </div>
              </h3>
             </div>
          </Link>
        </motion.div>


      ))}
    </div>
  )
}
