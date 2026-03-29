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

  const skills = [
    'Python', 'Java', 'React', 'Machine Learning',
    'TensorFlow', 'C++', 'Next.js', 'SpringBoot', 'NLP', 'Computer Vision',
  ];

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Daniel Huynh
          </span>
          <div className="hidden sm:flex items-center space-x-6">
            <button
              onClick={handleClickAbout}
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              About
            </button>
            <button
              onClick={handleClickProjects}
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Projects
            </button>
            <a
              href="Daniel Huynh - Resume.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition-colors font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="bg-gray-950 min-h-screen flex flex-col justify-center pt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-16 relative z-10">

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 font-medium mb-3 text-xs tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Daniel Huynh
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6 min-h-[2rem]">
              <Typewriter
                words={[
                  'Software Engineer @ JHU APL',
                  'MS CS @ Johns Hopkins University',
                  'Machine Learning Researcher',
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
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              I&apos;m a software engineer at Johns Hopkins University Applied Physics Laboratory. I currently attend
              Johns Hopkins University for my MSCS with a concentration in AI. I recently graduated from UVA in 3 years
              summa cum laude with a degree in computer science.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I love solving puzzles, algorithms, ML, Agentic AI, NLP, IoT, physics, and just building new software!
              (I&apos;m also a huge geography nerd and can stare at Google Earth for hours!) I&apos;m excited to share
              my journey with you.
            </p>

            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/danielhuynh523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-gray-800 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500/50 transition-all group"
                >
                  <FaLinkedin className="text-gray-300 group-hover:text-blue-400 transition-colors" size={18} />
                </a>
                <a
                  href="https://github.com/danielhuynh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all"
                >
                  <FaGithub className="text-gray-300" size={18} />
                </a>
                <a
                  href="mailto:danielhuynh523@gmail.com"
                  className="p-2.5 rounded-full bg-gray-800 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 transition-all group"
                >
                  <FaEnvelope className="text-gray-300 group-hover:text-red-400 transition-colors" size={18} />
                </a>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleClickAbout}
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-5 py-2.5 font-semibold text-sm transition-colors"
                >
                  About Me
                </button>
                <button
                  onClick={handleClickProjects}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-5 py-2.5 font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
                >
                  View Projects
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-25 scale-110" />
              <img
                src="linkedin image.jpg"
                alt="Daniel Huynh"
                className="relative rounded-full w-56 h-56 lg:w-72 lg:h-72 object-cover border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto px-6 pb-12 w-full relative z-10"
        >
          <div className="grid grid-cols-3 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
            {[
              { value: '14+', label: 'Projects Built' },
              { value: 'JHU APL', label: 'Current Employer' },
              { value: 'Summa Cum Laude', label: 'UVA Class of 2024' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${i < 2 ? 'border-r border-gray-700/50' : ''}`}
              >
                <div className="text-sm sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div>
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef} />
      </div>
    </div>
  );
};

export default StartPage;
