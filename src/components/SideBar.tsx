import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const SideBar = ({ show, setShow }: Props) => {
  const location = window.location;
  return (
    <Drawer anchor="right" open={show} onClose={() => setShow(false)}>
      <div className="flex flex-col p-10 text-lg items-center">
        <Link
          className={
            location.pathname === "/"
              ? "navBarItemHover text-primary mb-5"
              : "navBarItemHover mb-5"
          }
          to={`/`}
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === "/skills"
              ? "navBarItemHover text-primary mb-5"
              : "navBarItemHover mb-5"
          }
          to={`/skills`}
        >
          Skills
        </Link>
        <Link
          className={
            location.pathname === "/projects"
              ? "navBarItemHover text-primary mb-5"
              : "navBarItemHover mb-5"
          }
          to={`/projects`}
        >
          Projects
        </Link>
        <Link
          className={
            location.pathname === "/contact"
              ? "navBarItemHover text-primary mb-5"
              : "navBarItemHover mb-5"
          }
          to={`/contact`}
        >
          Contact
        </Link>
      </div>
    </Drawer>
  );
};

export default SideBar;
