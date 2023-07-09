import { TextField } from "@mui/material";
import Layout from "./Layout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Layout>
      <div className="lg:flex lg:justify-evenly mt-16 mb-10">
        {/* Left Side */}
        <div className="flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-col">
          <div>
            <img
              className="h-80 lg:h-96 rounded-2xl mx-auto"
              alt="address"
              src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/SmartSelect_20230709-163036_Maps.jpg?alt=media&token=40722aae-140c-415d-8cad-2d3b07d5aa27"
            />
          </div>
          <div className="mt-10 mx-auto w-fit md:mx-0">
            <div className="flex items-center">
              <MailOutlineIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">pyaephyohan2200@gmail.com</div>
            </div>
            <div className="flex items-center my-5">
              <LocalPhoneIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">09757814509</div>
            </div>
            <div className="flex items-center">
              <LocationOnIcon sx={{ fontSize: "2.5rem", color: "#00DFA2" }} />
              <div className="text-white ml-3">
                5th Thirimon Street, Mayangone Township, Yangon
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div>
          <div className="text-primary text-4xl mb-10 text-center mt-16 lg:mt-0">
            Get in Touch
          </div>
          <div className="w-fit mx-auto lg:mx-0">
            <div className="text-white">
              <div className="mb-4 text-xl">Name</div>
              <TextField
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
                sx={{ width: "20rem" }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    height: "8rem",
                  },
                }}
                autoComplete="off"
              />
            </div>
            <div className="p-2 mt-8 cursor-pointer select-none text-white bg-primary text-center uppercase rounded-xl">
              <div>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
