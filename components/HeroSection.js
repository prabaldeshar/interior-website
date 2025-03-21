import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden bg-dark text-white py-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="position-relative">
              <Image
                src="/design-1.png"
                alt="Stylish interior design showcase"
                width={1200}
                height={800}
                layout="responsive"
                className="rounded-3"
                priority
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-0 rounded-3"></div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 position-relative z-index-1">
            <div className="bg-dark bg-opacity-50 p-4 p-lg-5 rounded-3 shadow-lg">
              <h1 className="display-3 fw-bold text-light  mb-3">Your Vision, Our Craftsmanship</h1>
              <p className="lead mb-4">
              At Ideal Interior Nepal, we transform your design dreams into breathtaking realities. 
              Our team specializes in creating timeless interiors that blend beauty, comfort, and innovation.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-transparent border text-light fs-6">Residential</span>
                <span className="badge bg-transparent border text-light fs-6">Commercial</span>
                <span className="badge bg-transparent border text-light fs-6">Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

