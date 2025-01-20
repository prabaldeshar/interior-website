import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ProjectList from "../../components/ProjectList";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="mb-3 mr-2 ml-2">
    <NavBar />
    <HeroSection />
    <Services />
    <ProjectList />
    <Footer />
    </div>

  )
};

export default Home;