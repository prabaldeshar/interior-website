"use client";

import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import HomeCarouselImage from "./HomeCaroselImage";
import { BASE_URL } from "../constants/constants";
import { useState, useCallback, useEffect } from "react";

const DEFAULT_SLIDES = [
  { image: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/slide1.jpeg", title: "First slide" },
  { image: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/construction_2.jpeg", title: "Second slide" },
  { image: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg", title: "Third slide" },
];

const fetchSlides = async () => {
  const response = await fetch(`${BASE_URL}/api/homepage-slides/`);
  if (!response.ok) throw new Error("Failed to fetch slides");
  const json = await response.json();
  return json.image_details || DEFAULT_SLIDES;
};

export default function HomeHeroSection() {
  const { data: slides = DEFAULT_SLIDES, isLoading, isError } = useQuery({
    queryKey: ["homepageSlides"],
    queryFn: fetchSlides,
    staleTime: 10 * 60 * 1000, // 10 min before data is considered stale
    cacheTime: 30 * 60 * 1000, // 30 min before cache is deleted
    refetchInterval: 15 * 60 * 1000, // Refetch data every 15 min in the background
  });


  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides]);
  
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [handleNext])
  

// ... (imports)

// ... (component code)

if (isLoading) return <Loader />;
  if (isError) return <p>Error loading slides. Showing default images.</p>;

  return (
    <section className="home-hero-section position-relative overflow-hidden bg-dark text-white bg-white">
      <div className="position-absolute w-100">
        <div className="container-fluid p-0">
          <div className="row align-items-center g-0">
            <div className="col-lg-12">
            <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade shadow-lg rounded overflow-hidden"
              >
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

                <div className="carousel-inner">
                  {slides.map((slide, index) => (
                    <HomeCarouselImage key={index} isActive={index === activeIndex} src={slide.image} alt={slide.title} />
                  ))}
                </div>

                <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                  <span><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={handleNext}>
                  <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
