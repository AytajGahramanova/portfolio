import { useState, useEffect } from "react";
import Logo from "../assets/image/logo-main.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiArrowUp } from "react-icons/hi";
import "../assets/css/common.scss";
import "../assets/css/style.scss";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="w-full max-w-[1300px] mx-auto flex items-center justify-between mb-10">
      <a href="/">
        <img src={Logo} alt="logo" className="w-full max-w-28 object-contain" />
      </a>
      <div className="flex items-center justify-between py-6 m-4 lg:mb-8 text-xl gap-4">
        <a
          href="https://www.linkedin.com/in/aytac-gahramanova-6b61ab245/"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/AytajGahramanova" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/aytac%20q%C9%99hr%C9%99manova"
          target="blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/g.aytac8/" target="blank">
          <FiInstagram />
        </a>
        <button
          onClick={backToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 1000 }}
        >
          <HiArrowUp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
