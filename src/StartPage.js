import React, { useRef } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';

const StartPage = () => {
    const aboutMeRef = useRef(null);

    const handleClickAbout = () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const projectsRef = useRef(null);

    const handleClickProjects = () => {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div>
            <div className="bg-gray-900 h-screen flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <img
                        src="IMG_0525.JPEG"
                        alt="Profile Picture"
                        className="rounded-full w-40 h-40 object-cover mx-auto mb-8"
                    />
                    <h1 className="text-5xl font-bold text-white mb-8">Hello! My name is Daniel Huynh.</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        I'm a third-year student of computer science at UVA.
                        I love solving puzzles, algorithms, machine learning, physics, and space. I'm excited to share my journey with you.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={handleClickAbout}
                            className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold mr-4"
                        >
                            About Me
                        </button>
                        <button
                            onClick={handleClickProjects}
                            className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-6 py-3 text-lg font-semibold"
                        >
                            My Projects
                        </button>
                    </div>
                </div>
            </div>
            <AboutMe ref={aboutMeRef} />
            <Projects ref={projectsRef}/>
        </div>
    );
}

export default StartPage;