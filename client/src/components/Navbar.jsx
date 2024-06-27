import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 h-[65px] backdrop-blur-3xl bg-white/30 border-b-2 flex flex-row justify-between items-center z-10">
        <LogoArea />
        <MenuIcon toggleMenu={toggleMenu} />
        <NavMenus isOpen={isOpen} />
      </div>
    </>
  );
};

const LogoArea = () => {
  return <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-36">IamLogo</div>;
};

const MenuIcon = ({ toggleMenu }) => {
  return (
    <div className="block sm:hidden mr-4 cursor-pointer" onClick={toggleMenu}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
  );
};

const NavMenus = ({ isOpen }) => {
  return (
    <ul
      className={`flex-col sm:flex-row sm:flex sm:mr-8 md:mr-12 lg:mr-24 items-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <li className="hover:bg-[#e7f0fa] font-semibold px-2 h-8 rounded-md cursor-pointer flex justify-center items-center">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-[#e7f0fa] font-semibold px-2 h-8 rounded-md cursor-pointer flex justify-center items-center">
        <Link to="/jobs">Jobs</Link>
      </li>
      <li className="hover:bg-[#e7f0fa] font-semibold px-2 h-8 rounded-md cursor-pointer flex justify-center items-center">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="hover:bg-[#e7f0fa] font-semibold px-2 h-8 rounded-md cursor-pointer flex justify-center items-center sm:mr-2 md:mr-4 lg:mr-5">
        <Link to="/notification">Notification</Link>
      </li>
      <Link
        to="/login"
        className="bg-[#0a65cc] text-white font-semibold w-20 h-8 rounded-md shadow hover:shadow-xl cursor-pointer flex justify-center items-center"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-[#0a65cc] text-white font-semibold w-20 h-8 rounded-md shadow hover:shadow-xl cursor-pointer flex justify-center items-center sm:ml-2 md:ml-3 lg:ml-5 mt-2 sm:mt-0"
      >
        Sign up
      </Link>
    </ul>
  );
};

export default Navbar;
