import React from "react";
import MovieImg from "../images/movie.jpeg";
import learning from "../images/learning.jpeg";
import googleClone from "../images/googleClone.jpeg";
import realestate from "../images/bami.jpeg";
import dashboard from "../images/dashboard.jpeg";
import foodPalace from "../images/foodpalace.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: googleClone,
      about:
        "A web Application similar to google, where you can search and surf the internet, view pictures, videos and news about your search topic...",
      projectName: "Google Clone",
      url: "https://fastidious-belekoy-d1d97f.netlify.app/search",
      github: "https://github.com/pscon/Google-Clone",
    },
    {
      id: 2,
      src: dashboard,
      about:
        "The Dashboard is a visual display of all of your data. The dashboard include charts or graphs to visualize the numbers.",
      projectName: "Dashboard",
      url: "https://cute-bonbon-7ba896.netlify.app/",
      github: "https://github.com/pscon/Admin-Dashboard",
    },
    {
      id: 3,
      src: MovieImg,
      about:
        "A web Application similar to Netflix, where you can search for movies, view picture, year, and name of the movie.",
      projectName: "Movie Land",
      url: "https://vermillion-fairy-01c967.netlify.app/",
      github: "https://github.com/pscon/Movie-App",
    },
    {
      id: 4,
      src: learning,
      about:
        "Design Code is a web Application that allows users you to buy and watch tutorial videos on Frontend Development with tools such as: React.js, Styled Components, Firebase e.t.c",
      projectName: "Design Code ",
      url: "https://react-learning-application.netlify.app/",
      github: "https://github.com/pscon/Gatsby-React-LearningApp",
    },
    {
      id: 5,
      src: foodPalace,
      about:
        "Food Palace is a Resturant Web application that shows the various food menu available for Order",
      projectName: "Food Palace",
      url: "https://food-palace-sh.netlify.app/",
      github: "https://github.com/pscon/food-palace-resturant",
    },
    {
      id: 6,
      src: realestate,
      about:
        "The project ‘Bami consultant’ is a real estate related website made using HTML and CSS for clients to get to know about what the company is about and their services.",
      projectName: "Bami Estate",
      url: "https://bamiconsultant.netlify.app/",
      github: "https://github.com/pscon/Bami-Real-Estate",
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
      </div>
    </div>
  );
};

export default Portfolio;
