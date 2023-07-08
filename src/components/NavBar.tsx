import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SideBar from "./SideBar";
import { useState } from "react";

const NavBar = () => {
  const location = window.location;

  const [show, setShow] = useState(false);

  return (
    <div className="flex py-5 md:bg-secondary-200 items-center justify-between">
      <div className="text-primary text-2xl w-3/12 text-center cursor-pointer select-none">
        <Link to={`/`}>Pyae</Link>
      </div>
      <SideBar show={show} setShow={setShow} />
      <div
        onClick={() => setShow(true)}
        className="block md:hidden text-white mr-10 cursor-pointer "
      >
        <MenuSharpIcon fontSize="large" />
      </div>
      <div className="w-9/12 hidden md:block">
        <div className="flex justify-evenly  text-white text-lg">
          <Link
            className={
              location.pathname === "/"
                ? "navBarItemHover border-b-2 border-white pb-1"
                : "navBarItemHover"
            }
            to={`/`}
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/about"
                ? "navBarItemHover text-primary"
                : "navBarItemHover"
            }
            to={`about`}
          >
            About
          </Link>
          <Link
            className={
              location.pathname === "/projects"
                ? "navBarItemHover text-primary"
                : "navBarItemHover"
            }
            to={`/projects`}
          >
            Projects
          </Link>
          <Link
            className={
              location.pathname === "/contact"
                ? "navBarItemHover text-primary"
                : "navBarItemHover"
            }
            to={`/contact`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
