import React, { useRef } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';

const StartPage = () => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  const handleClickAbout = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="bg-gray-900 h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <img
            src="linkedin image.jpg"
            alt="Profile Picture"
            className="rounded-full w-40 h-40 object-cover mx-auto mb-8"
          />
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8">Hello! My name is Daniel Huynh.</h1>
          <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
            I'm a third-year student of computer science at UVA.
            I love solving puzzles, algorithms, AI and ML, NLP and experimenting with LLMs, IoT, physics, and just building new software! I'm excited to share my journey with you.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleClickAbout}
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
            >
              About Me
            </button>
            <button
              onClick={handleClickProjects}
              className="bg-gray-800 text-white hover:bg-gray-500 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
            >
              My Projects
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef} />
      </div>
    </div>
  );
}

export default StartPage;
