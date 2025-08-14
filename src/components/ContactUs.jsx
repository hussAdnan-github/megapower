// src/components/ContactUs.js

import Link from 'next/link';
import Image from 'next/image';

 

const ContactUs = () => {
  return (
    
        <section className="bg-white dark:bg-gray-900 py-20 px-5 md:px-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white text-center lg:text-right">
            <div className="mb-8 lg:mb-0 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">هل أنت مستعد لتمكين مستقبلك؟</h2>
              <p className="text-lg text-blue-100">تواصل معنا اليوم للحصول على استشارة مجانية أو للعثور على موزع قريب منك.</p>
            </div>
            <div className="w-full lg:w-1/3">
              <form id="home-contact-form" className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="أدخل عنوان بريدك الإلكتروني"
                  required
                  className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-blue-600 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-gray-200"
                >
                  ابدأ الآن
                </button>
              </form>
            </div>
          </div>
        </section>
  );
};

export default ContactUs;