 
import Link from 'next/link';
import Image from 'next/image';
import { getHome } from '@/context/api';
import { getLocale, getTranslations } from 'next-intl/server';
import MainTitle from './MainTitle';

 
const ProjectsShowcase =async () => {
   const getdataprojects = await getHome();
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');
  


  return (
    <section className="   transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
                <MainTitle title=    {t('Projectstitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {getdataprojects['data']['projects'].map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video">
              <Image 
                src={project.image} 
                alt={`${locale == 'ar' ? project.name_ar : project.name_en}`}
                width={800} 
                height={600} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">sdfdsf</h3>
                <p className="text-sm text-gray-200 mt-2 mb-4">{`${locale == 'ar' ? project.name_ar : project.name_en}`}</p>
                <Link href={`/projects/${project.id}`} className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-300">
                   {t('show')} <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
           {t('mainbtnprojects')} 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;