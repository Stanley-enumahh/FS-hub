import SignUpImg from "../assets/pexels-plann-2999237-4549416_977113_CS-3021.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full h-fit justify-center items-center flex md:mt-[40px]">
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row mt-[90px] justify-between gap-[100px] items-center w-[80%]"
      >
        <div className="md:w-[50%] w-full mt-6 md:mt-0 flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl">Create your account</h1>
            <p className="text-sm">Please fill in your details</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <input
                {...register("name", { required: "name is required" })}
                type="text"
                placeholder="Full name"
                className="border bg-transparent border-gray-900 w-full outline-none py-3 px-2 rounded-lg"
              />
              <p className="text-red-500">
                {errors.name && errors.name.message}
              </p>
            </div>

            <div className="flex flex-col w-full gap-1">
              <input
                {...register("username", { required: "username is required" })}
                type="text"
                placeholder="Username"
                className="border bg-transparent border-gray-900  outline-none py-3 px-2 rounded-lg"
              />
              <p className="text-red-500">
                {errors.username && errors.username.message}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                {...register("email", { required: "email is required" })}
                type="email"
                placeholder="Email"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
              <p className="text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters",
                  },
                })}
                type="password"
                placeholder="Password"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
              <p className="text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") ||
                    "The passwords do not match",
                })}
                type="password"
                placeholder="Confirm password"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
              <p className="text-red-500">
                {errors.confirmPassword && errors.confirmPassword.message}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input type="checkbox" name="" id="" className="cursor-pointer" />
            <label htmlFor="">
              {" "}
              I have read and agreed with{" "}
              <span className="text-blue-800 underline font-bold">
                Terms of service
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-800 py-3 rounded-lg text-white hover:bg-blue-500 transition-all duration-200"
          >
            Sign up
          </button>
          <div className="flex justify-center flex-row gap-3 mb-[50px]">
            <p className="text-xs">
              Have an account?{" "}
              <span className="text-blue-900 font-bold underline">Sign in</span>
            </p>
          </div>
        </div>

        <div className="w-[35%] h-[400px] hidden md:flex">
          <img
            src={SignUpImg}
            alt="hand holding a phone"
            className="w-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </form>
    </div>
  );
}
