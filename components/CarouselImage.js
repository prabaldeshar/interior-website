const CarouselImage = ({isActive, src="../../design-1.png", alt="Test"}) => {
    console.log(isActive)
    if (isActive === true) {       
        return (
            <div className="carousel-item active">
                <img className="d-block w-100 img-fluid img-thumbnail"  src={src} alt="Third slide" style={{ height: '610px', objectFit: 'cover' }}  />
            </div> 
        );
    } else {
        return (
            <div className="carousel-item ">
                <img className="d-block w-100 img-fluid img-thumbnail"  src={src} alt="Third slide" style={{ height: '610px', objectFit: 'cover' }} /> 
            </div> 
        );
    }
    }

export default CarouselImage;
