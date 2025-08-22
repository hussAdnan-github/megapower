// export async function generateMetadata() {
//   return {
//     title: 'مشاريع Mega Power ميجا باور | قصص النجاح والدراسات',
//     description: 'شاهد كيف أحدثت Mega Power ميجا باور ثورة في الطاقة عبر مشاريعها الناجحة ودراسات الحالة.',
//     keywords: ['Mega Power ميجا باور', 'مشاريع', 'دراسات حالة', 'نجاح', 'طاقة'],
//     openGraph: {
//       title: 'مشاريع Mega Power ميجا باور | قصص النجاح والدراسات',
//       description: 'شاهد كيف أحدثت Mega Power ميجا باور ثورة في الطاقة عبر مشاريعها الناجحة ودراسات الحالة.',
//       images: ['/assets/mega-power-logo.png'],
//       type: 'website',
//       locale: 'ar',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: 'مشاريع Mega Power ميجا باور | قصص النجاح والدراسات',
//       description: 'شاهد كيف أحدثت Mega Power ميجا باور ثورة في الطاقة عبر مشاريعها الناجحة ودراسات الحالة.',
//       images: ['/assets/mega-power-logo.png'],
//     },
//   };
// }

import React from 'react'

import { baseUrl } from '@/context/baseURL';
import { getLocale, getTranslations } from 'next-intl/server';
import Headerpage from '@/components/Headerpage';
import PaginationControls from '@/components/layout/PaginationControls';
import ProjectList from '@/components/ProjectList';

const ITEMS_PER_PAGE = 20;

async function getProjects(page) {
  const res = await fetch(`${baseUrl}projects/projects/?page=${page}`, {
    next: { revalidate: 3600 } // تخزين النتائج لمدة ساعة (3600 ثانية)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ProjectsPage({ searchParams }) {

  const currentPage = (await searchParams).page;
  const projects = await getProjects(currentPage || 1);

// 
  const {
    count: totalProjects = 0,
    next = null,
    previous = null,
    result: projectsList = []
  } = projects?.data || {};

  const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE);
  const hasNextPage = next !== null;
  const hasPrevPage = previous !== null;


  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
    <>
      <Headerpage title={t('titleProjects')} subTitle={t('subTitleProjects')} />
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto">
          <ProjectList projects={projectsList} locale={locale} btnprojects={t('btnprojects')} />
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