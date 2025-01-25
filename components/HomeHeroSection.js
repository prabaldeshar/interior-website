"use client"

import { useState } from "react"
import HomeCarouselImage from "./HomeCaroselImage";

const slides = [
  {
    id: 1,
    title: "Discover the Art of Interior Design",
    subtitle: "Creating Spaces that Inspire",
    description:
      "The art of harmonizing colors, textures, and materials, as we craft personalized designs tailored to your unique vision.",
    image: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/furniture.jpeg",
  },
]

export default function HomeHeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

    const handleNext = () => {
    setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    };

  const slides = [
    { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg", alt: "First slide" },
    { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/construction_2.jpeg", alt: "Second slide" },
    { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg", alt: "Third slide" },
    { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg", alt: "Fourth slide" },
  ];

  return (
    <section className="home-hero-section position-relative overflow-hidden bg-dark text-white ">
        <div className="position-absolute w-100">
        <div className="container-fluid p-0">
        <div className="row align-items-center g-0">
        <div className="col-lg-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide shadow-lg rounded overflow-hidden"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === activeIndex ? "active" : ""}
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>

            {/* Carousel Images */}
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <HomeCarouselImage
                  key={index}
                  isActive={index === activeIndex}
                  src={slide.src}
                  alt={slide.alt}
                />
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-slide="prev"
              onClick={handlePrev}
            >
             <span><i className="fa fa-angle-left" aria-hidden="true"></i></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-slide="next"
              onClick={handleNext}
            >
             <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </div>
        </div>
        </div>
        
      
    </section>
  )
}

