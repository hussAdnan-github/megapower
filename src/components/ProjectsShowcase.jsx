
import Link from 'next/link';
import { getHome } from '@/context/api';
import { getLocale, getTranslations } from 'next-intl/server';
import MainTitle from './layout/MainTitle';
import CardProject from './CardProject';


export default async function ProjectsShowcase() {
  const getdataprojects = await getHome();
  const t = await getTranslations('Headerpage');



  return (
    <div
      className="   transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title={t('Projectstitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {getdataprojects['data']['projects'].map((project) => (
            <CardProject projects={project} key={project.id} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="inline-block bg-yellow-400 text-[#111827] hover:bg-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300">
            {t('mainbtnprojects')}
          </Link>
        </div>
      </div>
    </div>
  );
};

