import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from './backgrounds/ParticleBackground';

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
    <div className='relative'>
       <div className="hidden lg:block absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 h-screen flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <img
            src="linkedin image.jpg"
            alt="Profile Picture"
            className="rounded-full w-40 h-40 object-cover mx-auto mb-8"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Hello! My name is Daniel Huynh.
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-400 mb-8">
            <Typewriter
              words={[
                'Software Engineer @ JHU APL',
                'Machine Learning Researcher',
                'CS @ Johns Hopkins University',
                'UVA CS Grad 2024, Summa Cum Laude',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
            I'm a software engineer at Johns Hopkins University Applied Physics Laboratory. I recently graduated from UVA in 3 years summa cum laude with a degree in computer science.
          </p>
          <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
            I love solving puzzles, algorithms, AI/ML, NLP and experimenting with LLMs, IoT, physics, and just building new software! (I'm also a huge geography nerd and can stare at Google Earth for hours!) I'm excited to share my journey with you.
          </p>
          <div className="flex justify-center space-x-4 mb-6 z-10">
            <a href="https://www.linkedin.com/in/daniel-huynh-a3a856216" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-200 hover:text-blue-400" size={24} />
            </a>
            <a href="https://github.com/danielhuynh0" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-200 hover:text-gray-400" size={24} />
            </a>
            <a href="mailto:danielhuynh523@gmail.com">
              <FaEnvelope className="text-gray-200 hover:text-red-400" size={24} />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleClickAbout}
              className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
            >
              About Me
            </button>
            <button
              onClick={handleClickProjects}
              className="bg-gray-500 text-white hover:bg-gray-400 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
            >
              My Projects
            </button>
            <a
              href="Daniel Huynh - Resume Winter 2024.pdf"
              className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
      <div className="mt-8">
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef} />
      </div>
    </div>
  );
};

export default StartPage;