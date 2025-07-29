import {Card, CardHeader, CardBody, Image, Code} from "@heroui/react";

const CardProject = ({img, tittle, description, technologies, participation}) => {
  return (
    <Card className="py-4 max-w-[750px] flex flex-col gap-3 element border border-transparent hover:border-color-blue p-4 rounded-lg bg-[var(--bg-elements)]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-6">
            <h4 className="text-sm  md:text-base font-bold text-center">{tittle}</h4>
            <small className="text-color-bue text-ms font-bold">{participation}</small>
            <small className="text-ms text-[color:var(--text-color)]">{description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
        <Image
            alt="Card background"
            className="object-cover rounded-xl w-20 h-20"
            src={img}
            
        />
        </CardBody>
        <div className="flex flex-wrap gap-3 p-3">
            {technologies.map((technology, index) => (
                <Code key={index} color="primary" className="text-xs border border-transparent hover:border-color-blue p-2 rounded-lg">{technology}</Code>
            ))}
        </div>
    </Card>
  )
}

export default CardProject;