import { Button } from "@heroui/react";

import Icon from './Icon';

const ButtonIcon = ({img, text, link}) => {
    
    const handleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <Button className="text-color-bue" variant="bordered" onClick={handleClick}>
            <Icon img={img} />
            <p className="text-ms sm:text-base md:text-base lg:text-lg">{text}</p>
        </Button>
    )
  }
  
export default ButtonIcon;