'use client';
import React from 'react';
// 1. استيراد الأدوات اللازمة من next/navigation
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function ProductFilter({ department, searchTerm, setSearchTerm }) {
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

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <aside className="lg:col-span-1 p-6 rounded-xl shadow-lg h-fit">
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
                        <li onClick={() => handleFilterChange(null)} className={`hover:bg-blue-300 px-5 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${!activeType ? 'bg-blue-600 text-white' : ''}`}>

                            {t('All')}


                        </li>

                        {/* 6. استدعاء الدالة عند النقر على أي قسم آخر */}
                        {department.map((dept) => (
                            <li
                                key={dept.id}
                                onClick={() => handleFilterChange(String(dept.id))}
                                className={`px-5 py-3 text-sm font-medium rounded-lg hover:bg-blue-300 transition-colors cursor-pointer ${String(dept.id) === activeType ? 'bg-blue-600 text-white' : ''}`}
                            >

                                {locale === 'ar' ? dept.name_ar : dept.name_en}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}