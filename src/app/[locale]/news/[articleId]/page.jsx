 
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/context/baseURL';
import SafeHtmlRenderer from '@/components/SafeHtmlRenderer';
import { getLocale, getTranslations } from 'next-intl/server';

async function articlesData(id) {
  
  const res = await fetch(`${baseUrl}news/news-articles/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function  SingleArticlePage({ params }) {
   
  const articleId = (await params).articleId;
 
  
  const  articles =await articlesData(articleId);
 
  const locale = await getLocale();
  const t = await getTranslations('Headerpage');

  return (
    <div className="  transition-colors duration-300">
      <main className="container mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 space-y-6">
            <header
             data-aos="fade-up" data-aos-delay="100"
            
            className="mb-8">
              <span className="dark-bg-li text-xs font-semibold px-3 py-1 rounded-full ">{`${locale == 'ar' ? articles['data'].name_type_article_ar : articles['data'].name_type_article_en}`}</span>
              <h1 className="text-4xl md:text-5xl font-bold  mt-4">{`${locale == 'ar' ? articles['data'].title_ar : articles['data'].title_en}`}</h1>
              <div className=" text-sm mt-2">
                <span>{t('date')}  {articles['data'].author_ar}</span> | <span>{articles['data'].created_at.split('T')[0]}</span>
              </div>
            </header>

            <div
             data-aos="fade-up" data-aos-delay="200"
              
            className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-xl mb-8">
              <Image src={articles['data'].image} alt={`${locale == 'ar' ? articles['data'].title_ar : articles['data'].title_en}`} layout="fill" objectFit="cover" />
            </div>

            <div className="prose dark:prose-invert max-w-none   leading-relaxed">
              <SafeHtmlRenderer
                     rawHtml={`${locale == 'ar' ? articles['data'].content_ar: articles['data'].content_en}`}
                     className="html-content"  
                   />  
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}