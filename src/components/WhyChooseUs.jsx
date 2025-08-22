 
import CardWhy from "./CardWhy";
import MainTitle from "./layout/MainTitle";
import { useTranslations } from "next-intl";

const features = [
  {
    id : 1,
    iconClass: "fas fa-shield-alt",
    titleKey: "whyTitle_1",
    descriptionKey: "whyDes_1",
  
    
  },
  {
        id : 2,
    iconClass: "fas fa-battery-full",
    titleKey: "whyTitle_2",
    descriptionKey: "whyDes_2",
   
  },
  {
        id :3,
    iconClass: "fas fa-leaf",
    titleKey: "whyTitle_4",
    descriptionKey: "whyDes_4",
      
  },
  {
        id : 4,
    iconClass: "fas fa-cogs",
    titleKey: "whyTitle_3",
    descriptionKey: "whyDes_3",
   
  },
];
export default function WhyChooseUs () {
  const t =  useTranslations('why');
 
  return ( 
    <section className="    dark-bg-li    transition-colors duration-300 py-30 px-5 md:px-10">
      <div className="container mx-auto">
        <MainTitle title=    {t('whytitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
           
             <CardWhy key={feature.id} features={feature}  />
            
          ))}
        </div>
      </div>
    </section>
  );
};
 