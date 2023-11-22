import { motion } from "framer-motion";
import { Project } from "../utils/typings/types";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

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
      description: "QR code ordering system POS app ( Admin Panel included )",
      href: "https://pizngo.shop",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/pizngo-79703.appspot.com/o/SmartSelect_20230901-202339_Discord.jpg?alt=media&token=220a2399-6290-49ae-9a4d-df90f07c876a",
      techs: [
        { name: "Next js" },
        { name: "MUI" },
        { name: "Postgres SQL" },
        { name: "Prisma" },
      ],
    },
    {
      name: "Phantom ( POS APP )",
      description: "Customer Order App and Admin Panel",
      href: "https://phantom-murex.vercel.app",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/Screenshot%20from%202023-11-22%2019-01-22.png?alt=media&token=8aa7c254-6d59-450b-8f3f-dff34d6dfb82",
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
          className="text-white text-2xl mt-[7rem] ml-[2rem]">
          Personal Projects
        </motion.div>
        {/* projects show case */}
        <div className="mt-[1rem] flex flex-wrap p-[1rem] md:p-[0]">
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
