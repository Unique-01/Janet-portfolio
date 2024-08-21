import { HiArrowRight } from "react-icons/hi2";

const ProjectCard = ({ project }) => {
    return (
        <div className="epilogue">
            <div>
                <a href={project.link} target="blank">
                    <img src={project.image} alt={project.title} className="" />
                </a>
            </div>
            <div className="mt-5">
                <a
                    href={project.link}
                    className="flex items-center gap-3 font-semibold underline"
                    target="blank">
                    {project.title} <HiArrowRight className="text-2xl" />
                </a>
                <p className="text-sm mt-1">{project.type}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
