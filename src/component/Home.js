import React from "react";
import ProfileImg from "../images/profileImg.jpeg";
import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi, my name is
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            EKUNOLA PAUL
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Software Developer.
          </h2>

          <p className="text-gray-400 py-4 maxw-md">
            I have 1 year of experience building and designing Software.
            Currently, I love to work on web application using technologies like
            javascript, React, Tailwind, and Firebase
          </p>
          <div className="flex items-center justify-center gap-10"> 
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">

              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <HiOutlineArrowRight className="ml-1"/>
              </span>
            </button>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">

              Resume
              <span className="group-hover:rotate-90 duration-300 ">
                <HiOutlineArrowRight  className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={ProfileImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
