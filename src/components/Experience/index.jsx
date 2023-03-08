import {forwardRef} from "react";
const Experience = forwardRef((props,ref) => {
  return (
    <div className="flex justify-center sm:h-screen mt-10 sm:mt-0 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl font-rubik-regular">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            Experience
          </h1>
        </div>
        <div  className="sm:flex sm:space-x-8">
          <div className="bg-themeDarker rounded-[30px] p-5">
            <div className="flex space-x-4">
              <div className="flex">
                <div className="flex flex-col items-center text-pynk space-y-1">
                <i class="fa-solid fa-graduation-cap"></i>
                  <span className="border-l border-pynk h-24"></span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">2018-2022</p>
                <h3 className="font-rubik-bold">Bachelor's Degree</h3>
                <p>
                  Did 4 years Bachelor in Sciences in Computer Sciences at Binus
                  University.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-1">
              <div className="flex">
                <div className="flex flex-col items-center text-pynk space-y-1">
                <i class="fa-solid fa-graduation-cap"></i>
                  <span className="border-l border-pynk h-24"></span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">2016-2017</p>
                <h3 className="font-rubik-bold">Advanced Level</h3>
                <p>
                  High school advanced level majoring in Physics, Mathematics,
                  and chemistry.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-themeDarker rounded-[30px] p-5">
          <div className="flex space-x-4">
          <div className="flex">
            <div className="flex flex-col items-center text-pynk space-y-1">
              <i class="fa-solid fa-briefcase"></i>
              <span className="border-l border-pynk h-24"></span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-400">01/2023-Present</p>
            <h3 className="font-rubik-bold">JavaScript Developer</h3>
            <p>
              I am working as a Freelance Developer building web stuff with tech
              stack : React, Preact, Tailwind, Deno, Fresh.
            </p>
          </div>
        </div>
            <div className="flex space-x-4">
              <div className="flex">
                <div className="flex flex-col items-center text-pynk space-y-1">
                  <i class="fa-solid fa-briefcase"></i>
                  <span className="border-l border-pynk h-24"></span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">03/2022-12/2022</p>
                <h3 className="font-rubik-bold">JavaScript Developer</h3>
                <p>
                  I am worked as a JavaScript Developer at Altonium with tech
                  stack : React, Next, Tailwind.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-1">
              <div className="flex">
                <div className="flex flex-col items-center text-pynk space-y-1">
                  <i class="fa-solid fa-briefcase"></i>
                  <span className="border-l border-pynk h-24"></span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">02/2022-08/2022</p>
                <h3 className="font-rubik-bold">AI Research Assistant</h3>
                <p>
                  I worked as a research assistant for Covid Research in medical
                  imagery. Tech stack : Tensorflow, Keras, AWS, Google Colab.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-1">
              <div className="flex">
                <div className="flex flex-col items-center text-pynk space-y-1">
                  <i class="fa-solid fa-briefcase"></i>
                  <span className="border-l border-pynk h-24"></span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">02/2021-02/2022</p>
                <h3 className="font-rubik-bold">Software Engineer Intern</h3>
                <p>
                  I worked as an intern for NHS joint project with Earth Digital
                  & RFIDiom. Tech stack : C#, .Net Core, Blazor, Xamarin.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-1">
            <div className="flex">
              <div className="flex flex-col items-center text-pynk space-y-1">
                <i class="fa-solid fa-briefcase"></i>
                <span className="border-l border-pynk h-24"></span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">09/2020-02/2021</p>
              <h3 className="font-rubik-bold">Teaching Assistant</h3>
              <p>
                I worked as a Teaching assistant for Database Systems at Binus University. Tech stack : SQL, MongoDB, SQL Server, GCP.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Experience;
