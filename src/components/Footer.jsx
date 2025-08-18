// src/components/Footer.js

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-400    transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-10 py-16">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* العمود 1: الشعار والشعار الفرعي */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/mega-power-logo.png"
              alt="شعار"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed mb-4">شريكك الموثوق لحلول تخزين الطاقة.</p>
            <div className="flex gap-4 mt-auto">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          {/* العمود 2: روابط سريعة */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">الرئيسية</Link></li>
              <li><Link href="/products" className="hover:text-yellow-400 transition-colors">المنتجات</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-400 transition-colors">المشاريع</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>
          {/* العمود 3: الدعم */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              الدعم
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">التحميلات</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">الضمان</Link></li>
            </ul>
          </div>
          {/* العمود 4: تواصل معنا */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              تواصل معنا
            </h3>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-map-marker-alt mt-1"></i>الصين، جورجيا</p>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-envelope mt-1"></i>info@megapower.com</p>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-phone mt-1"></i>+966 12 345 6789</p>
          </div>
        </div>
        <div className="text-center text-sm border-t border-gray-700 mt-10 pt-6">
          <p>© 2024 MEGA POWER. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;