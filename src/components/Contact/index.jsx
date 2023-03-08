import {forwardRef} from "react";
const Contact = forwardRef((props, ref) => {
  return (
    <div className="flex justify-center sm:h-screen mt-10 sm:mt-0 mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl font-rubik-regular">
        <div >
          <h1 ref={ref} className=" scroll-mt-32 font-rubik-bold text-3xl mb-20">Get in Touch</h1>
        </div>
        <div className="md:flex w-full">
          <div className="space-y-2 md::w-1/3 mb-4 md:mb-0">
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
          <form className=" md:w-2/3 space-y-8 text-black" data-netlify="true" name="contact">
            <div className="md:flex md:space-x-8 w-full space-y-8 md:space-y-0">
              <input
              name="name" 
                className="md:w-1/2 w-full rounded-[30px] p-4 "
                placeholder="Your name"
              />
              <input
              name="email" 
                className="md:w-1/2 w-full rounded-[30px] p-4"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full">
              <input
              name="subject" 
                className="w-full rounded-[30px] p-4"
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <input
              name="message" 
                className="w-full rounded-[30px] p-4"
                placeholder="Message"
              />
            </div>{" "}
            <button type="submit" className="bg-red-500 text-white hover:bg-transparent hover:border hover:animate-bounce py-3 px-6 font-rubik-bold text-base rounded-[30px]">
            <a href="mailto:beautytasara27@gmail.com">Send Message</a>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
});
export default Contact;
