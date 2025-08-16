 
import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  {
    imageSrc: "/assets/1.png",
    name: "MP-H10",
    description: "نظام تخزين بطاريات 10.24 كيلوواط ساعة LiFePO4 للاستخدام السكني والتجاري الخفيف.",
    link: "/products/mp-h10"
  },
  {
    imageSrc: "/assets/2.jpeg",
    name: "MP-H5",
    description: "نظام بطاريات 5.12 كيلوواط ساعة مدمج ومثالي للمنازل الصغيرة.",
    link: "/products/mp-h5"
  },
  {
    imageSrc: "/assets/3.jpeg",
    name: "MP-C100",
    description: "حل تخزين طاقة عالي السعة 100 كيلوواط ساعة للمشاريع التجارية الكبيرة.",
    link: "/products/mp-c100"
  },
];

const FeaturedProducts = () => {
  return (
    <section className=" transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center    mb-12">
          {/* منتجاتنا <span className="text-blue-600">المميزة</span> */}
          منتجاتنا <span className=" ">المميزة</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="dark-bg-li   rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-4    flex justify-center items-center h-60">
                <Image 
                  src={product.imageSrc} 
                  alt={product.name} 
                  width={250} 
                  height={250} 
                  className="object-contain max-h-full" 
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-xl font-bold   mb-2">{product.name}</h3>
                <p className="  flex-grow mb-4">{product.description}</p>
                <Link 
                  href={product.link}
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700   font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                >
                  اكتشف المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;