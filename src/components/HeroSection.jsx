import { useTranslations } from 'next-intl';
import Link from 'next/link';

const HeroSection = () => {
  const t = useTranslations('Hero');
  return (
    <section
      className="h-[90vh]  flex flex-col justify-center items-center text-center   bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/b1.jpg')" }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
        {t('title')}
      </h1>
      <p className="text-lg text-white md:text-xl max-w-2xl mb-8">
        {t('subTitle')}
      </p>
      <Link href="/products" className="bg-yellow-400 text-[#111827] hover:bg-yellow-500 font-bold py-4 px-8 rounded-full transition-colors duration-300">
        {t('btn')}

      </Link>
    </section>
  );
};

export default HeroSection;