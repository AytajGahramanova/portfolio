import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="w-full max-w-[1300px] mx-auto flex flex-col text-center tracking-tighter">
        <a href="tel:+994 55 715 05 40 " className="my-2">
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
