import React from "react";
import Html from "../images/html.png";
import Css from "../images/css.png";
import ReactImg from "../images/react.png";
import nextjs from "../images/nextjs.png";
import javascript from "../images/javascript.png";
import tailwind from "../images/tailwind.png";
import github from "../images/github.png";
import firebase from "../images/firebase.png";
import cloud from "../images/cloud.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "TypeScript & JavaScript ",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: ReactImg,
      title: "React.js & React Native",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: nextjs,
      title: "Next Js",
      style: "shadow-gray-300",
    },
    {
      id: 4,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: Css,
      style: "shadow-blue-500",
      title: "CSS",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 7,
      src: cloud,
      title: "Google Cloud",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6"> These are the technologies I have worked with</p>
        </div>

        <div className="grid sm:grid-cols-2  text-center w-full md:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="toolsLogo" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
