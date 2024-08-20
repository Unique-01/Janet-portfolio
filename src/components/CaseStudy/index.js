import ProjectCard from "components/Projects/ProjectCard";
import Case1 from "assets/images/case-1.svg";
import Case2 from "assets/images/case-2.svg";
import Case3 from "assets/images/case-3.svg";

const CaseStudy = () => {
    const caseStudies = [
        {
            title: "Campus Mart",
            image: Case1,
            type: "Mobile",
        },
        {
            title: "Osun Tour",
            image: Case2,
            type: "Website",
        },
        {
            title: "Google Meet Redesign",
            image: Case3,
            type: "Website",
        },
    ];
    return (
        <div className="my-20 container">
            <div>
                <h2 className="dark text-5xl font-semibold poppins text-center ">
                    Case <span className="text-primary">Studies</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-20 px-16 mt-14">
                {caseStudies.map((caseStudy, index) => (
                    <ProjectCard project={caseStudy} width="w-64" />
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;
