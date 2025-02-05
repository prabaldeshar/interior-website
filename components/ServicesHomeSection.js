"use client"

import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "Architectural Design and Detailing",
    },
    {
      title: "Concept Development and Master Planning",
    },
    {
      title: "3D Rendering and Visualization",
    },
    {
      title: "Construction Project Management",
    },
    {
      title: "Furniture Production",
    },
    {
      title: "Material Supply",
    },
    {
      title: "Renovation",
    }
  ]

  return (
    <section className="services-home-section position-relative py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column (Content) */}
          <div className="col-lg-4">
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a0a0a", fontFamily:  "'Poppins', sans-serif",}}>
              The best of our services
            </h2>
            {/* <p className="text-muted mb-4">
              Consequat elementum, dolor egestas at faucibus dictumst at ultrices auctor gravida neque, dolor molestie
              ut fames porttitor egestas quisque bibendum felis nascetur maecenas et.
            </p> */}
            <Link href="/services">
              <button className="btn px-4 py-2 text-white" style={{ backgroundColor: "#0a0a0a" }}>
                → More Details
              </button>     
            </Link>
          </div>

          {/* Center Column (Image) */}
          <div className="col-lg-3 my-5 my-lg-0">
            <div className="position-relative rounded-4 overflow-hidden">
              <img
                src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg"
                alt="Services"
                style={{ height: "400px", width: "auto", objectFit: "cover" }}
                className="img-fluid rounded-4"
              />
            </div>
          </div>

          {/* Right Column (Services List) */}
          <div className="col-lg-5">
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item mb-1 p-2 rounded-3 transition-all shadow-sm">
                  <p className="mb-3 lead" style={{ color: "#1b4d3e" }}>
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
    </section>
  )
}
