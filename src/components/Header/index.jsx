import { useState } from "react";
const Header = ({
  ScrollToSection,
  landingIn,
  skillsIn,
  servicesIn,
  aboutIn,
  experienceIn,
  contactIn,
  projectsIn
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-center ">
      <div className="fixed top-0 w-full flex justify-center font-rubik-bold py-2 sm:py-6 bg-theme border-b  border-gray-500">
        <div className="w-full flex justify-between items-center  max-w-6xl relative mx-0 sm:mx-6 lg:mx-8 xl:0">
          <div className="w-2/5">
            <h1 className="text-3xl font-bold ml-4 sm:ml-0">Beauty</h1>
          </div>
          <header className="hidden md:flex text-base justify-start flex-grow space-x-8 header">
            <h2
              className={landingIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("landing")}
            >
              Home
            </h2>
            <h2
              className={aboutIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("about")}
            >
              About
            </h2>
            <h2
              className={skillsIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("skills")}
            >
              Skills
            </h2>
            <h2
              className={servicesIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("services")}
            >
              Services
            </h2>
            <h2
              className={experienceIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("experience")}
            >
              Experience
            </h2>
            <h2
              className={projectsIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("projects")}
            >
              Projects
            </h2>
            <h2
              className={contactIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("contact")}
            >
              Contact
            </h2>
          </header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          {menuOpen && (
            <div className="absolute top-10 z-15 w-full bg-theme text-base justify-start flex-grow space-y-4 p-5 border-b border-gray-500" onClick={()=>setMenuOpen(!menuOpen)}>
              <h2
                className={landingIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("landing")}
              >
                Home
              </h2>
              <h2
                className={aboutIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("about")}
              >
                About
              </h2>
              <h2
                className={skillsIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("skills")}
              >
                Skills
              </h2>
              <h2
                className={servicesIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("services")}
              >
                Services
              </h2>
              <h2
                className={experienceIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("experience")}
              >
                Experience
              </h2>
              <h2
                className={contactIn ? "text-yello " : ""}
                onClick={() => ScrollToSection("contact")}
              >
                Contact
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
