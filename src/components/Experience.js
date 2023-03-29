import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -350 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2 },
        }}
      >
        <div className="picture-side-container">Work Experience</div>
      </motion.div>
    </div>
  );
};
