 
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    imageSrc: "/assets/project.png",
    title: "مشروع سكني",
    description: "توفير حلول طاقة متكاملة لمنزل حديث في الرياض، مما يضمن الاكتفاء الذاتي من الطاقة.",
    link: "#"  
  },
  {
    imageSrc: "/assets/project.png",
    title: "مستودع تجاري",
    description: "تركيب نظام بطاريات بسعة 50 كيلوواط ساعة لتشغيل مستودع بالكامل وتقليل فواتير الكهرباء.",
    link: "#"
  },
  {
    imageSrc: "/assets/project.png",
    title: "منشأة صناعية",
    description: "حلول تخزين طاقة مخصصة لضمان استمرارية الإنتاج في منشأة صناعية كبرى.",
    link: "#"
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="   transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center     mb-12">
           {/* <span className="text-blue-600 me-1">مشاريعنا</span>المنفذة */}
           <span className=" me-1">مشاريعنا</span>المنفذة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video">
              <Image 
                src={project.imageSrc} 
                alt={project.title} 
                width={800} 
                height={600} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-200 mt-2 mb-4">{project.description}</p>
                <Link href={project.link} className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-300">
                  اكتشف المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            شاهد جميع المشاريع
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;