import { forwardRef, useRef, useEffect } from "react";
import SkillsBar from "./skillsbar";
const Skills = forwardRef((props, ref) => {
 
  const skills = [
    { skill: "JavaScript", value: "70", color: "rgb(244 63 94)" },
    { skill: "React JS", value: "60", color: "rgb(245 158 11)" },
    { skill: "HTML", value: "90", color: "rgb(217 70 239)" },
    { skill: "Tailwind CSS", value: "80", color: "rgb(239 68 68)" },
    { skill: "CSS", value: "60", color: "lightgreen" },
    { skill: "Python", value: "50", color: "rgb(245 158 11)" },
    { skill: "c#", value: "60", color: "rgb(234 179 8)" },
    { skill: ".Net Core", value: "50", color: "rgb(34 197 94)" },
    { skill: "AWS", value: "30", color: "rgb(6 182 212)" },
    { skill: "CI/CD", value: "50", color: "rgb(16 185 129)" },
    { skill: "Git", value: "60", color: "rgb(139 92 246)" },
    { skill: "GCP", value: "50", color: "rgb(59 130 246)" },
  ];
  if (props.skillsIn) {
    skills.forEach(element => {
      document.getElementById(element.skill).classList.add("progress");
    });
    
  }
  return (
    <div className="flex justify-center mt-10 sm:mt-20 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="max-w-6xl w-full">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            Skills
          </h1>
        </div>
        <div className="sm:grid grid-cols-3 gap-4 justify-center p-5 rounded-[30px] bg-themeDarker font-rubik-bold">
          {skills.map((skill) => (
            <div className="space-y-4">
              <div className="space-y-4">
                <h3>{skill.skill}</h3>
                <div className="bg-white w-full h-2 rounded-full meter">
                  {" "}
                  <span
                    className=" h-full rounded-full"
                    style={{
                      width: skill.value + "%",
                      maxWidth: "100%",
                     
                    }}
                  >
                    {" "}
                    <span id={skill.skill} style={{ backgroundColor:skill.color}}></span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Skills;
