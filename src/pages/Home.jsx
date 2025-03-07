import "../index.css";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="py-10 flex flex-col">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
