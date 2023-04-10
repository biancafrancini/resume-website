import { motion } from "framer-motion";
import { useState } from "react";
import { Education } from "../components/Education";
import { TechSkills } from "../components/TechSkills";
import Bianca from "../images/Bianca.jpeg";

import "../style/homepage.css";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";

export const Homepage = () => {
  const [isActive, setIsActive] = useState(false);
  //const [display, setDisplay] = useState(false);

  const showOnClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="main-container max-w-full rounded-lg m-0 justify-center">
      <div className="grid grid-cols-3 my-64">
        <div className="flex flex-col justify-center py-10">
          <h1 className="mb-6 text-6xl text-gray-900 dark:text-white">
            Bianca Francini
          </h1>
          <h3 className="mb-24 text-gray-500 text-3xl dark:text-gray-400">
            Front-end Developer
          </h3>
        </div>
        {/* Icon */}
        <div
          className="box info-container max-w-xl"
          onClick={showOnClick}
          // transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img
            src={Bianca}
            className="Bianca-pic border rounded-full mb-2"
            alt="Bianca pic profile"
          />
        </div>

        {/* Right block */}
        {isActive && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 70 }}
            transition={{
              ease: "ease-in-out",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <div className="display-talk text-2xl text-blue-600 bg-white p-8 border border-4 border-green-500 rounded-3xl mt-24">
              <p>Hi there!</p>
              <p>I'm Bianca. Nice to meet you 🙃</p>
              <div className="mt-8 font-bold flex flex-col">
                <a href="#skills" className="py-2">
                  Skills
                </a>
                <a href="#experience" className="py-2">
                  Work experience
                </a>
                <a href="#education" className="py-2">
                  Education
                </a>
                <a href="#projects" className="py-2">
                  Projects
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <TechSkills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
};
