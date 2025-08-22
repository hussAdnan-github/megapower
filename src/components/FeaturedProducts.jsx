
import Link from 'next/link';
import Image from 'next/image';
import { getHome } from '@/context/api';
import { getLocale, getTranslations } from 'next-intl/server';
import MainTitle from './layout/MainTitle';
import CardProduct from './CardProduct';



export default async function FeaturedProducts() {
  const getdataproducts = await getHome();
  
  const t = await getTranslations('Headerpage');
  return (
    <section className=" transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title={t('Productstitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {getdataproducts['data']['products'].map((products , index) => (
          <CardProduct product={products}  key={products.id} />
          ))}
        </div>
      </div>
    </section> 
  );
};
