const CarouselImage = ({ project, isActive, src = '../../design-1.png', alt = 'Test', }) => {
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img
                className="d-block w-100 img-fluid"
                src={src}
                alt={alt}
                style={{
                    height: '610px',
                    maxWidth: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(90%)',
                }}
            />
            <div className="carousel-caption d-none d-md-block">
                <h5>{project.title}</h5>
                <p>{project.location}</p>
            </div>
        </div>
    );
};

export default CarouselImage;
