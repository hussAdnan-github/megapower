

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

 
const fetchProducts = async ({ queryKey }) => {
     
    const [_key, paramsString] = queryKey;
    const res = await fetch(`${baseUrl}/products/products/?${paramsString}`);
    if (!res.ok) {
        throw new Error('فشل في جلب المنتجات');
    }
    return res.json();
};

 export default function ProductList({ department, currentPage  }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState('');

    const { data: apiResponse, isLoading, isError, error , refetch  } = useQuery({

        queryKey: ['products', searchParams.toString()],
         
        queryFn: fetchProducts,
        // initialData: initialProducts,
 
        keepPreviousData: true,
        
        staleTime: 1000 * 60 * 5,
    });

     const products = apiResponse?.data?.result || [];
    const paginationData = {
        next: apiResponse?.data?.next || null,
        previous: apiResponse?.data?.previous || null,
        count: apiResponse?.data?.count || 0,
    };

    const totalPages = Math.ceil(paginationData.count / ITEMS_PER_PAGE);
 
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchTerm.trim()) {
                params.set('search', searchTerm.trim());
                params.set('page', currentPage);  
            } else {
                params.delete('search');
            }
          
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
                     {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="border rounded-lg p-4 h-[400px] animate-pulse">
                                    <div className="w-full  h-48 bg-gray-200 rounded-md mb-4"></div>
                                    <div className="h-4 mt-12 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-6 mt-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-12 bg-gray-200  w-full mt-4 rounded-full"></div>
                                </div>
 
                            ))}
                        </div>
                    ) : isError ? (
                        <div className="text-center py-10">
                            <p className="text-red-500 mb-4">حدث خطأ: {error.message}</p>
                             <button
                                onClick={() => refetch()}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                إعادة المحاولة
                            </button>
                        </div>
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
             <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={paginationData.next}
                hasPrevPage={paginationData.previous}
            />
        </div>
    );
}