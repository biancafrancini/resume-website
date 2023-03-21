import { motion } from "framer-motion";
import { useState } from "react";
import Bianca from "../images/Bianca.jpeg";

import "../style/homepage.css";

export const Homepage = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className="main-container max-w-lg rounded-lg">
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
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          setDisplay(
            "text-5xl text-blue-500 bg-white p-8 border border-2 border-zinc-500 rounded-full"
          )
        }
        //transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="flex place-items-center space-x-24">
          <img
            src={Bianca}
            className="Bianca-pic border rounded-full mb-24"
            alt="Bianca pic profile"
          />
          <motion.div
            initial={{ x: -500}}
            animate={{ x: 100}}
            transition={{
              ease: "ease-in-out",
              duration: 2,
              x: { duration: 3 },
            }}
          >
            <div className={display}>Hello!!</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
