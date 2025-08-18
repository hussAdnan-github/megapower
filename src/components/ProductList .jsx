// المسار: app/components/ProductList.jsx

'use client';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { baseUrl } from '@/context/baseURL';

// 1. المكون الآن يستقبل `department` كـ prop
export default function ProductList({ initialProducts, department }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(false);
    const locale = useLocale();

    const handleSearch = async (searchTerm) => {
        if (!searchTerm.trim()) {
            setProducts(initialProducts || []);
            return;
        }

        setLoading(true);
        try {
            let endpoint = '';
            
            // 2. نفس منطق اختيار المسار الذي استخدمناه على الخادم
            if (department) {
                endpoint = `${baseUrl}/products/departments/${department}/`;
            } else {
                endpoint = `${baseUrl}/products/products/`;
            }

            const params = new URLSearchParams({ search: searchTerm });
            const url = `${endpoint}?${params.toString()}`;
            console.log("CLIENT SEARCHING:", url); // للتحقق في وحدة تحكم المتصفح

            const res = await fetch(url);
            if (!res.ok) { throw new Error('Failed to fetch search results'); }
            
            const data = await res.json();
            // تأكد من أن بنية الاستجابة من كلا المسارين متطابقة
            setProducts(data?.data?.result ?? []); 
       
        } catch (error) {
            console.error(error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:col-span-3">
            <aside className="lg:hidden mb-8 p-6 rounded-xl shadow-lg">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">البحث عن المنتجات</h3>
                    <div className="relative">
                        <SearchBar onSearchChange={handleSearch} />
                        <i className="fas fa-search absolute left-4 top-1-2 -translate-y-1-2 text-gray-400"></i>
                    </div>
                </div>
            </aside>

            {loading ? (
                <p>جاري البحث...</p>
            ) : Array.isArray(products) && products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
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
                <p>لا توجد منتجات تطابق بحثك أو الفلتر المحدد.</p>
            )}
        </div>
    );
}








// المسار: app/components/ProductList.jsx

'use client';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { baseUrl } from '@/context/baseURL';

export default function ProductList({ initialProducts, department }) {
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
            // المسار الأساسي للبحث ثابت دائمًا
            const endpoint = `${baseUrl}/products/products/`;

            const params = new URLSearchParams({ search: searchTerm });
            
            // إذا كان هناك قسم نشط، أضفه إلى معلمات البحث
            if (department) {
                params.append('department', department);
            }

            const url = `${endpoint}?${params.toString()}`;
            console.log("CLIENT SEARCHING AT:", url); // للتحقق

            const res = await fetch(url);
            if (!res.ok) { throw new Error('Failed to fetch search results'); }
            
            const data = await res.json();
            setProducts(data?.data?.result ?? []); 
       
        } catch (error) {
            console.error(error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:col-span-3">
            <aside className="lg:hidden mb-8 p-6 rounded-xl shadow-lg">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">البحث عن المنتجات</h3>
                    <div className="relative">
                        <SearchBar onSearchChange={handleSearch} />
                        <i className="fas fa-search absolute left-4 top-1-2 -translate-y-1-2 text-gray-400"></i>
                    </div>
                </div>
            </aside>

            {loading ? (
                <p>جاري البحث...</p>
            ) : Array.isArray(products) && products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                            {/* ... باقي كود عرض المنتج ... */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>لا توجد منتجات تطابق بحثك أو الفلتر المحدد.</p>
            )}
        </div>
    );
}