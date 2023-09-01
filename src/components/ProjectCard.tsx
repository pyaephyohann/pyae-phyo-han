import { motion } from "framer-motion";
import { Project } from "../utils/typings/types";

interface Props {
  project: Project;
}

const upVariants = {
  hidden: {
    y: "10rem",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, delay: 0.3 },
  },
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      variants={upVariants}
      initial="hidden"
      animate="visible"
      className="text-white p-[1.5rem] bg-secondary-200 w-fit rounded-xl m-[1.5rem]"
    >
      <a href="https://pizngo.shop">
        <img
          alt={project.name}
          src={project.imageUrl}
          className="w-[30rem] h-[15rem] rounded-md"
        />
      </a>
      <div className="text-2xl mt-[1.8rem]">{project.name}</div>
      <div className="text-transparent mt-[1rem]">{project.description}</div>
      <div className="flex mt-[2rem] mb-[0.2rem]">
        {project.techs.map((tech) => {
          return (
            <div className="p-[0.5rem] mr-[1rem] rounded-xl bg-primary">
              {tech.name}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
