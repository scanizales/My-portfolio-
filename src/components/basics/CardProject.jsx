import {Card, CardHeader, CardBody, Image, Code} from "@heroui/react";

const CardProject = ({img, tittle, description, technologies, participation}) => {
  return (
    <Card className="py-4 max-w-[740px] flex flex-col gap-3  border border-transparent hover:border-color-blue p-4 rounded-lg bg-[var(--bg-elements)]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-6">
            <h4 className="text-lg  font-bold text-center">{tittle}</h4>
            <small className="text-color-bue text-base font-bold">{participation}</small>
            <small className="text-base text-[color:var(--text-color)]">{description}</small>
        </CardHeader>
        <div className="flex flex-wrap gap-2 py-2">
        {img.map((imgSrc, index) => (
            <Image
            key={index}
            isZoomed
            alt={`${tittle} ${index}`}
            src={imgSrc}
            className={`rounded-xl object-cover ${
                index === img.length - 1
                ? "flex-[2_1_calc(40%_-_4px)] min-w-[200px] max-w-[500px]" // la última más grande
                : "flex-[1_1_calc(20%_-_4px)] min-w-[150px] max-w-[330px]" // las demás
            }`}
            />
        ))}
        </div>
<div className="flex flex-wrap gap-3 p-3">
  {technologies.map((technology, index) => {
    const colors = ["primary", "secondary", "success", "warning", "danger"];
    
    // Mapeo para que el borde coincida con el color del componente
    const hoverClasses = {
      primary: "hover:border-primary",
      secondary: "hover:border-secondary",
      success: "hover:border-success",
      warning: "hover:border-warning",
      danger: "hover:border-danger",
    };

    const color = colors[index % colors.length];

    return (
      <Code
        key={index}
        color={color}
        className={`border-2 border-transparent ${hoverClasses[color]} p-2 rounded-lg transition-all duration-300`}
      >
        {technology}
      </Code>
    );
  })}
</div>

    </Card>
  )
}

export default CardProject;