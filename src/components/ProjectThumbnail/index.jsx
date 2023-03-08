const ProjectThumbnail = ({ project }) => {
  return (
    <div className="p-5 h-full bg-themeDarker font-rubik-regular space-y-4">
      <div className="flex justify-between items-center text-yello">
        <i className=" text-yello fa-regular fa-folder fa-2x"></i>
        <div className="flex justify-end space-x-4">
          {project.github && (
            <a
              className="hover:scale-125"
              href={project.github}
              target="_blank"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
          )}
          {project.Url && (
            <a className="hover:scale-125" href={project.Url} target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
            </a>
          )}
        </div>
      </div>
      <h3 className="font-rubik-bold">{project.projectName}</h3>
      <p className="">{project.paragraphs[0].Description}</p>
      <p className="text-gray-400">
        {project.Languages.concat(project.Frameworks).map((tech) => (
          <span>{tech + "  "}</span>
        ))}{" "}
      </p>
    </div>
  );
};
export default ProjectThumbnail;
