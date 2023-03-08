import Web from "../../assets/images/world-wide-web.png";
import Mobile from "../../assets/images/app-development.png";
import AI from "../../assets/images/artificial-intelligence.png";
import { forwardRef } from "react";
const Services = forwardRef((props, ref) => {
  return (
    <div className="flex z-0 justify-center  mt-10 sm:mt-0 sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl">
        <div>
          <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">
            Services
          </h1>
        </div>
        <div className="sm:flex justify-between sm:space-x-8 space-y-4 sm:space-y-0 mb-10">
          <div className="sm:w-1/3 p-5 flex flex-col items-center  rounded-[30px] space-y-4 bg-pynk shadow-2xl shadow-gray-500 transition duration-700 hover:-translate-y-6">
            <div className="w-[100px] flex justify-center">
              <img src={Web} alt="service" />
            </div>
            <h2 className="font-rubik-bold text-lg">Web App Development</h2>
            <p className="font-rubik-regular">
              I am an experienced web app developer. Working mostly in JS
              frameworks like React, Next
            </p>
          </div>
          <div className="sm:w-1/3 p-5 flex flex-col items-center rounded-[30px] space-y-4 bg-yello shadow-2xl shadow-gray-500 transition duration-700 hover:-translate-y-6">
            <div className="w-[100px] flex justify-center">
              <img src={Mobile} alt="service" />
            </div>
            <h2 className="font-rubik-bold text-lg">Mobile App Development</h2>
            <p className="font-rubik-regular">
              I have been developing hybrid mobile applications for both android
              and ios using Xamarin.
            </p>
          </div>
          <div className="sm:w-1/3 p-5 flex flex-col items-center rounded-[30px] space-y-4 bg-bleu shadow-2xl shadow-gray-500 transition duration-700 hover:-translate-y-6">
            <div className="w-[100px] flex justify-center">
              <img src={AI} alt="service" />
            </div>
            <h2 className="font-rubik-bold text-lg">Artificial Intelligence</h2>
            <p className="font-rubik-regular">
              I dabble in AI research. I co-authored 2 papers in NLP and
              Computer Vision.I work mostly in Tensorflow framework and Keras
              Library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Services;
