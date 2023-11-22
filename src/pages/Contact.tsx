import Layout from "../components/Layout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import SendEmail from "../components/SendEmail";
import { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import WarningAlert from "../components/WarningAlert";

const leftVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, delay: 0.3 },
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
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const [openWarningAlert, setOpenWarningAlert] = useState(false);

  return (
    <Layout>
      <div className="mt-[8rem] mb-10 lg:flex lg:justify-evenly">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-col">
          <div>
            <img
              className="h-80 lg:h-96 rounded-2xl mx-auto"
              alt="address"
              src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/SmartSelect_20230709-163036_Maps.jpg?alt=media&token=40722aae-140c-415d-8cad-2d3b07d5aa27"
            />
          </div>
          <div className="mt-10 w-fit mx-auto px-4 md:px-0 md:mx-0">
            <div className="flex items-center">
              <MailOutlineIcon
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  color: "#00DFA2",
                }}
              />
              <div className="text-white ml-3">pyaephyohan2200@gmail.com</div>
            </div>
            <div className="flex items-center my-5">
              <LocalPhoneIcon
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  color: "#00DFA2",
                }}
              />
              <div className="text-white ml-3">09757814509</div>
            </div>
            <div className="flex items-center">
              <LocationOnIcon
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  color: "#00DFA2",
                }}
              />
              <div className="text-white ml-3">
                5th Thirimon Street, Mayangone Township, Yangon
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}
        <SendEmail
          setOpenSuccessAlert={setOpenSuccessAlert}
          setOpenWarningAlert={setOpenWarningAlert}
        />
      </div>
      {/* Footer */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="p-5 md:p-10 md:bg-secondary-200 ">
        <div className="w-80 mx-auto flex justify-evenly">
          <a href="https://github.com/pyaephyohann">
            <GitHubIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100048688099795">
            <FacebookIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
          <a href="https://www.instagram.com/pyaephyohan0807">
            <InstagramIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
          <a href="https://www.linkedin.com/in/pyae-phyo-han-65aab2264">
            <LinkedInIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
          </a>
        </div>
      </motion.div>
      <SuccessAlert
        open={openSuccessAlert}
        setOpen={setOpenSuccessAlert}
        message="Email sent successfully"
      />
      <WarningAlert
        open={openWarningAlert}
        setOpen={setOpenWarningAlert}
        message="You need to fill all the requirements"
      />
    </Layout>
  );
};

export default Contact;
