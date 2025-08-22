'use client';
import { useTranslations } from 'next-intl';
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';
import React from 'react'
import Link from 'next/link';

export default function TitleHero() {
    const t = useTranslations('Hero');

    return (
        <div>
            <motion.h1
                variants={fadIn('down', .1 )}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }} className="text-white text-4xl md:text-6xl font-bold mb-4">
                {t('title')}
            </motion.h1>
            <motion.p 
            variants={fadIn('down', .2 )}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
            className="text-lg text-white md:text-xl max-w-2xl mb-8">
                {t('subTitle')}
            </motion.p>
            <motion.div
            variants={fadIn('up', .3 )}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
            >
            <Link href="/products" className="bg-yellow-400 transition-all  ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-1 text-[#111827] hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-full  duration-300">
                {t('btn')}
            </Link>
             </motion.div>
        </div>
    )
}
