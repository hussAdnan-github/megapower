'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { fadIn } from '@/lib/frameMotion';
export default function CardProject({ projects }) {
    const t = useTranslations('Headerpage');
    const locale = useLocale();

    return (
        <motion.div
            variants={fadIn('up', .1 + projects.id * 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video">
            <Image
                src={projects.image}
                alt={`${locale == 'ar' ? projects.name_ar : projects.name_en}`}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{`${locale == 'ar' ? projects.completed : projects.completed}`}</h3>
                <p className="text-sm text-gray-200 mt-2 mb-4">{`${locale == 'ar' ? projects.name_ar : projects.name_en}`}</p>
                <Link href={`/projects/${projects.id}`} className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-300">
                    {t('show')}
                </Link>
            </div>
        </motion.div>


    )
}
