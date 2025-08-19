'use client';
import React, { useState, useEffect } from 'react';
import { baseUrl } from '@/context/baseURL';
import { useSearchParams } from 'next/navigation';

// استيراد المكونات الجديدة
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

export default function ProductList({ initialProducts, department }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const searchParams = useSearchParams();

    useEffect(() => {
        const currentDepartment = searchParams.get('department');
        const debounceTimeout = setTimeout(async () => {
            const params = new URLSearchParams();
            if (searchTerm.trim()) {
                params.append('search', searchTerm.trim());
            }
            if (currentDepartment) {
                params.append('department', currentDepartment);
            }

            if (!searchTerm.trim() && !currentDepartment) {
                setProducts(initialProducts || []);
                return;
            }

            setLoading(true);
            try {
                const res = await fetch(`${baseUrl}/products/products/?${params.toString()}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch combined results');
                }
                const data = await res.json();
                setProducts(data?.data?.result || []);
            } catch (error) {
                console.error(error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, searchParams, initialProducts]);

    // useEffect(() => {
    //     setProducts(initialProducts || []);
    // }, [initialProducts]);

    return (
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
    );
}