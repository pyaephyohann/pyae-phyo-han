import { motion } from "framer-motion";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { Skill } from "../utils/typings/types";

const skillSetVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: "10rem",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
  hover: {
    scale: 1.3,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

const projectsVariants = {
  hover: {
    scale: 1.5,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const Skills = () => {
  const skills: Skill[] = [
    {
      name: "HTML",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/html-5%20(1).png?alt=media&token=544bf997-423f-45fb-80ac-53642921806d",
    },
    {
      name: "CSS",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/css-3.png?alt=media&token=b7f27eca-40c3-442b-b4dd-4bd0359a507c",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "Javascript",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/js-file.png?alt=media&token=b6f7e569-0910-48ea-8918-abe19c1afc5f",
    },
    {
      name: "React",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/physics.png?alt=media&token=07e2afbd-ce23-4d44-9690-d06bdf0db2b7",
    },
    {
      name: "NodeJs(ExpressJs)",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/nodejs.png?alt=media&token=735a3f04-8a51-41f0-beb3-a2de46aec58a",
    },
    {
      name: "PostgresSQL",
      icon: "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/postgre.png?alt=media&token=82ee3d31-e854-492d-9cb3-c9430da9b024",
    },
    {
      name: "UI Libraries",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNf_xyfNDyt3NEy0S-ETw_2x6qhLwpqax89nd7hgqoA&s://https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/postgre.png?alt=media&token=82ee3d31-e854-492d-9cb3-c9430da9b024.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/nodejs.png?alt=media&token=735a3f04-8a51-41f0-beb3-a2de46aec58a",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <motion.div
        variants={skillSetVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center mt-16 w-full sm:w-2/4 lg:w-5/12 xl:w-1/4"
      >
        <div className="text-white text-sm">Services</div>
        <div className="text-3xl text-primary mt-5">Skill-Set</div>
      </motion.div>
      {/* Body */}
      <div className="flex flex-wrap justify-evenly mt-5">
        {skills.map((skill) => {
          return (
            <motion.div
              variants={skillVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="p-5 bg-secondary-200 w-fit rounded-xl m-16 flex flex-col items-center"
            >
              <div className="text-primary">{skill.name}</div>
              <img className="h-36 mt-5" alt={skill.name} src={skill.icon} />
            </motion.div>
          );
        })}
      </div>
      {/* Footer */}
      <div className="px-5 sm:flex sm:justify-center sm:w-full md:w-11/12 md:justify-center lg:w-10/12 lg:justify-center xl:w-3/5 xl:justify-center">
        <div className="text-transparent text-xl pb-5 mt-5">
          <motion.div
            variants={skillSetVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              This Website was developed with react, tailwind and framer motion
            </div>
            <div className="my-5">
              I love creating different web apps using javascript's frameworks
            </div>
            <div>
              If you want to take a look my projects, you can visit to my
              Projects page
            </div>
          </motion.div>
          <motion.div
            variants={projectsVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="text-primary border-2 border-primary rounded-2xl w-fit p-2 mt-10 mx-auto mb-5"
          >
            <Link to={`/projects`}>Projects</Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
