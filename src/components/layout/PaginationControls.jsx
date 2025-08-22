
'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';



export default function PaginationControls({ currentPage, totalPages, hasPrevPage, hasNextPage }) {
    const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('Pagination');

  const handlePageChange = (newPage) => {

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());


    startTransition(() => {
            router.push(`${pathname}?${params.toString()}`);
        });
  };

const getPaginationRange = (currentPage, totalPages, siblingCount = 1) => {
    const totalPageNumbers = siblingCount + 5;  
 
    if (totalPages <= totalPageNumbers) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
 
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (currentPage - 2 > 1) {
        pages.push(1, '...');
    } else {
        startPage = 1;
    }

    if (currentPage + 2 < totalPages) {
        endPage = currentPage + 2;
    } else {
        endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages) {
        if(endPage < totalPages -1) pages.push('...');
        pages.push(totalPages);
    }
    
    return pages;
};

const pageNumbers = getPaginationRange(currentPage, totalPages);



  return (
    <nav className={`flex justify-center items-center gap-4 mt-8 transition-opacity ${isPending ? 'opacity-75' : ''}`}>
      <button
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
         disabled={!hasPrevPage || isPending}
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="الصفحة السابقة"
      >
        {t('prev')}

      </button>

      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow border border-gray-200">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`cursor-pointer hover:bg-blue-600 hover:text-white w-9 h-9 flex items-center justify-center text-sm font-bold rounded-full transition-all duration-200 border-2 ${currentPage === pageNumber
              ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110'
              : 'text-blue-600 bg-white border-blue-200 hover:bg-blue-50 hover:scale-105'
              }`}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          
            aria-label={`اذهب إلى الصفحة ${pageNumber}`}
            disabled={isPending}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
       disabled={!hasNextPage || isPending}
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="الصفحة التالية"
        
      >
        {t('next')}
      </button>
    </nav>
  );
}