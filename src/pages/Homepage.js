import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
//import { Projects } from "../components/Projects";
import Bianca from "../images/Bianca.jpeg";

import "../style/homepage.css";

export const Homepage = () => {
  const [display, setDisplay] = useState("hidden");
  const [displayArgs, setDisplayArgs] = useState("hidden")
  //const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="main-container max-w-xl rounded-lg m-0">
      <div className="flex flex-col items-center py-10">
        <h1 className="mb-6 text-6xl text-gray-900 dark:text-white">
          Bianca Francini
        </h1>
        <h3 className="mb-24 text-gray-500 text-2xl dark:text-gray-400">
          Junior Full stack Developer
        </h3>
      </div>
      <motion.div
        className="box"
        onClick={() => {
          setDisplay(
            "display-talk text-xl text-blue-600 bg-white p-8 border border-2 border-zinc-500 rounded-3xl"
          );
          //setIsActive(true);
        }}
        //transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className={displayArgs}>
            <Outlet />
        </div>
        <div className="info-container flex max-w-xl">
          <img
            src={Bianca}
            className="Bianca-pic border rounded-full mb-24"
            alt="Bianca pic profile"
          />
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 70 }}
            transition={{
              ease: "ease-in-out",
              duration: 2,
              x: { duration: 2 },
            }}
          >
            <div className={display}>
              Hi there!
              <br />
              My name is Bianca. Nice to meet you 🙃
              <div className="mt-8 font-bold">
                <p onClick={() => {
                  navigate('/techskills');
                  setDisplayArgs("display-args grow");}}>Skills</p>
                <br />
                <p onClick={() => {
                  navigate('/education');
                  setDisplayArgs("display-args grow");}}>Education</p>
                <br />
                <p onClick={() => {
                  navigate('/experience');
                  setDisplayArgs("display-args grow");}}>Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
