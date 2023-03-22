import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import OurMission from './components/OurMission'

import Construction from './components/Construction'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Hero/>
      <Construction/>
      
      OurMission/>
    </div>
  )
}

export default App
