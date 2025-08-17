// components/PaginationControls.tsx
'use client';

import { useTranslations } from 'next-intl';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';



export default function PaginationControls({ nameApi, currentPage, totalPages, hasPrevPage, hasNextPage }) {
  const router = useRouter();
  const t = useTranslations('Pagination');

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  console.log(pageNumbers)


  return (
    <nav className="flex justify-center items-center gap-4 mt-8">
      <button
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        disabled={!hasPrevPage}
        onClick={() => router.push(`${nameApi}page=${currentPage - 1}`)}
        aria-label="الصفحة السابقة"
      >
        {t('prev')}

      </button>

      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow border border-gray-200">
        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`${nameApi}page=${pageNumber}`}
            className={`w-9 h-9 flex items-center justify-center text-sm font-bold rounded-full transition-all duration-200 border-2 ${currentPage === pageNumber
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110'
                : 'text-blue-600 bg-white border-blue-200 hover:bg-blue-50 hover:scale-105'
              }`}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          >
            {pageNumber}
          </Link>
        ))}
      </div>

      <button
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        disabled={!hasNextPage}
        onClick={() => router.push(`${nameApi}page=${currentPage + 1}`)}
        aria-label="الصفحة التالية"
      >
        {t('next')}
      </button>
    </nav>
  );
}