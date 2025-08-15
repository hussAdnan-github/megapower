// src/components/ContactUs.js

import Link from 'next/link';
import Image from 'next/image';



const ContactUs = () => {
  return (

    <section className="    py-20 px-5 md:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white text-center lg:text-right">
        <div className="mb-8 lg:mb-0 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">هل أنت مستعد لتمكين مستقبلك؟</h2>
          <p className="text-[16px]  ">تواصل معنا اليوم للحصول على استشارة مجانية أو للعثور على موزع قريب منك.</p>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex justify-center items-center  ">
            <div className="flex items-center bg-white rounded-full p-2 w-96 max-w-lg">
              
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow ml-4 px-4 py-2 bg-transparent text-gray-700 placeholder-gray-500 outline-none"
              />
              <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-600 transition duration-300">
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;