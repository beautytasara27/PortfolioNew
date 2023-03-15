import { TypeAnimation } from "react-type-animation";
import { useState ,forwardRef} from "react";
import Avatar from "../../assets/images/avatar2.jpg";
const Landing = forwardRef(({ScrollToSection}, ref) => {
  const [labelValue, setLabelValue] = useState("");
  const labels = ["Web Applications", "Mobile Applications", "APIs"];
  let count = 0;
  const cycleArray = () => {
    setLabelValue(labels[count]);
    // console.log(name);

    // increment our counter
    count++;

    // reset counter if we reach end of array
    if (count === labels.length) {
      count = 0;
    }
  };
  setInterval(cycleArray, 200);
  return (
    <div ref={ref} className="flex justify-center h-screen items-center mt-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl">
        <div className="flex justify-center">
          <div  className="space-y-8">
            <div className="flex justify-center">
              {" "}
              <img className="w-[100px] rounded-full" src={Avatar} />
            </div>

            <h1 className="font-rubik-bold text-4xl text-center">
              Beauty Tatenda Tasara
            </h1>
            <h2 className="font-rubik-bold text-xl text-center">
              Software Developer
            </h2>

            <p className="text-center font-rubik-regular">
              {" "}
              I develop{" "}
              <TypeAnimation
                sequence={[
                  "Back-end stuff", // Types 'One'
                  1000, // Waits 1s
                  "Front-end stuff", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "16px" }}
              />
            </p>
            <div className="flex justify-center space-x-4 ">
              <a
                href="https:github.com/beautytasara27"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fa-2x fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/beauty-tasara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-2x fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="flex justify-center">
              <button className="bg-red-500 hover:bg-transparent hover:border hover:animate-bounce py-3 px-6 font-rubik-bold text-base rounded-[30px]">
                <a href="mailto:beautytasara27@gmail.com">Hire Me</a>
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-white" onClick={()=>ScrollToSection("about")}>
                <i className="fa-solid fa-2x fa-angles-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Landing;
