import React from "react";
import { motion } from "framer-motion";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      className="bg-gray-900"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto px-4 text-center py-16">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">About Me</h1>
        <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
          I was born in Philadelphia, Pennsylvania. I have spent most of my life in the Philadelphia area, as I graduated from Phoenixville Area High School with Distinguished Honors with the class of 2021. My family immigrated from Vietnam as refugees shortly before I was born, and I am proudly the first of my extended family to be born in the United States, hoping to carry on their legacy.
        </p>
        <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
          I previously was a SWE intern at Ansys, an engineering simulation software company. I helped spearhead the complete re-architecture of the flagship AGI products for Ansys (STK and ODTK) on .NET using C#, C++, and WPF.
        </p>
        <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
          I also previously worked as a researcher in the CS Department of UVA for the Floodwatch project under Professor Rich Nguyen, a project funded by the National Science Foundation.
          As a researcher, I was in charge of LiDAR research and its applications for flood detection sensors and water depth mapping.
          I developed a prototype heavily critical to our team and to our partners in the government of the City of Da Nang.
        </p>
        <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
          Additionally, I was also a member of the Cavalier Autonomous Racing Team, researching the development of autonomous vehicles in both perception and motion planning.
          My work in perception involves integrating ground segmentation algorithms for 3D LiDAR point clouds (predicting the classification of points).
          In conjunction, my work in motion planning involves developing a path planning algorithm for the vehicle to follow experimenting different graph search algorithms on constructed spatio-temporal graphs.
        </p>
        <p className="text-md lg:text-lg md:text-lg sm:text-md text-gray-300 mb-8">
          Some things I love doing outside of school are working on projects, as well as running (cross country and track) and playing soccer.
          Two of the most important things that my parents have always taught me from their childhood and life experiences were the importance of a good attitude and a good work ethic, two things of which I strive to achieve in my work everyday as a student, both at UVA, and as a student of life.
        </p>
      </div>
      <div className="flex justify-center pb-16 space-x-4 relative z-10">
        <a
          href="https://www.floodwatch.io/"
          className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
        >
          Floodwatch
        </a>
        <a
          href="https://www.ansys.com/products/missions/ansys-stk"
          className="bg-gray-800 text-white hover:bg-gray-600 rounded-full px-6 py-3 lg:text-lg md:text-lg text-xs font-semibold"
        >
          Ansys STK
        </a>
      </div>
    </motion.section>
  );
});

export default AboutMe;
