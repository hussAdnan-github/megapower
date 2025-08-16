
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';

import { getLocale } from 'next-intl/server';

// const products = [
//   {
//     id: 'mp-h5',
//     name: 'MEGA POWER MP-H5',
//     description: 'نظام بطارية بسعة 5.12 كيلوواط ساعة، مثالي للاستخدام السكني وتخزين الطاقة الشمسية.',
//     imageSrc: '/assets/1.png',
//     category: 'residential',
//     isComingSoon: false,
//   },
//   {
//     id: 'mp-h15',
//     name: 'MEGA POWER MP-H15',
//     description: 'بطارية عالية السعة 15.36 كيلوواط ساعة للنسخ الاحتياطي الكامل للمنزل واستقلالية الطاقة.',
//     imageSrc: '/assets/1.png',
//     category: 'residential',
//     isComingSoon: false,
//   },
//   {
//     id: 'mp-c50',
//     name: 'MEGA POWER MP-C50',
//     description: 'حل بسعة 50 كيلوواط ساعة للشركات الصغيرة والعيادات والمكاتب. (قريباً)',
//     imageSrc: '/assets/1.png',
//     category: 'commercial',
//     isComingSoon: true,
//   },
//   {
//     id: 'mp-c0',
//     name: 'MEGA POWER MP-C50',
//     description: 'حل بسعة 50 كيلوواط ساعة للشركات الصغيرة والعيادات والمكاتب. (قريباً)',
//     imageSrc: '/assets/1.png',
//     category: 'commercial',
//     isComingSoon: true,
//   },
//   {
//     id: 'mp-50',
//     name: 'MEGA POWER MP-C50',
//     description: 'حل بسعة 50 كيلوواط ساعة للشركات الصغيرة والعيادات والمكاتب. (قريباً)',
//     imageSrc: '/assets/1.png',
//     category: 'commercial',
//     isComingSoon: true,
//   },
//   // يمكن إضافة المزيد من المنتجات هنا
// ];

async function getProducts() {
  const res = await fetch(`${baseUrl}/products/products/`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  const locale = await getLocale();

  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-600 text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">منتجاتنا</h1>
        <p className="text-lg">اكتشف حلول تخزين الطاقة الموثوقة لدينا.</p>
      </section>
 
      {/* Products Listing Section */}
      <section className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg h-fit sticky top-28">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">البحث عن المنتجات </h3>
              <div className="relative">
                <input type="text" placeholder="مثال: MP-H5" className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">فئات المنتجات</h3>
              <ul className="space-y-2">
                <li><button className="w-full text-right py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold transition-colors duration-200">كل المنتجات</button></li>
                <li><button className="w-full text-right py-2 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">السلسلة السكنية</button></li>
                <li><button className="w-full text-right py-2 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">السلسلة التجارية</button></li>
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products['data']['result'].map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="p-4 bg-gray-50 dark:bg-gray-950 flex justify-center items-center h-60">
                  <Image
                    src={product.image}
                    alt={`${locale == 'ar' ? product.name_ar : product.name_en}`}
                    width={250}
                    height={250}
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{`${locale == 'ar' ? product.name_ar : product.name_en}`}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4">{`${locale == 'ar' ? product.short_description_ar : product.short_description_en}`}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className={`mt-auto inline-block font-semibold py-3 px-6 rounded-full transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white`}
                  >
                   عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}