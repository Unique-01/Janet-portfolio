import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialCarousel.css";
import Paul from "assets/images/paul.webp";
import John from "assets/images/john.webp";
import Nia from "assets/images/user.webp";
import Ethan from "assets/images/ethan.webp";

const testimonials = [
    {
        name: "Paul Emurotu",
        position: "CEO, ACME",
        rating: 5.0,
        image: Paul,
        feedback:
            "Working with Janet was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly product that our customers love. The attention to detail and creativity exceeded our expectations!",
    },
    {
        name: "John Dara",
        position: "CEO, Sumi Empire",
        rating: 5.0,
        image: John,
        feedback:
            "We've collaborated with many designers, but Janet stands out for her ability to understand our brand and deliver a product that not only looks amazing but also functions flawlessly. The process was smooth, and the results speak for themselves.",
    },
    {
        name: "Ethan Hall",
        position: "CEO at NovaTech",
        rating: 5.0,
        image: Ethan,
        feedback:
            "Janet transformed our vision into reality. Her design expertise, coupled with a deep understanding of our needs, resulted in a product that has significantly improved our user experience and engagement. Highly recommend!",
    },
    {
        name: "Nia Thompson",
        position: "Software Engineer, Apex Technologies",
        rating: 5.0,
        image: Nia,
        feedback:
            "Janet's work is nothing short of exceptional. Her ability to blend aesthetics with functionality has not only elevated our brand's digital presence but also made a tangible impact on our customer satisfaction. Her professionalism and creativity are truly unmatched.",
    },
];

const TestimonialCarousel = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "22%",
        arrows: false,
    };

    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className="testimonial rounded-3xl">
            <div className="max-w-7xl mx-auto  py-24    text-white opacity-95 ">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-medium  mb-8">
                        Testimonials That <br /> Speak to &nbsp;
                        <span className="text-orange-500">My Results</span>
                    </h2>
                    <p className="text-sm">
                        Here's What Our Clients Are Saying About Their
                        Transformative Experiences.
                    </p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
