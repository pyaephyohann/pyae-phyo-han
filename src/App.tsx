import "./App.css";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import { Tech } from "./utils/typings/types";
import { Box, Zoom } from "@mui/material";

const downVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const leftVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 1 },
  },
};

const App = () => {
  const techs: Tech[] = [
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/html-5%20(1).png?alt=media&token=544bf997-423f-45fb-80ac-53642921806d",
      delay: "1000ms",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/css-3.png?alt=media&token=b7f27eca-40c3-442b-b4dd-4bd0359a507c",
      delay: "1300ms",
    },
    {
      imageUrl:
        "https://i.pinimg.com/236x/0c/de/d3/0cded3a3276425911d55a2552bf361bf.jpg",
      delay: "1500ms",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      delay: "1700ms",
    },
    {
      imageUrl:
        "data:image/png;base64,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",
      delay: "2000ms",
    },
    {
      imageUrl:
        "data:image/png;base64,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",
      delay: "2300ms",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/physics.png?alt=media&token=07e2afbd-ce23-4d44-9690-d06bdf0db2b7",
      delay: "2500ms",
    },
    {
      imageUrl:
        "https://i.pinimg.com/236x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg",
      delay: "2700ms",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/postgre.png?alt=media&token=82ee3d31-e854-492d-9cb3-c9430da9b024",
      delay: "3000ms",
    },
    {
      imageUrl:
        "data:image/png;base64,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",
      delay: "3300ms",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNf_xyfNDyt3NEy0S-ETw_2x6qhLwpqax89nd7hgqoA&s://https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/postgre.png?alt=media&token=82ee3d31-e854-492d-9cb3-c9430da9b024.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/nodejs.png?alt=media&token=735a3f04-8a51-41f0-beb3-a2de46aec58a",
      delay: "3500ms",
    },
  ];

  return (
    <Layout>
      {/* Container */}
      <div className="mt-[6rem] lg:mt-[8rem] lg:flex lg:justify-evenly">
        {/* Left Side */}
        <motion.div
          variants={downVariants}
          initial="hidden"
          animate="visible"
          className="p-5 lg:p-0 w-fit mx-auto lg:mx-0">
          <div className="text-white text-3xl md:text-4xl">
            <div className="mb-2">Hello! I'm </div>
            <div className="text-primary">Pyae Phyo Han</div>
          </div>
          <div className="text-transparent text-lg mt-8 lg:mt-10">
            A passionate fullstack developer with React.js, Express.js and
            Databases
          </div>
          <div className="text-transparent text-lg mt-2">
            I learned html, css and javascript from youtube and attended
          </div>
          <div className="text-transparent text-lg mt-2">
            MSquare Programming fullstack course for six months
          </div>
          <div className="text-transparent text-lg mt-2">
            I have strong communication skill and I'm entry level developer so
          </div>
          <div className="text-transparent text-lg mt-2">
            I'm seeking for a job opportunity to get real world projects
            experiences
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div variants={downVariants} initial="hidden" animate="visible">
          <img
            className="rounded-2xl h-60 lg:h-80 mx-auto lg:mx-0 mt-5 lg:mt-0"
            alt="pyaephyohan"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/received_915212149754401.jpg?alt=media&token=c28bd606-e8ec-44ad-8f8c-88b1adaba6f4"
          />
        </motion.div>
      </div>
      {/* Footer */}
      <div className="mt-16 w-[80%] mx-auto">
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-2xl mb-8">
          Techs I use
        </motion.div>
        <div className="flex flex-wrap">
          {techs.map((item) => {
            return (
              <Zoom
                key={item.delay}
                in={true}
                style={{
                  transitionDelay: true ? item.delay : "0ms",
                  transitionDuration: "1000ms",
                }}>
                <Box sx={{ mr: "2rem", mb: "2rem" }}>
                  <img
                    className="w-14 h-14 rounded-md"
                    alt={item.imageUrl}
                    src={item.imageUrl}
                  />
                </Box>
              </Zoom>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default App;
