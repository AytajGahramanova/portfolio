import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-10">
      <div className="flex flex-shrink-0 items-center">
        <h2>AG</h2>
      </div>
      <div className="flex items-center justify-between py-6 m-8 text-xl gap-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
