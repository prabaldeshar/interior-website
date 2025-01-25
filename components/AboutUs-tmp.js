'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AboutUsSection from './AboutUsSection';

const AboutUs = () => {
  useEffect(() => {
    // Ensure Bootstrap JavaScript is loaded
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  const about_us = [
    {
        heading: "Our Mission",
        description: `At [Company Name], our mission is to create spaces that reflect the unique personality and lifestyle of our clients. 
        We blend creativity, functionality, and timeless aesthetics to deliver exceptional interiors.`,
        image: {
          src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM.jpeg",
          alt: "Our Mission",
        },
        reverse: false,
      },
      {
        heading: "Our Vision",
        description: `To become a leader in the interior design industry by consistently exceeding expectations and setting new standards for excellence and innovation`,
        image: {
          src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/conecpt_planning_2.png",
          alt: "Our Vision",
        },
        reverse: true,
      },
      {
        heading: "Our Values",
        description: `We value integrity, creativity, and client satisfaction above all else. Our team is dedicated to delivering designs that inspire and enrich lives.`,
        image: {
          src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg",
          alt: "Our Values",
        },
        reverse: false,
      }
  ]
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted">
          Discover our passion for transforming spaces into timeless designs.
        </p>
      </div>

      {/* Mission, Vision, Values Section */}
      {about_us.map((section, index) => (
              <AboutUsSection key={index} {...section} />
            ))}
      

      {/* Image Showcase Section */}
      {/* <div className="row g-4">
        <div className="col-md-4">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg"
            alt="Design Example 1"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/conecpt_planning_2.png"
            alt="Design Example 2"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg"
            alt="Design Example 3"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div> */}

      {/* Carousel Button Customization */}
      <style jsx>{`
        .carousel-control-next-icon,
        .carousel-control-prev-icon {
          filter: invert(1); /* Makes the icon white */
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
