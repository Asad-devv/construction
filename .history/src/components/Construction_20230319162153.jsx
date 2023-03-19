import React from 'react' 

import "./Construction.css"

const Construction = () => {
  return (
    // <div style={{display:"flex" ,backgroundColor:"gray",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}} >
    //     <img src="src/assets/hero.png" />
    //     <h1 >WEBSITE UNDER CONSTRUCTION</h1>
    //     <h1>Al SONBOLA CONTRACTING</h1>    
    // </div>
    <div className="App">
    <div className="container">
    <img src="src/assets/hero.png" />

      <h1>
        Website
        <br />
Under Construction      </h1>
      {/* <Timer /> */}
      {/* <Optin /> */}
      {/* <Preloader /> */}
    </div>
  </div>
  )
}

export default Construction