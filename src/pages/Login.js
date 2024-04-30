import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, signUpProvider } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const HandelGoogle = async (e) => {
    e.preventDefault();
    try {
      await signUpProvider();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register flex justify-center items-center h-screen">
      <div className="register-container py-12 flex flex-col justify-center items-center lg:flex-row ">
        <div className="register-bg rounded-tl-lg rounded-bl-lg bg-gray-900 lg:mb-0 "></div>
        <div className="register-form rounded-tr-lg rounded-br-lg lg:w-96 flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold mb-4 mx-3">Sign in</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full items-start"
          >
            <label
              htmlFor="email"
              className="text-base font-medium text-left mb-2 mx-12"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="border border-gray-400 p-2 mb-4 w-64 rounded mx-11 "
            />
            <label
              htmlFor="password"
              className="text-base font-medium text-left mb-2 mx-12"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="border border-gray-400 p-2 mb-4 w-64 rounded mx-11"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 mx-11 text-white font-bold py-2 px-4 rounded-lg mb-2 w-64"
            >
              Sign in
            </button>
          </form>
          <hr className="w-full max-w-md my-3 border-gray-400 relative" />

          <form className="flex justify-center my-1 w-full">
            <button
              type="submit"
              onClick={HandelGoogle}
              className="px-4 py-2 border flex gap-2 mx-11 border-slate-200 rounded-lg w-64 text-center hover:shadow transition duration-150"
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Continue with Google</span>
            </button>
          </form>
          <p className="text-sm font-medium text-left my-2  mx-12">
            Don't have an account yet?{" "}
            <NavLink to="/Register" key="signup-link">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
