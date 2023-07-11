import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { AnimatePresence, motion } from "framer-motion";

interface EmailMessageType {
  show: boolean;
  showContentStatus: string;
}

interface Props {
  emailMessage: EmailMessageType;
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

const EmailMessage = ({ emailMessage }: Props) => {
  return (
    <AnimatePresence>
      {emailMessage.show && (
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
              src={
                emailMessage.showContentStatus === "ok"
                  ? "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/photo_2023-07-11_16-55-12.jpg?alt=media&token=f39f7b12-eb1e-47da-9904-b922500f94f9"
                  : "https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/Failure.jfif?alt=media&token=39830591-e8bc-4299-9d8a-e4de0a768b65"
              }
            />
            <div className="flex items-center">
              <div className="mr-3">
                {emailMessage.showContentStatus === "ok"
                  ? "Email Sent Successfully!"
                  : "Sir! You need to fill all the requirements"}
              </div>
              {emailMessage.showContentStatus === "ok" && (
                <MarkEmailReadIcon sx={{ color: "#00DFA2" }} />
              )}
            </div>
            {emailMessage.showContentStatus === "ok" && (
              <div className="mt-3">Thank you for contacting me</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailMessage;
