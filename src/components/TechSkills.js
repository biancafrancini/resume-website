import { motion } from "framer-motion";
import tailwindIcon from "../images/tailwind-icon.png";
import FramerIcon from "../images/motion-icon.png";
import typescriptIcon from "../images/typescript-icon.png";
import gitIcon from "../images/git-icon.png";
import nestIcon from "../images/nest-icon.png";

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
        <div className="picture-side-container grid grid-cols-3 ml-24 icon-skills">
          <div className="html-icon mt-24">
            <i class="fa-brands fa-html5"></i>
            <p className="text-white text-xs py-2">HTML5</p>
          </div>
          <div className="css-icon mt-24">
            <i class="fa-brands fa-css3-alt"></i>
            <p className="text-white text-xs py-2">CSS</p>
          </div>
          <div className="sass-icon mt-24">
            <i class="fa-brands fa-sass"></i>
            <p className="text-white text-xs py-2">SASS</p>
          </div>

          <div className="bootstrap-icon mt-6">
            <i class="fa-brands fa-bootstrap"></i>
            <p className="text-white text-xs py-2">Bootstrap</p>
          </div>
          <div className="tailwind-icon mt-12">
            <img src={tailwindIcon} width="50" alt="tailwind icon" />
            <p className="text-white text-xs py-6">Tailwind css</p>
          </div>
          <div className="motion-icon mt-12">
            <img
              src={FramerIcon}
              className="ml-16"
              width="30"
              alt="framer motion icon"
            />
            <p className="text-white text-xs py-4">Framer motion</p>
          </div>

          <div className="js-icon mt-6">
            <i class="fa-brands fa-js"></i>
            <p className="text-white text-xs py-2">Javascript</p>
          </div>
          <div className="typescript-icon">
            <img
              src={typescriptIcon}
              className="rounded-md mt-2"
              width="43"
              alt="typescript icon"
            />
            <p className="text-white text-xs">Typescript</p>
          </div>
          <div className="react-icon mt-6">
            <i class="fa-brands fa-react"></i>
            <p className="text-white text-xs py-2">React.js</p>
          </div>

          <div className="git-icon mt-6">
            <img
              src={gitIcon}
              className="rounded-md mt-6"
              width="70"
              alt="git icon"
            />
            <p className="text-white text-xs">Git</p>
          </div>
          <div className="node-icon mt-6">
            <i class="fa-brands fa-node-js"></i>
            <p className="text-white text-xs py-2">Node.js</p>
          </div>
          <div className="nest-icon mt-6">
            <img
              src={nestIcon}
              className="rounded-md mt-4"
              width="45"
              alt="nestJS icon"
            />
            <p className="text-white text-xs pt-4 pb-2">Nest.js</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
