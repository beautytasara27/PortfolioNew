const ProjectThumbnail = ({ project }) => {
  return (
    <div className="p-5 h-full bg-themeDarker font-rubik-regular space-y-4">
      <div className="flex justify-between items-center text-yello">
        <i class="fa-regular fa-folder fa-2x"></i>
        <a className="" href={project.Url} target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
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
