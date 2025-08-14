import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          <Link className="hover:text-red-500 transition" to="/">Home</Link>
          <a className="hover:text-red-500 transition" href="/About">
            About
          </a>
          <a className="hover:text-red-500 transition" href="/Skills">
            Skills
          </a>
          <a className="hover:text-red-500 transition" href="/Project">
            Projects
          </a>
          <a className="hover:text-red-500 transition" href="/Contact">
            Contact
          </a>
        </nav>

        <a
          target="_blank"
          href="/documents/Gulfam-CV.pdf"
          className="hidden md:block cursor-pointer border-2 px-6  transform hover:scale-105 text-white bg-gradient-to-r from-red-500 to-blue-300 py-2 rounded-3xl text-base font-bold"
        >
          Resume
        </a>

        <button
          onClick={handleToggleMenu}
          className="md:hidden text-3xl text-black"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 fixed py-4  border-t-2 border-b-2 shadow-lg">
          <nav className="flex flex-col gap-4 text-lg font-semibold">
            <Link className="hover:text-red-500 transition" to="/">Home</Link>
            <a className="hover:text-red-500 transition" href="/About">
              About
            </a>
            <a className="hover:text-red-500 transition" href="/Skills">
              Skills
            </a>
            <a className="hover:text-red-500 transition" href="/Project">
              Projects
            </a>
            <a className="hover:text-red-500 transition" href="/Contact">
              Contact
            </a>
            <a
              href="/documents/Gulfam-CV.pdf"
              className="mt-4 w-fit border-2 px-4 py-2 rounded-3xl text-white bg-gradient-to-r from-red-500 to-blue-300 text-sm font-bold hover:scale-105"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
