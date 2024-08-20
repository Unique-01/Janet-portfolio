import "./Home.css";
// import img from "assets/images/home.svg";
import { FaQuoteLeft } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineArrowOutward } from "react-icons/md";


import intro from "assets/images/intro.svg";
import janet from "assets/images/janet.svg";

const Home = () => {
    return (
        <div name="home" className=" pt-24 container ">
            <div className="home ">
                <div className="flex justify-center  ">
                    <img
                        src={intro}
                        alt="Introduction"
                        className="h-56 absolute"
                    />
                </div>
                <div className="relative top-20 grid grid-cols-3 items-center ">
                    <div className="about poppins pr-28">
                        <FaQuoteLeft />
                        <p className="text-sm mt-3">
                            I’m a creative product designer With experience in
                            designing intuitive and engaging digital products, a
                            keen eye for detail and a passion for creating
                            user-centric solutions.
                        </p>
                    </div>
                    <div className="relative">
                        <img src={janet} alt="Janet" className="z-20 relative" />
                        <div className="semi "></div>
                        <div className="absolute z-30 bottom-10 left-16">
                            <div className="border rounded-full text-white p-2 flex items-center gap-3 backdrop-blur shadow-lg">
                                <a href=" " className="py-3 px-7 bg-primary rounded-full flex items-center gap-2 font-medium ">Portfolio <MdOutlineArrowOutward className="text-2xl"/></a>
                                <a href=" " className="p-3">Hire me</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end text-end relative -top-10">
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
