import { Carousel } from "antd";
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

export function ReviewSection() {
  return (
    <div className="flex w-full items-center md:justify-start justify-center relative flex-col h-[450px] md:h-fit gap-4">
      <h1 className="font-bold text-xl md:text-lg">
        Here's what our client say about us:
      </h1>
      <div className="w-full justify-center  h-fit md:h-[450px]">
        <Carousel dots={false} autoplay>
          {reviewData.map((item, i) => (
            <Review key={i} item={item} />
          ))}
        </Carousel>
        <FaQuoteRight
          size={30}
          className="text-black top-8 md:flex hidden right-[250px] absolute"
        />
      </div>
    </div>
  );
}

function Review({ item }) {
  return (
    <li className="w-[83%] md:w-[60%] mt-[5%] ml-10 md:ml-[20%] h-[300px] flex flex-col justify-center items-center gap-2 md:gap-6 text-white bg-[#222140] p-5 rounded-lg">
      <p>{item.name}</p>
      <p className="text-sm md:text-lg text-center">{item.testimony}</p>
      <p className="text-sm">{item.title}</p>
    </li>
  );
}

const reviewData = [
  {
    name: "john mercy",
    title: "engineer",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque",
  },
  {
    name: "john mercy",
    title: "engineer",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque",
  },
  {
    name: "john mercy",
    title: "engineer",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque",
  },
  {
    name: "john mercy",
    title: "engineer",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti commodi perspiciatis tenetur expedita possimus sapiente eos, voluptatem similique eaque",
  },
];
