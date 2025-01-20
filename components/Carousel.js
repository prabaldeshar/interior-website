'use client';

import { useState } from 'react';
import CarouselImage from './CarouselImage';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        { src: '../../design-1.png', alt: 'First slide'},
        { src: '../../design-2.jpg', alt: 'Second slide' },
        { src: '../../design-3.jpg', alt: 'Third slide' },
        { src: '../../design-4.jpg', alt: 'Fourth slide' },
    ];

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

    return (
        <div className="carousel-container">
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
                            className={index === activeIndex ? 'active' : ''}
                            aria-current={index === activeIndex ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                        ></button>
                    ))}
                </div>

                {/* Carousel Images */}
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <CarouselImage
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
    );
};

export default Carousel;
