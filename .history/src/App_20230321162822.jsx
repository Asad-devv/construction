import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Construction from "./components/Construction";
import {completedProjects ,interiorDesign,incompleteProjects} from "./assets"
import <Project2></Project2>
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      {/* <Construction/> */}

      <OurMission />
      <Services />
      <Projects heading="Completed Projects" projects={completedProjects}/>
      <Projects heading="Ongoing Projects" projects={incompleteProjects}/>
    </div>
  );
}

export default App;
