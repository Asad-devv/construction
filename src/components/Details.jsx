import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { logo } from '../assets';

const CompanyInfo = () => {
    return (
        <div className="bg-gray-100 w-full flex justify-center">
            <div className="container text-center mx-auto flex flex-wrap justify-center py-8">
                <div className="w-full md:w-1/2 lg:w-2/3 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 justify-center ">Thank you for contacting</h2>
                        {/* <p className="text-2xl font-bold text-gray-900 mb-4 justify-center ">Welcome to [Company Name]</p> */}
                        {/* <div className=''>
              <img className="bg-blue-900 mx-aauto rounded-full w-20 h-20" src={logo} alt="Company logo" />
            </div> */}
                        <h2 className="text-3xl font-black text-gray-900 mt-4 mb-2">Al Sonbola Contracting.</h2>
                        <p className="text-gray-700 text-base mb-6">Experience Exceptional Service</p>
                        <p className="text-gray-700 text-base mb-4 justify-center ">We are delighted to have you with us.<br/> We are currently open and ready to serve you.<br/> Our team of expert builders and contractors are dedicated to providing exceptional service and delivering top-quality results.</p>
                        <div className="flex text-center justify-center items-center mb-4 ">
                            <FaMapMarkerAlt className="text-gray-600 mr-2" />
                            <p className="text-gray-700 texat-base">Location : <a href=' https://maps.google.com/maps?q=5%2B16a%2BSt%2B-%2BNadd%2BAl%2BHamar%2B-%2BDubai%2B-%2BUnited%2BArab%2BEmirates&sll=25.185046747415047,55.377419739961624' target="_blank" className='underline text-blue-700'>Click To view on Map </a></p>
                        </div>
                        <div className="flex items-center mb-4 justify-center ">
                            <FiPhone className="text-gray-600 mr-2" />
                            <p className=" text-gray-700 texat-base"> Phone: <a href='tel:+97143889814' target="_blank" className='text-blue-700 underline'>+97143889814</a>
                            </p>
                        </div>
                        <div className="flex items-center mb-4 justify-center ">
                            <HiOutlineMail className="text-gray-600 mr-2" />
                            <p className="text-gray-700 text-base">Email :  <a
    href="mailto:sonbola.contracting@gmail.com"
    className="underline text-blue-700"
    target="_blank"
    rel="noopener noraskeferrer"
  >sonbola.contracting@gmail.com</a> </p>
                        </div>
                        <div className="flex items-center mb-4 justify-center ">
                            <AiOutlineWhatsApp className="text-gray-600 mr-2" />
                            <p className="text-gray-700 text-base">Whatsapp : <a
    href="https://wa.me/971505894120"
    className="underline text-blue-700"
    target="_blank"
    rel="noopener noraskeferrer"
  >+971505894120</a>

</p>
                        </div>
                        
                        <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">Contact Us To get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;
