import {Card, CardBody} from "@heroui/react";

const CardStudy = ({ tittle, entity, duration}) => {

  const items = [
    {name: 'Título', value: tittle},
    {name: 'Institución de Formación', value: entity},
    {name: 'Duración', value: duration},
  ]
  return (
    <Card className='w-fit element border-2 border-color-blue p-4 bg-[var(--bg-elements)] relative card-border'>
        <CardBody className="px-3  text-[10px]  md:text-base flex flex-col items-center">
          {items.map((item, index) => (
            <p key={index} className="text-ms sm:text-base text-center text-[color:var(--text-color)]"><strong>{item.name}:</strong> {item.value}</p>
          ))}
        </CardBody>
    </Card>
  )
}

export default CardStudy;