import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footer = () => {
  return (
    <div>
      <footer
        class="text-center text-white fixed-bottom"
        style={{ backgroundColor: "#21081a" }}
      >
        <div class="container p-4"></div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          This Web-App is made by : Abhay Verma
          <br />
          <br />
          Contact us on :
          <br />
          <br />
          <a class="text-white" href="https://github.com/abhayverma45">
            <GitHubIcon style={{ minWidth: "40px" }} />
          </a>
          <a
            class="text-white"
            href="https://www.linkedin.com/in/abhay-verma-47b007205/"
          >
            <LinkedInIcon style={{ minWidth: "40px" }} />
          </a>
          <a
            class="text-white"
            href="https://www.instagram.com/abhay_verma__45/"
          >
            <InstagramIcon style={{ minWidth: "40px" }} />
          </a>
          <a
            class="text-white"
            href="https://www.facebook.com/profile.php?id=100009641225598"
          >
            <FacebookIcon style={{ minWidth: "40px" }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default footer;
