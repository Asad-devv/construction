import React from 'react'
import ReactWhatsapp from 'react-whatsapp';

const Whatsapp = () => {
  return (
    <div className="h-[50vh] w-[50vh]">
    <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
    </div>
  )
}

export default Whatsapp