import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SideBar from "./SideBar";
import { useState } from "react";
import { motion } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Button } from "@mui/material";

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
      className="flex py-5 bg-secondary-200 items-center justify-between md:justify-around"
    >
      <div className="text-primary ml-[2rem] md:ml-[0] text-4xl font-title cursor-pointer select-none">
        <Link to={`/`}>Pyae</Link>
      </div>
      <SideBar show={show} setShow={setShow} />
      <div
        onClick={() => setShow(true)}
        className="block md:hidden mr-[2rem] md:mr-[0] text-white cursor-pointer"
      >
        <MenuSharpIcon fontSize="large" />
      </div>
      <div className="w-[50%] hidden md:block">
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
      <div className="hidden md:block">
        <a href="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/myresume.pdf?alt=media&token=d050ecd6-f1f3-4181-8e66-16675728fe0a">
          <Button
            sx={{ bgcolor: "#00DFA2", ":hover": { bgcolor: "#00DFA2" } }}
            variant="contained"
            startIcon={<CloudDownloadIcon />}
          >
            Download CV
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
