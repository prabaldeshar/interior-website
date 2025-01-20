'use client'

import { useState } from 'react';
import CarouselImage from './CarouselImage';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        { src: '../../design-1.png', alt: 'First slide' },
        { src: '../../design-2.jpg', alt: 'Second slide' },
        { src: '../../design-3.jpg', alt: 'Third slide' },
        { src: '../../design-4.jpg', alt: 'Fourth slide' },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex == 0) {
                return slides.length - 1;
            } else {
                return prevIndex - 1;
            }
        }
    )};

    const handleNext = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex == slides.length -1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        }
    )};


    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    slides.map((slide, index) => (
                        <li 
                            key={index}
                            data-bs-target="#carouselExampleIndicators" 
                            data-bs-slide-to={index}
                            className={index === activeIndex ? "active" : ""}
                        ></li>
                    ))
                }

            </div>
            <div className="carousel-inner">
                {
                    slides.map((slide, index) => (
                        <CarouselImage key={index} isActive={index === activeIndex} src={slide.src}/>
                    ))
                }
            </div>

             
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
        </>
    );
};

export default Carousel;