import { useState } from "react";
import SignUpImg from "../assets/pexels-plann-2999237-4549416_977113_CS-3021.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emialError, setEmailError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function ErrorMessage() {
    return <p className="text-xs text-red-600">This field is required</p>;
  }

  function InvalidEmailMessage() {
    return <p className="text-xs text-red-600">Invalid email</p>;
  }

  function Login() {
    if (!fullname) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (email.includes("@")) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  return (
    <div className="w-full h-fit justify-center items-center flex">
      <Navbar />
      <div className="flex flex-row mt-[90px] justify-between gap-[100px] items-center w-[80%]">
        <div className="md:w-[50%] w-full mt-6 md:mt-0 flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl">Create your account</h1>
            <p className="text-sm">Please fill in your details</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              {nameError && <ErrorMessage />}
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="Full name"
                className="border bg-transparent border-gray-900 w-full outline-none py-3 px-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col w-full gap-1">
              {usernameError && <ErrorMessage />}

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="border bg-transparent border-gray-900  outline-none py-3 px-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              {emialError && <ErrorMessage />}
              {invalidEmail && <invalidEmailMessage />}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              {passwordError && <ErrorMessage />}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              {passwordError && <ErrorMessage />}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Confirm password"
                className="border bg-transparent border-gray-900 outline-none py-3 px-2 rounded-lg"
              />
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
            onClick={Login}
            className="bg-blue-800 py-3 rounded-lg text-white hover:bg-blue-500 transition-all duration-200"
          >
            <Link to="/">Sign up</Link>
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
      </div>
    </div>
  );
}
