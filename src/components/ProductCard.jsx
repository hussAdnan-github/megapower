'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { truncateWords } from '@/context/api';



export default function ProductCard({ product, Viewdetails }) {
    const locale = useLocale();

    return (
        <motion.div
            variants={fadIn('up', .1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="p-4 flex justify-center items-center h-60">
                <Image
                    src={product.image}
                    alt={`${locale === 'ar' ? product.name_ar : product.name_en}`}
                    width={250}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain max-h-full"
                />
            </div>
            <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-start">{`${locale === 'ar' ? product.name_ar : product.name_en}`}</h3>
                <p className="flex-grow mb-4 font-bold text-start">
                    {locale === 'ar'
                        ? truncateWords(product.short_description_ar, 25)
                        : truncateWords(product.short_description_en, 25)}
                </p>
                <Link
                    href={`/products/${product.id}`}
                    className="mt-2 inline-block font-semibold py-3 px-6 rounded-full transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white"
                >
                    {Viewdetails}
                </Link>
            </div>
        </motion.div>
    );
}