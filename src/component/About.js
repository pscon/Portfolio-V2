import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Hi, I am Ekunola Paul, I'm creative and passionate about web
          development. I taught myself HTML/CSS and JavaScript alongside my
          formal education, I believe in continually improving myself in all
          aspects of life. Skilled in React.js, Javascript, Ionic, Angular,
          Node.js.
        </p>

        <br />
        <p className="text-xl">
          When not working on a project or thinking about programming, I'm most
          likely watching Movies on Netflix, playing video games,or spending
          time with family and friends.
        </p>
      </div>
    </div>
  );
};

export default About;
