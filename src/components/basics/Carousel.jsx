const Carousel = ({skills}) => {

    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

    return (
        <div className="overflow-hidden h-100  flex">
            <div className="flex flex-col animate-vertical-carousel gap-6">
                {duplicatedSkills.map((skill, index) => (
                    <div key={index} className="h-16 w-16">
                        <img src={skill.img} alt={skill.name} className="w-full h-full object-contain border-b-2 border-b-color-blue pb-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
