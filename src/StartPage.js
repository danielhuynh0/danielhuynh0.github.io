import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ShaderBackground from './components/ui/ShaderBackground';
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
    'Java', 'Python', 'Angular', 'SpringBoot', 'React', 'Machine Learning',
    'TensorFlow', 'AWS', 'Cloud Computing', 'Docker', 'C++', 'Next.js', 'NLP', 'CI/CD'
  ];

  return (
    <div className="relative">
      <ShaderBackground />

      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(6,4,16,0.75)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-base tracking-tight text-white">
            daniel<span className="text-violet-400">huynh</span>
          </span>
          <div className="hidden sm:flex items-center gap-7">
            <button
              onClick={handleClickAbout}
              className="text-gray-400 hover:text-white text-sm transition-colors tracking-wide"
            >
              about
            </button>
            <button
              onClick={handleClickProjects}
              className="text-gray-400 hover:text-white text-sm transition-colors tracking-wide"
            >
              projects
            </button>
            <a
              href="Daniel Huynh - Resume.pdf"
              className="text-sm px-4 py-1.5 rounded border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 transition-colors tracking-wide"
            >
              resume
            </a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col justify-center pt-16" style={{ background: 'transparent' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 py-20 relative z-10">

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4 opacity-80">
              software engineer
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-none tracking-tight">
              Daniel<br />
              <span style={{ WebkitTextStroke: '1px rgba(167,139,250,0.6)', color: 'transparent' }}>
                Huynh
              </span>
            </h1>

            <div className="text-lg md:text-xl text-violet-300/80 mb-7 min-h-[1.75rem] font-light">
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
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={1200}
              />
            </div>

            <p className="text-gray-300 text-base mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Software engineer at JHU Applied Physics Laboratory, while pursuing my MSCS at Johns Hopkins University 
              with a concentration in AI. CS grad from UVA in 3 years, summa cum laude.
            </p>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I love building things, puzzles, ML, AI, and physics. I'm also a geography
              nerd and can stare at Google Earth for hours.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-9 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-sm font-mono"
                  style={{
                    background: 'rgba(109,40,217,0.12)',
                    border: '1px solid rgba(139,92,246,0.25)',
                    color: 'rgba(196,181,253,0.85)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <div className="flex gap-2.5">
                <a
                  href="https://www.linkedin.com/in/danielhuynh523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(109,40,217,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <FaLinkedin className="text-gray-400 hover:text-violet-300 transition-colors" size={16} />
                </a>
                <a
                  href="https://github.com/danielhuynh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <FaGithub className="text-gray-400" size={16} />
                </a>
                <a
                  href="mailto:danielhuynh523@gmail.com"
                  className="p-2.5 rounded-lg transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(109,40,217,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <FaEnvelope className="text-gray-400 hover:text-violet-300 transition-colors" size={16} />
                </a>
              </div>

              <button
                onClick={handleClickAbout}
                className="text-sm px-5 py-2 rounded-lg text-white transition-colors font-medium"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
              >
                about me
              </button>
              <button
                onClick={handleClickProjects}
                className="text-sm px-5 py-2 rounded-lg text-white font-medium transition-all"
                style={{ background: 'rgba(109,40,217,0.5)', border: '1px solid rgba(139,92,246,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(109,40,217,0.7)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(109,40,217,0.5)'}
              >
                view projects
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-110"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(76,29,149,0.4) 60%, transparent 100%)' }}
              />
              <img
                src="linkedin image.jpg"
                alt="Daniel Huynh"
                className="relative rounded-full object-cover shadow-2xl"
                style={{
                  width: '17rem',
                  height: '17rem',
                  border: '1px solid rgba(139,92,246,0.3)',
                  boxShadow: '0 0 60px rgba(109,40,217,0.25)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-violet-500/50 to-transparent" />
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
