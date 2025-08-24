'use client';
import React from 'react'
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';
export default function CardProduct({ product  }) {
    const locale = useLocale();
    const t = useTranslations('Headerpage');

    return ( 

        <motion.div
      
       variants={fadIn('up',.1 + product.id * .1 )}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: true, amount: 0.1 }}
             className="dark-bg-li  rounded-xl shadow-lg  transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-3 overflow-hidden flex flex-col">
            <div className="p-4    flex justify-center items-center h-60">
                <Image
                    src={product.image}
                    alt={`${locale == 'ar' ? product.name_ar : product.name_en}`}
                    width={250}
                    height={250}
                    className="object-contain max-h-full"
                />
            </div>
            <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-xl font-bold   mb-2">{`${locale == 'ar' ? product.name_ar : product.name_en}`}</h3>
                <p className="  flex-grow mb-4">
                    {`${locale == 'ar' ? product.short_description_ar : product.short_description_en}`}
                    
                    </p>
                <Link
                    href={`/products/${product.id}`}
                    className="mt-auto inline-block bg-blue-600 hover:bg-blue-700   font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                >
                    {t('show')}
                </Link>
            </div>
        </motion.div>

    )
}
