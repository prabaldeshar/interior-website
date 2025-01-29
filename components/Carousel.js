"use client";

import { useState } from "react";
import CarouselImage from "./CarouselImage";

const Carousel = ({images, project}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { src: "../../design-1.png", alt: "First slide" },
    { src: "../../design-2.jpg", alt: "Second slide" },
    { src: "../../design-3.jpg", alt: "Third slide" },
    { src: "../../design-4.jpg", alt: "Fourth slide" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Image and Carousel Section */}
        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide shadow-lg rounded overflow-hidden"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {images.map((_, index) => (
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
              {images.map((image, index) => (
                <CarouselImage
                  key={image.id}
                  isActive={index === activeIndex}
                  src={image.image}
                  project={project}
                //   alt={slide.alt}
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
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-slide="next"
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Text and Description Section */}
        <div className="col-lg-3">
          <div className="h-100 d-flex flex-column justify-content-center px-lg-4">
            <h2 className="display-5 text-dark mb-3">Project Overview</h2>
            <p className="text-secondary fs-8 mb-3 lead">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
