import { HERO_CONTENT } from "../constants";
import Me from "../assets/image/Aytac.jpg";
import Resume from "../resume/Aytac Gahramanova.pdf";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import "../assets/css/common.scss";
import "../assets/css/style.scss";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="w-full max-w-[1300px] mx-auto flex justify-center lg:justify-between flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 lg:pb-3 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Aytac Gahramanova
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-neutral-400 poppins-400"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="p-2 rounded-[10px] bg-gradient-to-l from-blue-400 via-slate-500 to-sky-800 "
            >
              <a
                href={Resume}
                download="Aytac-Gahramanova.pdf"
                className="flex items-center justify-center gap-2"
              >
                <FaDownload />
                Download CV
              </a>
            </motion.button>
          </div>
        </div>
        <div className="profile-img py-6 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={Me}
              alt="Aytac Gahramanova"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
