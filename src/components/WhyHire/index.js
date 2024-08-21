import Hire from "assets/images/why-hire.webp";
import "./WhyHire.css";

const WhyHire = () => {
    return (
        <div className="bg-secondary custom-radius py-14">
            <div className="grid grid-cols-2 items-center container">
                <div>
                    <img
                        src={Hire}
                        alt="Hire me"
                        className="w-[450px] ml-auto"
                    />
                </div>
                <div className="w-2/3 mr-auto">
                    <h2 className="text-5xl font-semibold dark mb-7">
                        Why <span className="text-primary">Hire Me</span>?
                    </h2>
                    <p className="text-gray-700 poppins text-sm mb-8">
                        I bring a unique blend of creativity, technical
                        expertise, and user-centered design thinking that
                        consistently delivers innovative and functional products
                        tailored to users' needs.
                    </p>
                    <p className="poppins text-2xl font-normal text-gray-800 mb-2">
                        15+
                    </p>
                    <p className="text-gray-500 text-xs mb-14">
                        Project Completed
                    </p>
                    <a
                        href="mailto:Janetdaramola1@gmail.com"
                        className="border border-gray-800 p-5 px-10 rounded-2xl font-semibold text-xl hover:text-white hover:bg-gray-950 transition-all ease-in-out duration-300">
                        Hire me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhyHire;
