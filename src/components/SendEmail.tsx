import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import CircularProgress from "@mui/material/CircularProgress";

const rightVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, delay: 0.3 },
  },
};

interface Props {
  setOpenSuccessAlert: (value: boolean) => void;
  setOpenWarningAlert: (value: boolean) => void;
}

const SendEmail = ({ setOpenSuccessAlert, setOpenWarningAlert }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(form.current!);
    const values = Object.fromEntries(formData.entries());

    const { user_name, user_email, message } = values;

    const isValid = user_name && user_email && message;

    if (!isValid) {
      setLoading(false);
      setOpenWarningAlert(true);
      return;
    }

    emailjs
      .send("service_um0rnsb", "template_8rx4zyi", values, "C7FZHBRWr2fOX03lO")
      .then(() => {
        setEmail({ ...email, name: "", email: "", message: "" });
        setLoading(false);
        setOpenSuccessAlert(true);
      })
      .catch(() => {
        alert("Error sending email:");
      });
  };
  return (
    <motion.div
      className="static"
      variants={rightVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-primary text-3xl md:text-4xl mb-10 text-center mt-16 lg:mt-0">
        Get in Touch
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="w-fit mx-auto lg:mx-0">
          <div className="text-white">
            <div className="mb-4 text-xl">Name</div>
            <TextField
              value={email.name}
              onChange={(event) =>
                setEmail({ ...email, name: event.target.value })
              }
              name="user_name"
              sx={{ width: "20rem" }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              label="Enter Your Name"
              autoComplete="off"
            />
          </div>
          <div className="text-white my-8">
            <div className="mb-4 text-xl">Email</div>
            <TextField
              value={email.email}
              onChange={(event) =>
                setEmail({ ...email, email: event.target.value })
              }
              name="user_email"
              sx={{ width: "20rem" }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              label="Enter Your Email"
              autoComplete="off"
            />
          </div>
          <div className="text-white">
            <div className="mb-4 text-xl">Message For Me</div>
            <TextField
              value={email.message}
              onChange={(event) =>
                setEmail({ ...email, message: event.target.value })
              }
              name="message"
              sx={{ width: "20rem" }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              multiline
              rows={4}
              autoComplete="off"
            />
          </div>
          <div className="p-2 mt-8 cursor-pointer select-none text-white bg-primary text-center uppercase rounded-xl">
            <Button
              type="submit"
              sx={{ color: "white", width: "100%", height: "100%" }}
            >
              {loading ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                "Send Email"
              )}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default SendEmail;
