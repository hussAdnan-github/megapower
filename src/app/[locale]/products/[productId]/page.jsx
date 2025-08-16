

import { use } from 'react';
// import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import TabProduct from '@/components/TabProduct';
import Imagesproduct from '@/components/Imagesproduct';

async function getProduct(id) {
  //  console.log(id)
  const res = await fetch(`${baseUrl}/products/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getImages(id) {
  const resImg = await fetch(`${baseUrl}products/product-images/?product=${id}`);

  if (!resImg.ok) {
    throw new Error('Failed to fetch data');
  }

  return resImg.json();
}

export default async function ProductDetailPage({ params }) {



  const productId = params.productId;

  const product = await getProduct(productId);
  const images = await getImages(productId);
   
  const locale = await getLocale();
  // if (!product) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-3xl font-bold">
  //       المنتج غير موجود.
  //     </div>
  //   );
  // }

  return (
    <>
      {/* Product Detail Section */}
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Imagesproduct images={images['data']['result']} name={`${locale == 'ar' ? product.name_ar : product.name_en}`} />
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold    ">{`${locale == 'ar' ? product['data'].name_ar : product['data'].name_en}`}</h1>
            <p className="text-xl text-blue-600 font-semibold">{`${locale == 'ar' ? product['data'].short_description_ar : product['data'].short_description_en}`}</p>
            {/* <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-battery-full text-blue-500"></i> {product.capacity}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-recycle text-blue-500"></i> {product.cycles}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-shield-alt text-blue-500"></i> {product.safety}
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {product.shortDesc}
            </p> */}
          </div>
        </div>
        <TabProduct rawHtml={locale == 'ar' ? product['data'].description_ar : product['data'].description_en} />
      </section>
    </>
  );
}