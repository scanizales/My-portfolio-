import CardStudy from './CardStudy';

const LitsCards = ({studies}) => {
  return (
    <div className="flex flex-wrap justify-center gap-[2em]">
    {studies.map((study, index) => (
        <CardStudy key={index} tittle={study.tittle} entity= {study.entity} duration= {study.duration} 
        technologies={study.technologies}></CardStudy>
     ))}
    </div>
  )
}

export default LitsCards;