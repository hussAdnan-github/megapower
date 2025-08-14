// src/components/HeroSection.js

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      className="h-[90vh] flex flex-col justify-center items-center text-center text-white p-5 bg-cover bg-center" 
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/b1.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        طاقة نقية، <br className="md:hidden" /> مستقبل مشرق.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        أنظمة تخزين بطاريات LiFePO4 موثوقة وآمنة.


      </p>
      <Link href="/products" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors duration-300">
        اكتشف منتجاتنا
      </Link>
    </section>
  );
};

export default HeroSection;