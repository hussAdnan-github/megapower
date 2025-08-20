 
import Link from 'next/link';
import Image from 'next/image';
import { getHome } from '@/context/api';
import { getLocale, getTranslations } from 'next-intl/server';
import MainTitle from './MainTitle';

 
export default async function LatestNews () {
    const getdataprojects = await getHome();
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');
  
    const delayIncrement = 100; 
  return (
    <section className="    transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
               <MainTitle title=    {t('Newstitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {getdataprojects['data']['news'].map((article, index) => (
            <div
             data-aos="fade-up" data-aos-delay ={index * delayIncrement}
            key={index} className=" dark-bg-li  rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
              <div   className="block overflow-hidden h-52">
                <Image
                  src={article.image}
                  alt={`${locale == 'ar' ? article.title_ar : article.title_en}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                {/* <span className="text-sm  mb-2">{article.date}</span> */}
                <h3 className="text-xl font-bold    mb-4">
                  <div  className="hover:text-blue-600 transition-colors duration-300">
                   {`${locale == 'ar' ? article.title_ar : article.title_en}`}
                  </div>
                </h3>
                <Link
                  href={`/news/${article.id}`} 
                  className="mt-auto inline-block text-blue-600   hover:underline font-semibold"
                >
                 {t('show_2')}  
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/news" className="inline-block bg-yellow-400 text-[#111827] hover:bg-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300">
             {t('btnNews')}  
          </Link>
        </div>
      </div>
    </section>
  );
};
 