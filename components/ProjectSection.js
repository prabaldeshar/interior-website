"use client"

import Link from "next/link"

export default function ProjectSection() {
  return (
    <div className="container pb-2">
      <div className="row g-4 align-items-center">
        {/* Left column with main image */}
        <div className="col-12 col-lg-6">
          <div className="position-relative">
            <div className="ratio ratio-1x1">
              <img
                src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.17+PM.jpeg"
                alt="Interior design showcase"
                className="img-fluid object-fit-cover w-100 h-100"
                style={{ borderRadius: "0 200px 200px 0" }}
              />
            </div>
          </div>
        </div>

        {/* Right column with text and small images */}
        <div className="col-12 col-lg-6">
          <div className="p-4 p-lg-5">
            {/* Small images grid */}
            <div className="row g-4 mb-5">
              <div className="col-6">
                <img
                  src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM.jpeg"
                  alt="Interior with pendant lamp"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-6">
                <img
                  src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/construction_2.jpeg"
                  alt="Modern seating area"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="text-center text-lg-start">
                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a0a0a", fontFamily: "serif",}}>
                See our interior spaces come to life.
              </h2>
              <Link href="/projects">          
                <button className="btn px-4 py-2 text-white" style={{ backgroundColor: "#0a0a0a" }}>
                    → See Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
