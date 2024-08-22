import "./Home.css";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineArrowOutward } from "react-icons/md";
import intro from "assets/images/intro.svg";
import janet from "assets/images/janet.svg";

const Home = () => {
    const [hoveredButton, setHoveredButton] = useState("portfolio");

    return (
        <div name="home" className="pt-12 md:pt-24 container ">
            <div className="home ">
                <div className="flex justify-center  ">
                    <img
                        src={intro}
                        alt="Introduction"
                        className="h-56 absolute z-10"
                    />
                </div>
                <div className="relative top-24 lg:top-20 md:grid grid-cols-3 items-center ">
                    <div className="about poppins relative lg:pr-28 top-16 md:top-1 lg:top-0">
                        <FaQuoteLeft />
                        <p className="relative text-sm mt-3 z-30 ">
                            I’m a creative product designer With experience in
                            designing intuitive and engaging digital products, a
                            keen eye for detail and a passion for creating
                            user-centric solutions.
                        </p>
                    </div>
                    <div className="relative top-8 md:top-0">
                        <img
                            src={janet}
                            alt="Janet"
                            className="z-20 relative left-10 md:left-0 h-80 lg:h-full"
                        />
                        <div className="semi"></div>

                        <div className="absolute z-30 bottom-5 md:bottom-10 left-14 md:left-0 lg:left-14">
                            <div className="border rounded-full text-white p-2 flex items-center gap-2 backdrop-blur shadow-lg">
                                <a
                                    href=" "
                                    className={`p-3 rounded-full inline-flex items-center gap-2 font-medium transition-all ${
                                        hoveredButton === "portfolio"
                                            ? "px-7 bg-primary"
                                            : ""
                                    }`}
                                    onMouseEnter={() =>
                                        setHoveredButton("portfolio")
                                    }>
                                    Portfolio{" "}
                                    {hoveredButton === "portfolio" && (
                                        <MdOutlineArrowOutward className="text-2xl" />
                                    )}
                                </a>
                                <a
                                    href="mailto:Janetdaramola1@gmail.com"
                                    className={`hover:px-7 hover:bg-primary rounded-full text-nowrap p-3 gap-2 inline-flex items-center transition-all ${
                                        hoveredButton === "hireme"
                                            ? "px-7 bg-primary"
                                            : ""
                                    }`}
                                    onMouseEnter={() =>
                                        setHoveredButton("hireme")
                                    }
                                    onMouseLeave={() =>
                                        setHoveredButton("portfolio")
                                    }>
                                    Hire me{" "}
                                    {hoveredButton === "hireme" && (
                                        <MdOutlineArrowOutward className="text-2xl" />
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end text-end relative -top-60 md:-top-0 lg:-top-10">
                        <div className="">
                            <div className="flex mb-3">
                                <TiStarFullOutline className="star" />
                                <TiStarFullOutline className="star" />
                                <TiStarFullOutline className="star" />
                                <TiStarFullOutline className="star" />
                                <TiStarFullOutline className="star" />
                            </div>
                            <h3 className="text-3xl font-bold urbanist">
                                3 Years
                            </h3>
                            <p className="text-xs">Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
