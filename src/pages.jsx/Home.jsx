import Navbar from "../components/Navbar";
import heroImage from "../assets/ei_1734970977728-removebg-preview.png";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center">
      <Navbar />
      <div className="w-[90%] flex flex-col-reverse md:flex-row gap-5  md:justify-between justify-center items-center md:mt-0 mt-[60px]">
        <div className="flex flex-col gap-5 w-full md:w-[45%] h-fit">
          <h1 className="md:text-5xl font-bold text-2xl">
            Boost social <br /> reach for your brand
          </h1>
          <p className="md:text-xl text-lg">
            {" "}
            Unlock the power of social media! Boost your online presence and
            grow your audience. Discover the secret to maximazing your social
            media potentials with{" "}
            <span className="font-bold text-orange-700">FS Hub</span>, taking
            your brand to a whole new level!
          </p>
          <button className="bg-[#2d4a53] mt-5 w-fit rounded-md shadow-xl px-8 py-2 text-white hover:bg-[#69818d] duration-150 transition-all">
            Get started
          </button>
        </div>

        <div className=" flex w-full md:w-[60%] justify-center items-center  h-[40%] md:h-[90%]">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
