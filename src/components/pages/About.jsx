import {Image} from "@heroui/react";

import { useDarkMode } from "../../js/useDarkMode";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import TypingText from "../basics/TypingText";
import LitsCards from "../basics/LitsCards";

import avatar from '../../assets/avatar.png';
import avatarLight from '../../assets/avatarLight.png';

const About = () => {

  const isDark = useDarkMode();

  const studies = [
    { tittle: 'Técnico en Sistemas', entity: 'SENA', duration: 'Febrero 2022 - Noviembre 2023 (Articulado con la media)'},
    { tittle: 'Tecnológo en Análisis y Desarrollo de Sistemas de la Información', entity: 'SENA', duration: 'Enero 2024 - Julio 2025'},
    { tittle: 'Desarrollo Frontend con React y Redux', entity: 'SENA, KeyCode y la AHK', duration: 'Agosto 2024 - Noviembre 2024'}, 
  ];

  return (
    <div className="px-4 w-[95%] flex flex-col justify-center gap-[3em]">
      <div className="flex flex-col justify-center gap-[3em]">
        <h1><TypingText text={'Sobre mi'} nameClass={'text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-default-600 text-center'}></TypingText></h1>
        <div> 
          <div className="py-[1rem] flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex justify-center md:justify-start">
              <Image
                isBlurred
                alt="Avatar"
                src={isDark? avatar: avatarLight}
                className="
                 w-[auto] md:w-[2000px] lg:w-[2500px] lg:h-[400px]
                  h-auto
                  rounded-full
                  animate-slide-down
                "
              /></div>
              <div className="space-y-8">  
              <p className="px-3 py-0 text-base text-[color:var(--text-color)]">
                Inicié mi formación como Tecnóloga en Análisis y Desarrollo de Software en 2024 en el <strong>SENA</strong>. 
                Desde entonces he construido un perfil enfocado en el aprendizaje constante y la aplicación práctica, desarrollando proyectos académicos y personales, participando a nivel nacional en <strong>Mujeres Digitales 2024</strong> y realizando mis prácticas en un entorno real de desarrollo.
                <br />
                <br />
                Actualmente trabajo en el área y busco seguir creciendo profesionalmente, asumir nuevos desafíos y aportar valor mientras sigo fortaleciendo mis habilidades técnicas.
              </p>
          <SyntaxHighlighter
            language="java"
            style={isDark ? oneDark : solarizedlight}
            customStyle={{borderRadius: '8px', width: 'auto', ...(isDark ? {} : { background: 'var(--bg-elements)' })}}
            className="px-3 py-0 !text-[10px]  md:!text-[12px] lg:!text-[15px] border border-transparent hover:border-color-blue"        >
          {`Map<String, String> habilidadesBlandas = new HashMap<String, String>();

  habilidadesBlandas.put("Comunicación", "☑️");
  habilidadesBlandas.put("Trabajo en equipo", "☑️");
  habilidadesBlandas.put("Adaptabilidad", "☑️");
  habilidadesBlandas.put("Organización", "☑️");
  habilidadesBlandas.put("Gestión del tiempo", "☑️");
  habilidadesBlandas.put("Aprendizaje autónomo", "☑️");
          `}
          </SyntaxHighlighter>              
              </div>
            </div>
        </div>
      </div>
      <h3  className='border-t-2 border-t-color-blue pt-4 text-lg md:text-xl lg:text-2xl font-semibold leading-none text-default-600 text-center'> 📚 Estudios y Cursos 🧠</h3>
      <LitsCards studies={studies}></LitsCards> 
    </div>
  )
}

export default About;