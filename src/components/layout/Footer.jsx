

import Link from 'next/link';
import Image from 'next/image';

import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function Footer() {
   const t =await getTranslations('Footer');
  const locale = await getLocale();

  return (
    <footer className="bg-[#222222] text-gray-400    transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-10 py-16">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/mega-power-logo.png"
              alt="شعار"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed mb-4">{t('mainrHeader')}</p>
            <div className="flex gap-4 mt-auto">
              <Link href="https://www.instagram.com/mega.powerye?igsh=dTh2cGs1d3Z6Y2dm" aria-label="instgram" className="text-gray-400 hover:text-white transition-colors"><IoLogoInstagram className='text-2xl' /></Link>
              <Link href="https://www.facebook.com/share/1Cit86v7K5/" aria-label="faceboook" className="text-gray-400 hover:text-white transition-colors"><FaFacebookSquare className='text-2xl' /></Link>
             </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              {t('headerLink')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">    {t('Home')}</Link></li>
              <li><Link href="/products" className="hover:text-yellow-400 transition-colors">{t('Products')}</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-400 transition-colors">{t('Contact')}</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">{t('Projects')}</Link></li>
            </ul>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            {/* <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              {t('headerSupport')}

            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">
                {t('FAQ')}
              </Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">                         {t('Downloads')}
              </Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">                         {t('Warranty')}
              </Link></li>
            </ul> */}
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:h-0.5 after:w-10 after:bg-yellow-400">
              {t('headerContact')}
            </h3>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-map-marker-alt mt-1"></i>                         {t('city')}
            </p>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-envelope mt-1"></i>info@megapower.energy</p>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-phone mt-1"></i>   {locale == 'ar' ? "553 435 783 967+" :"+967 783 435 553   "}</p>
            <p className="flex items-start gap-3 mb-3"><i className="fas fa-phone mt-1"></i> {locale == 'ar' ? "666 270 783 967+" :"+967 783 270  666"}  </p>
          </div>
        </div>
        <div className="text-center text-sm border-t border-gray-700 mt-10 pt-6">
          {t('Copy')}
          <p></p>
        </div>
      </div>
    </footer>
  );
};

