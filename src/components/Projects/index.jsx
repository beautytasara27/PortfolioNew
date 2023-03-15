import { useState, forwardRef } from "react";
import { initialState } from "../../data/presets";
import ProjectThumbnail from "../ProjectThumbnail";
const Projects = forwardRef((props, ref) => {
  const [projects, setProjects] = useState(initialState);
  return (
    <div className="flex justify-center  mt-10 sm:mt-20 sm:mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            Some of my Projects
          </h1>
        </div>
        {projects &&
        <div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
          {projects.map((project) => (
            <div className="" key={project.projectId}>
              <ProjectThumbnail project={project} />
            </div>
          ))}
        </div>
          }
      </div>
    </div>
  );
});

export default Projects;
