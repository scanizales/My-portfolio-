import { Button } from "@heroui/react";

import Icon from './Icon';

const DownloadButton = ({text, route, img, nameFile}) => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = route; 
        link.download = `${nameFile}.pdf`;
        link.click();
    };

    return (
        <Button className="text-color-bue hover:shadow-lg" variant="bordered" onClick={handleDownload}>
            <Icon img={img} />
            <p className="text-ms sm:text-base lg:text-lg">{text}</p>
        </Button>
    )
}

export default DownloadButton;