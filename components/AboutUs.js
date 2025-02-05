"use client"

// import Image from "next/image"


const AboutUsCard = ({title, description}) => {

  return (
    <div className="col-sm-6">
        <div className="position-relative mb-4">
          <h3 className="fw-bold mb-2" style={{ color: "#0a0a0a", fontFamily:  "'Poppins', sans-serif", fontSize: "1.4rem" }}>
          {title}
          </h3>
          <div
            className="position-absolute"
            style={{
              bottom: "-8px",
              left: "0",
              width: "60px",
              height: "3px",
              backgroundColor: "#ffd700",
              fontFamily:  "'Poppins', sans-serif",
            }}
          ></div>
        </div>
        <p className="text-secondary" style={{ fontSize: "1.2rem" }}>{description}</p>
      </div>
  )
}
export default function AboutUs() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <p className="text-secondary mb-2 display-6" style={{ fontFamily:  "'Poppins', sans-serif",}}>About us</p>
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a0a0a", fontFamily:  "'Poppins', sans-serif",}}>
              Bringing Spaces to Life
            </h2>
            <p className="text-secondary mb-5" style={{ fontSize: "1.2rem", fontFamily:  "'Poppins', sans-serif", }}>
            With a passion for interior design, we specialize in creating beautiful, functional spaces tailored to your unique needs. 
            From concept to completion, our designs bring life to homes and businesses alike.
            </p>

            <div className="row g-4">            
              <AboutUsCard title="Design Expertise" description={"Timeless interiors, thoughtfully crafted."} />
              <AboutUsCard title="Creative Solutions" description={"Innovative ideas for every space."} />
              <AboutUsCard title="Collaborative Approach" description={"Your vision, perfectly realized."} />
              <AboutUsCard title="Attention to Detail" description={"Precision in every element."} />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="position-relative rounded-4 overflow-hidden">
            <img
              src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/services/rendering.jpeg"
              alt="Team collaborating in a modern office setting"
              width={800}
              height={600}
              className="img-fluid rounded-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

