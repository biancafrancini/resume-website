import { icons } from "../utilities/icons";
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
      {icons.map((icon) =>
          <div key={icon.name} className={`${icon.name}-icon flex flex-col items-center md:px-4 px-2 py-6`}>
          {icon.iconName}
          <p className="font-bold text-sm py-2">{icon.name}</p>
        </div>)}
      </div>
    </div>
  );
};
