import Card from "./Card";
// import getProjects from "../helpers/loadJson";

const ProjectList = async () => {
    const response = await fetch('http://localhost:8001/project/list/')
    const data = await response.json()
    const projects = data.projects
    
    // const projects = await getProjects();
    return (
        <section className="py-5 bg-light" id="projects">
        <div className="container">
            <h2 className="text-center mb-4">Our Projects</h2>
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