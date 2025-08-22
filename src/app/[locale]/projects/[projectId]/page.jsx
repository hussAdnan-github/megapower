import ImageProject from '@/components/ImageProject';
import SafeHtmlRenderer from '@/components/SafeHtmlRenderer';
import { baseUrl } from '@/context/baseURL';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';




async function getProject(id) {
  const res = await fetch(`${baseUrl}projects/projects/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getImages(id) {


  const resImg = await fetch(`${baseUrl}projects/project-images/?project=${id}`);

  if (!resImg.ok) {
    throw new Error('Failed to fetch data');
  }

  return resImg.json();
}


export default async function ProjectDetailPage({ params }) {
  const locale = await getLocale();

  const projectId = (await params).projectId;
  const project = await getProject(projectId);

  const images = await getImages(projectId);

  return (
    <>
      <header className=" dark-bg-li text-center py-16   px-5">
        <h1 className="text-4xl md:text-5xl font-bold  textDark mb-8">{`${locale == 'ar' ? project.name_ar : project.name_en}`}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm mt-4">
          <span className="flex items-center gap-2 text-xl"><i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i> <h1 className='text-xl font-bold'>الموقع: </h1> {`${locale == 'ar' ? project.location_ar : project.location_en}`}</span>
          <div className="flex flex-row items-center justify-center   gap-2"><i className="fas fa-tag text-blue-600 text-2xl "></i> <h1 className='text-xl font-bold'>الفئة: </h1> <div className='flex gap-2 '>
            {project["name_department"].map((depart, index) => (
              <span key={index} className="   text-xl  rounded-lg   uppercase  ">{`${locale == 'ar' ? depart.name_ar : depart.name_en}`}</span>
            ))}
          </div>
          </div>
          <span className="flex items-center gap-2 text-xl"><i className="fas fa-calendar-alt text-blue-600 text-2xl"></i> <h1 className='text-xl font-bold'>تم الانتهاء: </h1> {project.completed}</span>
        </div>
      </header>
     <ImageProject images={images['data']['result']} title={project.title} />
      <section className="dark-bg-li  transition-colors duration-300 py-20 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 prose dark:prose-invert max-w-none">
            <SafeHtmlRenderer rawHtml={`${locale == 'ar' ? project.description_ar : project.description_en}`} className="mt-8" />
          </div>
          <aside className="lg:col-span-1 ">
            <div className="relative DarkCard  p-8 rounded-xl shadow-lg border-e-4 border-blue-600 space-y-6">
              <i className="absolute right-4 fas fa-quote-left text-[#254773ad] text-4xl m-0"></i>
              <div className='mt-3'>
                <p className="text-lg italic  ">
                  {`${locale == 'ar' ? project.commit_owner_ar : project.commit_owner_en}`}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Image src={project.image} alt={`${locale == 'ar' ? project.name_ar : project.name_en}`} width={60} height={60} className="rounded-full border-2 border-blue-600" />
                  <div>
                    <span className="block font-bold  ">{`${locale == 'ar' ? project.name_owner_ar : project.name_owner_en}`} </span>
                    <span className="block text-sm  ">{`${locale == 'ar' ? project.attribute_ar : project.attribute_en}`} </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}