import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsStackOverflow } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/paul-ekunola",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/pscon",
    },
    // {
    //   id: 3,
    //   child: (
    //     <>
    //       Twitter <BsTwitter size={30} />
    //     </>
    //   ),
    //   href: "https://twitter.com/PSCON3",
    // },
    {
      id: 4,
      child: (
        <>
          S-Overflow <BsStackOverflow size={30} />
        </>
      ),
      href: "https://stackoverflow.com/users/16994714/paul",
    },
    {
      id: 5,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ekunolapaul@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://www.canva.com/design/DAGx_oJO3fk/gm7d6FcqCAo9YSjMkIszgw/view?utm_content=DAGx_oJO3fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9c1b03e82a",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              rel="noreferrer"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
