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
import Whatsapp

function App() {
  

  return (
    <div>
      <Hero />
      {/* <Construction/> */}

      <OurMission />
      <Services />
      {/* <Projects heading="Completed Projects" projects={completedProjects}/> */}
      {/* <Projects heading="Ongoing Projects" projects={incompleteProjects}/> */}
      <Project2 projects={completedProjects} heading="COMPLETED PROJECTS" subtext="View our completed projects and see how ABC Construction delivers high-quality projects on time and within budget. Our team of experts works closely with clients to exceed their expectations on every project, from commercial and industrial buildings to residential homes and public infrastructure."/>
      <ContactUs/>
      <Project2 projects={incompleteProjects} subtext="We are excited to showcase our ongoing projects. Our team is dedicated to delivering exceptional results and we are pleased to share progress updates with our clients through pictures of these exciting projects. Check out our gallery to see our work in action." heading="On-Going PROJECTS" />
      <Project2 projects={interiorDesign}  heading="Interior Design " subtext="Interior Design Projects"/>
   
    </div>
  );
}

export default App;
