'use client'

 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function FillterNews({articles  }) {
 
       const searchParams = useSearchParams();
  const activeType = searchParams.get('type_article');

//   const t = useTranslations('Headerpage');
  return (

     <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      {/* زر لإلغاء الفلتر وعرض الكل */}
      <Link
        href="/news"
        className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
          !activeType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        الكل
      </Link>

      {/* عرض أزرار الفلترة بناءً على أنواع المقالات */}
      {articles.map((articleType) => (
        <Link
          key={articleType.id}
          href={`/news?type_article=${articleType.id}`}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
            String(articleType.id) === activeType
              ? 'bg-blue-600 text-white' // Style for active filter
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Style for inactive filter
          }`}
        >
          {articleType.name_ar}  
        </Link>
      ))}
    </div>
  //  <div className="container mx-auto">
  //         {/* Category Filters */}
  //         <div className="flex flex-wrap justify-center gap-4 mb-12">
  //           {articles.map((article) => (
  //             <button
  //               key={article.id}
  //               className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 `}
  //             >
  //               {article.name_ar}
  //             </button>
              
  //           ))}
  //           <button>
  //               All
  //             </button>
  //         </div>

  //         {/* Animated Articles Grid */}
  //         {/* <AnimatePresence mode="wait">
  //           <motion.div */}
  //         {/* key={activeCategory}
  //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //             variants={containerVariants}
  //             initial="hidden"
  //             animate="show"
  //           > */}

  //         <div>
                
  //                 {/* <div
  //                   key={article.id}
  //                   className=" dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
  //                   // variants={itemVariants}
  //                   // layout
  //                 >
  //                   <Link href={`/news/${article.id}`} className="block">
  //                     <div className="relative h-60 w-full">
  //                       <Image 
  //                         src={article.image} 
  //                         alt={article.title_ar} 
  //                         layout="fill"
  //                         objectFit="cover"
  //                         className="transition-transform duration-500 hover:scale-105"
  //                       />
  //                     </div>
  //                   </Link>
  //                   <div className="p-6">
  //                     <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
  //                       <span className="  py-1 px-3 rounded-full font-semibold text-xs">{article.category}</span>
  //                       <span>{article.created_at}</span>
  //                     </div>
  //                     <h3 className="text-xl font-bold   mb-2">
  //                       <Link href={`/news/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
  //                         {article.title_ar}
  //                       </Link>
  //                     </h3>
  //                     <p className=" ">{article.type_article}</p>
  //                   </div>
  //                 </div> */}
                
               
  //         </div>
  //         {/* </motion.div>
  //         </AnimatePresence> */}
  //       </div>
  )
}
