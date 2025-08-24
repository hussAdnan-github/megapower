export async function generateMetadata() {
  return {
    title: 'أخبار Mega Power ميجا باور | آخر المستجدات والمقالات',
    description: 'تابع أحدث أخبار Mega Power ميجا باور، فعاليات الشركة، والمقالات التقنية حول حلول الطاقة.',
    keywords: ['Mega Power ميجا باور', 'أخبار', 'مقالات', 'فعاليات', 'طاقة'],
    openGraph: {
      title: 'أخبار Mega Power ميجا باور | آخر المستجدات والمقالات',
      description: 'تابع أحدث أخبار Mega Power ميجا باور، فعاليات الشركة، والمقالات التقنية حول حلول الطاقة.',
      images: ['/assets/mega-power-logo.png'],
      type: 'website',
      locale: 'ar',
    },
  };
}

import { baseUrl } from '@/context/baseURL';
import PaginationControls from '@/components/layout/PaginationControls';
import FillterNews from '@/components/FillterNews';
import { getLocale } from 'next-intl/server';
import NewList from '@/components/NewList';
const ITEMS_PER_PAGE = 20;

async function getNews(page, typeArticle) {
  let url = `${baseUrl}news/news-articles/?page=${page}`;

  if (typeArticle) {
    url += `&type_article=${typeArticle}`;
  }
  const res = await fetch(url, { next: { revalidate: 600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getNewsArticles() {
  const res = await fetch(`${baseUrl}news/type-articles/`, {

    next: { revalidate: 86400 }
  }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function NewsPage({ searchParams }) {
  const { page, type_article } = await searchParams;

  const currentPage = Number(page || 1);
 
   const [news, articles] = await Promise.all([
    getNews(currentPage, type_article ?? ''),
    getNewsArticles()
]);

  const totalnews = news['data'].count;
  const totalPages = Math.ceil(totalnews / ITEMS_PER_PAGE);

  const hasNextPage = news['data'].next !== null;
  const hasPrevPage = news['data'].previous !== null;
  const locale = await getLocale();



  return (
    <>
      <section className="  transition-colors duration-300 py-20 px-5 md:px-10">
        <FillterNews articles={articles['data']['result']} locales={locale} />
        <NewList news={news['data']['result']} locales={locale} />

        <PaginationControls
          nameApi={'/news?'}
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      </section>
    </>
  );
}