import React from "react";
import deploy from "../images/deploy.png";
import useReducer from "../images/useReducer.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      src: deploy,
      about: "Hosting React App On Firebase",
      date: "Oct 4, 2022",
      url: "https://pscon.hashnode.dev/hosting-react-app-on-firebase",
    },
    {
      id: 2,
      src: useReducer,
      about:
        "Implementing Counter App With useReducer: A Retrospective Technical Review.",
      date: "Jan 10, 2023      ",
      url: "https://pscon.hashnode.dev/implementing-counter-app-with-usereducer-a-retrospective-technical-review",
    },
  ];

  return (
    <div
      name="blog"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blog Posts{" "}
          </p>
          <p className="py-6">Check out some of my blog post here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {blogs.map(({ id, src, about, date, url }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative duration-200 hover:scale-105"
              style={{ height: "65vh" }}
            >
              <div>
                <img
                  src={src}
                  alt="projectImg"
                  className="rounded-md w-full duration-200 hover:scale-105"
                />
                <p className="text-xl py-2 font-semibold text-slate-400 px-4 inline border-b-4 border-gray-500">
                  {date}
                </p>
                <p className="px-4 py-3 text-lg font-bold ">
                  {" "}
                  <span className="text-slate-300">Title: </span> {about}
                </p>
              </div>
              <div className="text-center mt-8 flex items-center justify-center absolute bottom-0">
                <a href={url} target="_blank" rel="noreferrer">
                  <button className="w-full shadow-md shadow-gray-600 rounded-lg px-6 py-3 m-4 duration-200 hover:scale-105 ">
                    View Blog
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

export default Blog;
