import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
