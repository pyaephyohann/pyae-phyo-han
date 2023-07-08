import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex py-5 bg-secondary-200 items-center justify-between">
      <div className="text-primary text-2xl w-3/12 text-center cursor-pointer select-none">
        <Link to={`/`}>Pyae</Link>
      </div>
      <div className="flex justify-evenly w-9/12 text-white text-lg">
        <Link className="navBarItemHover" to={`/home`}>
          Home
        </Link>
        <Link className="navBarItemHover" to={`about`}>
          About
        </Link>
        <Link className="navBarItemHover" to={`/projects`}>
          Projects
        </Link>
        <Link className="navBarItemHover" to={`/contact`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
