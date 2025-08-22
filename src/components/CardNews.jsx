'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import { fadIn } from '@/lib/frameMotion';

export default function CardNews({article , index}) {
  const t =  useTranslations('Headerpage');
  const locale =  useLocale();

    return (
        <motion.div
        
      variants={fadIn('up',.1 + article.id * 0.1 )}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.1 }}
            className=" dark-bg-li rounded-xl shadow-lg hover:shadow-2xl group overflow-hidden flex flex-col transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-3">
            <div className="block overflow-hidden h-52">
                <Image
                    src={article.image}
                    alt={`${locale == 'ar' ? article.title_ar : article.title_en}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                {/* <span className="text-sm  mb-2">{article.date}</span> */}
                <h3 className="text-xl font-bold    mb-4">
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                        {`${locale == 'ar' ? article.title_ar : article.title_en}`}
                    </span>
                </h3>
                <Link
                    href={`/news/${article.id}`}
                    className="mt-auto self-start transition-all text-blue-600 group-hover:underline   font-semibold"
                >
                    {t('show_2')}
                </Link>
            </div>
        </motion.div>
    )
}
