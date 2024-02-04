import React,{useRef,useState} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import emailjs from "@emailjs/browser"

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const formRef= useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name:'',
    email : '',
    message : '',
  })
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
     "service_ww1hhnm",
      "template_b5ikqsc",
      {
        from_name: form.name,
        to_name: "Al sonbola",
        from_email: form.email,
        to_email: "imtiaz@alsonbolacontracting.com",
        message: form.message,
      },
      "IZ02atMU437T6JPCm"
    )
    .then(
      () => {
        setShowModal(true)
        setLoading(false);        
        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        setShowModal(true)
        alert("Ahh, something went wrong. Please try again.");
      }
    );
};




  return (
    <div id="contact" className=" bg-[url('https://www.westend61.de/images/0001363515pw/construction-workers-working-at-site-EYF04597.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light  justify-center flex-col items-center	md:flex-row-reverse flex lg:flex-row-reverse  sm:flex-col-reverse  mt-20 pb-20 bg-blue-900 pt-20  h-auto">
      {/* <h1>Contact US Now to build your dream project</h1> */}
      <>
{/* modal */}


  
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 mx-3 z-50 outline-none focus:outline-none "data-aos="fade-in"
          >
            <div
	class=" mx-auto p-5 border shadow-lg rounded-md bg-white"
>
           	<div class="mt-3 text-center">
              
		<div
			class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 "
		>
			<svg
				class="h-6 w-6 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path>
			</svg>
		</div>
		<h3 class="text-lg leading-6 font-medium text-gray-900">Successful!</h3>
		<div class="mt-2 px-7 py-3">
			<p class="text-sm text-gray-600">
Thank you! Email has been successfully Sent			</p>
		</div>
		<div class="items-center px-4 py-3">
			<button
				id="ok-btn"
				class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={()=>setShowModal(false)}
			>
				OK
			</button>
      </div>
		</div>
	</div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
      <div
        className="bg-contain  mx-10"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-bold mb-4  text-center">Contact Us</h1>
          <form ref={formRef}           onSubmit={handleSubmit}
 className="flex flex-col w-full max-w-md">
            <label htmlFor="name" 
            className="text-lg mb-2"
            name='name'
            value={form.name}
            onChange={handleChange}
            required
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              className=" bg-gray-200 text-black rounded-lg mb-4 py-4 px-4"
              name='email'
              value={form.email}
              required
              onChange={handleChange}
            />

            <label htmlFor="email" className="text-lg mb-2">
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className=" bg-gray-200 text-black rounded-lg mb-4 py-4 px-4"
            />

            <label htmlFor="message" className="text-lg mb-2">
              Message:
            </label>
            <textarea
              id="message"
              required
              name='message'
              value={form.message}
              onChange={handleChange}
              className=" bg-gray-200 text-black rounded-lg mb-4 py-4 px-4"
            ></textarea>

            <button disabled={loading} className="bg-blue-500 text-white font-bold py-2 px-1 rounded-sm hover:bg-green-700 transition-colors duration-300">
              {!loading?"Submit" : <><div aria-label="Loading..." role="status">
  <svg class="h-6 mx-auto text-center w-6 animate-spin" viewBox="3 3 18 18">
    <path
      class="fill-gray-200"
      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
    <path
      class="fill-gray-800"
      d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
  </svg>
</div></>}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col mt-10  justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <h1 className="lg:text-[2.5rem]  font-bold px-3 text-[1.4rem]  sm:text-[1.5rem] text-center  text-white">
            Build your dream project with us
          </h1>
        </div>
        <div className=" mx-10 w-1/2 lg:gap-10 sm:gap-2 bg-gray-2a00 flex lg:flex-row flex-col items-center justify-center">
          <div className="w-50 mt-8">
            <CircularProgressbar
              value={75}
              text={`${20}+`}
              strokeWidth={5}
              className="font-bold"
              styles={buildStyles({
                textSize: "20px",
                textColor: "white",
                trailColor: "hite",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem] text-white mt-2">
              Completed Projects
            </p>
          </div>

          <div className="w-50 mt-8">
            <CircularProgressbar
              value={50}
              text={`${10}+`}
              strokeWidth={5}
              className="font-bold"
              styles={buildStyles({
                textSize: "20px",
                textColor: "white",
                trailColor: "hite",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem] text-white">
              Ongoing Projects
            </p>
          </div>

          <div className="w-50 mt-8">
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              className="font-bold"
              strokeWidth={5}
              styles={buildStyles({
                textSize: "20px",
                textColor: "white",
                trailColor: "white",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem]  text-white">
              Satisfied Clients
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-7 text-lg flex-wrap justify-center items-center mt-10 text-gray-100 font-semibold  ">
          
     
          <a className=" ">
          <FiPhone/>+971 4 3889814{" "}
          </a>
          <p>
          <AiOutlineWhatsApp/>+971505894120{" "}
          </p>
          <a><HiOutlineMail/>sonbola.contracting@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
