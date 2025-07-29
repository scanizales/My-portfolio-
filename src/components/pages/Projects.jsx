import ListProjects from "../basics/ListProjects";
import TypingText from "../basics/TypingText";

import imgEnlasa from '../../assets/project-enlasa.png';

const Projects = () => {

  const projects = [
    {tittle: 'Aplicación Web para Gestionamiento de Seguros', img: imgEnlasa, description: 'Enlasa fue desarrollado como proyecto final del SENA. Se trata de una aplicación web cuyo objetivo principal es facilitar la gestión de clientes y sus pólizas, así como la visualización de los productos ofrecidos por la empresa. Actualmente, el proyecto aún no se encuentra implementado en el dominio del cliente.',
     technologies: ['Django', 'Chart.js', 'HTML5', 'CSS', 'JavaScript'], participation: 'FRONTEND & BACKEND'
    },
  ]
  return (
    <div class="w-[95%] flex flex-col justify-center gap-[3em] px-4">
      <h1><TypingText text={'Proyectos📁'} nameClass={'text-sm sm:text-base md:text-2xl font-semibold leading-none text-default-600 text-center'}></TypingText></h1>
      <ListProjects projects={projects}></ListProjects>
    </div>
  )
}

export default Projects;