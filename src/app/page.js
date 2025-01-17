import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ProjectList from "../../components/ProjectList";

const Home = () => {
  return (
    <div className="mt-3 mb-3 mr-2 ml-2">
    <NavBar />
    <HeroSection />
    <ProjectList />
    <Footer />
    </div>

  )
};

export default Home;