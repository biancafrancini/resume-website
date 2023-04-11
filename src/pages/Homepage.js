//import { motion } from "framer-motion";
import { useState } from "react";
import { Education } from "../components/Education";
import { TechSkills } from "../components/TechSkills";
import Bianca from "../images/Bianca.jpeg";
import me from "../images/me.png";
import { Experience } from "../components/Experience";
//import { Projects } from "../components/Projects";
import { Background } from "../components/Background";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


import "../style/homepage.css";

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
    <div className="main-container w-full rounded-lg m-0">
      <div className="booh relative">
         <Background />
       <div className="flex justify-center z-10 sm:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 my-64 mx-4 items-center">
          {/* Icon */}
          <div
            className="box info-container max-w-xl z-10"
            onClick={showOnClick}
            // transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {!isActive ? <img
              src={Bianca}
              className="Bianca-pic rounded-full mb-2"
              alt="Bianca pic profile"
            /> : <img src={me} className="Bianca-pic mb-2 rounded-full" alt="Bianca real profile"/>}
          </div>

          <div className="name-title-container flex flex-col justify-center py-10 z-10 md:pl-24">
            <h1 className="mb-6 md:text-6xl text-5xl text-gray-900 dark:text-white">
              Bianca Francini
            </h1>
            <h3 className="mb-8 text-gray-500 md:text-3xl text-2xl dark:text-gray-400 z-10">
              Front-end Developer
            </h3>
            <div className="contacts-icon text-5xl flex items-center">
            <a href="https://www.linkedin.com/in/bianca-francini/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/biancafrancini" className="mx-8" target="_blank"><BsGithub /></a>
            <a href="mailto:francinibianca@gmail.com" className="text-6xl"><MdEmail /></a>
            </div>
          </div>

          {/* Right block */}
          {/* {isActive && (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 70 }}
              transition={{
                ease: "ease-in-out",
                duration: 2,
                x: { duration: 1 },
              }}
            >
              <div className="display-talk text-2xl text-blue-600 bg-white p-8 border border-4 border-green-500 rounded-3xl">
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

                </div>
              </div>
            </motion.div>
          )} */}
        </div>
        </div>
      </div>
      <TechSkills />
      <Education />
      <Experience />
    </div>
  );
};
