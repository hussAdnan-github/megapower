'use client';
import React, { useTransition } from 'react'
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export default function CardWhy({ features }) {
  const t = useTranslations('why');

  return (
    <motion.div

      variants={fadIn('up', .1 + features.id * 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-shadow hover:shadow-xl"
    >
      <i className={`text-4xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110 ${features.iconClass}`}></i>
      <h3 className="text-xl font-semibold mb-2">{t(features.titleKey)}</h3>
      <p>{t(features.descriptionKey)}</p>
    </motion.div>
  )
}
