import Navbar from "@/Components/Navbar";
import TopBanner from "@/Components/TopBanner";
import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import ShowcaseSection from "@/Components/ShowcaseSection";
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
        <ShowcaseSection />
      </div>

      

      <div id="contact">
        <FooterSection />
      </div>
    </>
  );
};

export default Home;