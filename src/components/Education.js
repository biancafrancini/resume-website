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
      title: "Postgraduate Specialisation in Cultural Heritage Management",
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
      <h2 className="font-bold md:text-5xl text-4xl text-white pb-24">
        {" "}
        📚 Education{" "}
      </h2>
      <ol className="job-list relative border-gray-200 dark:border-gray-700 justify-center w-1/2">
        {certifications &&
          certifications.map((certification, index) => (
            <li key={index} className="mb-10 ml-12">
              <div className="flex items-center">
                <span className="absolute flex items-center text-3xl text-white justify-center w-8 h-8 bg-white rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
                  {certification.school ? "📃" : "👩🏼‍🎓"}
                </span>
                <h3 className="flex items-center md:text-xl text-lg text-white font-semibold pl-2 rounded-md bg-black w-full">
                  {certification.title}
                </h3>
              </div>
              <div className="md:text-xl text-md font-light pl-2 pt-2">
                {certification.institute
                  ? certification.institute
                  : certification.school}{" "}
              </div>

              <time className="block mb-2 md:text-md text-xs font-normal p-2 leading-none text-gray-400 text-gray-500">
                {certification.date}
              </time>
            </li>
          ))}
      </ol>
    </div>
  );
};
