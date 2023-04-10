//import { motion } from "framer-motion";
import "../style/education.css";

export const Education = () => {
  const certifications = [
    {
      title: "Full Stack Developer Certificate",
      school: "Develhope",
      date: "March 2023",
    },
    {
      title: "SheCodes Front-end Developer Certifications",
      school: "SheCodes",
      date: "July-December 2021",
    },
    {
      title: "Postgraduate Specialization in Cultural Heritage Management",
      institute: "Link Campus University",
      date: "Sep. 2020",
    },
    {
      title: "Master Degree in Art History",
      institute: "University of Siena",
      date: "March 2018",
    },
    {
      title: "Bachelor Degree in Humanities",
      institute: "University of Siena",
      date: "March 2015",
    },
  ];

  return (
    <div className="flex flex-col items-center py-24 bg-black" id="education">
      {/*<motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2},
        }}
      > </motion.div>*/}
      <h2 className="font-bold text-5xl text-white pb-12">My education 📚 </h2>
      <ol className="job-list relative  border-gray-200 dark:border-gray-700 justify-center w-1/2">
        {certifications &&
          certifications.map((certification, index) => (
            <li key={index} className="mb-10 ml-12">
              <div className="flex items-center">
                <span className="absolute flex items-center text-3xl text-white justify-center w-8 h-8 bg-white rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
                  {certification.school ? (
                    "📃"
                  ) : (
                    "👩🏼‍🎓"
                  )}
                </span>
                <h3 className="flex items-center text-2xl text-white font-semibold pl-2 rounded-md bg-black w-full">
                  {certification.title}
                </h3>
                </div>
                <div className="text-2xl font-thin pl-2">
                  {certification.institute
                    ? certification.institute
                    : certification.school}{" "}
                </div>

              <time className="block mb-2 text-md font-normal p-2 leading-none text-gray-400 text-gray-500">
                {certification.date}
              </time>
            </li>
          ))}
      </ol>

      {/* <div className="flex flex-wrap justify-center py-8">
        {certifications &&
          certifications.map((certificate, index) => (
            <div key={index} className="indicator mx-4 w-64">
              <span className="indicator-item bg-blue-200 border-1 border-blue-400 rounded-lg badge-lg pb-4">
                <i className="fa-solid fa-scroll"></i>
              </span>
              <div className="content-text text-white border border-white rounded-md p-2">
                <h3 className="font-bold text-white text-sm p-4">
                  {certificate.title}
                </h3>
                <h5 className="text-xs text-white">{" "}
                  {certificate.institute
                    ? certificate.institute
                    : certificate.school}{" "}
                  on {certificate.date}
                </h5>
              </div>
            </div>
          ))}
          </div>
        <div className="flex flex-wrap justify-center">
        {degrees &&
          degrees.map((degree, index) => (
            <div key={index} className="indicator mx-4 w-64">
              <span className="indicator-item bg-blue-200 border-1 border-blue-400 rounded-lg badge-lg pb-4">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <div className="content-text text-white border border-white rounded-md p-2">
                <h3 className="font-bold text-white text-sm p-4">
                  {degree.title}
                </h3>
                <h5 className="text-xs text-white">
                  {degree.institute ? degree.institute : degree.school} on{" "}
                  {degree.date}
                </h5>
              </div>
            </div>
          ))}
      </div>
     */}
    </div>
  );
};
