 
// export async function generateMetadata() {
//   return {
//     title: "ميجا باور Mega Power  | حلول الطاقة المتكاملة",
//     description: "ميجا باور تقدم حلول الطاقة النظيفة والبطاريات الذكية لمستقبل أكثر استدامة. مشاريعنا المنفذة ومنتجاتنا المميزة تضمن لك الجودة والثقة.",
//     keywords: [
//       "ميجا باور",
//       "بطاريات",
//       "طاقة شمسية",
//       "طاقة متجددة",
//       "مشاريع الطاقة",
//       "حلول الطاقة",
//       "بطاريات LiFePO4",
//       "منتجات الطاقة",
//       "مشاريع منفذة",
//       "أخبار الطاقة",
//       "Mega Power"
//     ],
//     openGraph: {
//       title: "ميجا باور | حلول الطاقة المتكاملة",
//       description: "اكتشف أحدث منتجات الطاقة النظيفة ومشاريعنا المنفذة في ميجا باور.",
//       url: "https://megapower.com",
//       images: [
//         {
//           url: "/assets/mega-power-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "ميجا باور حلول الطاقة"
//         }
//       ],
//       locale: "ar",
//       type: "website"
//     },
    
//   };
// }


export async function generateMetadata({ params }) {
  const { locale } = await params; 
  const lang = locale;

  return {
    title: staticMetadata.home.title[lang],
    description: staticMetadata.home.description[lang],
    keywords: staticMetadata.home.keywords[lang],
  };
}


import ContactUs from "@/components/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import { staticMetadata } from "./metadata";
import Certifications from "@/components/Certifications";


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
