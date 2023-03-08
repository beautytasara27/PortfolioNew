import Avatar from "../../assets/images/avatar2.jpg";
import SkillsBar from "../Skills/skillsbar";
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  const width = 2;
  return (
    <div className="flex justify-center sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            About Me
          </h1>
        </div>
        <div className="md:mx-14 md:flex justify-center items-center md:space-x-8">
          <div className="hidden md:block sm:w-[200px] w-[100px]">
            <img className="w-full rounded-full" src={Avatar} />
          </div>
          <div className="w-full md:grid grid-cols-2 gap-8 p-5 rounded-[30px] bg-themeDarker">
            <div className="space-y-4">
              <p className="font-rubik-regular text-white">
                I am passionate about buiding stuff for the web. My projects range from full-stack applications, interactive frontends, REST APIs, etc.
              </p>
              <button className="bg-red-500 hover:bg-transparent hover:border hover:animate-bounce py-3 px-6 font-rubik-bold text-base rounded-[30px]">
                <a target="_blank" href="https://drive.google.com/uc?export=download&id=1e3Bl2X6UT0ApiH3PLN0Ov4pdflNb83Ng">Download my CV</a>
              </button>
            </div>
            <div className="space-y-4 mt-8 md:mt-0">
              <div className="space-y-2">
                <h3>JavaScript</h3>
                <div className="bg-white w-full h-2 rounded-full">
                  {" "}
                  <SkillsBar value={"70"} color={"rgb(132 204 22)"}/>
                </div>
              </div>
              <div className="space-y-2">
                <h3>React</h3>
                <div className="bg-white w-full h-2 rounded-full">
                  {" "}
                  <SkillsBar value={"60"} color={"rgb(245 158 11)"}/>
                </div>
              </div>
              <div className="space-y-2">
                <h3>c#</h3>
                <div className="bg-white w-full h-2 rounded-full">
                  {" "}
                  <SkillsBar value={"70"} color={"rgb(6 182 212)"}/>
                </div>
              </div>
              <div className="space-y-2">
                <h3>.Net Core</h3>
                <div className="bg-white w-full h-2 rounded-full">
                  {" "}
                  <SkillsBar value={"50"} color={"rgb(168 85 247)"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 sm:mt-24 mx-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>

            <div className="flex-col">
              <h3 className="font-rubik-bold text-3xl">10</h3>
              <p className="font-rubik-regular text-xs sm:text-base">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>

            <div className="flex-col">
              <h3 className="font-rubik-bold text-3xl">3</h3>
              <p className="font-rubik-regular text-xs sm:text-base">Clients Satisfied</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <div className="flex-col">
              <h3 className="font-rubik-bold text-3xl">6</h3>
              <p className="font-rubik-regular text-xs sm:text-base">Languages Learned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default About;
