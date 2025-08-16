// components/PaginationControls.tsx
'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';



export default function PaginationControls({ nameApi, currentPage, totalPages, hasPrevPage, hasNextPage }) {
  const router = useRouter();

 const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

console.log(pageNumbers)


  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        disabled={!hasPrevPage}
        onClick={() => router.push(`${nameApi}page=${currentPage - 1}`)}
      >
        س
      </button>

     {/* أرقام الصفحات */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`/projects?page=${pageNumber}`}
            className={`px-4 py-2 text-sm font-medium border rounded-md ${
              currentPage === pageNumber
                ? 'bg-blue-600 text-white border-blue-600 z-10'
                : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        disabled={!hasNextPage}

        onClick={() => router.push(`${nameApi}page=${currentPage + 1}`)}
      >
        لاث
      </button>
    </div>
  );
}