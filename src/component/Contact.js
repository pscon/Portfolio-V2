import React from "react";
import contactus from "../images/contact.png";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full p-4 text-white"
    >
      <div className="max-w-screen-xl mx-auto px-3 md:px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold h-full">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-600 bg-gray mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <img src={contactus} alt="man with laptop" className="rounded-xl" />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <a
                href="https://www.linkedin.com/in/ekunola-paul-42712b1aa"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
              </a>
              <a
                href="https://twitter.com/PSCON3"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=08112699079"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaWhatsapp size={25} />
                </div>
              </a>
              <a
                href="https://www.github.com/pscon"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
              </a>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 sm:w-1/3 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/a885bd3c-dfab-4b82-b6a2-8b25db456ca0"
                method="POST"
                className=" flex flex-col w-full md:w-4/5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
