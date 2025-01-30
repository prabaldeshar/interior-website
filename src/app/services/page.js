import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ServicesPage from "../../../components/ServicesPage";

const Details = async ({ params }) => {
const params_data = await params;

  return (
    <div className="mb-3 mr-2 ml-2">
      <NavBar />
      <ServicesPage />
      <Footer />
    </div>
  );
};

export default Details;
