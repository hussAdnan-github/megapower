'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
 
 

export default function ProductCard({ product, index }) {
    const locale = useLocale();
 
    return (
        <div
           data-aos="fade-up" data-aos-delay ="100" 
            className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="p-4 flex justify-center items-center h-60">
                <Image
                    src={product.image}
                    alt={`${locale === 'ar' ? product.name_ar : product.name_en}`}
                    width={250}
                    height={250}
                    className="object-contain max-h-full"
                />
            </div>
            <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-start">{`${locale === 'ar' ? product.name_ar : product.name_en}`}</h3>
                <p className="flex-grow mb-4 font-bold text-start">{`${locale === 'ar' ? product.short_description_ar : product.short_description_en}`}</p>
                <Link
                    href={`/products/${product.id}`}
                    className="mt-auto inline-block font-semibold py-3 px-6 rounded-full transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white"
                >
                    عرض التفاصيل
                </Link>
            </div>
        </div>
    );
}