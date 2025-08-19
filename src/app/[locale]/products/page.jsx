import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import PaginationControls from '@/components/PaginationControls';
import ProductList from '@/components/ProductList ';



const ITEMS_PER_PAGE = 10;
async function getProducts(page, department) {
  let url = `${baseUrl}/products/products/?page=${page}`;
  if (department) {
    url += `&department=${department}`;
  }
  const res = await fetch(url, { cache: 'no-store' });
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
  const locale = await getLocale();


  const { page, department } = await searchParams;
  const currentPage = Number(page || 1);

  const departmentsData = await getDepartments();
  const productsData = await getProducts(currentPage, department || null);


  const products = productsData?.data?.result || [];
  const totalProducts = productsData?.data?.count || 0;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const hasNextPage = productsData?.data?.next !== null;
  const hasPrevPage = productsData?.data?.previous !== null;


  return (
    <>
      {/* <section className="bg-blue-600 text-white text-center py-20 px-5">
        <h1 data-aos="zoom-in" className="text-4xl md:text-5xl font-bold mb-2">منتجاتنا</h1>
        <p data-aos="zoom-in" data-aos-delay ="200" className="text-lg">اكتشف حلول تخزين الطاقة الموثوقة لدينا.</p>
      </section> */}

      <section className="transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12"> 
          <ProductList initialProducts={products} department={departmentsData['data']["result"]} />
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