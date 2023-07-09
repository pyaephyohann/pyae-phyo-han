import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Skills from "./Skills";
import Projects from "./Projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/skills" Component={Skills} />
        <Route path="/projects" Component={Projects} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
