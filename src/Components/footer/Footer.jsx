import facebook from "/src/assets/facebook.png";
import github from "/src/assets/github.png";
import linkedin from "/src/assets/linkedin.png";
import instagram from "/src/assets/instagram.png";
import { Typography } from "@material-tailwind/react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleContactMeClick = () => {
    window.location.href = "https://wa.me/6281327963181";
  };
  return (
    <Fade right>
      <footer id="contact" className="w-full">
        <div className="flex flex-col items-center justify-between py-4 md:flex-row md:justify-between px-5">
          <div className="space-y-6 md:text-left text-center">
            <h2 className="text-2xl font-semibold md:inline-block mb-4 md:ml-10">
              Social Media
            </h2>
            <div className="flex gap-2 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="https://www.facebook.com/faizada.alvarizqi/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={facebook} alt="facebook" className=" w-28 h-28" />
              </Typography>
              <Typography
                as="a"
                href="https://instagram.com/alvarizqi__"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={instagram} alt="instagram" className=" w-28 h-28" />
              </Typography>
              <Typography
                as="a"
                href="https://linkedin.com/in/alvarizqi-7a2169223"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={linkedin} alt="linkedln" className=" w-28 h-28" />
              </Typography>
              <Typography
                as="a"
                href="https://github.com/Alvarizqi09"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={github} alt="github" className=" w-28 h-28" />
              </Typography>
            </div>
          </div>
          <div className="justify-center items-center my-4 md:text-left text-center">
            <h2 className="text-2xl font-semibold md:inline-block mb-4">
              My Profile
            </h2>
            <div className="flex items-center mb-2 ml-0">
              <i className="w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
                <FaLocationDot className="mx-auto" />
              </i>
              <a
                href="https://goo.gl/maps/YZ72dAiKACBDbDCu6"
                className="text-gray-900"
              >
                <p>
                  <span>Gunung Pati</span> Semarang, Indonesia
                </p>
              </a>
            </div>
            <div className="flex items-center mb-2">
              <i className="w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
                <FaPhoneAlt className="mx-auto" />
              </i>
              <a href="https://wa.me/6281327963181" className="text-gray-900">
                <p>+62 81327963181</p>
              </a>
            </div>
            <div className="flex items-center">
              <i className="w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
                <FaEnvelope className="mx-auto" />
              </i>
              <p>
                <a
                  href="mailto:alvarizki80@gmail.com"
                  className="text-gray-900"
                >
                  alvarizki80@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex justify-center">
            <button
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full py-8 px-8 space-x-5 mt-10 md:mt-0"
              onClick={handleContactMeClick}
            >
              <FaWhatsapp className="h-8 w-8 mr-4" />
              <p className="text-xl font-bold">Contact Me!</p>
            </button>
          </div>
        </div>
        <div className="w-full mb-5">
          <hr className="border border-gray-900 mb-8" />
          <Typography
            variant="small"
            className="text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://github.com/Alvarizqi09">Alvarizqi</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
