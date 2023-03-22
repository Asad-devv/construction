import React from 'react' 

import "./Construction.css"
import { hero } from '../assets'
const Construction = () => {
  return (
    <div style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center",alignItems:"center",alignContent:"center"}} >
      <div className='img'><img src={hero} style={{maxHeight:"100%", objectFit:"cover"}} /></div>

        
        <h1  >Wesbite Under Construction</h1>
        <h1>AL SONBOLA CONTRACTING</h1>    
        <h1>Contact us : <a>imtiaz@alsonbolacontraction.com</a></h1>
        <h2 className="text-[17px]">king ji </h2>
        <h2></h2>
    </div>

  )
}

export default Construction