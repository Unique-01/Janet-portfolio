const Experience = () => {
    return (
        <div className="relative top-20 mb-20" name="experience">
            <div className="container py-10">
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-medium">
                        My <span className="text-primary">Work Experience</span>
                    </h2>
                </div>
                <div class="relative flex justify-center poppins ">
                    <div class="w-1/2 space-y-24 text-left">
                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">
                                Printivo
                            </h2>
                            <p class="text-gray-600">
                                October 2023 - March 2024
                            </p>
                        </div>

                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">
                                Black Reverie
                            </h2>
                            <p class="text-gray-600">June 2022 - July 2023</p>
                        </div>

                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">
                                Ennovate Lab
                            </h2>
                            <p class="text-gray-600">Nov 2020 - Nov 2021</p>
                        </div>
                    </div>

                    <div class="relative right-20">
                        <div class="relative flex flex-col items-center">
                            <div className="border-2 border-dashed border-gray-600 rounded-full">
                                <div class="w-8 h-8 bg-orange-500 rounded-full border-4 border-white"></div>
                            </div>
                            <div class="h-32 border-l-2 border-dashed border-gray-600"></div>

                            <div className="border-2 border-dashed border-gray-600 rounded-full">
                                <div class="w-8 h-8 bg-gray-800 rounded-full border-4 border-white"></div>
                            </div>
                            <div class="h-32 border-l-2 border-dashed border-gray-600"></div>

                            <div className="border-2 border-dashed border-gray-600 rounded-full">
                                <div class="w-8 h-8 bg-orange-500 rounded-full border-4 border-white"></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2 space-y-12 pl-40">
                        <div>
                            <h3 class="text-3xl font-semibold text-gray-900">
                                Product Designer
                            </h3>
                            <p class="text-gray-600">
                                Designed the pages by Dami platform that
                                streamlined the sales process between Printivo
                                and Pages by Dami, improving revenue.
                            </p>
                        </div>

                        <div>
                            <h3 class="text-3xl font-semibold text-gray-900">
                                UI/UX Designer
                            </h3>
                            <p class="text-gray-600">
                                Created intuitive and visually appealing
                                interfaces that enhance user experience by
                                ensuring ease of use, and overall satisfaction.
                            </p>
                        </div>

                        <div>
                            <h3 class="text-3xl font-semibold text-gray-900">
                                Creative Designer
                            </h3>
                            <p class="text-gray-600">
                                Created visually compelling designs across
                                various media to communicate ideas, evoke
                                emotions, and solve problems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
