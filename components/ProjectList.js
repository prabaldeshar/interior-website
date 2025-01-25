import Card from "./Card";
// import getProjects from "../helpers/loadJson";

const ProjectList = async () => {
    // const response = await fetch('http://localhost:8001/project/list/')
    // const data = await response.json()
    // const projects = data.projects

    const projects = [
        {
            "id": "project_1",
            "title": "Modern Living Room",
            "description": "A sleek and modern living room design with a focus on minimalism.",
            "image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.16.18+PM.jpeg"
        },
        {
            "id": "project_2",
            "title": "Elegant Office Space",
            "description": "An office space that combines functionality with elegance.",
            "image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.29.16+PM+(2).jpeg"
        },
        {
            "id": "project_3",
            "title": "Cozy Bedroom Design",
            "description": "A warm and inviting bedroom for ultimate relaxation.",
            "image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg"
        },
         {
            "id": "project_4",
            "title": "Cozy Bedroom Design",
            "description": "A warm and inviting bedroom for ultimate relaxation.",
            "image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.33.16+PM+(1).jpeg"
        },
        {
            "id": "project_5",
            "title": "Elegant Office Space",
            "description": "An office space that combines functionality with elegance.",
            "image": "https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/sample-project/WhatsApp+Image+2025-01-20+at+7.29.16+PM+(2).jpeg"
        }
    ]
    
    // const projects = await getProjects();
    return (
        <section className="py-5 bg-light" id="projects">
        <div className="container">
            <p className="text-center mb-5" style={{ fontSize: "1.3rem" }}>
            Explore some of the stunning projects we've completed for our clients.
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map((project) => (
                <Card key={project.id} project={project}/>
            ))}
            </div>
        </div>
        </section>
    );
};


export default ProjectList;