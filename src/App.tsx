import { Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const rightVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const footerVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const skillsVariants = {
  hover: {
    scale: 1.5,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

function App() {
  return (
    <Layout>
      {/* Container */}
      <div className="lg:mt-16 mt-5 lg:flex lg:justify-evenly">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="p-5 lg:p-0 w-fit mx-auto lg:mx-0"
        >
          <div className="text-white text-4xl">
            <div className="mb-2">Hello! I'm </div>
            <div className="text-primary">Pyae Phyo Han</div>
          </div>
          <div className="text-transparent text-lg lg:mt-10 mt-8">
            19 years old boy who love coding and build fullstack web
            applications
          </div>
          <div className="text-transparent text-lg mt-2">
            I learned html, css and javascript from youtube and attended
          </div>
          <div className="text-transparent text-lg mt-2">
            MSquare Programming fullstack course for six months
          </div>
          <div className="text-transparent text-lg mt-2">
            I'm really into building beautiful and functional websites
          </div>
          <div className="text-transparent text-lg mt-2">
            I have a dream of being a powerful developer
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div variants={rightVariants} initial="hidden" animate="visible">
          <img
            className="lg:h-80 rounded-2xl h-60 mx-auto lg:mx-0 mt-5 lg:mt-0"
            alt="pyaephyohan"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/received_915212149754401.jpg?alt=media&token=c28bd606-e8ec-44ad-8f8c-88b1adaba6f4"
          />
        </motion.div>
      </div>
      {/* Footer */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="lg:mt-20 mt-6 flex flex-col sm:justify-center items-center p-5 lg:p-0"
      >
        <div className="text-white text-xl mb-8">
          That's about me and let's take a look what I learned. Here are my
        </div>
        <motion.div
          className="text-primary p-2 border-2 border-primary rounded-2xl"
          variants={skillsVariants}
          whileHover="hover"
        >
          <Link to={`/skills`}>Skills</Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default App;
