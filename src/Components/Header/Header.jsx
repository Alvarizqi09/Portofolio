import { Fade } from "react-awesome-reveal";
import "./Header.css";
import { Button, Typography } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const cvFileUrl =
    "https://drive.google.com/file/d/1qn1mwz5W7McBjsvB0zQjY1hXjwsyeVbH/view?usp=drive_link";

  const handleDownloadCV = () => {
    window.open(cvFileUrl, "_blank");
  };

  return (
    <Fade cascade duration={2000}>
      <header>
        <section>
          <div className="relative flex w-full justify-between">
            <div className="text-container justify-center items-center flex flex-col w-full min-h-screen text-center">
              <Typography variant="h2" className="text-4xl mb-4 text-gray-800">
                Hi, Im Alvarizqi
              </Typography>
              <TypeAnimation
                sequence={[
                  "I'm Front-end Developer",
                  1000,
                  "I'm Graphics Designer",
                  1000,
                  "I'm UI/UX Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-blue-800 font-semibold mb-4 lg:text-6xl text-4xl"
              />
              <Button
                onClick={handleDownloadCV}
                className="flex justify-center bg-cyan-400 px-8 py-5 text-lg text-white"
              >
                Download CV!
              </Button>
            </div>
          </div>
        </section>
      </header>
    </Fade>
  );
};

export default Header;
