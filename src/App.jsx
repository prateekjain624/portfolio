import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Element name="home">
          <Home />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        {/* <Element name="skill">
          <Skills />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="contact">
          <Contact />
        </Element> */}
      </div>
    </>
  );
}

export default App;
