import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
