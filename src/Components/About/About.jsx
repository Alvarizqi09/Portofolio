import { Typography } from "@material-tailwind/react";
import foto from "../../assets/foto.png";
import { Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <Slide direction={"right"} duration={0.5}>
      <div
        id="about"
        className="justify-center items-center flex flex-col lg:flex-row w-full text-center sm:py-5"
      >
        <div className="lg:w-1/2 sm:w-full h-full flex flex-col mx-5 mt-5">
          <div>
            <Typography variant="h2" className="text-4xl mb-4 text-gray-800">
              About Me
            </Typography>
          </div>
          <div>
            <p className="text-xl text-justify text-gray-800 lg:mx-10 sm:mx-5">
              Hello, I`m Alvarizqi, a passionate and detail-oriented individual
              currently pursuing a Bachelors degree in Computer Science at
              Universitas Negeri Semarang. With a strong foundation in computer
              science, I specialize in UI/UX design, front-end development,
              graphic design, and web development. My expertise includes
              wireframing, prototyping, and hands-on experience with HTML, CSS,
              and JavaScript. As a creative problem solver, I`ve led teams in
              successfully revamping UI`s, enhancing user satisfaction.
              Proficient in graphic design tools like Canva and Corel Draw, Im
              dedicated to translating innovative ideas into user-centric
              designs. Eager to contribute to impactful projects, I stay updated
              with the latest industry trends to deliver outstanding digital
              solutions. Lets collaborate and bring creative visions to life!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full h-full flex items-center justify-center">
          <img src={foto} alt="foto" className="w-[600px] h-[700px]" />
        </div>
      </div>
    </Slide>
  );
};

export default About;
