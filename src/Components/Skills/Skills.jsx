import { Typography } from "@material-tailwind/react";
import react from "../../assets/react.png";
import next from "../../assets/nexy.png";
import canva from "../../assets/canva.png";
import bootstrap from "../../assets/bootstrap.png";
import corel from "../../assets/corel.png";
import figma from "../../assets/figma.png";
import firebase from "../../assets/firebase.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import laravel from "../../assets/laravel.png";
import javascript from "../../assets/javascript.png";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Fade cascade>
      <div
        id="skills"
        className="justify-center items-center w-full text-center mt-5 mb-5"
      >
        <div>
          <Typography variant="h2" className="text-4xl mb-4 text-gray-800">
            My Skills
          </Typography>
        </div>
        <div className="justify-center items-center w-full text-center flex flex-col lg:flex-row sm:flex-col">
          <div className="lg:w-1/2 sm:w-full h-full items-center justify-center">
            <p className="text-xl text-justify text-gray-800 mx-10">
              Passionate junior Front-end developer with expertise in ReactJS,
              Laravel, and NextJS. My proficiency extends beyond coding,
              encompassing a rich skill set in design tools such as Figma, Corel
              Draw, and Canva. With over 2 years of hands-on experience in
              design, I seamlessly merge creativity with technical acumen to
              deliver visually stunning and functionally robust web solutions.
              Committed to continuous learning and innovation, I am poised to
              contribute effectively to cutting-edge projects that demand a
              fusion of design and development expertise
            </p>
          </div>
          <div className="lg:w-1/2 sm:w-full h-full flex lg:overflow-hidden items-center justify-center">
            <div className="mt-8 inline-flex w-full flex-wrap text-center items-center sm:justify-center justify-between gap-5 p-10">
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={react} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={next} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={laravel}
                  alt="Anime"
                  className="w-32 h-32 shadow-lg"
                />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={tailwind}
                  alt="Anime"
                  className="w-32 h-32 shadow-lg"
                />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={bootstrap}
                  alt="Anime"
                  className="w-32 h-32 shadow-lg"
                />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={javascript}
                  alt="Anime"
                  className="w-32 h-32 shadow-lg"
                />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={html} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={css} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={firebase}
                  alt="Anime"
                  className="w-32 h-32 shadow-lg"
                />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={figma} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={canva} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
              <article className="shadow-md rounded-lg overflow-hidden flex-shrink-0">
                <img src={corel} alt="Anime" className="w-32 h-32 shadow-lg" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
