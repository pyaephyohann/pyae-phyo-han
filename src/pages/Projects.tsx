import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { frontendProjects, fullstackProjects } from "../utils/typings/datas";

const leftVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const Projects = () => {
  return (
    <Layout>
      <div>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-2xl mt-[7rem] ml-[2rem]"
        >
          Fullstack Projects
        </motion.div>
        {/* projects show case */}
        <div className="md:mt-[1rem] flex flex-wrap justify-center xl:justify-start p-[1rem] md:p-[0]">
          {fullstackProjects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
      <div>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-2xl mt-[3rem] ml-[2rem]"
        >
          Frontend Projects
        </motion.div>
        {/* projects show case */}
        <div className="md:mt-[1rem] flex flex-wrap justify-center xl:justify-start p-[1rem] md:p-[0]">
          {frontendProjects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
