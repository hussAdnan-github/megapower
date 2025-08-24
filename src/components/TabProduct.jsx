'use client';
import React, { useState } from 'react'
import SafeHtmlRenderer from './SafeHtmlRenderer';
import { useTranslations } from 'next-intl';

export default function TabProduct({rawHtml , documents  , locales}) {
  const [activeTab, setActiveTab] = useState('Description');
  const t =  useTranslations('Layout');
  
  return (
      <div   className="container mx-auto mt-16">
         <div className="flex border-b border-gray-200 -700">
            <button
              className={`hover:cursor-pointer py-4 px-6 -mb-px font-semibold transition-colors duration-300 ${
                activeTab === 'Description'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800  '
              }`}
              onClick={() => setActiveTab('Description')}
            >
            {t('Description')}
            </button>
            <button
              className={`hover:cursor-pointer py-4 px-6 -mb-px font-semibold transition-colors duration-300 ${
                activeTab === 'Downloads'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800  '
              }`}
              onClick={() => setActiveTab('Downloads')}
            >
           {t('Downloads')}
            </button>
          </div> 

          <div className="py-8 dark-bg-li rounded-b-lg p-6">
            {activeTab === 'Description' && (
   <SafeHtmlRenderer
        rawHtml={rawHtml}
        className="html-content"  
      />          
          )}
            {activeTab === 'Downloads' && (
              <ul className="space-y-4">
               
                {documents.map((download, index) => (
                  <li key={index}>
                    <a href={locales == 'ar' ? download.file_ar : download.file_en} download className="flex items-center gap-4 text-blue-600 dark:text-blue-400 hover:underline">
                      <i className={`  text-lg w-6 text-center`}></i>
                       {locales == 'ar' ? download.name_document_ar : download.name_document_en}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>  
        </div>
  )
}
