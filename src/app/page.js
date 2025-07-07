import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ProjectList from "../../components/ProjectList";
// moved Bootstrap and global styles into root layout
import Services from "../../components/Services";
import HomeHeroSection from "../../components/HomeHeroSection";
import AboutUs from "../../components/AboutUs";
import ProjectSection from "../../components/ProjectSection";
import ServicesSection from "../../components/ServicesHomeSection";

const Home = () => {
  return (
    <div className="mb-3 mr-2 ml-2 bg-white">

    <NavBar />
    <HomeHeroSection />
    <AboutUs />
    <ServicesSection />
    <ProjectSection />
    <Footer />
    </div>

  )
};

export default Home;