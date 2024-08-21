import Button from "components/Button";
import { PiStarFourFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";

const Discuss = () => {
    const works = [
        "UX Design",
        "App Design",
        "Dashboard",
        "Wireframe",
        "User Research",
    ];

    return (
        <div name="contact">
            <div className="flex justify-center text-center py-16">
                <div>
                    <h1 className="text-4xl font-semibold poppins dark">
                        Have an Awesome Project
                        <br /> Idea?{" "}
                        <span className="text-primary">Let's Discuss</span>
                    </h1>
                    <div className="pt-5">
                        <Button
                            text="Contact Me"
                            href="mailto:Janetdaramola1@gmail.com"
                        />
                    </div>
                </div>
            </div>
            <div className="relative bg-orange-500 pt-12 pb-9 rounded-tl-3xl rounded-br-3xl">
                <div className="transform -skew-y-3 bg-white ">
                    <Marquee speed={50} gradient={false}>
                        <div className="flex gap-7">
                            {works.map((work, index) => (
                                <h3
                                    key={index}
                                    className="flex items-center gap-7 text-3xl">
                                    {work}{" "}
                                    <PiStarFourFill className="text-primary" />
                                </h3>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Discuss;
