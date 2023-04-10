import "../style/education.css";

export const Projects = () => {
  const projectsList = [
    { title: "Pokédex", img: "", link: "" },
    { title: "Pokédex", img: "", link: "" },
    { title: "Pokédex", img: "", link: "" },
  ];

  return (
    <div
      className="picture-side-container flex flex-col m-auto items-center mt-24 p-10 min-w-full border border-2 border-white mb-24"
      id="education"
    >
      {/*<motion.div
        initial={{ x: 70 }}
        animate={{ x: -100 }}
        transition={{
          ease: "ease-in-out",
          duration: 2,
          x: { duration: 2},
        }}
      > </motion.div>*/}
      <h2 className="font-bold text-5xl text-white pb-24">Projects 💪🏻 </h2>
      <div className="flex">
        {projectsList &&
          projectsList.map((project, index) => (
            <div key={index} class="indicator m-4">
              <div class="content-text text-white grid h-24 place-items-center p-2">
                <a href={project.link}>
                  <img src={project.img} alt="project screenshot" />
                </a>
                <h3 className="font-bold text-white text-sm p-4">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
