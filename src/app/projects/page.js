import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ProjectsPage from '../../../components/ProjectsPage';
import ProjectList from "../../../components/ProjectList";

const Projects = async ({ params }) => {
const params_data = await params;

  return (
    <div className="mb-3 mr-2 ml-2">
      <NavBar />
      <ProjectsPage />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Projects;
