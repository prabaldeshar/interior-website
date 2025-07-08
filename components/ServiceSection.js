export default function ServiceSection({ heading, description, image, reverse }) {
  return (
    <section className={`row align-items-center g-0 ${reverse ? "flex-row-reverse" : ""} bg-secondary bg-opacity-10`}>
      <div className="col-lg-6 p-5">
        <img
          src={image.src}
          alt={image.alt}
          className="img-fluid card-img services-image"
        />
      </div>
      <div className="col-lg-6 p-5">
        <div className="max-w-xl mx-auto">
          <h2 className="display-5 mb-4 text-dark">{heading}</h2>
          <p className="lead mb-4" style={{ color: "#6b6b6b"}}>{description}</p>

        </div>
      </div>
    </section>
  );
}
