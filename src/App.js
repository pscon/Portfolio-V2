import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import EPloader from "./images/ep.png";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";

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
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
