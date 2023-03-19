import React from 'react' 

import "./Construction.css"

const Construction = () => {
  return (
    <div style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center",alignItems:"center",alignContent:"center"}} >
      <div className='img'><img src="src/assets/hero.png" style={{maxHeight:"100%", objectFit:"cover"}} /></div>

        
        <h1  >Wesbite Under Construction</h1>
        <h1>AL SONBOLA CONTRACTING</h1>    
        <h1>Contact us : <a>imtiaz@alsonbolacontraction.com</a></h1>
        
    </div>

  )
}

export default Construction