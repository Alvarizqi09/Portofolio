import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";

import farmasi from "../../assets/farmasi.jpg";
import vilume from "../../assets/vilume.jpg";
import Alterra from "../../assets/Alterra.jpg";
import Mistik from "../../assets/mistik.jpg";
import IDCard from "../../assets/IDCARD.png";
import alumni from "../../assets/alumni.jpg";
import organigram from "../../assets/organigram.jpg";
import bio from "../../assets/bio.jpg";
import mistik1 from "../../assets/mistik1.jpg";
import bima from "../../assets/bima.jpg";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaCircle } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";

const Project = () => {
  const handleLiveDemoClick = (websiteUrl) => {
    window.location.href = websiteUrl;
  };

  return (
    <div id="project" className="flex flex-col items-center w-full mt-10">
      <Typography
        variant="h2"
        className="text-4xl mb-4 text-center text-gray-800"
      >
        My Projects
      </Typography>

      <div className="w-full mt-10 pl-5 mx-auto">
        <div className="w-full flex">
          <FaCircle size={15} className="mr-5 mt-2" />
          <Typography
            variant="h3"
            className="text-2xl mb-4 text-left text-gray-800"
          >
            Website
          </Typography>
        </div>
        <hr className="border border-gray-900 mb-8" />
        <div className="flex flex-col space-y-4 md:space-x-8 md:flex-row md:space-y-0 justify-center">
          <div className="flex-shrink-0 md:mb-0 mb-4">
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img src={farmasi} alt="farmasi" />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex text-center w-full px-auto items-center justify-between">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="font-medium mx-auto"
                  >
                    Rosati Farmasi
                  </Typography>
                </div>
                <Typography color="gray">
                  Rosati Pharmacy is a website created for the final project of
                  a software engineering course. This website was created with
                  Laravel and Bootstrap then deployed with Digital Ocean
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap text-center items-center gap-3">
                  <Tooltip content="Made with Laravel">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <TbBrandLaravel />
                    </span>
                  </Tooltip>
                  <Tooltip content="Made with Bootstrap">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaBootstrap />
                    </span>
                  </Tooltip>
                  <Tooltip content="Connected to MySQL">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <SiMysql />
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <a
                  href="http://rosatifarmasi.me/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    fullWidth={true}
                    onClick={() =>
                      handleLiveDemoClick("http://rosatifarmasi.me/#")
                    }
                  >
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          <div className="flex-shrink-0">
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader floated={false} color="blue-gray" className="mt-8">
                <img src={vilume} alt="vilume" />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex text-center w-full px-auto items-center justify-between">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="font-medium mx-auto"
                  >
                    VILUME
                  </Typography>
                </div>
                <Typography color="gray">
                  vilume is a website created to fulfill the tasks of the
                  Alterra Academy mini-project. This website was created with
                  ReactJS+Vite and also styled using Tailwind. There is also
                  Firebase integration for login and OpenAi for Customer
                  Services
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap text-center items-center gap-3">
                  <Tooltip content="Made with Tailwind">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <SiTailwindcss />
                    </span>
                  </Tooltip>
                  <Tooltip content="Made with React">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaReact />
                    </span>
                  </Tooltip>
                  <Tooltip content="Integrated with Firebase">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <IoLogoFirebase />
                    </span>
                  </Tooltip>
                  <Tooltip content="Made with Vite">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <SiVite />
                    </span>
                  </Tooltip>
                  <Tooltip content="Integrated with OpenAi API">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <RiOpenaiFill />
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <a
                  href="https://react-ai-nu.vercel.app/#home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    fullWidth={true}
                    onClick={() =>
                      handleLiveDemoClick(
                        "https://react-ai-nu.vercel.app/#home"
                      )
                    }
                  >
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          <div className="flex-shrink-0">
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader floated={false} color="blue-gray" className="mt-8">
                <img src={Alterra} alt="Alterra Submission" />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex text-center w-full px-auto items-center justify-between">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="font-medium mx-auto"
                  >
                    Alterra Submission
                  </Typography>
                </div>
                <Typography color="gray">
                  Alterra Submission is one of the tasks from Alterra Academy
                  which is required by several criteria. I created this website
                  with ReactJS + Vite with bootstrap styling. It contains CRUD
                  to add products and is also integrated with OpenAi
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content="Made with Bootstrap">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaBootstrap />
                    </span>
                  </Tooltip>
                  <Tooltip content="Made with React">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaReact />
                    </span>
                  </Tooltip>
                  <Tooltip content="Made with Vite">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <SiVite />
                    </span>
                  </Tooltip>
                  <Tooltip content="Integrated with OpenAi API">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <RiOpenaiFill />
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <a
                  href="https://vilume.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    fullWidth={true}
                    onClick={() =>
                      handleLiveDemoClick("https://vilume.vercel.app")
                    }
                  >
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="w-full flex">
            <FaCircle size={15} className="mr-5 mt-2" />
            <Typography
              variant="h3"
              className="text-2xl mb-4 text-left text-gray-800"
            >
              Graphic Design
            </Typography>
          </div>
          <hr className="border border-gray-900 mb-8" />
          <div className="flex space-x-4 transition-transform duration-300 ease-in-out overflow-x-scroll">
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={Mistik}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={IDCard}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={alumni}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={organigram}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={bio}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={mistik1}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
            <article className="bg-white shadow-lg rounded-lg border-0 overflow-hidden mb-4 p-5 flex-shrink-0">
              <img
                src={bima}
                alt="Anime"
                className="w-full h-96 object-cover shadow-lg"
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
