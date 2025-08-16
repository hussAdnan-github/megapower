 
 

// import { useState } from 'react';
import ImageProject from '@/components/ImageProject';
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';




async function getProject(id) {
   console.log(id)
  const res = await fetch(`${baseUrl}projects/projects/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getImages(id) {
  const resImg = await fetch(`${baseUrl}projects/project-images/?project=${id}`);

  if (!resImg.ok) {
    throw new Error('Failed to fetch data');
  }

  return resImg.json();
}
// const projectsData = {
//   'riyadh-villa': {
//     title: 'مشروع فيلا الرياض',
//     location: 'الرياض، السعودية',
//     category: 'سكني',
//     completed: 'سبتمبر 2024',
//     images: ["/assets/project.png", "/assets/project.png", "/assets/project.png"], // يمكنك استخدام صور مختلفة هنا
//     challenge: 'واجه مالك المنزل، السيد أحمد، انقطاعات متكررة في التيار الكهربائي مما أدى إلى تعطيل حياة عائلته اليومية وجدول عمله من المنزل. أراد أيضاً تحقيق أقصى استفادة من ألواحه الشمسية على السطح وتقليل بصمته الكربونية.',
//     solution: 'صممت MEGA POWER وقامت بتركيب حل طاقة شامل يتميز بـ: وحدة بطارية MEGA POWER MP-H15 (15.36 كيلوواط ساعة). تكامل سلس مع نظام الطاقة الشمسية الكهروضوئية الحالي بقدرة 10 كيلوواط. تهيئة ذكية لإعطاء الأولوية للاستهلاك الذاتي للطاقة الشمسية وتوفير طاقة احتياطية فورية وتلقائية.',
//     result: 'يوفر النظام الآن أكثر من 95% من استقلالية الطاقة للعائلة. يستمتع السيد أحمد بطاقة غير منقطعة وشهد انخفاضًا يزيد عن 80% في فواتير الكهرباء الشهرية.',
//     testimonial: {
//       text: "التعامل مع MEGA POWER كان خطوة غيرت قواعد اللعبة. التثبيت كان احترافيًا، والنظام يعمل بلا عيوب. لم نلاحظ انقطاعًا واحدًا في التيار منذ تركيبه. أوصي بهم بشدة لأي شخص يفكر في تخزين الطاقة.",
//       author: 'أحمد القحطاني',
//       title: 'مالك منزل، الرياض',
//       avatar: '/assets/client-ahmed.jpg'
//     },
//   },
//   // هنا يمكنك إضافة بيانات مشاريع أخرى...
// }; 

export default async function ProjectDetailPage({ params }) {
  const locale = await getLocale();

  const projectId = params.projectId;
   console.log(projectId);

  const project = await getProject(projectId);
  // const images = await getImages(projectId);
  const images = await getImages(2);

   console.log(images);

  // const project = projectsData[projectId];

  // const [activeImage, setActiveImage] = useState(project?.images[0]);

  // if (!project) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-3xl font-bold">
  //       المشروع غير موجود.
  //     </div>
  //   );
  // }

  return (
    <>
      {/* Project Header */}
      <header className="bg-blue-600 text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{`${locale == 'ar' ? project["data"].name_ar : project["data"].name_en}`}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm mt-4">
          <span className="flex items-center gap-2"><i className="fas fa-map-marker-alt"></i> الموقع: {`${locale == 'ar' ? project["data"].location_ar:project["data"].location_en}`}</span>
          {/* <span className="flex items-center gap-2"><i className="fas fa-tag"></i> الفئة: {project.category}</span> */}
          <span className="flex items-center gap-2"><i className="fas fa-calendar-alt"></i> تم الانتهاء: {project["data"].completed}</span>
        </div>
      </header>

      {/* Image Gallery */}

    <ImageProject images={images} title={project.title}/> 

      {/* <section className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto max-w-4xl">
          <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg shadow-xl">
            <Image src={activeImage} alt={project.title} layout="fill" objectFit="cover" />
          </div>
          
        </div>
      </section> */}
      {/* Project Details & Testimonial */}
      {/* <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8 prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">التحدي</h2>
            <p className="text-lg leading-relaxed">{project.challenge}</p>

            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">الحل</h2>
            <p className="text-lg leading-relaxed">{project.solution}</p>
            
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">النتيجة</h2>
            <p className="text-lg leading-relaxed">{project.result}</p>
          </div>

    
          <aside className="lg:col-span-1">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-600 space-y-6">
              <i className="fas fa-quote-left text-blue-600 text-4xl"></i>
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                {project.testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <Image src={project.testimonial.avatar} alt={project.testimonial.author} width={60} height={60} className="rounded-full border-2 border-blue-600" />
                <div>
                  <span className="block font-bold text-gray-800 dark:text-white">{project.testimonial.author}</span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">{project.testimonial.title}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section> */}
    </>
  );
}