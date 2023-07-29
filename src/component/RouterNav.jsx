import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function RouterNav() {
  const [nav, setNav] = useState(false);
  const links = [{ id: 1, link: "home" }];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 ">
      <div>
        <Link to="/">
          <h1 className="font-signature text-4xl ml-2 cursor-pointer">
            Ekunola Paul
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link to="/"> {link}</Link>
          </li>
        ))}
        <a
          href="https://pscon.hashnode.dev/"
          target={"_blank"}
          rel="noreferrer"
        >
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">
            {" "}
            Blog{" "}
          </li>
        </a>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}{" "}
      </div>

      {/* show nav content when you click  */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ link, id }) => (
            <li
              // onClick={() => setNav(false)}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to="/">
                {link}
              </Link>
            </li>
          ))}
          <a
            href="https://pscon.hashnode.dev/"
            target={"_blank"}
            rel="noreferrer"
          >
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {" "}
              Blog{" "}
            </li>
          </a>
        </ul>
      )}
    </div>
  );
}

export default RouterNav;
