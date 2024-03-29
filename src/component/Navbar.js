import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "skills" },
    { id: 3, link: "blog" },
    { id: 6, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-10">
      <div>
        <Link to="/">
          <h1 className="font-signature text-4xl ml-2 cursor-pointer">
            Ekunola Paul
          </h1>
        </Link>{" "}
      </div>

      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {" "}
              {link}
            </Link>
          </li>
        ))}
        {/* <a href="https://pscon.hashnode.dev/" target={"_blank"}>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">
            {" "}
            Blog{" "}
          </li>
        </a> */}
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
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          {/* <a href="https://pscon.hashnode.dev/" target={"_blank"}>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">
              {" "}
              Blog{" "}
            </li>
          </a> */}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
