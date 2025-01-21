import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const services = [
    {
      title: "Architecture",
      bgImage: "https://via.placeholder.com/300x200?text=Architecture",
    },
    {
      title: "Interior Design",
      bgImage: "https://via.placeholder.com/300x200?text=Interior+Design",
    },
    {
      title: "Construction and Supervision",
      bgImage: "https://via.placeholder.com/300x200?text=Construction",
    },
    {
      title: "Furniture and Decor",
      bgImage: "https://via.placeholder.com/300x200?text=Furniture",
    },
  ];

  return (
    <section className="services-section" id="services">
        <div className="container">
          <h1 className='text-center mb-4'>Our Services</h1>
          <p className="text-center mb-5" style={{ fontSize: "1.3rem" }}>
            Transforming spaces into timeless reflections of your style with innovative, functional, and elegant interior design solutions.
            </p>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                    <div className="card h-100 p-4">
                        <div className="icon"><i className="fas fa-drafting-compass"></i></div>
                        <h5>Architecture</h5>
                        <p>Designing enduring, innovative spaces that harmonize function and aesthetics with a focus on sustainability and client collaboration.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card h-100 p-4">
                        <div className="icon"><i className="fas fa-couch"></i></div>
                        <h5>Interior Design</h5>
                        <p>Crafting captivating interiors that blend beauty and functionality, tailored to individual styles for spaces that evoke comfort and elegance.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card h-100 p-4">
                        <div className="icon"><i className="fas fa-hard-hat"></i></div>
                        <h5>Construction & Supervision</h5>
                        <p>Elevating spaces with curated or custom-designed furniture and decor elements, transforming environments into harmonious and captivating settings.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card h-100 p-4">
                        <div className="icon"><i className="fas fa-chair"></i></div>
                        <h5>Furniture & Decor</h5>
                        <p>Elevate spaces with personalized touches. Our services offer curated selections or custom-designed furniture and decor, enhancing ambiance and functionality.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
