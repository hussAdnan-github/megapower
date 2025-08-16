 
import Image from 'next/image';

const certifications = [
  { src: "/assets/WERCS.jpg", alt: "ISO 9001" },
  { src: "/assets/UL1642.jpg", alt: "CE Certification" },
  { src: "/assets/WERCS.jpg", alt: "TUV Certified" },
  { src: "/assets/UL1642.jpg", alt: "UL Certified" },
  { src: "/assets/UL1642.jpg", alt: "UL Certified" },
];

const Certifications = () => {
  return (
    <section className="    transition-colors duration-300 py-20 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-18  ">
           جودة  <span className=" me-2">وثقة</span>معتمدة
           {/* جودة  <span className="text-blue-600 me-2">وثقة</span>معتمدة */}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex-shrink-0 group">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={320}
                height={260}
                // className="    opacity-70 group-hover:opacity-100 dark:invert dark:opacity-70 dark:group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-140"
                className="    opacity-70 group-hover:opacity-100     transition-all duration-300 transform group-hover:scale-140"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;