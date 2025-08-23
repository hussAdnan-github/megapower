
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
      {/* <Certifications /> */}
      <ContactUs />
    </>
  );
}
