import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialCarousel.css";
import Case1 from "assets/images/case-1.svg";

const testimonials = [
    {
        name: "Paul Emurotu",
        position: "CEO, ACME",
        rating: 5.0,
        image: Case1,
        feedback:
            "Working with Janet was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly product that our customers love. The attention to detail and creativity exceeded our expectations!",
    },
    {
        name: "John Dara",
        position: "CEO, Sumi Empire",
        rating: 2.0,
        image: Case1,
        feedback:
            "Working with Janet was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly product that our customers love. The attention to detail and creativity exceeded our expectations!",
    },
    {
        name: "Olu lola",
        position: "CEO, Sumi Empire",
        rating: 3.0,
        image: Case1,
        feedback:
            "Working with Janet was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly product that our customers love. The attention to detail and creativity exceeded our expectations!",
    },
    {
        name: "kdsj fksjklf s",
        position: "CEO, Sumi Empire",
        rating: 4.0,
        image: Case1,
        feedback:
            "Working with Janet was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly product that our customers love. The attention to detail and creativity exceeded our expectations!",
    },
    // Add more testimonials here
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
