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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
