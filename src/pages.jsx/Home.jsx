import Navbar from "../components/Navbar";
import heroImage from "../assets/ei_1734970977728-removebg-preview.png";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center">
      <Navbar />
      <div className="w-[90%] flex flex-col-reverse md:flex-row gap-5  md:justify-between justify-center items-center">
        <div className="flex flex-col gap-4 w-full md:w-[45%] h-fit">
          <h1 className="md:text-4xl font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h1>
          <p className="text-xl text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            quos aliquam excepturi, reprehenderit ratione praesentium quis
            perspiciatis eum veniam voluptate tenetur iste dolore, sed quidem.
          </p>
          <button className="bg-[#2d4a53] mt-4 w-fit rounded-md shadow-xl px-8 py-2 text-white hover:bg-[#69818d] duration-150 transition-all">
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
