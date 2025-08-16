 
import Link from 'next/link';
import Image from 'next/image';

const newsArticles = [
  {
    imageSrc: "/assets/1.png",
    date: "14 أغسطس، 2025",
    title: "ميجا باور تطلق الجيل الجديد من أنظمة تخزين الطاقة",
    link: "#"
  },
  {
    imageSrc: "/assets/1.png",
    date: "10 أغسطس، 2025",
    title: "توسيع شراكاتنا الإقليمية لتغطية أسواق جديدة",
    link: "#"
  },
  {
    imageSrc: "/assets/1.png",
    date: "05 أغسطس، 2025",
    title: "نصائح لاختيار نظام تخزين الطاقة الأنسب لمنزلك",
    link: "#"
  },
];

const LatestNews = () => {
  return (
    <section className="    transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center     mb-12">
          {/* آخر  <span className="text-blue-600">الأخبار</span> */}
          آخر  <span className=" ">الأخبار</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <div key={index} className=" dark-bg-li  rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
              <Link href={article.link} className="block overflow-hidden h-52">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-sm  mb-2">{article.date}</span>
                <h3 className="text-xl font-bold    mb-4">
                  <Link href={article.link} className="hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </Link>
                </h3>
                <Link
                  href={article.link}
                  className="mt-auto inline-block text-blue-600   hover:underline font-semibold"
                >
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/news" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            جميع الأخبار
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;