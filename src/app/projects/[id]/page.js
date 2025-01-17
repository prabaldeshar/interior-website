import getProjects from "../../../../helpers/loadJson";

const ProjectDetails = async ({ params }) => {
const projects = await getProjects();
const params_data = await params;
const project = projects.find(item => item.id == params_data.id)
console.log("TestProject");
console.log(projects);
console.log(params_data.id);
console.log(project);
  return (
    <div className="container py-5">
      <h1>Project Details for ID: {project.id} {project.title}</h1>
      <p>This page will display details for project</p>
    </div>
  );
};

export default ProjectDetails;
