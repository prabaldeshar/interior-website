import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ProjectList from "../../components/ProjectList";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Services from "../../components/Services";
import HomeHeroSection from "../../components/HomeHeroSection";
import AboutUs from "../../components/AboutUs";
import ProjectSection from "../../components/ProjectSection";
import ServicesSection from "../../components/ServicesHomeSection";

const Home = () => {
  return (
    <div className="mb-3 mr-2 ml-2">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

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