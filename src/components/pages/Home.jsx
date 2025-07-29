import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@heroui/react";

import { useDarkMode } from "../../js/useDarkMode";

import Carousel from "../basics/Carousel";
import DownloadButton from '../basics/DownloadButton';
import ButtonIcon from '../basics/ButtonIcon';
import TypingText from "../basics/TypingText";

import myPhoto from '../../assets/my-photo.jpeg';
import userLight from '../../assets/user-light.png';
import linkedinLight from '../../assets/linkedin-light.png';
import githubLight from '../../assets/github-light.png';
import linkedinDark from '../../assets/linkedin-dark.png';
import githubDark from '../../assets/github-dark.png';
import userDark from '../../assets/user-dark.png';

import djangoDark from '../../assets/django-dark.svg';
import reactDark from '../../assets/react-dark.svg';
import reactLight from '../../assets/react-light.png';
import djangoLight from '../../assets/django-light.png';
import java from '../../assets/java.svg';
import python from '../../assets/python.svg';
import javaScript from '../../assets/javascript.svg';
import mysql from '../../assets/mysql.svg';
import tailwind from '../../assets/tailwind.png';
import githubIcon from '../../assets/github1.png';
import intellij from '../../assets/intellij.png';
import visualStudioCode from '../../assets/visual-studio-code.png';
import eclipse from '../../assets/eclipse.png';
import css from '../../assets/css3.png';

import '../../css/home.css';


const Home = () => {

  const isDark = useDarkMode();

  const dataButtons = [
    { img:  isDark ? linkedinDark: linkedinLight, text : 'Linkedin', link : 'https://www.linkedin.com/in/canizales-sofía'},
    { img: isDark ? githubDark: githubLight, text : 'GitHub', link : 'https://github.com/scanizales'}];

  const skills = [
      { name: 'Java', img: java },
      { name: 'Python', img: python },
      { name: 'JavaScript', img: javaScript },
      { name: 'Django', img: isDark ? djangoDark: djangoLight},
      { name: 'React', img: isDark ? reactDark: reactLight},
      { name: 'MySQL', img: mysql },
      { name: 'Tailwind', img: tailwind },
      { name: 'GitHab', img: githubIcon},
      { name: 'IntelliJ IDE', img: intellij},
      { name: 'Visual Studio Code', img: visualStudioCode},
      { name: 'Eclipse', img: eclipse},
      { name: 'CSS', img: css},
  ];

  return (
      <div id='home'>
          <div id='home-center'>
            <div className="w-[75%] flex flex-col gap-[5vh]">
              <h1>
                <TypingText text={'¡Hola y bienvenid@s a mi portafolio!👋'} nameClass={'anton-regular'}></TypingText>
              </h1>
              <Card className="w-[100%] h-[fit-content] mt-10  bg-[var(--bg-elements)] border-2 border-color-blue" >
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar
                      isBordered
                      radius="full"
                      className="w-20 h-20 md:w-35 md:h-35 animate-slide-left"
                      src={myPhoto}
                    />
                    <div className="flex flex-col gap-1 items-start justify-center animate-slide-left">
                      <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold leading-none text-default-600">Sofía Canizales</h4>
                      <h5 className="text-base sm:text-lg md:text-xl tracking-tight text-[color:var(--text-color)]">Desarrolladora Junior</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-base sm:text-lg md:text-xl  text-[color:var(--text-color)]">
                  <p>
                    Tecnóloga en Análisis y Desarrollo de Software, con habilidades para crear soluciones tecnológicas innovadoras y a la medida, enfocadas en la optimización de procesos y el desarrollo de aplicaciones escalables y eficientes.
                    Soy una persona proactiva, creativa y adaptable, con facilidad para el trabajo en equipo, el aprendizaje de nuevas tecnologías y la resolución de desafíos técnicos.
                  </p>
                </CardBody>
                <CardFooter className="flex flex-wrap gap-3">
                  <DownloadButton text={'Descargar CV'} route={'/HV.pdf'} img={isDark ? userDark: userLight} nameFile={'HV-Sofía-Canizales'} ></DownloadButton>
                   {dataButtons.map((item, index) => (
                    <ButtonIcon key={index} img={item.img} text={item.text} link={item.link}></ButtonIcon>
                   ))}
                </CardFooter>
              </Card>
            </div>
            <div className="lg:w-[20%] w-[100%] flex flex-col gap-[3vh] items-center">
              <p className="font-serif font-bold text-[color:var(--text-color)]">Tecnologías que he usado</p>
              <Carousel skills={skills}></Carousel>
            </div>
         </div>
    </div>
  )
}

export default Home;