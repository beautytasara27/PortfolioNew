const ProjectThumbnail = ({ project }) => {
  return (
    <div className="p-5 bg-themeDarker font-rubik-regular space-y-4">
      <div className="flex justify-between items-center text-yello">
        <i class="fa-regular fa-folder fa-2x"></i>
        <a
          href={
            project.url
              ? project.url
              : project.links[0]
              ? project.links[0].Github
              : "#"
          }
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <h3 className="font-rubik-bold">{project.projectName}</h3>
      <p className="">{project.paragraphs[0].Description}</p>
    </div>
  );
};
export default ProjectThumbnail;
