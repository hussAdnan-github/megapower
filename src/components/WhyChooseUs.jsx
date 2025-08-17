import { getTranslations } from "next-intl/server";
import MainTitle from "./MainTitle";

const features = [
  {
    iconClass: "fas fa-shield-alt",
    titleKey: "whyTitle_1",
    descriptionKey: "whyDes_1",
  },
  {
    iconClass: "fas fa-battery-full",
    titleKey: "whyTitle_2",
    descriptionKey: "whyDes_2",
  },
  {
    iconClass: "fas fa-leaf",
    titleKey: "whyTitle_4",
    descriptionKey: "whyDes_4",
  },
  {
    iconClass: "fas fa-cogs",
    titleKey: "whyTitle_3",
    descriptionKey: "whyDes_3",
  },
];
const WhyChooseUs = async () => {
  const t = await getTranslations('why');
 
  return ( 
    <section className="    dark-bg-li    transition-colors duration-300 py-30 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title=    {t('whytitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-shadow hover:shadow-xl">
              <i className={`text-4xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110 ${feature.iconClass}`}></i>
              <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p>{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;