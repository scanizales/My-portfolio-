import ListProjects from "../basics/ListProjects";
import TypingText from "../basics/TypingText";

import imgEnlasa from '../../assets/project-enlasa.png';
import imgEnlasa1 from '../../assets/enlasaclients.png';
import imgEnlasa2 from '../../assets/enlasaPolicies.png';
import imgEnlasa3 from '../../assets/enlasaHome.png';

const Projects = () => {

  const projects = [
    {tittle: 'Aplicación Web para Gestionamiento de Seguros', img: [imgEnlasa, imgEnlasa1,  imgEnlasa3, imgEnlasa2], description: 'Enlasa fue desarrollado como proyecto final del SENA. Se trata de una aplicación web cuyo objetivo principal es facilitar la gestión de clientes y sus pólizas, así como la visualización de los productos ofrecidos por la empresa.',
     technologies: ['Django', 'Chart.js', 'HTML5', 'CSS', 'JavaScript'], participation: 'FRONTEND & BACKEND'
    },
  ]
  return (
    <div className="w-[95%] flex flex-col justify-center gap-[3em] px-4">
      <h1><TypingText text={'Proyectos'} nameClass={'text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-default-600 text-center'}></TypingText></h1>
      <ListProjects projects={projects}></ListProjects>
    </div>
  )
}

export default Projects;