import { motion } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { BsGit } from "react-icons/bs";

import "../style/techskills.css";

export const TechSkills = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 80 }}
        animate={{ x: -80 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2 },
        }}
      >
        <div className="picture-side-container grid grid-cols-3 icon-skills">
          <div className="html-icon flex flex-col items-center">
            <SiHtml5 className="brand" />
            <p className="font-bold text-sm py-2">HTML5</p>
          </div>
          <div className="css-icon flex flex-col items-center">
            <SiCss3 className="brand"/>
            <p className="font-bold text-sm py-2">CSS</p>
          </div>
          <div className="sass-icon flex flex-col items-center">
            <FaSass className="brand" />
            <p className="font-bold text-sm py-2">SASS</p>
          </div>

          <div className="bootstrap-icon flex flex-col items-center">
            <FaBootstrap className="brand" />
            <p className="font-bold text-sm py-2">Bootstrap</p>
          </div>
          <div className="tailwind-icon flex flex-col items-center">
            <SiTailwindcss className="brand" />
            <p className="font-bold text-sm py-2">Tailwind css</p>
          </div>
          <div className="motion-icon flex flex-col items-center">
            <SiFramer className="brand" />
            <p className="font-bold text-sm py-2">Framer motion</p>
          </div>

          <div className="js-icon flex flex-col items-center">
            <SiJavascript className="brand"/>
            <p className="font-bold text-sm py-2">Javascript</p>
          </div>
          <div className="typescript-icon flex flex-col items-center">
            <SiTypescript className="brand"/>
            <p className="font-bold text-sm py-2">Typescript</p>
          </div>
          <div className="react-icon flex flex-col items-center">
            <SiReact className="brand"/>
            <p className="font-bold text-sm py-2">React.js</p>
          </div>

          <div className="git-icon flex flex-col items-center">
            <BsGit className="brand" />
            <p className="font-bold text-sm py-2">Git</p>
          </div>
          <div className="node-icon flex flex-col items-center">
            <FaNodeJs className="brand" />
            <p className="font-bold text-sm py-2">Node.js</p>
          </div>
          <div className="nest-icon flex flex-col items-center">
            <SiNestjs className="brand"/>
            <p className="font-bold text-sm py-2">Nest.js</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
