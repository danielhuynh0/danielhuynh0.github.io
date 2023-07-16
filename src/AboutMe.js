import React from "react";

const AboutMe = React.forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div className="bg-gray-900 h-screen flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-white mb-8">About Me</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        I was born in Philadelphia, Pennsylvania to two immigrant parents. I have spent most of my life in the Philadelphia area, as I graduated from Phoenixville Area High School with Distinguished Honors with the class of 2021.
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                        This summer, I am an intern at Ansys, an engineering simulation software company, working with the AGI Systems Tool Kit (STK) software. I am also working as a researcher in the CS Department of UVA for the Floodwatch project under Professor Rich Nguyen, a project funded by the National Science Foundation.
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                        Some things I love doing outside of school are working on projects, as well as running (cross country and track) and playing soccer.
                        Two of the most important things that my parents have always taught me from their childhood and life experiences were the importance of a good attitude and a good work ethic, two things of which I strive to achieve in my work everyday as a student, both at UVA, and as a student of life.
                    </p>
                </div>
            </div>
        </section>
    )
});

export default AboutMe;