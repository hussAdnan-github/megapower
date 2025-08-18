// المسار: app/products/page.jsx

import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import PaginationControls from '@/components/PaginationControls';
 
import FilterSidebar from '@/components/FilterSidebar';
import ProductList from '@/components/ProductList ';

const ITEMS_PER_PAGE = 10;

async function getProducts(page, department) {
   const res = await fetch(`${baseUrl}/products/products/?page=${page}`,
     { cache: 'no-store' });

if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();

}

async function getDepartments() {
  const res = await fetch(`${baseUrl}/products/departments/`, { cache: 'no-store' });
  if (!res.ok) { throw new Error('Failed to fetch departments'); }
  return res.json();
}

export default async function ProductsPage({ searchParams }) {
  const departmentsData = await getDepartments();
  const departments = departmentsData?.data?.result || [];

  const currentPage = Number(searchParams['page'] ?? 1);
  const currentDepartment = searchParams['department'] || null;

  // استدعاء الدالة الجديدة
  const productsData = await getProducts(currentPage, currentDepartment);
  const products = productsData?.data?.result || [];
  const totalProducts = productsData?.data?.count || 0;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const hasNextPage = productsData?.data?.next !== null;
  const hasPrevPage = productsData?.data?.previous !== null;

  const locale = await getLocale();

  return (
    <>
      <section className="bg-blue-600 text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">منتجاتنا</h1>
        <p className="text-lg">اكتشف حلول تخزين الطاقة الموثوقة لدينا.</p>
      </section>

      <section className="transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12">
          
          {/* <FilterSidebar departments={departments} /> */}

          <ProductList initialProducts={products}   />
        </div>
        <PaginationControls
          nameApi={'/products?'}
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      </section>
    </>
  );
}