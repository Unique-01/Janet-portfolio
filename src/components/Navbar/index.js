import { Link } from "react-scroll";
import jdLogo from "assets/images/jd-logo.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className=" top-5 fixed w-full z-50">
            <div className="container">
                <div className=" flex justify-between items-center bg-neutral-900 text-white rounded-full px-2 py-2 ">
                    <ul className="flex text-sm gap-4">
                        <li className="">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={400}
                                className=" p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
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
                                className="p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
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
                                className=" p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                Work Experience
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <img src={jdLogo} alt="JD" width={40} />
                        <h1 className="font-bold text-2xl">JanetD</h1>
                    </div>
                    <ul className="flex text-sm gap-4">
                        <li>
                            <Link
                                activeClass="active"
                                to="resume"
                                spy={true}
                                smooth={true}
                                offset={-47}
                                duration={400}
                                className=" p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={400}
                                className=" p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={400}
                                className=" p-3 px-6 transition-all duration-500 ease-in-out hover:cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
