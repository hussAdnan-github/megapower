
import React from 'react'
 
import { baseUrl } from '@/context/baseURL';
import { getLocale, getTranslations } from 'next-intl/server';
import Headerpage from '@/components/Headerpage';
import PaginationControls from '@/components/PaginationControls';
import ProjectList from '@/components/ProjectList';

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

  const currentPage = (await searchParams).page;
  
  const projects = await getProjects(currentPage || 1);
 

  const totalprojects = projects['data'].count;
  const totalPages = Math.ceil(totalprojects / ITEMS_PER_PAGE);

  const hasNextPage = projects['data'].next !== null;
  const hasPrevPage = projects['data'].previous !== null;
 

 
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
    <>
      <Headerpage title={t('titleProjects')} subTitle={t('subTitleProjects')} />
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto">
       <ProjectList projects={projects['data']['result']} locale={locale} btnprojects={t('btnprojects')}/>
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