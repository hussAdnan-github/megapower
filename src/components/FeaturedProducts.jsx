 
import Link from 'next/link';
import Image from 'next/image';
import { getHome } from '@/context/api';
import { getLocale, getTranslations } from 'next-intl/server';
import MainTitle from './MainTitle';

 

const  FeaturedProducts = async () => {
  const getdataproducts = await getHome();
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');
 

    const delayIncrement = 100; 
  return (
    <section className=" transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
                <MainTitle title=    {t('Productstitle')} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {getdataproducts['data']['products'].map((product, index) => (
            <div
         data-aos="fade-up" data-aos-delay ={index * delayIncrement}
            
            key={index} className="dark-bg-li   rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-4    flex justify-center items-center h-60">
                <Image 
                  src={product.image} 
                  alt={`${locale == 'ar' ? product.name_ar : product.name_en}`}
                  width={250} 
                  height={250} 
                  className="object-contain max-h-full" 
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-xl font-bold   mb-2">{`${locale == 'ar' ? product.name_ar : product.name_en}`}</h3>
                <p className="  flex-grow mb-4">{`${locale == 'ar' ? product.short_description_ar : product.short_description_en}`}</p>
                <Link 
                  href={`/products/${product.id}`}
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700   font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                >
              {t('show')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;