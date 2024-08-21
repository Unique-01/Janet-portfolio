import ProjectCard from "components/Projects/ProjectCard";
import Case1 from "assets/images/case-1.webp";
import Case2 from "assets/images/case-2.webp";
import Case3 from "assets/images/case-3.webp";

const CaseStudy = () => {
    const caseStudies = [
        {
            title: "Campus Mart",
            image: Case1,
            type: "Mobile",
            link: "https://www.behance.net/gallery/173611149/Ecommerce-App-(UIUX-Case-study)",
        },
        {
            title: "Osun Tour",
            image: Case2,
            type: "Website",
            link: "https://www.behance.net/gallery/175182665/Tourism-Website",
        },
        {
            title: "Google Meet Redesign",
            image: Case3,
            type: "Website",
            link: "https://www.behance.net/gallery/176473955/Google-Meet-Redesign",
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
                    <ProjectCard key={index} project={caseStudy} />
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;
