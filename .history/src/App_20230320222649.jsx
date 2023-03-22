import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Construction from "./components/Construction";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      {/* <Construction/> */}

      <OurMission />
      <Services />
      <Projects heading="o"/>
      <Projects/>
    </div>
  );
}

export default App;
