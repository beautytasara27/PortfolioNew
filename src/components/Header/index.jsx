const Header = ({
  ScrollToSection,
  landingIn,
  skillsIn,
  servicesIn,
  aboutIn,
  experienceIn,
  contactIn,
}) => {
  return (
    <div className="flex justify-center ">
      <div className="fixed top-0 w-full flex justify-center font-rubik-bold py-6 bg-theme border-b  border-gray-500">
        <div className="w-full flex justify-between items-center  max-w-6xl">
          <div className="w-2/5">
            <h1 className="text-3xl font-bold">Beauty</h1>
          </div>
          <div className="flex text-base justify-start flex-grow space-x-8">
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
              className={contactIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("contact")}
            >
              Contact
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
