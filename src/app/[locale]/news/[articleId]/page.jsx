 
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';
import SafeHtmlRenderer from '@/components/SafeHtmlRenderer';
import { getLocale, getTranslations } from 'next-intl/server';

// const articlesData = {
//   'new-residential-series': {
//     title: 'MEGA POWER تطلق سلسلة سكنية جديدة',
//     category: 'أخبار الشركة',
//     author: 'فريق MEGA POWER',
//     date: 'أكتوبر 25, 2024',
//     imageSrc: '/assets/b1.jpg',
//     content: (
//       <>
//         <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
//           الرياض، المملكة العربية السعودية – أعلنت MEGA POWER، الشركة الرائدة في حلول الطاقة المبتكرة، اليوم عن إطلاق سلسلة HomeStack™ المرتقبة، وهي خط جديد من أنظمة تخزين البطاريات السكنية LiFePO4.
//         </p>
//         <p>
//           يهدف خط الإنتاج الجديد إلى تزويد أصحاب المنازل بحل موثوق وآمن وقابل للتطوير لتحقيق الاستقلالية في مجال الطاقة. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et finibus mi. Integer vitae justo quis magna auctor placerat. Proin nec libero sed elit consequat vestibulum.
//         </p>
        
//         <blockquote className="bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-600 p-4 pl-6 my-6 rounded-r-lg">
//           <p className="italic">"هدفنا من سلسلة HomeStack™ هو جعل تخزين الطاقة النظيفة متاحًا وبسيطًا لكل أسرة. نحن نؤمن بأن هذه خطوة مهمة نحو مستقبل مستدام."</p>
//           <footer className="mt-2 text-sm">— الرئيس التنفيذي لشركة MEGA POWER</footer>
//         </blockquote>

//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">الابتكارات الرئيسية في سلسلة HomeStack™</h2>
//         <p>
//           تشمل السلسلة عدة تطورات رئيسية: Phasellus auctor, ex id rhoncus hendrerit, nisl odio facilisis sem, et viverra nisl velit vel eros. Ut id justo sit amet massa sollicitudin convallis.
//         </p>
//         <ul className="list-disc list-inside space-y-2 mt-4">
//           <li><strong>تصميم معياري:</strong> يسمح بالتوسع السهل من 5 كيلوواط ساعة إلى أكثر من 80 كيلوواط ساعة.</li>
//           <li><strong>بروتوكولات أمان محسّنة:</strong> حماية متعددة الطبقات ضمن نظام إدارة البطارية (BMS).</li>
//           <li><strong>تصميم أنيق:</strong> مصمم ليكمل المنزل العصري.</li>
//         </ul>
//       </>
//     ),
//   },
//   'lifepo4-vs-li-ion': {
//     title: 'فهم LiFePO4 مقابل أيون الليثيوم: أيهما أكثر أمانًا؟',
//     category: 'مقالات تقنية',
//     author: 'فريق MEGA POWER',
//     date: 'أكتوبر 22, 2024',
//     imageSrc: '/assets/b1.jpg',
//     content: (
//       <>
//         <p>
//           محتوى المقال عن مقارنة بين LiFePO4 وأيون الليثيوم...
//         </p>
//         {/* يمكنك هنا إضافة محتوى مفصل لهذه المقالة */}
//       </>
//     ),
//   },
//   'riyadh-expo-2024': {
//     title: 'انضموا إلينا في معرض الرياض للطاقة الذكية 2024',
//     category: 'فعاليات',
//     author: 'فريق MEGA POWER',
//     date: 'أكتوبر 18, 2024',
//     imageSrc: '/assets/b1.jpg',
//     content: (
//       <>
//         <p>
//           محتوى المقال عن تفاصيل معرض الرياض...
//         </p>
//         {/* يمكنك هنا إضافة محتوى مفصل لهذه المقالة */}
//       </>
//     ),
//   },
// };
async function articlesData(id) {
  //  console.log(id)
  const res = await fetch(`${baseUrl}news/news-articles/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function  SingleArticlePage({ params }) {
  const articleId = params.articleId;
 
  
  const  articles =await articlesData(articleId);
 
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
   
    <div className="  transition-colors duration-300">
      <main className="container mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-2 space-y-6">
            <header className="mb-8">
              <span className="dark-bg-li text-xs font-semibold px-3 py-1 rounded-full ">{`${locale == 'ar' ? articles['data'].name_type_article_ar : articles['data'].name_type_article_en}`}</span>
              <h1 className="text-4xl md:text-5xl font-bold  mt-4">{`${locale == 'ar' ? articles['data'].title_ar : articles['data'].title_en}`}</h1>
              <div className=" text-sm mt-2">
                <span>{t('date')}  {articles['data'].author_ar}</span> | <span>{articles['data'].created_at.split('T')[0]}</span>
              </div>
            </header>

            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-xl mb-8">
              <Image src={articles['data'].image} alt={`${locale == 'ar' ? articles['data'].title_ar : articles['data'].title_en}`} layout="fill" objectFit="cover" />
            </div>

            <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed">
              <SafeHtmlRenderer
                     rawHtml={`${locale == 'ar' ? articles['data'].content_ar: articles['data'].content_en}`}
                     className="html-content" // يمكنك تمرير كلاس للتنسيق
                   />  
            </div>
          </article>

          {/* Sidebar with Related Articles */}
          {/* <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">مقالات ذات صلة</h3>
              <ul className="space-y-4">
                {relatedArticles.map(([id, relatedArticle]) => (
                  <li key={id}>
                    <Link href={`/news/${id}`} className="flex gap-4 items-center group">
                      <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={relatedArticle.imageSrc} alt={relatedArticle.title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {relatedArticle.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside> */}
        </div>
      </main>
    </div>
  );
}