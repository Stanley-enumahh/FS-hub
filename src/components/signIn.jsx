import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.password);

    reset();
  };

  return (
    <div className="flex w-full h-screen items-start md:items-center justify-center bg-[#222140] ">
      <form
        className="flex relative flex-col p-5 md:p-24 bg-[#ebebeb] md:mt-0 mt-[70px] h-[500px] shadow-lg gap-[40px] md:w-[50%] w-[90%] rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <h1 className="font-bold">SIGN IN</h1>
        </div>
        <div className="flex flex-col gap-6 justify-start w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border bg-transparent border-gray-900 w-full outline-none py-3 px-2 rounded-md"
              {...register("email", { required: "email is required" })}
              type="email"
              id="email"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="border bg-transparent border-gray-900 w-full outline-none py-3 px-2 rounded-lg"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters",
                },
              })}
              type="password"
              id="password"
            />
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
          <button
            className="bg-[#2d54f4] py-5 rounded-lg text-white hover:opacity-55 transition-all duration-200"
            type="submit"
          >
            Sign in
          </button>
          <div className="w-full flex items-center justify-center">
            <p className="text-xs">
              Don't have an account?
              <span>
                <Link to="/Sign-Up"> Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
