"use client"

import Card from "./Card";
import { BASE_URL } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";

const SAMPLE_PROJECTS = [
        {
            "id": "project_1",
            "title": "Modern Living Room",
            "description": "A sleek and modern living room design with a focus on minimalism.",
            "cover_image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.16.18+PM.jpeg"
        },
        {
            "id": "project_2",
            "title": "Elegant Office Space",
            "description": "An office space that combines functionality with elegance.",
            "cover_image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.29.16+PM+(2).jpeg"
        },
        {
            "id": "project_3",
            "title": "Cozy Bedroom Design",
            "description": "A warm and inviting bedroom for ultimate relaxation.",
            "cover_image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg"
        },
         {
            "id": "project_4",
            "title": "Cozy Bedroom Design",
            "description": "A warm and inviting bedroom for ultimate relaxation.",
            "cover_image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg"
        },
        {
            "id": "project_5",
            "title": "Elegant Office Space",
            "description": "An office space that combines functionality with elegance.",
            "cover_image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.29.16+PM+(2).jpeg"
        }
    ]

const fetchProjects = async () => {
    const response = await fetch(`${BASE_URL}/project/list/`);
    if (!response.ok) throw new Error("Failed to fetch slides");
    const json = await response.json();
    return json.projects;
}

const ProjectList = () => {
    const { data: projects, isLoading, isError } = useQuery({
        queryKey: ["projectList"],
        queryFn: fetchProjects,
        staleTime: 10 * 60 * 1000, // 10 min before data is considered stale
        cacheTime: 30 * 60 * 1000, // 30 min before cache is deleted
        refetchInterval: 15 * 60 * 1000, // Refetch data every 15 min in the background
      });

    const projectData = isError ? SAMPLE_PROJECTS : projects;

    return (
        <section className="py-5 bg-light" id="projects">
            <div className="container">
                <p className="text-center mb-5" style={{ fontSize: "1.3rem" }}>
                    Explore some of the stunning projects we've completed for our clients.
                </p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {isLoading
                        ? // Show dark placeholder cards while loading
                          [...Array(3)].map((_, index) => (
                              <div key={index} className="col">
                                  <div
                                      className="card shadow-sm placeholder-card"
                                      style={{
                                          height: "350px",
                                          backgroundColor: "#1a1a1a", // Dark background
                                          opacity: 0.2, // Barely visible
                                          borderRadius: "10px",
                                      }}
                                  ></div>
                              </div>
                          ))
                        : projectData.map((project) => <Card key={project.id} project={project} />)}
                </div>
            </div>
        </section>
    );
};


export default ProjectList;