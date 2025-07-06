'use client'
import Link from 'next/link';

const Card = ({ project }) => {
  return (
    <div className="col-md-4" key={project.id}>
      <Link href={`/projects/${project.id}`} passHref>
        <div className="card custom-card h-100">
          <div className="card-overlay"></div>
          <div className="card-img-container" style={{ height: "350px", position: "relative" }}>
            <img src={project.cover_image} className="card-img" alt="Card Image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            {project.location && (
              <div className="card-location">
                <svg 
                  className="location-icon" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="location-text">{project.location}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;