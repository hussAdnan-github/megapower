
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';

import ProductList from '@/components/ProductList ';
import { staticMetadata } from '../metadata';


export async function generateMetadata() {
  const lang = await getLocale();

 
  let description = staticMetadata.productList.description[lang];
  let keywords = staticMetadata.productList.keywords[lang].join(", ");

  try {
    const res = await fetch(`${baseUrl}/products/products/`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      const products = data['data']['result'];


      const productNames = products.map(p => lang === 'ar' ? p.name_ar : p.name_en);
      keywords += ", " + productNames.join(", ");

      // إذا أردت جعل العنوان أول منتج
      if (products.length > 0) {

        description = lang === 'ar' ? products[0].short_description_ar : products[0].short_description_en;
      }
    }
  } catch (err) {
    console.error("Failed to fetch products for metadata:", err);
  }

  return {
    title: staticMetadata.productList.title[lang],

    description,
    keywords,

  };
}

 
async function getDepartments() {
  const res = await fetch(`${baseUrl}/products/departments/`, {
    next: { revalidate: 86400 }
  });
  if (!res.ok) { throw new Error('Failed to fetch departments'); }
  return res.json();
}

export default async function ProductsPage({ searchParams }) {
  const locale = await getLocale();

  const { page, department } = await searchParams;
  const currentPage = Number(page || 1);

  const [departmentsData, productsData] = await Promise.all([
    getDepartments(),
    // getProducts()
  ]);

  const products = productsData?.data || [];
  return (
    <>
      <section className="transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12">
          <ProductList department={departmentsData['data']["result"]} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
}