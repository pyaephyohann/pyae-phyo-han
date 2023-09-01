import { motion } from "framer-motion";
import { Project } from "../utils/typings/types";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";

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
  const projects: Project[] = [
    {
      name: "Pizngo ( POS APP )",
      description: "QR code ordering system POS app ( backoffice included )",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/pizngo-79703.appspot.com/o/SmartSelect_20230901-202339_Discord.jpg?alt=media&token=220a2399-6290-49ae-9a4d-df90f07c876a",
      techs: [
        { name: "Next js" },
        { name: "MUI" },
        { name: "Postgres SQL" },
        { name: "Prisma" },
      ],
    },
  ];

  return (
    <Layout>
      <div>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-2xl mt-[7rem] ml-[2rem]"
        >
          Personal Projects
        </motion.div>
        {/* projects show case */}
        <div className="mt-[1rem] flex flex-wrap p-[0.5rem] md:p-[0]">
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
