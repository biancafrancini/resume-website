import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";

import "./style/index.css";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
