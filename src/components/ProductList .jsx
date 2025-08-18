'use client';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { baseUrl } from '@/context/baseURL';

export default function ProductList({ initialProducts }) {
    // نستخدم useEffect للتأكد من تحديث المنتجات إذا تغيرت initialProducts
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(false);
    const locale = useLocale();

    useEffect(() => {
        setProducts(initialProducts || []);
    }, [initialProducts]);

    const handleSearch = async (searchTerm) => {
        if (!searchTerm.trim()) {
            setProducts(initialProducts || []);
            return;
        }

        setLoading(true);
        try {
            // استخدام URLSearchParams لتشفير مصطلح البحث بشكل آمن
            const params = new URLSearchParams({ search: searchTerm });
            const res = await fetch(`${baseUrl}/products/products/?${params.toString()}`);
            if (!res.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await res.json();
            setProducts(data?.data?.result || []);
        } catch (error) {
            console.error(error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        // 1. حاوية رئيسية جديدة تستخدم Grid Layout
        // lg:grid-cols-4 تقسم الشاشة إلى 4 أعمدة على الشاشات الكبيرة
        // gap-12 يضيف مسافة بين الأعمدة
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* 2. العمود الجانبي للبحث (Sidebar) */}
            {/* lg:col-span-1 يجعله يأخذ عمودًا واحدًا من الأربعة على الشاشات الكبيرة */}
            <aside className="lg:col-span-1 p-6 rounded-xl shadow-lg h-fit sticky top-28">
                <div>
                    <h3 className="text-xl font-semibold mb-4">البحث عن المنتجات</h3>
                    <div className="relative">
                        <SearchBar onSearchChange={handleSearch} />
                        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
            </aside>

            {/* 3. حاوية عرض المنتجات */}
            {/* lg:col-span-3 تجعلها تأخذ الثلاثة أعمدة المتبقية */}
            <div className="lg:col-span-3">
                {loading ? (
                    <p>جاري البحث...</p>
                ) : Array.isArray(products) && products.length > 0 ? (
                    // 4. Grid داخلي لعرض المنتجات في عمودين
                    // md:grid-cols-2 تجعل البطاقات في عمودين على الشاشات المتوسطة والكبيرة
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
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
                        ))}
                    </div>
                ) : (
                    <p>لا توجد منتجات تطابق بحثك.</p>
                )}
            </div>
        </div>
    );
}