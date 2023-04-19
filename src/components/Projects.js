import {Link} from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import Flyer from "../images/Flyer.png";
import Winnie from "../images/Winnie.png";

import "../style/education.css";

export const Projects = () => {
  const projectsList = [
    {
      title: "Landing page for instant messaging app",
      img: Flyer,
      link: "https://main--jovial-smakager-39e832.netlify.app",
      repo: "https://github.com/biancafrancini/Landing-page-chat-app/tree/main/landing_page",
    },
    {
      title: 'Easy login form ("Winnie the Pooh" style)',
      img: Winnie,
      link: "https://statuesque-starship-25d9f5.netlify.app",
      repo: "https://github.com/biancafrancini/Easy-form/tree/main/form",
    },
  ];

  return (
    <div
      className="flex flex-col bg-black m-auto items-center py-24"
      id="projects"
    >
      <h2 className="font-bold md:text-5xl text-4xl text-white pb-16"> 💪🏻 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center min-h-72">
        {projectsList &&
          projectsList.map((project, index) => (
            <div key={index} className="py-4 items-center mt-12">
              <div className="content-text text-white flex flex-col justify-center min-h-72 items-center">
                  <img
                    src={project.img}
                    alt="project screenshot"
                    className="rounded-sm border-2 mx-20 my-2 md:w-72 w-64"
                  />
                <h3 className="font-thin md:text-xl text-lg w-fit text-white w-3/4 text-sm p-4">
                  {project.title}
                </h3>
                <div className="flex justify-center py-4 w-1/2 md:text-3xl text-2xl">
                <Link to={project.repo} target="_blank" className="w-10 h-4 hover:text-green-600"><BsGithub /></Link>
                <Link to={project.link} target="_blank" className="w-10 h-4 hover:text-green-600"><TbWorldWww /></Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
