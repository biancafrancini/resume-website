import { motion } from "framer-motion";
import tailwindIcon from "../images/tailwind-icon.png";
import FramerIcon from "../images/motion-icon.png";

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
          <div className="html-icon mt-24"><i class="fa-brands fa-html5"></i><p className="text-white text-xs py-2">HTML5</p></div>
          <div className="css-icon mt-24"><i class="fa-brands fa-css3-alt"></i><p className="text-white text-xs py-2">CSS</p></div>
          <div className="sass-icon mt-24"><i class="fa-brands fa-sass"></i><p className="text-white text-xs py-2">SASS</p></div>

          <div className="bootstrap-icon mt-6"><i class="fa-brands fa-bootstrap"></i><p className="text-white text-xs py-2">Bootstrap</p></div>
          <div className="tailwind-icon mt-12"><img src={tailwindIcon} width="50" alt="tailwind icon" /><p className="text-white text-xs py-6">
            Tailwind css
            </p>
          </div>
          <div className="motion-icon mt-12"><img src={FramerIcon} width="30" alt="framer motion icon" /><p className="text-white text-xs py-4">Framer motion</p></div>
        </div>
      </motion.div>
    </div>
  );
};
