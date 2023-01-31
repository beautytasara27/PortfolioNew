import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import { Fragment, useRef } from "react";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Rea from "../../src/assets/images/react.png";
import Node from "../../src/assets/images/node.png";
import Visual from "../../src/assets/images/java.png";
import npm from "../../src/assets/images/npm.png";
import useIsInViewport from "../helpers/useOnScreen";
const Home = () => {
  const landing = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const services = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const ScrollToSection = (section) => {
    if (section === "landing") {
      landing.current.scrollIntoView();
    } else if (section === "about") {
      about.current.scrollIntoView();
    } else if (section === "skills") {
      skills.current.scrollIntoView();
    } else if (section === "services") {
      services.current.scrollIntoView();
    } else if (section === "experience") {
      experience.current.scrollIntoView();
    } else if (section === "contact") {
      contact.current.scrollIntoView();
    }
  };
  const landingIn = useIsInViewport(landing);
  const servicesIn = useIsInViewport(services);
  const skillsIn = useIsInViewport(skills);
  const aboutIn = useIsInViewport(about);
  const experienceIn = useIsInViewport(experience);
  const contactIn = useIsInViewport(contact);
  return (
    <div className="relative">
      <div className=" ">
        <Header
          ScrollToSection={ScrollToSection}
          landingIn={landingIn}
          servicesIn={servicesIn}
          aboutIn={aboutIn}
          skillsIn={skillsIn}
          experienceIn={experienceIn}
          contactIn={contactIn}
        />
        <div className="scroll-mt-28" >
          <Landing ScrollToSection={ScrollToSection} ref={landing}/>
        </div>
        <div className="scroll-mt-28">
          <About  ref={about}/>
        </div>
        <div className="scroll-mt-28" >
          <Skills ref={skills}/>
        </div>
        <div className="scroll-mt-28" >
          <Services ref={services}/>
        </div>
        <div className="scroll-mt-28" >
          <Experience ref={experience}/>
        </div>
        <div className="scroll-mt-28" >
          <Contact ref={contact}/>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
