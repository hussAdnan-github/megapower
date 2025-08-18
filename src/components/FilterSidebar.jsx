// المسار: app/components/FilterSidebar.jsx
// (لا حاجة للتعديل)

'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function FilterSidebar({ departments }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const activeDepartment = searchParams.get('department');

  const handleFilterClick = (departmentId) => {
    const params = new URLSearchParams(searchParams);

    if (departmentId) {
      params.set('department', departmentId.toString());
    } else {
      params.delete('department');
    }

    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="lg-col-span-1 p-6 rounded-xl shadow-lg h-fit sticky top-28">
      <div>
        <h3 className="text-xl font-semibold mb-4">فئات المنتجات</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleFilterClick(null)}
              className={`w-full text-right py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${!activeDepartment ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              كل المنتجات
            </button>
          </li>
          
          {departments.map((depart) => (
            <li key={depart.id}>
              <button
                onClick={() => handleFilterClick(depart.id)}
                className={`w-full text-right py-2 px-4 rounded-lg transition-colors duration-200 ${activeDepartment === depart.id.toString() ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {`${locale === 'ar' ? depart.name_ar : depart.name_en}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}