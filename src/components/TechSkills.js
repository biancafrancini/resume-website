import { FaBootstrap, FaNodeJs, FaSass } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import {
  SiHtml5,
  SiMongodb,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiDocker,
  SiFigma,
} from "react-icons/si";

import "../style/techskills.css";

export const TechSkills = () => {
  return (
    <div
      className="techskills-section-container flex flex-col items-center bg-white py-24"
      id="skills"
    >
      <h2 className="font-bold md:text-5xl text-4xl text-black py-12">
        👩🏼‍💻 Skills{" "}
      </h2>

      <div className="picture-side-container min-w-full flex justify-center icon-skills z-10">
        <div className="html-icon flex flex-col items-center">
          <SiHtml5 className="brand" />
          <p className="font-bold text-sm py-2">HTML5</p>
        </div>
        <div className="css-icon flex flex-col items-center">
          <SiCss3 className="brand" />
          <p className="font-bold text-sm py-2">CSS</p>
        </div>
        <div className="sass-icon flex flex-col items-center">
          <FaSass className="brand" />
          <p className="font-bold text-sm py-2">SASS</p>
        </div>

        <div className="bootstrap-icon flex flex-col items-center">
          <FaBootstrap className="brand" />
          <p className="font-bold text-sm py-2">Bootstrap</p>
        </div>
        <div className="tailwind-icon flex flex-col items-center">
          <SiTailwindcss className="brand" />
          <p className="font-bold text-sm py-2">Tailwind css</p>
        </div>
        <div className="git-icon flex flex-col items-center">
          <BsGit className="brand" />
          <p className="font-bold text-sm py-2">Git</p>
        </div>

        <div className="js-icon flex flex-col items-center">
          <SiJavascript className="brand" />
          <p className="font-bold text-sm py-2">Javascript</p>
        </div>
        <div className="typescript-icon flex flex-col items-center">
          <SiTypescript className="brand" />
          <p className="font-bold text-sm py-2">Typescript</p>
        </div>
        <div className="react-icon flex flex-col items-center">
          <SiReact className="brand" />
          <p className="font-bold text-sm py-2">React.js</p>
        </div>

        <div className="motion-icon flex flex-col items-center">
          <SiFramer className="brand" />
          <p className="font-bold text-sm py-2">Framer motion</p>
        </div>
        <div className="figma-icon flex flex-col items-center">
          <SiFigma className="brand" />
          <p className="font-bold text-sm py-2">Figma</p>
        </div>
        
        <div className="node-icon flex flex-col items-center">
          <FaNodeJs className="brand" />
          <p className="font-bold text-sm py-2">Node.js</p>
        </div>
        <div className="nest-icon flex flex-col items-center">
          <SiNestjs className="brand" />
          <p className="font-bold text-sm py-2">Nest.js</p>
        </div>
        <div className="mongo-icon flex flex-col items-center">
          <SiMongodb className="brand" />
          <p className="font-bold text-sm py-2">MongoDB</p>
        </div>
        <div className="docker-icon flex flex-col items-center">
          <SiDocker className="brand" />
          <p className="font-bold text-sm py-2">Docker</p>
        </div>
      </div>
    </div>
  );
};
