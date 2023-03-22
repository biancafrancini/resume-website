import { motion } from "framer-motion";

import "../style/techskills.css";

export const TechSkills = () => {
  
  return (
    <div>
      <motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2 },
        }}
      >
        <div className="picture-side-container">My Skills</div>
      </motion.div>
    </div>
  );
};
