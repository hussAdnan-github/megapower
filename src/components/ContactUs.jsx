import { useTranslations } from "next-intl";



export default function ContactUs() {
  const t = useTranslations('Layout');

  return (

    <section className="">
      <div className="flex px-4 md:px-0 pt-4 md:pt-0 flex-col lg:flex-row h-64 items-center justify-between bg-gradient-to-r bg-blue-700  shadow-xl lg:p-12 text-white text-center lg:text-right">
        <div className="mb-8 lg:mb-0 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">هل أنت مستعد لتمكين مستقبلك؟</h2>
          <p className="text-[16px]  ">تواصل معنا اليوم للحصول على استشارة مجانية أو للعثور على موزع قريب منك.</p>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex justify-center items-center  ">
            <div className="flex items-center mb-20 md:mb-0 bg-white rounded-full p-2 w-96 max-w-lg">

              <input
                type="email"
                placeholder={t('ContactUs')}
                className="flex-grow ml-4 px-4 py-2 bg-transparent text-gray-700 placeholder-gray-500 outline-none"
              />
              <button className=" bg-yellow-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-600 transition duration-300">
                {t('ContactUsBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
