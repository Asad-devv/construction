import React from 'react'
import { whatsapp,email } from "../assets";

const FloatContact = () => {
  return (
    <div className="w-[26vh] flex flex-row justify-center items-center mx-2 animate-bounce my-3 fixed py-2 gap-3  right-0 bottom-0 bg-gray-900 border-2 rounded-full px-4 text-white ">
    <p className="text-xl">Contact:</p>
    
    <a
    href="https://wa.me/971505894120"
    className="w"
    target="_blank"
    rel="noopener noraskeferrer"
  >
    <img  src={whatsapp}/>
  </a>
  <a
    href="sonbola.contracting@gmail.com"
    className="whatsapp_float  pt-0"
    target="_blank"
    rel="noopener noraskeferrer"
  >
    <img  src={email}/>
  </a>
</div>

  )
}

export default FloatContact