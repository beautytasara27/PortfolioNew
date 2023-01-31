import Web from "../../assets/images/world-wide-web.png"
import Mobile from "../../assets/images/app-development.png"
import AI from "../../assets/images/artificial-intelligence.png"
import {forwardRef} from "react";
const Services = forwardRef((props, ref) => {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-6xl">
      <div>
      <h1 ref={ref} className="scroll-mt-32 font-rubik-bold text-3xl mb-20">Services</h1>
    </div>
        <div className="flex justify-between space-x-8 mb-10">
          <div className="w-1/3 p-5 flex flex-col items-center  rounded-[30px] space-y-4 bg-pynk shadow-2xl shadow-gray-500">
            <div className="w-[100px] flex justify-center">
              <img src={Web} alt="service" />
            </div>
            <h2  className="font-rubik-bold text-lg">Web App Development</h2>
            <p className="font-rubik-regular">I am an experienced web app developer. Working mostly in JS frameworks like React, Vue, Next</p>
          </div>
          <div  className="w-1/3 p-5 flex flex-col items-center rounded-[30px] space-y-4 bg-yello shadow-2xl shadow-gray-500">
            <div className="w-[100px] flex justify-center">
              <img src={Mobile} alt="service" />
            </div>
            <h2 className="font-rubik-bold text-lg">Mobile App Development</h2>
            <p className="font-rubik-regular">I have been developing hybrid mobile applications for both android and ios using React Native and Expo.</p>
          </div>
          <div className="w-1/3 p-5 flex flex-col items-center rounded-[30px] space-y-4 bg-bleu shadow-2xl shadow-gray-500">
            <div className="w-[100px] flex justify-center">
              <img src={AI} alt="service" />
            </div>
            <h2 className="font-rubik-bold text-lg">Artificial Intelligence</h2>
            <p className="font-rubik-regular">I am an experienced AI developer. Working mostly in Tensorflow framework and Keras Library.</p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Services;
