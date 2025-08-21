export async function generateMetadata() {
  return {
    title: 'ميجا باور | حلول الطاقة المتقدمة',
    description: 'اكتشف حلول تخزين الطاقة وبطاريات LiFePO4 الموثوقة من ميجا باور للمنازل والشركات.',
    keywords: ['ميجا باور', 'بطاريات', 'طاقة', 'LiFePO4', 'حلول الطاقة'],
    openGraph: {
      title: 'ميجا باور | حلول الطاقة المتقدمة',
      description: 'اكتشف حلول تخزين الطاقة وبطاريات LiFePO4 الموثوقة من ميجا باور للمنازل والشركات.',
      images: ['/assets/mega-power-logo.png'],
      type: 'website',
      locale: 'ar',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ميجا باور | حلول الطاقة المتقدمة',
      description: 'اكتشف حلول تخزين الطاقة وبطاريات LiFePO4 الموثوقة من ميجا باور للمنازل والشركات.',
      images: ['/assets/mega-power-logo.png'],
    },
  };
}
import Certifications from "@/components/Certifications";
import ContactUs from "@/components/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProjectsShowcase />
      <LatestNews />
      <Certifications />
      <ContactUs />
    </>
  );
}
