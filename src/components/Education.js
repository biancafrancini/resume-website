//import { motion } from "framer-motion";
import "../style/education.css";

export const Education = () => {

  const certifications = [
    {title: "Full Stack Developer Certificate", school: "Develhope", date: "March 2023"},
    {title: "SheCodes Front-end Developer Certifications", school: "SheCodes", date: "July-December 2021"},
    {title: "Postgraduate Specialization in Cultural Heritage Management", institute: "Link Campus University", date: "Sep. 2020"},
    {title: "Master Degree in Art History", institute: "University of Siena", date: "March 2018"},
    {title: "Bachelor Degree in Humanities", institute: "University of Siena", date: "March 2015"}
  ];

  return (
    <div className="picture-side-container flex flex-col m-auto items-center mt-24 p-10 min-w-full border border-2 border-white mb-24">
      {/*<motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2},
        }}
      > </motion.div>*/}
        <h2 className="font-bold text-5xl text-white pb-24">My education 📚 </h2>
        <div className="flex">
          {certifications && certifications.map((certificate, index) => <div key={index} class="indicator m-4">
            <span class="indicator-item bg-blue-200 border border-1 border-blue-400 rounded-lg badge-lg pb-4">{certificate.institute ? <i class="fa-solid fa-graduation-cap"></i> : <i class="fa-solid fa-scroll"></i>}</span>
           <div class="content-text text-white grid h-24 border border-green-400 rounded-md place-items-center p-2">
              <h3 className="font-bold text-white text-sm p-4">{certificate.title}</h3>
              <h5 className="text-xs text-white">Issued by {certificate.institute ? certificate.institute : certificate.school} on {certificate.date}</h5>
            </div>
          </div>)}
        </div>
        </div>
  );
};
