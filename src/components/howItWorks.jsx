export default function HowItWorks() {
  return (
    <div className="flex jusitfy-center items-center gap-8 flex-col w-full h-fit md:h-screen">
      <div className="flex flex-col gap-1 md:gap-2 text-center ">
        <h1 className="font-bold md:text-2xl text-2xl">
          How FSengage Hub works?
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-[80%] h-[80%]">
        <StepList />
      </div>
    </div>
  );
}

function StepList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-10 items-start md:mb-0 mb-[50px]">
      {Data.map((step) => (
        <Step key={step.no} step={step} />
      ))}
    </ul>
  );
}

function Step({ step }) {
  return (
    <li className="flex flex-row gap-4 px-3 w-full md:w-[350px] h-[150px] items-center hover:border-[#222140] hover:border rounded-md duration-200 cursor-pointer transition-all">
      <p
        className={`${
          step.bg
            ? "bg-[#222140] text-white"
            : "border  border-bg-[#222140] border-[#222140]"
        } px-3 py-1 rounded-full text-xs"
       `}
      >
        {step.no}
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">{step.title}</h1>
        <p className="text-xs">{step.info}</p>
      </div>
    </li>
  );
}

const Data = [
  {
    no: 1,
    title: "Create your Account",
    info: "Sign up by entering the required details, A new world awaits!",
    bg: true,
  },
  {
    no: 2,
    title: "Select services",
    info: "Take time to pick what you require, we have plenty of options to your liking",
  },
  {
    no: 3,
    title: "Paste URL",
    info: "Paste the URL of which account/post/website you’d like to boost with the SMM provider panel of FSengageHub",
    bg: true,
  },
  {
    no: 4,
    title: "Cross-check",
    info: "Re-check all the details given about the order.",
  },
  {
    no: 5,
    title: "Submit order",
    info: "If everything looks perfect, submit and watch the results",
    bg: true,
  },
];
