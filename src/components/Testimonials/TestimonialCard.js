import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import "./TestimonialCarousel";

const TestimonialCard = ({ testimonial, onClick }) => {
    return (
        <div className="p-4">
            <div className="testimonial-card rounded-xl p-6 relative">
                <div
                    className="absolute left-0 top-0 w-full h-full cursor-pointer"
                    onClick={onClick}></div>
                <div className="flex justify-between">
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className="urbanist">
                                <h3 className="text-lg font-bold ">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm">
                                    {testimonial.position}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <GiRoundStar className="text-primary" />
                                ))}
                            </div>
                            <p className="text-lg ml-2">
                                {parseFloat(testimonial.rating).toFixed(1)}
                            </p>
                        </div>
                    </div>
                    <div>
                        <FaQuoteRight className="text-7xl quote" />
                    </div>
                </div>
                <p className="text-xs poppins">{testimonial.feedback}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
