'use client'

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import PageHeader from "../../../components/PageHeader";
import { useContactInfo } from "../../../context/ContactInfoContext";

const Projects = async ({ params }) => {
  const { contactInfo } = useContactInfo();

  return (
    <div className="mb-3 mr-2 ml-2">
      <NavBar />
      <PageHeader
        title="Contact Us"
        image="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM.jpeg"
        subHeading={{ phone: contactInfo.phone, email: contactInfo.email }}
      />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Projects;
