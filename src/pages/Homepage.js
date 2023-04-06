import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
//import { Projects } from "../components/Projects";
import Bianca from "../images/Bianca.jpeg";

import "../style/homepage.css";

export const Homepage = () => {
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const showOnClick = () => {
    if (!isActive) {
      setIsActive(true);
      setDisplay(false);
    } else {
      setIsActive(false);
      setDisplay(false);
    }
  };

  return (
    <div className="main-container max-w-full rounded-lg m-0 justify-center">

      <div className="grid grid-cols-3">
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
            className="Bianca-pic border rounded-full mb-10"
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
              Hi there!
              <br />
              <br />
              I'm Bianca. Nice to meet you 🙃
              <div className="mt-8 font-bold">
                <p
                  onClick={() => {
                    navigate("/techskills");
                    setDisplay(true);
                  }}
                >
                  Skills
                </p>
                <br />
                <p
                  onClick={() => {
                    navigate("/education");
                    setDisplay(true);
                  }}
                >
                  Education
                </p>
                <br />
                <p
                  onClick={() => {
                    navigate("/experience");
                    setDisplay(true);
                  }}
                >
                  Experience
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
       {/* Left block */}
       <div>
          {display && (
            <div className="">
              <Outlet />
            </div>
          )}
        </div>
    </div>
  );
};
