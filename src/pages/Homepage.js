import { useState } from "react";
import { Education } from "../components/Education";
import { TechSkills } from "../components/TechSkills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Background } from "../components/Background";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Bianca from "../images/Bianca.jpeg";
import me from "../images/me.png";

import "../style/homepage.css";

export const Homepage = () => {
  const [isActive, setIsActive] = useState(false);

  const showOnClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="main-container w-full rounded-lg m-0">
      <div className="relative">
        <Background />
        <div className="flex justify-center z-10 sm:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 my-44 mx-4 items-center">
            <div
              className="box info-container max-w-xl z-10"
              onClick={showOnClick}
            >
              {!isActive ? (
                <img
                  src={Bianca}
                  className="Bianca-pic rounded-full mb-2"
                  alt="Bianca pic profile"
                />
              ) : (
                <img
                  src={me}
                  className="Bianca-pic mb-2 rounded-full"
                  alt="Bianca real profile"
                />
              )}
            </div>

            <div className="name-title-container flex flex-col justify-center py-10 z-10 md:pl-24">
              <h1 className="mb-6 md:text-6xl text-5xl text-gray-900 dark:text-white">
                Bianca Francini
              </h1>
              <h3 className="mb-8 text-gray-500 md:text-3xl text-2xl dark:text-gray-400 z-10">
                Full stack Developer
              </h3>
              <div className="contacts-icon text-5xl flex items-center">
                <a
                  href="https://www.linkedin.com/in/bianca-francini/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-600"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/biancafrancini"
                  className="mx-8 hover:text-green-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="mailto:francinibianca@gmail.com"
                  className="text-6xl hover:text-green-600"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechSkills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
};
