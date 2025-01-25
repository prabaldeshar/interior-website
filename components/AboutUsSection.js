const AboutUsSection = ({ heading, description, image, reverse }) => {
    return (
        <div className={`row align-items-center ${reverse ? "flex-lg-row-reverse" : ""} mb-5`}>
        <div className="col-lg-6">
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "700px", height: "300px", objectFit: "cover" }}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold">{heading}</h2>
          <p className="text-muted">
            {description}
          </p>
        </div>
      </div>
    );
}

export default AboutUsSection;
