import React from "react";
import MovieImg from "../images/movie.jpeg";
import realestate from "../images/bami.jpeg";
import dashboard from "../images/dashboard.jpeg";
import evogym from "../images/evogym.png";
import careF from "../images/careF.png";
import scholarship from "../images/scholarship.PNG";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: scholarship,
      about: [
        "ScholarshipIQ is a web app that connects African students with admission and scholarship opportunities, making it a powerful and efficient tool for promoting equitable access to educational opportunities.",
        <br />,
        "Developed with tools such as: React.js, PHP/Laravel backend and MySQL database.",
      ],
      projectName: "ScholarshipIQ",
      url: "https://scholarship-iq.com",
      github: "#",
    },
    {
      id: 2,
      src: careF,
      about: [
        "Seamlessly locate the closest hospital to your location and effortlessly schedule appointments. Uncover your ideal healthcare solution: Locate the perfect hospital that meets your needs, anytime and anywhere!",
        <br />,
        "Developed using the latest technologies such as: Next.js, TypeScript, Firebase and Tailwind CSS",
      ],
      projectName: "PSCON Care Finder",
      url: "https://pscon-care-finder.vercel.app/",
      github: "https://github.com/pscon/Pscon-CareFinder",
    },
    {
      id: 3,
      src: evogym,
      about: [
        "Evogym presents a state-of-the-art web application that delivers unrivaled training fitness classes. Experience the transformation power of our platform as you work towards achieving the body shape of your dreams. ",
        <br />,
        "Developed using the latest technologies such as: React.js, TypeScript, Tailwind CSS.",
      ],
      projectName: "Evo Gym",
      url: "https://gymevo.netlify.app",
      github: "https://github.com/pscon/gym-app-typescript",
    },
    {
      id: 4,
      src: realestate,
      about: [
        "'Bami Consultant' is primarily designed to provide clients with a comprehensive understanding of the company's real estate services and its core values.",
        <br />,
        "Development with tools such as: HTML, CSS, Javascript.",
      ],
      projectName: "Bami Estate",
      url: "https://bamiconsultant.netlify.app/",
      github: "https://github.com/pscon/Bami-Real-Estate",
    },

    {
      id: 5,
      src: dashboard,
      about:
        "The Dashboard is a visual display of all of your data. The dashboard include charts or graphs to visualize the numbers.",
      projectName: "Dashboard",
      url: "https://cute-bonbon-7ba896.netlify.app/",
      github: "https://github.com/pscon/Admin-Dashboard",
    },
    {
      id: 6,
      src: MovieImg,
      about:
        "A web Application similar to Netflix, where you can search for movies, view picture, year, and name of the movie.",
      projectName: "Movie Land",
      url: "https://vermillion-fairy-01c967.netlify.app/",
      github: "https://github.com/pscon/Movie-App",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, about, projectName, url, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img
                src={src}
                alt="projectImg"
                className="rounded-md w-full duration-200 hover:scale-105"
              />
              <p className="text-xl py-2 font-bold px-4 inline border-b-4 border-gray-500">
                {projectName}
              </p>
              <p className="px-4 py-3 font-semibold "> {about}</p>
              <div className="flex items-center justify-center">
                <a href={url} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/projects">
            <button className="w-full shadow-md shadow-gray-400 rounded-lg px-6 py-3 m-6 duration-200 hover:scale-105  ">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
