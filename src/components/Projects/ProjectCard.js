import { HiArrowRight } from "react-icons/hi2";

const ProjectCard = ({ project }) => {
    return (
        <div className="epilogue">
            <div>
                <img src={project.image} alt={project.title} className="" />
            </div>
            <div className="mt-5">
                <a href=" " className="flex items-center gap-3 font-semibold underline">
                    {project.title} <HiArrowRight className="text-2xl" />
                </a>
                <p className="text-sm mt-1">{project.type}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
