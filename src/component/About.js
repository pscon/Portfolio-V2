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
        <p className=" text-xl mt-8">
          Hi, I'm Paul Ekunola, a{" "}
          <span>
            <a
              href="https://github.com/pscon"
              target={"_blank"}
              rel="noreferrer"
              className="underline "
            >
              Frontend Engineer&nbsp;
            </a>
          </span>
          and{" "}
          <a
            href="https://pscon.hashnode.dev/"
            target={"_blank"}
            rel="noreferrer"
            className="underline "
          >
            Technical Writer{" "}
          </a>{" "}
          based in Berlin, Germany. I enjoy building products that leverage the
          internet and make a difference, including AI-driven solutions where they add value.
          I'm a resourceful software engineer with experience building web and
          mobile applications end to end, from design and implementation through
          debugging, testing, and maintenance.
        </p>
        <br />
        <p className="text-xl">
          Skilled in: React.js, Next.js, TypeScript, JavaScript, Node.js,
          React Native, Redux, Redux Toolkit, and AI-driven solutions. I work
          well in cross-functional teams and keep my stack current with new tools
          and practices.
        </p>

        <br />
        <p className="text-xl">
          In my free time, I enjoy Netflix, video games, and spending time with
          loved ones.
        </p>
      </div>
    </div>
  );
};

export default About;
