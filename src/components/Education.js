import { motion } from "framer-motion";
import "../style/education.css";

export const Education = () => {

  const certifications = [
    {title: "Full Stack Developer Certificate", school: "Develhope"},
    {title: "SheCodes Front-end Developer Certifications", school: "SheCodes"},
    {title: "Postgraduate Specialization in Cultural Heritage Management", institute: "Link Campus University"},
    {title: "Master Degree in Art History", institute: "University of Siena"}
    /*{title: "Bachelor Degree in Humanities", school: "University of Siena"}*/
  ]

  return (
    <div>
      <motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2},
        }}
      >
        <div className="picture-side-container flex flex-col">
          {certifications && certifications.map((certificate, index) => <div key={index} class="indicator my-4">
            <span class="indicator-item bg-blue-200 border border-1 border-blue-400 rounded-lg badge-lg pb-4">{certificate.institute ? <i class="fa-solid fa-graduation-cap"></i> : <i class="fa-solid fa-scroll"></i>}</span>
            <div class="content-text text-black grid h-24 bg-white rounded-md place-items-center">
              <h4 className="px-4 font-bold">{certificate.title}</h4>
            </div>
          </div>)}
        </div>
      </motion.div>
    </div>
  );
};
