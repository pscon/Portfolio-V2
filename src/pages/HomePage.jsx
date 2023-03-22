import React from "react";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Home from "../component/Home";
import Navbar from "../component/Navbar";
import Portfolio from "../component/Portfolio";
import Skills from "../component/Skills";
import SocialLinks from "../component/SocialLinks";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
