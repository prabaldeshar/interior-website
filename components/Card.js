'use client'

import { useRouter } from "next/navigation";
import Link from 'next/link'

const Card = ({project}) => {
    const router = useRouter();

    return (
        <div className="col-md-4" key={project.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="image-wrapper"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-auto">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Card;