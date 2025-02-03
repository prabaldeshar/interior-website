import 'bootstrap/dist/css/bootstrap.css'
import "../../globals.css";

import getProjects from "../../../../helpers/loadJson";
import Carousel from "../../../../components/Carousel";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";
import { BASE_URL } from '../../../../constants/constants';


const Details = async ({ params }) => {
  const params_data = await params;

  const SAMPLE_IMAGES = [
        {
            "id": 1,
            "image": "https://ideal-interior-nepal.s3.amazonaws.com/projects/images/WhatsApp_Image_2025-01-20_at_7.29.20_PM_3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUBLIIKNQC6MG4WFE%2F20250127%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250127T100010Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a154130050e517a8cecdaf753da32ad6f2f004cbbef7e06be9c96d4802aedb1c",
            "description": ""
        },
        {
            "id": 2,
            "image": "https://ideal-interior-nepal.s3.amazonaws.com/projects/images/construction_2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUBLIIKNQC6MG4WFE%2F20250127%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250127T100010Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=adb9c8776f2e154c4a80070d96d2cffe80a595cab255af5f39fa2fd639e30df0",
            "description": ""
        }
  ]
  const SAMPLE_PROJECT = {
    "id": 1,
    "title": "Test Project",
    "description": "Test Project",
    "client_name": "ABC client",
    "location": "Kathmandu Nepal",
    "project_type": "COMMERCIAL",
    "completed_date": "2025-01-27",
    "cover_image": "https://ideal-interior-nepal.s3.amazonaws.com/projects/images/rennovation.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUBLIIKNQC6MG4WFE%2F20250127%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250127T100010Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=abaaec19aff68589987ebcb390b0f3a74d3991614dabb84ef9cff287fec7dd86"
}

  let images = []
  let project = {}

  console.log("Params data")
  console.log(params_data)
  const project_id = params_data.id
  try {

    const response = await fetch(`${BASE_URL}/project/images/${project_id}`, { cache: "no-store" })
    if (!response.ok) {
      throw new Error('Failed to fetch images')
    }
    const data = await response.json()
    images = data.images
    project = data.project
  } catch (error) {
    console.error("Error fetching images", error)
    images = SAMPLE_IMAGES
    project = SAMPLE_PROJECT
  }

  return (
    <div className="mb-3 mr-2 ml-2">
      <NavBar />
      <Carousel images={images} project={project}/>
      <Footer />
    </div>
  );
};

export default Details;
