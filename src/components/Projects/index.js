// const { default: ProjectCard } = require("./ProjectCard");
import ProjectCard from "./ProjectCard";
import Project1 from "assets/images/project-1.svg";
import Project2 from "assets/images/project-2.svg";
import Project3 from "assets/images/project-3.svg";
import "./Project.css";

const Projects = () => {
    const projects = [
        {
            image: Project1,
            title: "Pages by Dami",
            type: "Website",
        },
        {
            image: Project2,
            title: "Dannon",
            type: "Website",
        },
        {
            image: Project3,
            title: "ACME Website",
            type: "Website",
        },
    ];

    return (
        <div
            name="project"
            className=" bg-secondary custom-radius relative top-20 mb-3 py-10">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-4xl text-center poppins font-semibold">
                        Live <span className="text-primary">Projects</span>
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-5 px-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
