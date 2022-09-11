import React from "react";

const Footer = ({ theme }) => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full p-4 text-white"
    >
      <p className="text-2xl shadow-sm text-center hover:text-3xl">
        Designed by{" "}
        <a
          href="https://www.linkedin.com/in/ekunola-paul-42712b1aa"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          pscon
        </a>
        <span role="img" aria-label="Developer">
          👨🏾‍💻
        </span>
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
