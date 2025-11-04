import Image from 'next/image';
import TitleHero from './TitleHero';

export default function HeroSection() {
  return (
    <section className=" relative h-[90vh] flex flex-col justify-center items-center text-center">
   
      {/* <Image
        src="/assets/b1.jpg"
        alt="صورة خلفية للقسم الرئيسي"  
        layout="fill"
        objectFit="cover"
        placeholder="blur"  
        blurDataURL="/assets/b1-placeholder.jpg"  
        className="-z-10" 
      /> */}
      <Image
  src="/assets/b1.jpg"
  alt="صورة خلفية للقسم الرئيسي"
  fill // استخدم fill بدلاً من layout="fill"
  style={{ objectFit: 'cover' }} // انقل objectFit إلى خاصية style
  placeholder="blur"
  blurDataURL="/assets/b1-placeholder.jpg"
  className="-z-10"
/>
       <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

       <TitleHero />
    </section>
  );
};