// src/app/products/[productId]/page.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// بيانات المنتجات
const productsData = {
  'mp-h5': {
    name: 'MEGA POWER MP-H5',
    capacity: '5.12 kWh',
    cycles: '>6000 دورة',
    safety: 'أمان LiFePO4',
    subtitle: 'نظام تخزين طاقة سكني بسعة 5.12 كيلوواط ساعة',
    shortDesc: 'MP-H5 هو حجر الزاوية للاستقلالية المنزلية في الطاقة، ويقدم توازناً مثالياً بين السعة، الأمان، وطول العمر. مثالي لتخزين الطاقة الشمسية وضمان بقاء منزلك مزوداً بالطاقة أثناء الانقطاعات.',
    images: ["/assets/1.png", "/assets/2.jpeg", "/assets/4.jpeg"],
    description: `
      <h3>وصف المنتج</h3>
      <p>يُمثل <strong>MEGA POWER MP-H5</strong> الجيل القادم من حلول تخزين الطاقة المنزلية. تم تصميمه لتحقيق الموثوقية والأداء، ويتكامل بسلاسة مع أنظمة الألواح الشمسية الجديدة أو القائمة. يتيح تصميمه الأنيق والقابل للتكديس سهولة التركيب والتوسعة، مما يعني أنه يمكنك زيادة سعة تخزين الطاقة لديك كلما زادت احتياجاتك.</p>
      <Image src="/assets/product-lifestyle.jpg" alt="المنتج في بيئة منزلية" width={800} height={600} className="inline-image my-6 rounded-lg shadow-lg" />
      <h4>الميزات الرئيسية:</h4>
      <ul>
        <li><strong>خلايا LiFePO4 عالية الكفاءة:</strong> توفر عمرًا أطول وسلامة فائقة مقارنة بالبطاريات التقليدية.</li>
        <li><strong>نظام BMS متقدم:</strong> نظام إدارة البطارية المتكامل لدينا يحمي من الشحن الزائد، والتفريغ الزائد، ودرجات الحرارة القصوى.</li>
        <li><strong>هيكل قابل للتوسعة:</strong> ابدأ بوحدة واحدة وأضف ما يصل إلى 15 وحدة أخرى على التوازي للحصول على سعة تخزين ضخمة. لمزيد من التفاصيل، <Link href="/contact" className="text-blue-600 hover:underline">اتصل بفريق الدعم لدينا</Link>.</li>
      </ul>
    `,
    downloads: [
      { name: "ورقة بيانات MP-H5.pdf", link: "#", icon: "fas fa-file-pdf" },
      { name: "دليل التثبيت.pdf", link: "#", icon: "fas fa-file-alt" },
      { name: "قائمة توافق العاكس.pdf", link: "#", icon: "fas fa-file-powerpoint" },
    ],
  },
  // هنا يمكنك إضافة بيانات منتجات أخرى...
};

export default function ProductDetailPage({ params }) {
  const { productId } = params;
  const product = productsData[productId];

  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [activeTab, setActiveTab] = useState('Description');

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        المنتج غير موجود.
      </div>
    );
  }

  return (
    <>
      {/* Product Detail Section */}
      <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20 px-5 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Gallery */}
          <div className="space-y-6">
            <div className="relative w-full aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
              <Image src={activeImage} alt={product.name} layout="fill" objectFit="contain" />
            </div>
            <div className="flex justify-center gap-4">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className={`cursor-pointer rounded-md border-2 transition-transform duration-300 transform hover:scale-105 ${
                    activeImage === img ? 'border-blue-600 shadow-lg' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Summary */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">{product.name}</h1>
            <p className="text-xl text-blue-600 font-semibold">{product.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-battery-full text-blue-500"></i> {product.capacity}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-recycle text-blue-500"></i> {product.cycles}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium">
                <i className="fas fa-shield-alt text-blue-500"></i> {product.safety}
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {product.shortDesc}
            </p>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="container mx-auto mt-16">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`py-4 px-6 -mb-px font-semibold transition-colors duration-300 ${
                activeTab === 'Description'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
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

          <div className="py-8 bg-gray-50 dark:bg-gray-800 rounded-b-lg p-6">
            {activeTab === 'Description' && (
              <div dangerouslySetInnerHTML={{ __html: product.description }} className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"></div>
            )}
            {activeTab === 'Downloads' && (
              <ul className="space-y-4">
                {product.downloads.map((download, index) => (
                  <li key={index}>
                    <a href={download.link} download className="flex items-center gap-4 text-blue-600 dark:text-blue-400 hover:underline">
                      <i className={`${download.icon} text-lg w-6 text-center`}></i>
                      <span>{download.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}