const HomeCarouselImage = ({ isActive, src = '../../design-1.png', alt = 'Test' }) => {
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img
                className="d-block w-100 img-fluid"
                src={src}
                alt={alt}
                style={{
                    height: '75vh',
                    maxWidth: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(90%)',
                }}
            />
            <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    color: '#fff',
                    background: 'rgba(0, 0, 0, 0.3)', // Optional: add a semi-transparent background
                    textAlign: 'center',
                }}
            >
                <h1
                    className="display-5"
                    style={{
                        fontSize: '4.5rem',
                        fontFamily:  "'Poppins', sans-serif",
                        fontWeight: '600',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Add some text shadow for better visibility
                    }}
                >
                    Ideal Interior
                </h1>
                <p
                    style={{
                        fontSize: '1.7rem',
                        fontFamily:  "'Poppins', sans-serif",
                        fontWeight: '500',
                        marginTop: '1rem',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Add shadow for better contrast
                    }}
                >
                    Where Design comes to life
                </p>
            </div>
        </div>
    );
};

export default HomeCarouselImage;
