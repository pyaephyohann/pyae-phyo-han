import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Skills from "./Skills";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/skills" Component={Skills} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
