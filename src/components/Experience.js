//import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

import "../style/experience.css";

export const Experience = () => {
  const jobs = [
    {
      role: "Freelance Front-end Developer",
      city: "Remote",
      responsability:
        "Designing and building personal websites following specific clients' requests",
      date: "June - Dec. 2021 & Mar. 2023 - present",
      img: "👩🏼‍💻"
    },
    {
      role: "Administration Assistant",
      company: "K PAK Ltd",
      city: "Mitcham, UK",
      responsability:
        "Office operations and managed shipping of artworks. Collaborated with cross-functional teams to ensure timely and accurate delivery of services.",
      date: "Nov. 2021 - July 2022",
      img: "🚛"
    },
    {
      role: "Art Handling, archiving and data collecting intern",
      company: "Art Gazette",
      city: "London, UK",
      responsability:
        "Cataloged and digitized contemporary artworks, increasing accessibility and organization. Assisted with the relocation of valuable pieces, ensuring proper handling and preservation.",
      date: "Sep. 2021",
      img: "🖼️" 
    },
    {
      role: "Visitor Experience Assistant",
      company: "Natural History Museum",
      city: "London, UK",
      responsability:
        "Provided exceptional visitor experiences assisting with visitor inquiries.",
      date: "May 2020 - Oct. 2021",
      img: "🏛️" 
    },
    {
      role: "Freelance Collaborator",
      company: "Associazione Culture Attive",
      city: "Remote",
      responsability:
        "Managed social media profiles and cultural events and created informative sheets about environmental art.",
      date: "Feb. 2017 - Dec. 2021",
      img: "👩🏼‍💻"

    },
    {
      role: "Fine Art Shipping Coordinator",
      company: "Fercam Fine Art",
      city: "Rome, Italy",
      responsability:
        "Coordinated fine art shipping and exhibitions. Managed relationships with museum and gallery clients.",
      date: "Oct. 2019 - Sep. 2020",
      img: "🚛"
    },
    {
      role: "Visitors and Exhibitions Curator Assistant",
      company: "Opera Laboratori Fiorentini",
      city: "San Gimignano, Italy",
      responsability:
        "Provided exceptional visitor experiences assisting with visitor inquiries.",
      date: "June 2015 - Sep. 2019",
      img: "🏛️" 
    },
  ];

  return (
    <div className="job-list-container max-w-full mt-24 p-12 flex flex-col items-center border border-2 border-white" id="experience">
      {/*<motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2},
        }}
      > </motion.div>*/}
      
      <h2 className="font-bold text-5xl text-white pb-24"> Work experience 👷🏼‍♀️</h2>

      <ol className="job-list relative border-l border-gray-200 dark:border-gray-700 justify-center w-1/2">
        {jobs &&
          jobs.map((job, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
              {job.img}
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {job.role}
                <span className="text-md font-light pl-2">
                  {job.company ? `at ${job.company}` : ""}
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {job.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {job.responsability}
              </p>
              <span className="text-md font-semibold flex"><FaMapMarkedAlt /><span className="text-sm font-light pl-2"> {job.city}</span></span>
            </li>
          ))}
      </ol>
    </div>
  );
};
