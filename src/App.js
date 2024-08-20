import Home from "components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "components/Projects";
import Experience from "components/Experience";
import WhyHire from "components/WhyHire";
import CaseStudy from "components/CaseStudy";
import TestimonialCarousel from "components/Testimonials/TestimonialCarousel";
import Discuss from "components/Discuss";
import Footer from "components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Experience/>
            <WhyHire/>
            <CaseStudy/>
            <TestimonialCarousel/>
            <Discuss/>
            <Footer/>
            {/* <div name="experience" className=" min-h-screen flex items-center">
                Another one New
            </div>
            <div id="resume" className=" min-h-screen flex items-center">
                Another one New
            </div>
            <div id="project" className=" min-h-screen flex items-center">
                Another one New
            </div>
            <div id="contact" className=" min-h-screen flex items-center">
                Another one New
            </div> */}
        </div>
    );
}

export default App;
