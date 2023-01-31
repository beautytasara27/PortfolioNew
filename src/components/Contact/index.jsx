import {forwardRef} from "react";
const Contact = forwardRef((props, ref) => {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-6xl font-rubik-regular">
        <div >
          <h1 ref={ref} className=" scroll-mt-32 font-rubik-bold text-3xl mb-20">Get in Touch</h1>
        </div>
        <div className="flex w-full">
          <div className="space-y-2 w-1/3">
            <h3 className="font-rubik-bold text-lg">
              {"Let's talk about everything"}
            </h3>
            <p>
              {"Don't like forms? Send me an "}{" "}
              <a className="text-pynk" href="mailto:beautytasara27@gmail.com">
                email.
              </a>
            </p>
          </div>
          <form className=" w-2/3 space-y-8 text-black">
            <div className="flex space-x-8 w-full">
              <input
                className="w-1/2 rounded-[30px] p-4 "
                placeholder="Your name"
              />
              <input
                className="w-1/2 rounded-[30px] p-4"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full rounded-[30px] p-4"
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full rounded-[30px] p-4"
                placeholder="Message"
              />
            </div>{" "}
            <button className="bg-red-500 text-white hover:bg-transparent hover:border hover:animate-bounce py-3 px-6 font-rubik-bold text-base rounded-[30px]">
            <a href="mailto:beautytasara27@gmail.com">Send Message</a>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
});
export default Contact;
