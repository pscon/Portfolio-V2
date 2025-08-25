import React from "react";
import goflex from "../images/goflex.png";
import careF from "../images/careF.png";
import scholarship from "../images/scholarship.PNG";
import { Link } from "react-router-dom";
import movix from "../images/movix.png";
import Konnectin from "../images/konnectin.png";
import gwebsite from "../images/gWebsite.svg";
import mobihealth from "../images/mobihealth.png";
import gdashboard from "../images/dashboard.svg";
import bhrave from "../images/bhrave.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: goflex,
      about: [
        "GoFlex enables professionals to easily collect global payments without the need to set up a company.",
        <br />,
        "One platform - multiple payment methods for your clients to pay; cards, digital wallets (Apple Pay, Google Pay, Amazon Pay), CashApp, instalments (get cash upfront), and bank debit.",
        <br />,
        "GoFlex is the ultimate payment gateway for solopreneurs, freelancers, creators, coaches, consultants, and agencies."
      ],
      projectName: "GoFlex",
      url: "https://trygoflex.com",
      github: "",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 8,
      src: bhrave,
      about: [
        "BHrave is an All-in-One RMM and Cybersecurity platform designed for Endpoint Protection, Monitoring, and Control.",
        <br />,
        "It provides lightweight, automated, and enterprise-grade tools that empower IT teams and businesses to secure and manage devices seamlessly from anywhere.",
      ],
      projectName: "BHrave",
      url: "https://bhrave.com/",
      github: "",
    },
    {
      id: 5,
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
      id: 6,
      src: scholarship,
      about: [
        "SkuleIQ is an AI-powered learning tutor that helps students master their subjects through interactive, step-by-step explanations and personalized guidance for all their learning needs.",
        <br />,
        "",
      ],
      projectName: "SkuleIQ",
      url: "https://app.skuleiq.com",
      github: "#",
    },
    {
      id: 7,
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
      id: 8,
      src: careF,
      about: [
        "Seamlessly locate the closest hospital to your location and effortlessly schedule appointments. Uncover your ideal healthcare solution: Locate the perfect hospital that meets your needs, anytime and anywhere!",
        <br />,
        "Developed using the latest technologies such as: Next.js, TypeScript, Firebase and Tailwind CSS",
      ],
      projectName: "Pscon Care Finder",
      url: "https://pscon-care-finder.vercel.app/",
      github: "https://github.com/pscon/Pscon-CareFinder",
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
              <p className="text-[13px] px-4 py-3 font-semibold "> {about}</p>
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
