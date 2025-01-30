"use client"

import { useState, useEffect, useCallback, TouchEvent } from "react"
import HomeCarouselImage from "./HomeCaroselImage"

const slides = [
  {
    src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg",
    alt: "First slide",
  },
  { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/construction_2.jpeg", alt: "Second slide" },
  { src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg", alt: "Third slide" },
  {
    src: "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg",
    alt: "Fourth slide",
  },
]

export default function HomeHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [])

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [])

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [handleNext])

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -150) {
      // Swipe right
      handlePrev()
    }
  }

  return (
    <section className="home-hero-section position-relative overflow-hidden bg-dark text-white">
      <div className="position-absolute w-100">
        <div className="container-fluid p-0">
          <div className="row align-items-center g-0">
            <div className="col-lg-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide shadow-lg rounded overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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
                    <HomeCarouselImage key={index} isActive={index === activeIndex} src={slide.src} alt={slide.alt} />
                  ))}
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                  <span>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={handleNext}>
                  <span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
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

