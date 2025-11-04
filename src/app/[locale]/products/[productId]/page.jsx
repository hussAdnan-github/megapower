
 
 
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import TabProduct from '@/components/TabProduct';
import Imagesproduct from '@/components/Imagesproduct';
import { staticMetadata } from '../../metadata';
 
 
async function getProduct(id) {
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
async function getDocum(id) {
  const resImg = await fetch(`${baseUrl}products/product-documents/?product=${id}`);

  if (!resImg.ok) {
    throw new Error('Failed to fetch data');
  }

  return resImg.json();
}
export async function generateMetadata() {
  const locale = await getLocale();
  return {
    title: staticMetadata.productList.title[locale],
    description: staticMetadata.productList.description[locale],
    keywords: staticMetadata.productList.keywords[locale].join(', '),
  };
}

export default async function ProductDetailPage({ params }) {



    const productId = (await params).productId;


  const product = await getProduct(productId);
  const images = await getImages(productId);
  const documents = await getDocum(productId);
  
  const locale = await getLocale();
 
// const productName = locale === 'ar' ? product.name_ar : product.name_en;
//     const productDescription = locale === 'ar' ? product.short_description_ar : product.short_description_en;

  return (
    <>
     
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Imagesproduct mainImage={product['data'].image} images={images['data']['result']} name={`${locale == 'ar' ? product['data'].name_ar : product['data'].name_en}`} />
          <div   className="space-y-6">
            <h1 className="text-4xl md:text-4xl font-bold    ">{`${locale == 'ar' ? product['data'].name_ar : product['data'].name_en}`}</h1>
            <h2 className="text-4xl md:text-2xl font-bold    ">{`${locale == 'ar' ? product['data'].name_department_ar : product['data'].name_department_en}`}</h2>
            <p className="text-xl  textDark font-semibold">{`${locale == 'ar' ? product['data'].short_description_ar : product['data'].short_description_en}`}</p>
          </div>
        </div>
        <TabProduct rawHtml={locale == 'ar' ? product['data'].description_ar : product['data'].description_en} documents = {documents['data']['result']} locales={locale}/>
      </section>
    </>
  );
}