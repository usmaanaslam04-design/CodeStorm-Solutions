import Navbar from "@/Components/Navbar";
import TopBanner from "@/Components/TopBanner";
import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import ServicesSection from "@/Components/ServicesSection";
import TechSection from "@/Components/TechStackSection";
import ProjectsSection from "@/Components/ProjectsSection";
import FooterSection from "@/Components/FooterSection";

const Home = () => {
  return (
    <>
      <TopBanner />
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <TechSection />
      <ProjectsSection />

      <div id="contact">
        <FooterSection />
      </div>
    </>
  );
};

export default Home;