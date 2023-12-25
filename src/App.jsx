import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/footer/Footer";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo2 from "../src/assets/logo2.png";
import ScrollToTopButton from "./Components/Scroll/Scroll";

function App() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpenNav(false);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#about"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("about");
          }}
        >
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#project"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("project");
          }}
        >
          Project
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#skills"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("skills");
          }}
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#contact"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("contact");
          }}
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
  return (
    <div>
      <section>
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-2 font-medium text-xl text-blue-800 hover:text-indigo-800 transition duration-300"
            >
              <img src={logo2} alt="logo" width={"150px"} height={"50px"} />
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a
                  href="#about"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("about");
                  }}
                >
                  About Me
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a
                  href="#project"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("project");
                  }}
                >
                  Project
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a
                  href="#skills"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("skills");
                  }}
                >
                  Skills
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a
                  href="#contact"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("contact");
                  }}
                >
                  Contact
                </a>
              </Typography>
            </ul>
          </MobileNav>
        </Navbar>
        <div>
          <Header />
          <About />
          <Project />
          <Skills />
          <Footer />
        </div>
        <ScrollToTopButton />
      </section>
    </div>
  );
}

export default App;
