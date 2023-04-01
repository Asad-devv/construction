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
import FloatContact from "./components/FloatContact";
import Footer from "./components/Footer";
import About from "./components/About"
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import Details from "./components/Details";

function App() {
  

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={

          <> <Hero />
      

          <OurMission />
          <Services />
          <About/>
          <Project2 projects={completedProjects} heading="Completed Projects" subtext="View our completed projects and see how Al Sonbola Construction delivers high-quality projects on time and within budget. Our team of experts works closely with clients to exceed their expectations on every project, from commercial and industrial buildings to residential homes and public infrastructure."/>
          
          <Project2 projects={incompleteProjects} subtext="We are excited to showcase our ongoing projects. Our team is dedicated to delivering exceptional results and we are pleased to share progress updates with our clients through pictures of these exciting projects. Check out our gallery to see our work in action." heading="On-Going PROJECTS" />
          <Project2 projects={interiorDesign}  heading="Interior Design" subtext="Interior Design Projects"/>
          <ContactUs/>
          </>
        } />
             <Route path="/details" element={<Details/>} /> 
      </Routes>
      <FloatContact/>

      <Footer/>
    </div>
  );
}

export default App;
