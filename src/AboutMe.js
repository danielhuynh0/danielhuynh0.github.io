import React from "react";

const AboutMe = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="mt-16">
            <div className="bg-gray-900 h-screen flex-col items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-5xl font-bold text-white mb-8">About Me</h1>
                    <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
                        I was born in Philadelphia, Pennsylvania. I have spent most of my life in the Philadelphia area, as I graduated from Phoenixville Area High School with Distinguished Honors with the class of 2021. My family immigrated from Vietnam as refugees shortly before I was born, and I am proudly the first of my extended family to be born in the United States, hoping to carry on their legacy.
                    </p>
                    <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
                        This summer, I am an intern at Ansys, an engineering simulation software company, working with the AGI Systems Tool Kit (STK) software. I am also working as a researcher in the CS Department of UVA for the Floodwatch project under Professor Rich Nguyen, a project funded by the National Science Foundation. As a researcher, I am in charge of LiDAR research and its applications for flood detection sensors and water depth mapping.
                    </p>
                    <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
                        Some things I love doing outside of school are working on projects, as well as running (cross country and track) and playing soccer.
                        Two of the most important things that my parents have always taught me from their childhood and life experiences were the importance of a good attitude and a good work ethic, two things of which I strive to achieve in my work everyday as a student, both at UVA, and as a student of life.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://www.floodwatch.io/"
                        className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold mr-4"
                    >
                        Floodwatch
                    </a>
                    <a
                        href="https://www.ansys.com/products/missions/ansys-stk"
                        className="bg-gray-500 text-white hover:bg-gray-600 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold mr-4"
                    >
                        Ansys STK
                    </a>
                    <a
                        href="DanielHuynh - Resume Winter 2023.pdf"
                        className="bg-gray-800 text-white hover:bg-gray-500 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
});

export default AboutMe;