import { PROJECTS } from "../constants";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import "../assets/css/common.scss";
import "../assets/css/style.scss";


const Projects = () => {
  const [transformStyles, setTransformStyles] = useState({});

  const handleMouseMove = (e, cardIndex) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / height) * 20;
    const rotateY = ((x - width / 2) / width) * -20;

    setTransformStyles((prev) => ({
      ...prev,
      [cardIndex]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
  };

  const handleMouseLeave = (cardIndex) => {
    setTransformStyles((prev) => ({
      ...prev,
      [cardIndex]: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    }));
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 lg:my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="flex gap-5 flex-wrap justify-center">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                transform:
                  transformStyles[index] ||
                  "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                transition: "transform 0.1s ease-out",
              }}
              className="bg-[rgb(21,16,48)] bg-opacity-100 mb-0 lg:mb-4 p-5 rounded-2xl sm:w-[340px] w-full cursor-pointer"
            >
              <div className="flex justify-between">
                <h3 className="mb-2 text-xl text-neutral-100 poppins-400 ">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.deploy} target="blank">
                    <RiExternalLinkLine className="text-lg" />
                  </a>
                  <a href={project.github} target="blank">
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                className="project-img my-2"
                alt="profileImg"
              />
              <span className="text-sm text-neutral-400">
                {project.description}
              </span>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-1 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
