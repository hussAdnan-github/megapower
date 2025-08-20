'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function ProductFilter({ department, searchTerm, setSearchTerm }) {
    const searchParams = useSearchParams();
    const activeType = searchParams.get('department');
    const locale = useLocale();

    return (
        <aside className="lg:col-span-1 p-6 rounded-xl shadow-lg h-fit">
            <div>
                <h3 className="text-xl font-semibold mb-4">البحث عن المنتجات</h3>
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
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">فئات المنتجات</h3>
                    <ul className="space-y-2">
                        <li className={`px-5 py-3 text-sm font-medium rounded-lg  transition-colors ${!activeType ? 'bg-blue-600 text-white' : '    '}`}>
                            <Link href="/products">الكل</Link>
                        </li>
                        {department.map((dept) => (
                            <li key={dept.id} className={`px-5 py-3 text-sm font-medium rounded-lg transition-colors ${String(dept.id) === activeType ? 'bg-blue-600 text-white' : ' '}`}>
                                <Link href={`products?department=${dept.id}`}>
                                    {locale === 'ar' ? dept.name_ar : dept.name_en}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}