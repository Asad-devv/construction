import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'


import Construction from './components/Construction'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Hero/>
      <Construction/>
      <Hero/>
    </div>
  )
}

export default App
