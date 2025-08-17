import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <div className="flex items-center  gap-2 md:gap-5 ">
        <img className=" w-8 h-8 md:w-20 md:h-20  bg-white" src="/logo.png" />
        <h1 className="text-xl md:text-3xl font-bold">Gulfam Awan.</h1>
      </div>
      <div className="flex md:mt-6 md:mx-20 md:text-xl text-md font-semibold gap-2 md:gap-10 mt-1">
        <Link className="hover:text-red-500" to="/About">
          About
        </Link>
        <Link className="hover:text-red-500" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
