import CardProject from "./CardProject";

const ListProjects = ({ projects}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
       {projects.map((project, index) => (
           <CardProject key={index} tittle={project.tittle} img={project.img} description={project.description}
            technologies={project.technologies} participation={project.participation}></CardProject>
       ))}
    </div>
  )
}

export default ListProjects;