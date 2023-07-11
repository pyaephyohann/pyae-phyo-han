import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  show: boolean;
}

const backDropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const modelVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.7,
    },
  },
};

const EmailModal = ({ show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={backDropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-0 h-full w-full bg-primary bg-opacity-50"
        >
          <motion.div
            variants={modelVariants}
            className="text-xl text-primary bg-white p-6 rounded-2xl w-fit fixed left-24 md:left-56 lg:left-64 top-52 z-50"
          >
            <img
              className="h-32 mx-auto"
              alt="successBalloons"
              src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/photo_2023-07-11_16-55-12.jpg?alt=media&token=f39f7b12-eb1e-47da-9904-b922500f94f9"
            />
            <div className="flex items-center">
              <div className="mr-3">Email Sent Successfully!</div>
              <MarkEmailReadIcon sx={{ color: "#00DFA2" }} />
            </div>
            <div className="mt-3">Thank you for contacting me</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
