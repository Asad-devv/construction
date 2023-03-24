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
import Project2 from "./components/Projects2"
import ContactUs from "./components/Contact";

function App() {
  

  return (
    <div>
      <Hero />
      {/* <Construction/> */}

      <OurMission />
      <Services />
      {/* <Projects heading="Completed Projects" projects={completedProjects}/> */}
      {/* <Projects heading="Ongoing Projects" projects={incompleteProjects}/> */}
      <Project2 completedProjects={completedProjects} heading="COMPLETED PROJECTS" subtext="View our completed projects and see how ABC Construction delivers high-quality projects on time and within budget. Our team of experts works closely with clients to exceed their expectations on every project, from commercial and industrial buildings to residential homes and public infrastructure."/>
      <ContactUs/>
      <Project2 projects={incompleteProjects }  />
    </div>
  );
}

export default App;
