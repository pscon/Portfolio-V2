import React from "react";
import MovieImg from "../images/movie.jpeg";
import learning from "../images/learning.jpeg";
import googleClone from "../images/googleClone.jpeg";
import realestate from "../images/bami.jpeg";
import dashboard from "../images/dashboard.jpeg";
import evogym from "../images/evogym.png";
import foodPalace from "../images/foodpalace.jpeg";
import scholarship from "../images/scholarship.PNG";
import countrr from "../images/countrr.PNG";
import careF from "../images/careF.png";
import RouterNav from "../component/RouterNav";
import Footer from "../component/Footer";
import movix from "../images/movix.png";
import Konnectin from "../images/konnectin.png";
import gwebsite from "../images/gWebsite.svg";
import mobihealth from "../images/mobihealth.png";
import gdashboard from "../images/dashboard.svg";

const AllProjects = () => {
  const portfolios = [
    {
      id: 12,
      src: mobihealth,
      about: [
        "Mobihealth connects patients with top doctors globally, offering 24/7 video consultations, in-app chat, digital prescriptions, and medicine ordering, all in one secure, easy-to-use platform.",
        <br />,
        <br />,
        "Developed using Next.js, TypeScript, WebSocket, Agora, Redux",
      ],

      projectName: "Mobihealth Telemedicine App",
      url: "https://mobihealthinternational.com",
      github: "#",
    },
    {
      id: 13,
      src: gwebsite,
      about: [
        "GoNomad makes it easy to launch a US business, get paid, and stay compliant. Enjoy 24-hour formation, global banking and invoicing, tax filings, and dedicated support.",
        <br />,
        <br />,
        " Developed with tools such as React.js, Tailwind CSS, and other cutting-edge tools.",
      ],

      projectName: "GoNomad",
      url: "https://gonomadhq.com/",
      github: "#",
    },
    {
      id: 14,
      src: gdashboard,
      about: [
        "The GoNomad web app simplifies the process of starting and managing a US, UK and CANADA business. It features a user-friendly interface for global banking, invoicing, tax filings, and provides dedicated support. The web app ensures compliance and efficiency with 24-hour formation and other services.",
        <br />,
        "Developed using JavaScript, React.js, Redux Toolkit, and Python.",
      ],

      projectName: "GoNomad Web App",
      url: "https://start.gonomadhq.com/",
      github: "#",
    },
    {
      id: 15,
      src: Konnectin,
      about: [
        "Konectin is a platform dedicated to helping individuals land their dream jobs by connecting them with recruiters who value their experience. As a passionate contributor, I played a pivotal role in the development of Konectin as a volunteer.",
        <br />,
        "Developed with tools such as: React.js, TypeScript, Redux Toolkit, and other cutting-edge tools.",
      ],

      projectName: "Konectin Inc",
      url: "https://konectin.org/",
      github: "#",
    },
    {
      id: 1,
      src: scholarship,
      about: [
        "ScholarshipIQ is a web app that connects African students with admission and scholarship opportunities, making it a powerful and efficient tool for promoting equitable access to educational opportunities.",
        <br />,
        "Development with tools such as: React.js, PHP/Laravel backend, and MySQL database.",
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
      src: movix,
      about: [
        "Pscon-Movix is a personalized movie and TV show recommendation web application that provides users with detailed information, thrilling trailers, and insightful reviews.  ",
        <br />,
        "Developed using the latest technologies such as: React.js, JavaScript, redux-toolkit and Tailwind CSS",
      ],
      projectName: "Pscon-Movix",
      url: "https://pscon-movie-app.vercel.app/",
      github: "https://github.com/pscon/Pscon-Movie-App",
    },
    {
      id: 4,
      src: evogym,
      about: [
        "Evogym presents a state-of-the-art web application that delivers unrivaled training fitness classes. Experience the transformative power of our platform as you work towards achieving the body shape of your dreams. ",
        <br />,
        "Developed using the latest technologies such as: React.js, TypeScript, Tailwind CSS.",
      ],
      projectName: "Evo Gym",
      url: "https://gymevo.netlify.app",
      github: "https://github.com/pscon/gym-app-typescript",
    },
    {
      id: 5,
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
      id: 6,
      src: countrr,
      about:
        "The 'Counter App' is a versatile application with a custom hook that includes increment, decrement, reset, and setValue functions. It uses the useReducer hook and offers an interactive UI, a page to test error boundary and SEO, and a 404 error page.",
      projectName: "Counter App",
      url: "https://ekunolapaul-altschool.netlify.app",
      github: "https://github.com/pscon/AltSchool-Exam",
    },

    {
      id: 7,
      src: MovieImg,
      about:
        "A web Application similar to Netflix, where you can search for movies, view picture, year, and name of the movie.",
      projectName: "Movie Land",
      url: "https://vermillion-fairy-01c967.netlify.app/",
      github: "https://github.com/pscon/Movie-App",
    },
    {
      id: 8,
      src: learning,
      about:
        "Design Code is a web Application that allows users you to buy and watch tutorial videos on Frontend Development with tools such as: React.js, Styled Components, Firebase e.t.c",
      projectName: "Design Code ",
      url: "https://react-learning-application.netlify.app/",
      github: "https://github.com/pscon/Gatsby-React-LearningApp",
    },
    {
      id: 9,
      src: foodPalace,
      about:
        "Food Palace is a Resturant Web application that shows the various food menu available for Order",
      projectName: "Food Palace",
      url: "https://food-palace-sh.netlify.app/",
      github: "https://github.com/pscon/food-palace-resturant",
    },

    {
      id: 10,
      src: dashboard,
      about:
        "The Dashboard is a visual display of all of your data. The dashboard include charts or graphs to visualize the numbers.",
      projectName: "Dashboard",
      url: "https://cute-bonbon-7ba896.netlify.app/",
      github: "https://github.com/pscon/Admin-Dashboard",
    },
    {
      id: 11,
      src: googleClone,
      about:
        "A web Application similar to google, where you can search and surf the internet, view pictures, videos and news about your search topic...",
      projectName: "Google Clone",
      url: "https://fastidious-belekoy-d1d97f.netlify.app/search",
      github: "https://github.com/pscon/Google-Clone",
    },
  ];

  return (
    <>
      <RouterNav />
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work here</p>
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
      <Footer />
    </>
  );
};

export default AllProjects;
