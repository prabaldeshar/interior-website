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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase text-secondary">Our Services</h3>
          <h2 className="fw-bold">Transforming Spaces with Excellence</h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card bg-dark text-light border-0 h-100 shadow service-card"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                  <h4 className="card-title fw-bold text-uppercase">
                    {service.title}
                  </h4>
                  <a
                    href="#"
                    className="btn btn-link text-white text-decoration-none mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
