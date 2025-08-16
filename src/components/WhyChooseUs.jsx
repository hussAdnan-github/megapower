import { getTranslations } from "next-intl/server";
import MainTitle from "./MainTitle";

const features = [
  {
    iconClass: "fas fa-shield-alt",
    title: "سلامة وموثوقية",
    description: "نستخدم خلايا بطاريات LiFePO4 عالية الجودة لضمان أقصى درجات الأمان.",
  },
  {
    iconClass: "fas fa-battery-full",
    title: "كفاءة عالية",
    description: "أنظمتنا توفر كفاءة استثنائية في الشحن والتفريغ، مما يزيد من توفير الطاقة.",
  },
  {
    iconClass: "fas fa-leaf",
    title: "صديقة للبيئة",
    description: "حلول طاقة نظيفة ومستدامة تقلل من البصمة الكربونية.",
  },
  {
    iconClass: "fas fa-cogs",
    title: "تكنولوجيا متقدمة",
    description: "نظم إدارة البطارية (BMS) تضمن الأداء الأمثل وتحمي من التلف.",
  },
];
const WhyChooseUs = async () => {
  const t = await getTranslations('Headerpage');

  return ( 
    <section className="    dark-bg-li    transition-colors duration-300 py-30 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title=    {t('whytitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6     rounded-lg shadow-md transition-shadow hover:shadow-xl">
              <i className={`text-4xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110 ${feature.iconClass}`}></i>
              <h3 className="text-xl font-semibold    mb-2">{feature.title}</h3>
              <p className="  ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;