import 'bootstrap/dist/css/bootstrap.css'
import "../../globals.css";

import getProjects from "../../../../helpers/loadJson";
import Carousel from "../../../../components/Carousel";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";


const Details = async ({ params }) => {
const projects = await getProjects();
const params_data = await params;
const project = projects.find(item => item.id == params_data.id)

  return (
    <div className="mt-3 mb-3 mr-2 ml-2">
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Details;
