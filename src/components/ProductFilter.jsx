'use client';
import React, { useTransition } from 'react';
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';
// 1. استيراد الأدوات اللازمة من next/navigation
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function ProductFilter({ department, searchTerm, setSearchTerm }) {
        const [isPending, startTransition] = useTransition();

    const t = useTranslations('Layout');

    const searchParams = useSearchParams();

    const router = useRouter();
    const pathname = usePathname();

    const activeType = searchParams.get('department');
    const locale = useLocale();


    const handleFilterChange = (departmentId) => {

        const params = new URLSearchParams(searchParams.toString());

        if (departmentId) {

            params.set('department', departmentId);
        } else {

            params.delete('department');
        }

        params.set('page', '1');

        startTransition(() => {
            router.push(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <motion.div

            variants={fadIn('left', .1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}

               className={`lg:col-span-1 p-6 rounded-xl shadow-lg h-fit transition-opacity ${isPending ? 'opacity-70 cursor-not-allowed' : 'opacity-100'}`}>
            <div>
                <h3 className="text-xl font-semibold mb-4">  {t('search')}</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="ابحث..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 pl-10 border bg-white border-gray-300 rounded-md text-black"
                    />
                    <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className='mt-6'>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">  {t('filtter')}  </h3>
                    <ul className="space-y-2">
                        {/* 5. استدعاء الدالة عند النقر على "الكل" */}
                        <li>
                            {/* ✨ استخدم زرًا */}
                            <button
                                onClick={() => handleFilterChange(null)}
                                // اجعل عرض الزر يملأ المساحة واضبط النص
                                className={`w-full text-start px-5 py-3 text-sm font-medium rounded-lg transition-colors ${!activeType ? 'bg-blue-600 text-white' : 'hover:bg-blue-300'}`}
                            >
                                {t('All')}
                            </button>
                        </li>

                        {/* 6. استدعاء الدالة عند النقر على أي قسم آخر */}
                        {department.map((dept) => (
                            <li key={dept.id}>
                                {/* ✨ استخدم زرًا هنا أيضًا */}
                                <button
                                    onClick={() => handleFilterChange(String(dept.id))}
                                    className={`w-full text-start px-5 py-3 text-sm font-medium rounded-lg transition-colors ${String(dept.id) === activeType ? 'bg-blue-600 text-white' : 'hover:bg-blue-300'}`}
                                >
                                    {locale === 'ar' ? dept.name_ar : dept.name_en}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}