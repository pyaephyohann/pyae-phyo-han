import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SideBar from "./SideBar";
import { useState } from "react";
import { motion } from "framer-motion";

const navBarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};

const navBarItemsVariants = {
  hover: {
    scale: 1.5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const NavBar = () => {
  const location = window.location;

  const [show, setShow] = useState(false);

  return (
    <motion.div
      variants={navBarVariants}
      initial="hidden"
      animate="visible"
      className="flex py-5 bg-secondary-200 items-center justify-between"
    >
      <div className="text-primary text-4xl font-title w-3/12 text-center cursor-pointer select-none">
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
          <motion.div
            variants={navBarItemsVariants}
            whileHover="hover"
            className={
              location.pathname === "/" ? "border-b-2 border-white pb-1" : ""
            }
          >
            <Link to={`/`}>Home</Link>
          </motion.div>

          <motion.div
            variants={navBarItemsVariants}
            whileHover="hover"
            className={
              location.pathname === "/projects"
                ? "border-b-2 border-white pb-1"
                : ""
            }
          >
            <Link to={`/projects`}>Projects</Link>
          </motion.div>
          <motion.div
            variants={navBarItemsVariants}
            whileHover="hover"
            className={
              location.pathname === "/contact"
                ? "border-b-2 border-white pb-1"
                : ""
            }
          >
            <Link to={`/contact`}>Contact</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
