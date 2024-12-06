// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-20">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-8 text-center text-4xl"
//       >
//         Contact
//       </motion.h2>
//       <div className="w-full max-w-[1300px] mx-auto flex flex-col text-center tracking-tighter">
//         <a href="tel:+994 55 715 05 40 " className="my-2">
//           {CONTACT.phoneNo}
//         </a>
//         <a href="mailto:aytac2003qehremanova@gmail.com" className="my-2">
//           {CONTACT.email}
//         </a>
//       </div>

//     </div>
//   );
// };

// export default Contact;

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Particles from "react-particles";

const Contact = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-20">
      {/* Particles Background */}
      <Particles
        id="bubbles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Arxa planda görünməsi üçün
        }}
        params={{
          particles: {
            number: { value: 175, density: { enable: false } },
            size: {
              value: 3,
              random: true,
              anim: { speed: 4, size_min: 0.3 },
            },
            line_linked: { enable: false },
          },
          interactivity: {
            events: {
              onhover: { enable: false, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 10,
              },
              repulse: { distance: 400, duration: 4 },
            },
          },
          retina_detect: true,
        }}
      />

      {/* Content */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="w-full max-w-[1300px] mx-auto flex flex-col text-center tracking-tighter">
        <a href="tel:+994557150540" className="my-2">
          {CONTACT.phoneNo}
        </a>
        <a href="mailto:aytac2003qehremanova@gmail.com" className="my-2">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
