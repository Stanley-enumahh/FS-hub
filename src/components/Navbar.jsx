import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import Logo from "../assets/fslogo.png";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((s) => !s);
  }
  const handleSetActive = (to) => {
    // console.log(to);
    handleIsOpen();
  };
  return (
    <div
      className="
       flex w-full h-fit top-0 justify-center py-0 z-50 text-black fixed font-ralewaay bg-[#222140] items-center"
    >
      <div className="w-[90%] lg:w-[85%] h-fit flex flex-row justify-between items-center">
        <div className="w-fit">
          <img src={Logo} alt="" className="md:w-[100px] w-[70px]" />
        </div>
        <nav className="flex z-50 h-full items-center justify-center">
          <ul
            className={`${
              isOpen ? "top-0" : "top-[-300px]"
            }  md:w-fit] w-full left-0 md:text-start text-center md:bg-transparent bg-[#222140] duration-150 transition-all flex flex-col md:static absolute md:flex-row gap-3 md:py-0 py-12 md:gap-8
             
               `}
          >
            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-[#2d54f4] cursor-pointer"
            >
              <RouterLink to="/">Home</RouterLink>
            </li>

            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-[#2d54f4] cursor-pointer"
            >
              <RouterLink
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                About Us
              </RouterLink>
            </li>

            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-[#2d54f4] cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={handleIsOpen}
              className="md:hover:text-primary-color transition-all duration-150 text-white text-lg md:text-sm md:flex text-nowrap hover:text-[#2d54f4] cursor-pointer"
            >
              <RouterLink to="/Sign-in"> Sign in</RouterLink>
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
