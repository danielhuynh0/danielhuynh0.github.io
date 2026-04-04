import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaFlask } from "react-icons/fa";

const AboutMe = React.forwardRef((_props, ref) => {
  const experience = [
    {
      company: "JHU Applied Physics Laboratory",
      role: "Associate Software Engineer",
      period: "Sept 2024 – Present",
      description:
        "Working on several high-impact software projects: researching cutting-edge cyber alert risk classification ML models for critical government networks (100k+ in funding, outperformed state-of-the-art); core developer on Dagger Web systems modeling software (modernization rebuild from AngularJS to Angular); and spearheading major features for FRISC, a packet sniffer for monitoring critical infrastructure network traffic - including a full parsing architecture refactor that reduced analysis time by 40%.",
      tech: ["Java", "Angular", "SpringBoot", "React", "Machine Learning"],
    },
    {
      company: "Ansys",
      role: "Software Engineer Intern",
      period: "May 2024 – Aug 2024",
      description:
        "Solely built from scratch the menu & toolbar system for the new UI redesign of flagship product STK. Refined low-level backend logic, app startup, file & registry I/O, and bug fixes to the STK Engine.",
      tech: ["C#", "C++", "WPF", ".NET"],
      link: "https://www.ansys.com/products/missions/ansys-stk",
      linkText: "Ansys STK",
    },
    {
      company: "Ansys",
      role: "Software Engineer Intern",
      period: "May 2023 – Aug 2023",
      description:
        "Solely developed a feature to simulate & calculate large datasets of satellite communications to ground antennas, reducing previous conflict computation from quadratic to logarithmic time — adopted by a major telecommunications company. Also developed a cross-format 3D antenna file converter for compatibility with STK software.",
      tech: ["C#", "C++", "WPF", ".NET"],
      link: "https://www.ansys.com/products/missions/ansys-stk",
      linkText: "Ansys STK",
    },
  ];

  const research = [
    {
      company: "The FloodWatch Project at UVA",
      role: "Research Assistant, Head of IoT Team",
      period: "May 2023 – Aug 2024",
      description:
        "National Science Foundation funded. Lead researcher of LiDAR sensors for flood mapping using a LoRaWAN network — adopted and deployed by the city of Da Nang, Vietnam, tripling the percentage of mappable regions in Vietnam. Built and maintained APIs and a robust data pipeline spanning from IoT devices and gateways to databases on AWS EC2, using AWS Lambda and JavaScript webhooks.",
      tech: ["Arduino", "C++", "LoRaWAN", "AWS EC2", "AWS Lambda", "JavaScript", "IoT"],
      link: "https://www.floodwatch.io/",
      linkText: "floodwatch.io",
    },
    {
      company: "Cavalier Autonomous Racing",
      role: "Perception & Motion Planning Researcher",
      period: "Apr 2024 – Aug 2024",
      description:
        "Led development on ground segmentation for LiDAR point cloud data using Patchwork++ for vehicle perception on ROS 2. Developed UCS and other graph search algorithms for spatiotemporal graphs, predicting and optimizing vehicle pathfinding.",
      tech: ["ROS 2", "LiDAR", "C++", "Python", "Patchwork++"],
    },
  ];

  const education = [
    {
      school: "Johns Hopkins University",
      degree: "M.S. Computer Science, AI Concentration",
      period: "Jan 2025 – Dec 2026",
      note: "GPA: 4.0 / 4.0",
    },
    {
      school: "University of Virginia",
      degree: "B.S. Computer Science",
      period: "Aug 2021 – May 2024",
      note: "Summa Cum Laude · GPA: 3.92 · National Merit Commended Scholar · Co-Founder, Project Code @ UVA",
    },
  ];

  return (
    <section ref={ref} className="py-24" style={{ background: 'rgba(6,4,16,0.88)', borderTop: '1px solid rgba(139,92,246,0.12)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-3 opacity-70">background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-12 h-px bg-violet-500/50 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-base leading-relaxed">
                I was born in Philadelphia, Pennsylvania, and spent most of my life in the Philadelphia area,
                graduating from Phoenixville Area High School with Distinguished Honors with the class of 2021.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                My family immigrated from Vietnam as refugees shortly before I was born, and I am proudly the first of
                my extended family to be born in the United States, hoping to carry on their legacy.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Outside of work I run (cross country & track), play soccer, and spend way too much time on Google Earth.
                My parents always instilled in me the importance of attitude and work ethic, two things I carry into
                everything I do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 tracking-wide">
                <FaGraduationCap className="text-violet-400" size={14} />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="rounded-lg p-4 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.15)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <p className="text-white font-semibold">{edu.school}</p>
                        <p className="text-gray-400 text-sm mt-0.5">{edu.degree}</p>
                        {edu.note && (
                          <p className="text-violet-400/70 text-xs mt-1 leading-relaxed">{edu.note}</p>
                        )}
                      </div>
                      <span className="text-gray-500 text-xs font-mono whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 tracking-wide">
                <FaFlask className="text-violet-400/80" size={14} />
                Research
              </h3>
              <div className="space-y-4">
                {research.map((r) => (
                  <div
                    key={r.company + r.period}
                    className="rounded-lg p-5 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.15)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div>
                        <p className="text-white font-medium text-sm">{r.role}</p>
                        <p className="text-violet-400/70 text-xs mt-0.5">{r.company}</p>
                      </div>
                      <span className="text-gray-500 text-xs font-mono whitespace-nowrap">
                        {r.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{r.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {r.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-sm font-mono"
                          style={{ background: 'rgba(109,40,217,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: 'rgba(196,181,253,0.7)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {r.link && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-violet-400/70 hover:text-violet-300 transition-colors"
                      >
                        {r.linkText} →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 tracking-wide">
              <FaBriefcase className="text-violet-400" size={14} />
              Industry Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp.company + exp.period}
                  className="rounded-lg p-5 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.15)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'}
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <div>
                      <p className="text-white font-medium text-sm">{exp.role}</p>
                      <p className="text-violet-400/70 text-xs mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-xs font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-sm font-mono"
                        style={{ background: 'rgba(109,40,217,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: 'rgba(196,181,253,0.7)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400/70 hover:text-violet-300 transition-colors"
                    >
                      {exp.linkText} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
