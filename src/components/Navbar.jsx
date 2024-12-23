import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import Logo from "../assets/fslogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((s) => !s);
  }
  return (
    <div
      className="
       flex w-full h-fit top-0 justify-center py-0 z-50 text-black fixed font-ralewaay bg-[#2d4a53]"
    >
      <div className="w-[90%] lg:w-[85%] h-fit flex flex-row justify-between items-center">
        <div className="w-fit">
          <img src={Logo} alt="" className="md:w-[100px] w-[50px]" />
        </div>
        <nav className="flex z-50">
          <ul
            className={`${
              isOpen ? "top-0" : "top-[-380%] shadow-none"
            } flex md:flex-row md:w-fit w-full md:bg-transparent bg-[#2d4a53] left-0 flex-col md:gap-8 gap-4 top-0 text-sm md:static absolute transition-all duration-500 h-fit md:font-bold font-normal bg-primary-color z-50 lg:pl-60 md:pl-0 px-4 py-5 mt-5 md:pt-0 md:shadow-none shadow-xl select-none
               `}
          >
            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-green-300 cursor-pointer"
            >
              <Link to="/">Home</Link>
            </li>

            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-green-300 cursor-pointer"
            >
              About Us
            </li>

            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-green-300 cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-green-300 cursor-pointer"
            >
              <Link to="/SignUp"> SignOut</Link>
            </li>
          </ul>
        </nav>
        {isOpen ? (
          <FaXmark
            className="md:hidden flex z-50 font-bold text-red-500"
            onClick={handleIsOpen}
          />
        ) : (
          <RxHamburgerMenu
            className="md:hidden flex z-50 font-bold text-white"
            onClick={handleIsOpen}
          />
        )}
      </div>
    </div>
  );
}
