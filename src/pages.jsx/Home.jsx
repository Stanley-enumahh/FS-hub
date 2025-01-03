import Navbar from "../components/Navbar";
import heroImage from "../assets/ei_1734970977728-removebg-preview.png";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="w-full h-screen  flex justify-center">
      <Navbar />
      <div className="w-[85%] flex justify-center md:mb-0 mb-[50px] items-center">
        <div className="relative flex flex-col gap-5 w-full md:w-[80%] justify-center items-center h-fit">
          <h1 className="md:text-7xl text-center font-bold text-4xl">
            Boost social <br /> reach for your brand
          </h1>
          <p className="md:text-lg text-sm text-center">
            {" "}
            Unlock the power of social media! Boost your online presence and
            grow your audience. Discover the secret to maximazing your social
            media potentials with{" "}
            <span className="font-bold text-white px-3 py-1 rounded-lg bg-[#2d54f4]">
              FS Hub,
            </span>
            taking your brand to a whole new level!
          </p>
          <button className="bg-[#222140] w-fit rounded-md shadow-xl px-8 py-3 text-white hover:bg-opacity-85 md:mt-5 mt-8 duration-150 transition-all">
            Get started
          </button>

          <span className=" bg-[#222140] flex justify-center items-center rotate-12 rounded-lg shadow-lg text-white w-[40px] h-[40px] bottom-8 right-0 md:right-10 absolute">
            <FaXTwitter />
          </span>

          <span className="bg-[#e03616] flex justify-center items-center rotate-[-12deg] rounded-lg shadow-md text-white md:w-[60px] w-[40px] h-[40px] md:h-[60px] top-0 left-2 md:left-[100px] absolute">
            <RiInstagramFill size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}
