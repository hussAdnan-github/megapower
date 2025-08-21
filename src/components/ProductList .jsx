

'use client';
import React, { useState, useEffect } from 'react';
import { baseUrl } from '@/context/baseURL';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// 1. استيراد useQuery
import { useQuery } from '@tanstack/react-query';

import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';
import PaginationControls from './layout/PaginationControls';

const ITEMS_PER_PAGE = 20;

// 2. تعريف دالة جلب البيانات خارج المكون
// سيقوم useQuery بتمرير queryKey إلى هذه الدالة
const fetchProducts = async ({ queryKey }) => {
    // queryKey سيكون ['products', 'department=2&page=1']
    const [_key, paramsString] = queryKey;
    const res = await fetch(`${baseUrl}/products/products/?${paramsString}`);
    if (!res.ok) {
        throw new Error('فشل في جلب المنتجات');
    }
    return res.json();
};


export default function ProductList({ department, currentPage }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // حالة البحث تبقى كما هي لأنها تخص تفاعل المستخدم المباشر
    const [searchTerm, setSearchTerm] = useState('');

    // 3. استبدال useState و useEffect بـ useQuery
    const { data: apiResponse, isLoading, isError, error } = useQuery({
        // queryKey هو المفتاح الفريد للبيانات في الـ cache.
        // عندما يتغير هذا المفتاح، سيقوم useQuery بإعادة الجلب.
        queryKey: ['products', searchParams.toString()],
        // queryFn هي الدالة التي تقوم بجلب البيانات
        queryFn: fetchProducts,
        // (اختياري) احتفظ بالبيانات القديمة مرئية أثناء تحميل البيانات الجديدة
        keepPreviousData: true, 
        // (اختياري) مدة اعتبار البيانات "حديثة" (لا يتم إعادة جلبها في الخلفية) - 5 دقائق
        staleTime: 1000 * 60 * 5, 
    });

    // 4. استخراج البيانات من استجابة useQuery
    const products = apiResponse?.data?.result || [];
    const paginationData = {
        next: apiResponse?.data?.next || null,
        previous: apiResponse?.data?.previous || null,
        count: apiResponse?.data?.count || 0,
    };
    
    const totalPages = Math.ceil(paginationData.count / ITEMS_PER_PAGE);

    // 5. الـ useEffect الخاص بالبحث (Debounce) يبقى كما هو!
    // وظيفته هي تحديث الـ URL، وعندما يتغير الـ URL، سيقوم useQuery بالعمل تلقائيًا.
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchTerm.trim()) {
                params.set('search', searchTerm.trim());
                params.set('page', currentPage); // إعادة للصفحة الأولى عند البحث
            } else {
                params.delete('search');
            }
            // فقط قم بتحديث الـ URL. useQuery سيتكفل بالباقي.
            router.push(`${pathname}?${params.toString()}`);
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, pathname, router, searchParams]);

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <ProductFilter
                    department={department}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <div className="lg:col-span-3">
                    {/* 6. استخدام حالات التحميل والخطأ من useQuery */}
                    {isLoading ? (
                        <p>جاري البحث...</p>
                    ) : isError ? (
                        <p>حدث خطأ: {error.message}</p>
                    ) : Array.isArray(products) && products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {products.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    ) : (
                        <p>لا توجد منتجات تطابق بحثك.</p>
                    )}
                </div>
            </div>
            {/* !!paginationData.next */}
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={paginationData.next}
                hasPrevPage={paginationData.previous}
            />
        </div>
    );
}