import { useEffect, useState } from "react";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import SocialLinks from "./component/SocialLinks";
import EPloader from "./images/ep.png";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="App">
          <div className="loader-demo">
            <img src={EPloader} alt="Star" className="star" />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <SocialLinks />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
