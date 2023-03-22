import { useState } from "react";
import { Link } from "react-router-dom";

// export default function NavBar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="w-full bg-white shadow">
//             <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//                 <div>
//                     <div className="flex items-center justify-between py-3 md:py-5 md:block">
//                         <a href="javascript:void(0)">
//                             <h2 className="text-2xl font-bold">LOGO</h2>
//                         </a>
//                         <div className="md:hidden">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                             navbar ? "block" : "hidden"
//                         }`}
//                     >
//                         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Home</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Blog</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">About US</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Contact US</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Asad <span className="sm:block hidden">Shaikh</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, key) => {
            return (
              <li
                onClick={() => {
                  setActive(link.title);
                }}
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((link, key) => {
                return (
                  <li
                    key={link.id}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle)
                    }}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    }font-poppins font-medium cursor-pointer  text-[16px]`}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
