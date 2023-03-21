import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

import "./style/index.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
