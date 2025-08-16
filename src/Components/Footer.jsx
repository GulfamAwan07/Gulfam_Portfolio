import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 m-2 border-2 border-gray-300 rounded-2xl bg-gray-100 p-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src="/ICON.webp" />
          <h1 className="text-xl md:text-2xl font-bold">Gulfam Awan.</h1>
        </div>

        {/* Middle: Links */}
        <div className="flex gap-6">
          <Link className="font-semibold underline hover:text-red-500" to="/About">About</Link>
          <Link className="font-semibold underline hover:text-red-500" to="/Contact">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/GulfamAwan07"><FaGithub className="cursor-pointer hover:scale-110" /></a>
          <a href="https://www.linkedin.com/in/mgulfamawan/"><FaLinkedin className="cursor-pointer hover:scale-110" /></a>
          <a href="mailto:gulfamawan89@gmail.com"><CiMail className="cursor-pointer hover:scale-110" /></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b-2 border-gray-400 my-5"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between text-sm md:text-base gap-2 md:gap-0">
        <h1>© All Rights Reserved</h1>
        <h1 className="text-right">Made with 💗 By Gulfam Awan</h1>
      </div>
    </div>
  );
};

export default Footer;
