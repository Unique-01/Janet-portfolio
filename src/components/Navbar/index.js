import { Link } from "react-scroll";
import jdLogo from "assets/images/jd-logo.svg";
import Resume from "assets/Janet-resume.pdf";
import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className=" top-5 fixed w-full z-50 text-white">
            <div className="container">
                <div
                    className={`bg-neutral-900 text-white  px-2 py-2  ${
                        menuOpen ? "rounded-t-3xl rounded-b-lg" : "rounded-full"
                    } `}>
                    <div className=" flex justify-between items-center ">
                        <div className={`hidden lg:block`}>
                            <ul className="lg:flex text-sm gap-4">
                                <li className="">
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={400}
                                        className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={400}
                                        className="p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="experience"
                                        spy={true}
                                        smooth={true}
                                        offset={-47}
                                        duration={400}
                                        className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                        Work Experience
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={jdLogo} alt="JD" width={40} />
                            <h1 className="font-bold text-2xl">JanetD</h1>
                        </div>
                        <div className="lg:hidden flex items-center mr-5 text-2xl">
                            <button
                                onClick={toggleMenu}
                                className="focus:outline-none transition-all">
                                {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="lg:flex text-sm gap-4">
                                <li>
                                    <a
                                        href={Resume}
                                        target="blank"
                                        className="p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out">
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={400}
                                        className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                        Project
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-47}
                                        duration={400}
                                        className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {menuOpen ? <hr className="lg:hidden border-gray-700 my-3" /> : ""}
                    <div className={`${menuOpen ? "block " : "hidden"} my-5 `}>
                        <ul className=" space-y-7 ">
                            <li className="">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className="p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-47}
                                    duration={400}
                                    className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                    Work Experience
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={Resume}
                                    target="blank"
                                    className="p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                    Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-47}
                                    duration={400}
                                    className=" p-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
