import Button from "components/Button";
import "./Footer.css";
import jdLogo from "assets/images/jd-logo.svg";
import Resume from "assets/Janet-resume.pdf";
import { Link } from "react-scroll";
import { FaFacebookSquare } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark text-white rounded-t-3xl">
            <div className="container">
                <div className="py-14 pb-16 flex justify-between items-center ">
                    <h2 className="font-semibold text-5xl">
                        Lets Connect there
                    </h2>
                    <Button
                        text="Hire me"
                        href="mailto:Janetdaramola1@gmail.com"
                    />
                </div>
                <hr className="pb-10 border-gray-600" />
                <div className="flex gap-56">
                    <div className="poppins mt-5">
                        <div className="inline-flex items-center gap-3">
                            <img src={jdLogo} alt="JD Logo" className="w-10" />
                            <h2 className="font-bold text-lg">JanetD</h2>
                        </div>
                        <p className="text-sm mt-5">
                            I’m a creative product designer With experience in
                            designing intuitive and engaging digital products, a
                            keen eye for detail and a passion for creating
                            user-centric solutions.
                        </p>
                        <div className="flex gap-1 mt-4">
                            <a href=" ">
                                <FaFacebookSquare />
                            </a>
                            <a href=" ">
                                <GrYoutube />
                            </a>
                            <a href=" ">
                                <IoLogoWhatsapp />
                            </a>
                            <a href=" ">
                                <RiInstagramFill />
                            </a>
                            <a href=" ">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-primary text-sm">Navigation</h4>
                        <ul className="text-xs mt-4 gap-3 flex flex-col">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className="hover:cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className="hover:cursor-pointer">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-47}
                                    duration={400}
                                    className="hover:cursor-pointer">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <a href={Resume} target="blank">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={400}
                                    className="hover:cursor-pointer">
                                    Project
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-primary text-sm">Contact</h4>
                        <ul className="text-xs flex flex-col gap-3 mt-4">
                            <li>
                                <a href="tel:+2348142580401">+2348142580401</a>
                            </li>
                            <li>
                                <a href="mailto:Janetdaramola1@gmail.com">
                                    Janetdaramola1@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://Portfolio-jcrea.com">
                                    Portfolio-jcrea.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-8">
                    <hr className=" border-gray-600" />
                </div>
                <div className="text-xs flex justify-between pb-3">
                    <p>Copyright &copy; 2023 JanetD. All Rights Reserved.</p>
                    <p>User Terms & Conditions | Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
