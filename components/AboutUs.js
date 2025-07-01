"use client"

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/constants";
import { useAppData } from "../context/ContactInfoContext";

// import Image from "next/image"

const fetchAboutUs = async () => {
  const res = await fetch(`${BASE_URL}/about-us/`);
  if (!res.ok) throw new Error("Failed to fetch About Us data");
  return res.json();
};


const AboutUsCard = ({title, description}) => {
  return (
    <div className="col-sm-6">
        <div className="position-relative mb-4">
          <h3 className="fw-bold mb-2" style={{ color: "#0a0a0a", fontFamily:  "'Poppins', sans-serif", fontSize: "1.4rem" }}>
          {title}
          </h3>
          <div
            className="position-absolute"
            style={{
              bottom: "-8px",
              left: "0",
              width: "60px",
              height: "3px",
              backgroundColor: "#ffd700",
              fontFamily:  "'Poppins', sans-serif",
            }}
          ></div>
        </div>
        <p className="text-secondary" style={{ fontSize: "1.2rem" }}>{description}</p>
      </div>
  )
}
export default function AboutUs() {
    const {
    data: about,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: fetchAboutUs,
    staleTime: 10 * 60 * 1000,
    retry: false,
  });

  const { homepageImages, isLoading: isAppDataLoading } = useAppData();
  
  if (isLoading || isAppDataLoading) return <p className="text-center py-5">Loading...</p>;
  if (isError || !about) return <p className="text-center text-danger py-5">Failed to load content</p>;
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <p className="text-secondary mb-2 display-6">About us</p>
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a0a0a"}}>
              {about.heading}
            </h2>
            <p className="text-secondary mb-5" style={{ fontSize: "1.2rem"}}>
            {about.description}
            </p>

            <div className="row g-4">            
              {about.points?.map((point, index) => (
                <AboutUsCard key={index} title={point.title} description={point.description} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="position-relative rounded-4 overflow-hidden about-us-image-container">
            <img
              src={homepageImages.about_us[0].image}
              alt={homepageImages.about_us[0].title}
              className="img-fluid rounded-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

