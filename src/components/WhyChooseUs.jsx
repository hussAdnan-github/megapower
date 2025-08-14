// src/components/WhyChooseUs.js

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

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          لماذا تختار <span className="text-blue-600">ميجا باور</span>؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-shadow hover:shadow-xl">
              <i className={`text-4xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110 ${feature.iconClass}`}></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;