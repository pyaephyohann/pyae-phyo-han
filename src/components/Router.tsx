import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
