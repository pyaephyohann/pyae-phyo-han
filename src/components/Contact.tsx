import { TextField } from "@mui/material";
import Layout from "./Layout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const rightVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const footerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};

const Contact = () => {
  return (
    <Layout>
      <div className="lg:flex lg:justify-evenly mt-16 mb-10">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-col"
        >
          <div>
            <img
              className="h-80 lg:h-96 rounded-2xl mx-auto"
              alt="address"
              src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/SmartSelect_20230709-163036_Maps.jpg?alt=media&token=40722aae-140c-415d-8cad-2d3b07d5aa27"
            />
          </div>
          <div className="mt-10 mx-auto w-fit md:mx-0">
            <div className="flex items-center">
              <MailOutlineIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">pyaephyohan2200@gmail.com</div>
            </div>
            <div className="flex items-center my-5">
              <LocalPhoneIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">09757814509</div>
            </div>
            <div className="flex items-center">
              <LocationOnIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">
                5th Thirimon Street, Mayangone Township, Yangon
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div variants={rightVariants} initial="hidden" animate="visible">
          <div className="text-primary text-4xl mb-10 text-center mt-16 lg:mt-0">
            Get in Touch
          </div>
          <div className="w-fit mx-auto lg:mx-0">
            <div className="text-white">
              <div className="mb-4 text-xl">Name</div>
              <TextField
                sx={{ width: "20rem" }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                label="Enter Your Name"
                autoComplete="off"
              />
            </div>
            <div className="text-white my-8">
              <div className="mb-4 text-xl">Email</div>
              <TextField
                sx={{ width: "20rem" }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                label="Enter Your Email"
                autoComplete="off"
              />
            </div>
            <div className="text-white">
              <div className="mb-4 text-xl">Message For Me</div>
              <TextField
                sx={{ width: "20rem" }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    height: "8rem",
                  },
                }}
                autoComplete="off"
              />
            </div>
            <div className="p-2 mt-8 cursor-pointer select-none text-white bg-primary text-center uppercase rounded-xl">
              <div>Submit</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="md:bg-secondary-200 md:p-10 p-5"
      >
        <div className="w-80 mx-auto flex justify-evenly">
          <a href="https://github.com/pyaephyohann">
            <GitHubIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100048688099795">
            <FacebookIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100048688099795">
            <InstagramIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
