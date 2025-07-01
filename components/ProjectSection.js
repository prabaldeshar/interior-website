"use client"

import Link from "next/link"
import { useAppData } from "../context/ContactInfoContext";

export default function ProjectSection() {
  const { homepageImages, isLoading: isAppDataLoading } = useAppData();
  if (isAppDataLoading) return <p className="text-center py-5">Loading...</p>;
  return (
    <div className="container pb-2 bg-white">
      <div className="row g-4 align-items-center">
        {/* Left column with main image */}
        <div className="col-12 col-lg-6">
          <div className="position-relative">
            <div className="ratio ratio-1x1">
              <img
                src={homepageImages.projects[0].image}
                alt={homepageImages.projects[0].title}
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
                  src={homepageImages.projects[1].image}
                  alt={homepageImages.projects[1].title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-6">
                <img
                  src={homepageImages.projects[2].image}
                  alt={homepageImages.projects[2].title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="text-center text-lg-start">
                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a0a0a",  fontFamily:  "'Poppins', sans-serif",}}>
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
