'use client';
import React, { useState, useEffect } from 'react';
import { baseUrl } from '@/context/baseURL';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

 
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';
import PaginationControls from './PaginationControls';
const ITEMS_PER_PAGE = 1;

export default function ProductList({ initialProducts, department, currentPage }) {
    const router = useRouter();
    const pathname = usePathname();


    const [products, setProducts] = useState(initialProducts['result'] || []);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [paginationData, setPaginationData] = useState({
        next: initialProducts?.next || null,
        previous: initialProducts?.previous || null,
        count: initialProducts?.count || 0,
    });
    const searchParams = useSearchParams();
    const totalPages = Math.ceil(paginationData.count / ITEMS_PER_PAGE);




    useEffect(() => {

        const params = new URLSearchParams(searchParams.toString());

        
        if (searchTerm.trim()) {
            params.set('search', searchTerm.trim());
        } else {
            // إذا كان البحث فارغًا، لا تقم بحذف الـ search parameter من الـ URL فورًا
            // إلا إذا كان هذا هو السلوك المطلوب.
            // هنا، سنعتمد على الـ URL كمصدر للحقيقة.
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${baseUrl}/products/products/?${params.toString()}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await res.json();

                setProducts(data?.data?.result || []);
                setPaginationData({
                    next: data?.data?.next,
                    previous: data?.data?.previous,
                    count: data?.data?.count,
                });

            } catch (error) {
                console.error(error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

         fetchData();

     }, [searchParams]);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchTerm.trim()) {
                params.set('search', searchTerm.trim());
                params.set('page', '1');
            } else {
                params.delete('search');
            }
           console.log(params.toString())
            router.push(`${pathname}?${params.toString()}`);
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, pathname, router]);


    // useEffect(() => {
    //     setProducts(initialProducts || []);
    // }, [initialProducts]);

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* 1. استخدام المكون الجديد ProductFilter */}
                <ProductFilter
                    department={department}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <div className="lg:col-span-3">
                    {loading ? (
                        <p>جاري البحث...</p>
                    ) : Array.isArray(products) && products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* 2. استخدام المكون الجديد ProductCard في التكرار */}
                            {products.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    ) : (
                        <p>لا توجد منتجات تطابق بحثك.</p>
                    )}
                </div>
            </div>
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={!!paginationData.next}
                hasPrevPage={!!paginationData.previous}
            />
        </div>

    );
}