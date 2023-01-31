import { forwardRef } from "react";
const Skills = forwardRef((props, ref) => {
  return (
    <div className="flex justify-center  mt-10 sm:mt-0 sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="max-w-6xl w-full">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            Skills
          </h1>
        </div>
        <div className="sm:grid grid-cols-3 gap-4 justify-center p-5 rounded-[30px] bg-themeDarker font-rubik-bold">
          <div className="space-y-4">
            <div className="space-y-4">
              <h3>JavaScript</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-11/12 h-full bg-red-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>React</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-8/12 h-full bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>TypeScript</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>Tailwind</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-7/12 h-full bg-green-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>Bootstrap</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-7/12 h-full bg-violet-500"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-4 sm:mt-0">
            <div className="space-y-4">
              <h3>c#</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-red-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>ASP.NET Core</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-pynk"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>HTML</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-11/12 h-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>Python</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-7/12 h-full bg-pink-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>TensorFlow</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-7/12 h-full bg-pink-500"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-4 sm:mt-0">
            <div className="space-y-4">
              <h3>AWS</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-violet-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>Git</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-8/12 h-full bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>CI/CD</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-yello"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>SQL</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-7/12 h-full bg-pink-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3>MongoDB</h3>
              <div className="bg-white w-full h-3 rounded-full">
                {" "}
                <div className="rounded-full w-6/12 h-full bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Skills;
