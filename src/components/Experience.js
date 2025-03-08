import { FaMapMarkedAlt } from "react-icons/fa";

export const Experience = () => {
  const jobs = [
    {
      role: "Web Developer",
      company: "IPS",
      city: "Remote",
      responsability:
        "End-to-end development of novel platforms for healthcare professionals: design and test user journeys and stories; create wireframes and high fidelity prototypes with Figma and contents with Adobe Illustrator; build the product with Javascript, Bubble, Webflow and Python (for data visualisation)",
      date: "Jan. 2024 - present",
      img: "👩🏼‍💻",
    },
    {
      role: "Front End Developer - Contractor",
      city: "Remote",
      responsability:
        "Designed and developed websites and applications for various clients",
      date: "June - Dec. 2021 & Mar. 2023 - Dec. 2023",
      img: "👩🏼‍💻",
    },
    {
      role: "Administration Assistant",
      company: "K PAK Ltd",
      city: "Mitcham, UK",
      responsability:
      "Updated storage database to handle artworks data and improved warehouse tracking speed; supervised warehouse and technical teams operations and produced import/export documentations; worked with internal and external stakeholders, including Phillips, Sassoon, FedEx, DHL",
      date: "Nov. 2021 - July 2022",
      img: "🚛",
    },
    {
      role: "Art Handling, archiving and data collecting intern",
      company: "Art Gazette",
      city: "London, UK",
      responsability:
        "Cataloged and digitalised contemporary artworks, increasing accessibility and organization. Assisted with the relocation of valuable pieces, ensuring proper handling and preservation.",
      date: "Sep. 2021",
      img: "🖼️",
    },
    {
      role: "Visitor Experience Assistant",
      company: "Natural History Museum",
      city: "London, UK",
      responsability:
        "Provided exceptional visitor experiences assisting with visitor inquiries.",
      date: "May 2020 - Oct. 2021",
      img: "🏛️",
    },
    {
      role: "Freelance Collaborator",
      company: "Associazione Culture Attive",
      city: "Remote",
      responsability:
        "Updated the environmental art section of the official Valdelsa Valdicecina website with WordPress; managed association’s social media profiles and organised cultural events",
      date: "Feb. 2017 - Dec. 2021",
      img: "👩🏼‍💻",
    },
    {
      role: "Fine Art Shipping Coordinator",
      company: "Fercam Fine Art",
      city: "Rome, Italy",
      responsability:
          "Liaised with international clients, agents, auction houses, museums, private and public art galleries; planned and organised the entire process of both domestic and international art shipments while coordinating technical teams during the installation/deinstallation of artworks during exhibitions; oversaw operations and condition reports in two notable exhibitions in Rome and Urbino",
      date: "Oct. 2019 - Sep. 2020",
      img: "🚛",
    },
    {
      role: "Visitors and Exhibitions Curator Assistant",
      company: "Opera Laboratori Fiorentini",
      city: "San Gimignano, Italy",
      responsability:
        "Assisted with a new layout project for Musei Civici exhibitions rooms. Provided visitor assistance.",
      date: "June 2015 - Sep. 2019",
      img: "🏛️",
    },
  ];

  return (
    <div
      className="job-list-container max-w-full py-24 flex flex-col items-center bg-white"
      id="experience"
    >
      <div className="flex md:flex-row flex-col items-center">
        <span className="font-bold md:text-5xl text-4xl md:pb-24 pb-2">👷🏼‍♀️</span>
        <h2 className="font-bold md:text-5xl text-4xl text-black pb-24">
          Work experience{" "}
        </h2>
      </div>

      <ol className="job-list relative border-gray-200 dark:border-gray-700 md:justify-center md:w-1/2 w-2/3">
        {jobs &&
          jobs.map((job, index) => (
            <li key={index} className="mb-10 ml-12">
              <div className="flex md:items-center">
                <span className="absolute flex items-center text-2xl justify-center w-8 h-8 bg-white rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
                  {job.img}
                </span>
                <h3 className="flex md:flex-row flex-col md:items-center mb-1 md:text-xl text-lg text-white font-semibold p-2 rounded-md bg-black w-full">
                  {job.role}
                  <span className="md:text-xl text-md font-thin md:pl-2 md:pt-0">
                    {job.company ? `at ${job.company}` : ""}
                  </span>
                </h3>
              </div>
              <time className="block mb-2 md:text-md text-xs font-normal p-2 leading-none text-gray-400 text-gray-500">
                {job.date}
              </time>
              <p className="mb-4 text-base font-normal pl-2 text-gray-500 dark:text-gray-400 whitespace-normal">
                {job.responsability}
              </p>
              <span className="text-md font-semibold flex pl-2">
                <FaMapMarkedAlt />
                <span className="md:text-sm text-xs font-light pl-2">
                  {" "}
                  {job.city}
                </span>
              </span>
            </li>
          ))}
      </ol>
    </div>
  );
};
