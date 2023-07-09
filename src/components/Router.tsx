import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/skills" Component={Skills} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
