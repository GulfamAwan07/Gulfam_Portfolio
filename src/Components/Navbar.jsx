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
          <Link className="hover:text-red-500 transition hover:text-xl" to="/">
            Home
          </Link>
          <a className="hover:text-red-500 transition hover:text-xl" href="/About">
            About
          </a>
          <a className="hover:text-red-500 transition hover:text-xl" href="/Skills">
            Skills
          </a>
          <a className="hover:text-red-500 transition hover:text-xl" href="/Project">
            Projects
          </a>
          <a className="hover:text-red-500 transition hover:text-xl" href="/Contact">
            Contact
          </a>
        </nav>

        

        <button
          onClick={handleToggleMenu}
          className="md:hidden  fixed text-3xl text-black"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 fixed py-4  border-t-2 border-b-2 shadow-lg">
          <nav className="flex flex-col gap-4 text-lg font-semibold">
            <Link className="hover:text-red-500 transition hover:text-xl" to="/">
              Home
            </Link>
            <a className="hover:text-red-500 transition hover:text-xl" href="/About">
              About
            </a>
            <a className="hover:text-red-500 transition hover:text-xl" href="/Skills">
              Skills
            </a>
            <a className="hover:text-red-500 transition hover:text-xl" href="/Project">
              Projects
            </a>
            <a className="hover:text-red-500 transition hover:text-xl" href="/Contact">
              Contact
            </a>
           
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
