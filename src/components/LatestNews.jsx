
import Link from 'next/link';
 import { getHome } from '@/context/api';
import { getTranslations } from 'next-intl/server';
import MainTitle from './layout/MainTitle';
import CardNews from './CardNews';


export default async function LatestNews() {
  const getdataprojects = await getHome();
  const t = await getTranslations('Headerpage');


  return (
    <section className="    transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title={t('Newstitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {getdataprojects['data']['news'].map((article) => (
            <CardNews   article={article} key={article.id} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/news" className="inline-block  transition-all  ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-1 bg-yellow-400 text-[#111827] hover:bg-yellow-500 font-bold py-3 px-8 rounded-full  duration-300">
            {t('btnNews')}
          </Link>
        </div>
      </div>
    </section>
  );
};
