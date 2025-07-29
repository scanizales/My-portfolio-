import {Image} from "@heroui/react";

import { useDarkMode } from "../../js/useDarkMode";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import TypingText from "../basics/TypingText";
import LitsCards from "../basics/LitsCards";

import avatar from '../../assets/avatar.png';

const About = () => {

  const isDark = useDarkMode();

  const studies = [
    { tittle: 'Técnico en Sistemas', entity: 'SENA', duration: 'Febrero 2022 - Noviembre 2023 (Articulado con la media)'},
    { tittle: 'Tecnológo en Análisis y Desarrollo de Sistemas de la Información', entity: 'SENA', duration: 'Enero 2024 - Julio 2025'},
    { tittle: 'Desarrollo Frontend con React y Redux', entity: 'SENA, KeyCode y la AHK', duration: 'Agosto 2025 - Noviembre 2025'}, 
  ];

  return (
    <div class="px-4 w-[95%] flex flex-col justify-center gap-[3em]">
      <div>
        <h1><TypingText text={'Sobre mi'} nameClass={'text-2xl sm:text-3xl lg:text-5xl font-semibold leading-none text-default-600 text-center'}></TypingText></h1>
        <div className="py-[1rem]">
            <Image
              isBlurred
              alt="HeroUI Album Cover"
              className="float-left mr-4 mb-2 w-48 sm:w-50 md:w-55 h-auto rounded-full animate-slide-down"
              src={avatar}
              style={{ zIndex: 1, margin: '0', paddingRight: '1em', paddingLeft:'1em'}}
            />
          <p className="px-3 py-0 text-base text-[color:var(--text-color)]">
            Inicié mi formación como desarrolladora de software en 2024, estudiando un tecnólogo en el <strong>SENA</strong>. Desde entonces, me he dedicado a aprender constantemente, desarrollando mi proyecto final, participando a nivel nacional en <strong>Mujeres Digitales 2024</strong> y creando proyectos personales para seguir mejorando.  
            Realicé mis prácticas aplicando lo aprendido y actualmente continúo formándome, buscando una oportunidad que me permita seguir creciendo en este campo, aportando mis conocimientos y aprendiendo cada día más.
          </p>
        </div>
        <div>
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
      <h3  className='border-t-2 border-t-color-blue pt-4 text-lg md:text-xl lg:text-2xl font-semibold leading-none text-default-600 text-center'> 📚 Estudios y Cursos 🧠</h3>
      <LitsCards studies={studies}></LitsCards> 
    </div>
  )
}

export default About;