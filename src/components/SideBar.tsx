import { Button, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const SideBar = ({ show, setShow }: Props) => {
  return (
    <Drawer anchor="right" open={show} onClose={() => setShow(false)}>
      <div className="mt-[2.5rem] px-[1rem]">
        <div className="flex justify-around items-center">
          <div className="text-primary text-4xl mr-[8rem] font-title cursor-pointer select-none ml-[1rem]">
            <Link to={`/`}>Pyae</Link>
          </div>
          <IconButton onClick={() => setShow(false)} sx={{ mr: "1rem" }}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="my-[2.5rem]">
          <Divider />
        </div>
        {/* pages */}
        <div className="flex flex-col text-lg items-start pl-[1rem]">
          <Link className={"text-primary flex items-center"} to={`/`}>
            <HomeIcon sx={{ mr: "0.8rem", fontSize: "2rem" }} />
            <Typography sx={{ fontSize: "1.3rem" }}>Home</Typography>
          </Link>
          <Link
            className={"text-primary my-[2.5rem] flex items-center"}
            to={`/projects`}
          >
            <ImportContactsIcon sx={{ mr: "0.8rem", fontSize: "2rem" }} />
            <Typography sx={{ fontSize: "1.3rem" }}>Projects</Typography>
          </Link>
          <Link className={"text-primary flex items-center"} to={`/contact`}>
            <ContactMailIcon sx={{ mr: "0.8rem", fontSize: "2rem" }} />
            <Typography sx={{ fontSize: "1.3rem" }}>Contact</Typography>
          </Link>
        </div>
        <div className="my-[2.5rem]">
          <Divider />
        </div>
        <div className="w-fit mx-auto">
          <a href="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/myresume.pdf?alt=media&token=d050ecd6-f1f3-4181-8e66-16675728fe0a">
            <Button
              sx={{ bgcolor: "#00DFA2", ":hover": { bgcolor: "#00DFA2" } }}
              variant="contained"
              startIcon={<CloudDownloadIcon />}
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
