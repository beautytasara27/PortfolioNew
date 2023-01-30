import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Landing />
      <About />
      <Skills />
    </Fragment>
  );
};
export default Home;
