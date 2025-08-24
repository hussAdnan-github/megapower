export async function generateMetadata() {
  return {
    title: 'منتجات Mega Power ميجا باور | حلول الطاقة المتقدمة',
    description: 'اكتشف حلول تخزين الطاقة وبطاريات LiFePO4 الموثوقة من Mega Power ميجا باور للمنازل والشركات.',
    keywords: ['Mega Power ميجا باور', 'بطاريات', 'طاقة', 'LiFePO4', 'منتجات الطاقة'],
    openGraph: {
      title: 'منتجات Mega Power ميجا باور | حلول الطاقة المتقدمة',
      description: 'اكتشف حلول تخزين الطاقة وبطاريات LiFePO4 الموثوقة من Mega Power ميجا باور للمنازل والشركات.',
      images: ['/assets/mega-power-logo.png'],
      type: 'website',
      locale: 'ar',
    },
    
  };
}
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
 
import ProductList from '@/components/ProductList ';



// async function getProducts() {
//   let url = `${baseUrl}/products/products/`;
//   // if (department) {
//   //   url += `&department=${department}`;
//   // }
//   const res = await fetch(url, {
//     next: { revalidate: 3600 } // إعادة التحقق كل ساعة (3600 ثانية)
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

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
          <ProductList    department={departmentsData['data']["result"]} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
}