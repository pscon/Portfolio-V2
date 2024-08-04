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
          Hi, I am Ekunola Paul, a{" "}
          <span>
            <a
              href="https://github.com/pscon"
              target={"_blank"}
              rel=" noreferrer"
              className="underline "
            >
              Frontend Developer&nbsp;
            </a>
          </span>
          and{" "}
          <a
            href="https://pscon.hashnode.dev/"
            target={"_blank"}
            rel=" noreferrer"
            className="underline "
          >
            Technical Writer{" "}
          </a>{" "}
          based in Lagos, Nigeria who enjoys building products that leverage the
          internet. I am a highly resourceful and focused software engineer with
          experience in building web and mobile applications. I excel and I'm
          invested in every stage of the life cycle of software development,
          including design implementation, coding, debugging, testing, and
          maintenance.
        </p>
        <br />
        <p className="text-xl">
          Skilled in: React.js, Next.js, JavaScript, TypeScript, React-Native,
          Redux, Redux Toolkit. I am also a strong team player with excellent
          communication skills and a passion for learning new technologies.
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
