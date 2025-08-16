
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';
import { getLocale, getTranslations } from 'next-intl/server';
import Headerpage from '@/components/Headerpage';
 

const projects = [
  {
    id: 'riyadh-villa',
    title: 'مشروع فيلا الرياض',
    category: 'سكني',
    description: 'حل شمسي وتخزين متكامل يوفر استقلالية في الطاقة على مدار الساعة وطوال أيام الأسبوع وتوفيرًا كبيرًا في الفواتير لفيلا حديثة.',
    imageSrc: '/assets/project.png',
    link: '/projects/riyadh-villa'
  },
  {
    id: 'jeddah-warehouse',
    title: 'تخزين طاقة مستودع جدة',
    category: 'تجاري',
    description: 'ضمان عدم توقف العمل لمنشأة تجارية حيوية بفضل أنظمة طاقة احتياطية موثوقة وفورية.',
    imageSrc: '/assets/project.png',
    link: '/projects/jeddah-warehouse'
  },
  {
    id: 'dammam-farm',
    title: 'مزرعة الدمام خارج الشبكة',
    category: 'زراعي',
    description: 'تزويد أنظمة الري والإضاءة الأساسية بالطاقة في مزرعة نائية، مع استقلالية تامة عن الشبكة.',
    imageSrc: '/assets/project.png',
    link: '/projects/dammam-farm'
  },
  // هنا يمكنك إضافة المزيد من المشاريع
];
async function getProjects() {
  //  console.log(id)
  const res = await fetch(`${baseUrl}projects/projects/`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProjectsPage() {
  const products = await getProjects();
   console.log(products)
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
    <>
   
            <Headerpage title={t('titleProjects')} subTitle={t('subTitleProjects')}/>


      {/* Projects Listing Section */}
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-blue-600 uppercase mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold   mb-2">{project.title}</h3>
                  <p className="  flex-grow mb-4">{project.description}</p>
                  <span className="mt-auto inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    شاهد دراسة الحالة <i className="fas fa-arrow-left"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}