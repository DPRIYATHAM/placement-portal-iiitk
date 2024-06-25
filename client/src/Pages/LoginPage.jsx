import React from "react";
import Navbar from "../components/Navbar";
import { login_img ,google} from "../assets";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto flex flex-row items-center justify-center h-full">
          {/* Left Side (Form) */}

          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-6 text-black font-ubuntu">
              Welcome Back
            </h2>
            <form className="flex flex-col h-full justify-between">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-custom-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
              <button
              className="flex items-center bg-white border border-gray-300 shadow-sm rounded-md py-2 px-4 text-gray-600 font-bold focus:outline-none focus:shadow-outline"
              type="button"
            >
              <img src={google} className="w-5 h-5 mr-2" alt="Google Icon" />
              Continue with Google
            </button>
              </div>
              <div className="text-center">
                <a
                  className="text-sm text-custom-red hover:text-gray-800 font-ubuntu font-normal"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>

          {/* Right Side (Image) */}
          <div className="w-3/5 hidden lg:block">
            <img
              src={login_img}
              alt="Login illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
