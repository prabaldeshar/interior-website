"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import ServiceSection from "./ServiceSection";
import PageHeader from "./PageHeader";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/constants";
import { useAppData } from "../context/ContactInfoContext";

const fetchServices = async () => {
  const response = await fetch(`${BASE_URL}/api/services/`);
  if (!response.ok) throw new Error("Failed to fetch services");
  const json = await response.json();

  if (!json.services || !Array.isArray(json.services)) {
    throw new Error("Invalid response from server");
  }

  return json.services;
};

const DEFAULT_SERVICES = [
    {
      heading: "Architectural Design and Detailing",
      description: `Our architectural design services blend creativity with precision, offering solutions tailored to your unique requirements. 
      From initial sketches to intricate detailing, we ensure that every corner, curve, and material choice contributes to a cohesive and impactful design. 
      Our focus is on crafting structures that are not only visually striking but also sustainable, functional, and timeless.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM.jpeg",
        alt: "Architectural Design and Detailing",
      },
      reverse: false,
    },
    {
      heading: "Concept Development and Master Planning",
      description: `We specialize in transforming your initial ideas into fully realized concepts and structured master plans. 
      By carefully analyzing your needs, aspirations, and site conditions, we create a blueprint that serves as the foundation for your project. 
      Our meticulous planning ensures that every element, from functionality to aesthetics, works harmoniously to bring your vision to life.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/conecpt_planning_2.png",
        alt: "Concept Development and Master Planning",
      },
      reverse: true,
    },
    {
      heading: "3D Rendering and Visualization",
      description: `Our advanced 3D rendering and visualization services provide an immersive preview of your project. 
      With photo-realistic details and accurate representations, you can explore every facet of the design, from textures and lighting to spatial arrangements. This allows you to make informed decisions and refine details before construction begins, ensuring the final outcome matches your expectations.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg",
        alt: "3D Rendering and Visualization",
      },
      reverse: false,
    },
    {
      heading: "Construction Project Management",
      description: `We take the stress out of construction by managing every aspect of your project with precision and care. 
      From coordinating contractors and suppliers to monitoring timelines, budgets, and quality, we ensure smooth execution from start to finish. 
      Our goal is to deliver a project that not only meets but exceeds your expectations, on time and within budget.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/construction_2.jpeg",
        alt: "Construction Project Management",
      },
      reverse: true,
    },
    {
      heading: "Furniture Production",
      description: `Our furniture production service combines artistry with craftsmanship to create bespoke pieces that enhance your space. 
      Whether you need custom-built tables, chairs, cabinets, or statement pieces, we use premium materials and skilled techniques to deliver furniture that is durable, functional, and visually stunning, tailored to your personal style.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/furniture.jpeg",
        alt: "Furniture Production",
      },
      reverse: false,
    },
    {
      heading: "Material Supply",
      description: `We provide a seamless supply of high-quality materials that are essential for your project’s success. 
      Our extensive network of trusted suppliers ensures that you receive top-grade products that meet industry standards. 
      From flooring and tiles to fixtures and finishes, we help you choose the perfect materials to complement your design.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.29.16+PM+(2).jpeg",
        alt: "Material Supply",
      },
      reverse: true,
    },
    {
      heading: "Renovation",
      description: `Our renovation services are designed to revitalize and transform your existing spaces, whether it’s a home, office, or commercial property. We combine creative redesign with practical upgrades, breathing new life into outdated or underutilized areas. 
      Our team focuses on preserving the charm of your space while modernizing it to meet your current needs and aesthetic preferences.`,
      image: {
        src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rennovation.jpeg",
        alt: "Renovation",
      },
      reverse: false,
    }
    
  ];

export default function ServicesPage() {
 const { services: allServices, isLoading: isAppDataLoading, isError  } = useAppData();

  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (isAppDataLoading) return <p>Loading services...</p>;
  if (isError) return <p>Failed to load services</p>;
  if (!allServices.length) return <p>No services found</p>;
  

  return (
    
    <main className="container-fluid p-0">
      <PageHeader
        title="Our Services"
        image="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM.jpeg"
      />
      {allServices.map((section, index) => (
        <ServiceSection key={index} {...section} />
      ))}
    </main>
  );
}
