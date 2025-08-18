
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';
import { getLocale, getTranslations } from 'next-intl/server';
import Headerpage from '@/components/Headerpage';
import PaginationControls from '@/components/PaginationControls';

const ITEMS_PER_PAGE = 20;

// const projects = [
//   {
//     id: 'riyadh-villa',
//     title: 'مشروع فيلا الرياض',
//     category: 'سكني',
//     description: 'حل شمسي وتخزين متكامل يوفر استقلالية في الطاقة على مدار الساعة وطوال أيام الأسبوع وتوفيرًا كبيرًا في الفواتير لفيلا حديثة.',
//     imageSrc: '/assets/project.png',
//     link: '/projects/riyadh-villa'
//   },
//   {
//     id: 'jeddah-warehouse',
//     title: 'تخزين طاقة مستودع جدة',
//     category: 'تجاري',
//     description: 'ضمان عدم توقف العمل لمنشأة تجارية حيوية بفضل أنظمة طاقة احتياطية موثوقة وفورية.',
//     imageSrc: '/assets/project.png',
//     link: '/projects/jeddah-warehouse'
//   },
//   {
//     id: 'dammam-farm',
//     title: 'مزرعة الدمام خارج الشبكة',
//     category: 'زراعي',
//     description: 'تزويد أنظمة الري والإضاءة الأساسية بالطاقة في مزرعة نائية، مع استقلالية تامة عن الشبكة.',
//     imageSrc: '/assets/project.png',
//     link: '/projects/dammam-farm'
//   },
//   // هنا يمكنك إضافة المزيد من المشاريع
// ];
async function getProjects(page) {
  //  console.log(id)
  const res = await fetch(`${baseUrl}projects/projects/?page=${page}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProjectsPage({ searchParams }) {
  const currentPage = Number(searchParams['page'] ?? 1);

  const projects = await getProjects(currentPage);
  //  console.log(page)

  const totalprojects = projects['data'].count;
  const totalPages = Math.ceil(totalprojects / ITEMS_PER_PAGE);

  const hasNextPage = projects['data'].next !== null;
  const hasPrevPage = projects['data'].previous !== null;
  // console.log(totalPages)


  console.log(projects['data']['result'][0]['name_department']);
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
    <>

      <Headerpage title={t('titleProjects')} subTitle={t('subTitleProjects')} />


      {/* Projects Listing Section */}
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects['data']['result'].map((project) => (

              <Link key={project.id}   href={`projects/${project.id}`}>
                <div

                  className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${locale == 'ar' ? project.name_ar : project.name_en}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className='flex gap-2 '>
                      {project['name_department'].map((depart, index) => (
                        <span key={index} className="text-xs font-bold py-2 px-3 rounded-full bg-blue-600   uppercase mb-2">{`${locale == 'ar' ? depart.name_ar : depart.name_en}`}</span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold   mb-2">{`${locale == 'ar' ? project.name_ar : project.name_en}`}</h3>
                    <p className="  flex-grow mb-4" style={{ wordWrap: "break-word" }}>{`${locale == 'ar' ? project.short_description_ar : project.short_description_en}`}</p>
                    <span className="mt-auto inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                      {t('btnprojects')}
                    </span>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        </div>
        <PaginationControls
          nameApi={'/projects?'}
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      </section>
    </>
  );
}