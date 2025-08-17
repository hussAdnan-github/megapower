'use client';
import React, { useState } from 'react'
import SafeHtmlRenderer from './SafeHtmlRenderer';

export default function TabProduct({rawHtml , documents  , locales}) {
  const [activeTab, setActiveTab] = useState('Description');
 
  return (
      <div className="container mx-auto mt-16">
         <div className="flex border-b border-gray-200 -700">
            <button
              className={`py-4 px-6 -mb-px font-semibold transition-colors duration-300 ${
                activeTab === 'Description'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800  '
              }`}
              onClick={() => setActiveTab('Description')}
            >
              الوصف
            </button>
            <button
              className={`py-4 px-6 -mb-px font-semibold transition-colors duration-300 ${
                activeTab === 'Downloads'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
              }`}
              onClick={() => setActiveTab('Downloads')}
            >
              التحميلات
            </button>
          </div> 

          <div className="py-8 dark-bg-li rounded-b-lg p-6">
            {activeTab === 'Description' && (
   <SafeHtmlRenderer
        rawHtml={rawHtml}
        className="html-content" // يمكنك تمرير كلاس للتنسيق
      />          
          )}
            {activeTab === 'Downloads' && (
              <ul className="space-y-4">
               
                {documents.map((download, index) => (
                  <li key={index}>
                    <a href={locales == 'ar' ? download.file_ar : download.file_en} download className="flex items-center gap-4 text-blue-600 dark:text-blue-400 hover:underline">
                      <i className={`  text-lg w-6 text-center`}></i>
                       {locales == 'ar' ? download.file_ar : download.file_en}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>  
        </div>
  )
}
