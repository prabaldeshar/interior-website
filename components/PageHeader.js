const PageHeader = ({title, image}) => {
    return (
        <section
          className="hero-section position-relative text-center"
          style={{ backgroundImage: `url(${image})` }}>

          <div className="hero-overlay">
            <h1 className="modern-heading">{title}</h1>
          </div>
        </section>
      );
}

export default PageHeader;
