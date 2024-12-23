import { Carousel } from "antd";

const Testimonials = [
  {
    name: "Steven John",
    job: "Social media manager",
    testimonial:
      "I had an amazing experience with Patmos studios. From the moment I booked my session online, everything was smooth and hassle-free. The website was user-friendly, and I appreciated the detailed information about the different packages available. The photographer was fantastic, making the entire session fun and relaxed. The final images were delivered quickly and exceeded my expectations. I couldn’t be happier with the service and the beautiful photos. Thank you, Patmos Studios",
  },
  {
    name: "Jessica Mark",
    job: "Enterprenuer",
    testimonial:
      "Booking a session with Patmos studios was incredibly easy and convenient. The online booking system allowed me to choose a time that fit perfectly into my schedule. The confirmation email was prompt, and the reminders ensured I didn’t forget my appointment. On the day of the shoot, the team was professional and made me feel completely at ease. The photos turned out stunning, capturing exactly what I had envisioned. I highly recommend Patmos studios for anyone looking for a seamless and enjoyable photography experience.",
  },
  {
    name: "Kelvin James",
    job: "Drone Photography",
    testimonial:
      "I recently booked a family photo session with Patmos Studios, and I couldn’t be more pleased with the entire process. The online booking system was straightforward, and I loved that I could see all available time slots and choose the one that worked best for us. The studio sent timely reminders, which was a nice touch. On the day of the shoot, the photographer was patient and great with our kids, making the session enjoyable for everyone. The photos were absolutely gorgeous, capturing precious moments we’ll cherish forever. Highly recommend Patmos studio",
  },
];

export default function Reviews() {
  const contentStyle = {
    height: "100%",
    textAlign: "start",
    background: "transparent",
  };

  return (
    <div className="flex justify-center md:h-[500px] mt-[40px] mb-[40px]">
      <div className="w-[90%] flex flex-col gap-12">
        <span className="text-center flex flex-col gap-0 md:gap-2">
          <h1 className="text-lg md:text-3xl font-semibold">
            What Our Clients Say
          </h1>
          <p className="text-xs text-center">
            Read testimonials from our satisfied customers and discover <br />{" "}
            the impact we’ve made together{" "}
          </p>
        </span>
        <div className=" gap-5 block md:hidden">
          <Carousel
            draggable={true}
            arrows={true}
            dots={true}
            autoplay={false}
            style={contentStyle}
            fade={false}
          >
            {Testimonials.map((testimonial) => (
              <TestimonialMobile
                testimonial={testimonial}
                key={testimonial.name}
              />
            ))}
          </Carousel>
        </div>

        <div className="md:flex hidden flex-row gap-5 justify-center items-center">
          {Testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonial({ testimonial }) {
  return (
    <div
      className={`${
        testimonial.name === "Jessica Mark" ? "h-[325px]" : "h-[278px]"
      } bg-[#F9F9F9] p-5 flex flex-col gap-4 justify-center select-none `}
    >
      <div className="flex flex-row gap-3 items-center">
        <img
          src={testimonial.image}
          alt=""
          className="w-[50px] h-[50px] select-none"
        />
        <div className="flex flex-col gap-1 text-xs">
          <h1 className="font-bold select-none">{testimonial.name}</h1>
          <p className="select-none">{testimonial.job}</p>
        </div>
      </div>
      <p className="text-xs text-justify select-none">
        {testimonial.testimonial}
      </p>
    </div>
  );
}

function TestimonialMobile({ testimonial }) {
  return (
    <div
      className={`${
        testimonial.name === "Jessica Mark"
          ? "h-[325px] w-[300px]"
          : "h-[325px] w-[300px]"
      } bg-[#F9F9F9]  ml-3 p-5 flex flex-col gap-4 justify-center`}
    >
      <div className="flex flex-row gap-3 items-center">
        <img
          src={testimonial.image}
          alt=""
          className="w-[50px] h-[50px] select-none"
        />
        <div className="flex flex-col gap-1 text-xs">
          <h1 className="font-bold select-none">{testimonial.name}</h1>
          <p className="select-none">{testimonial.job}</p>
        </div>
      </div>
      <p className="text-xs text-justify select-none">
        {testimonial.testimonial}
      </p>
    </div>
  );
}
