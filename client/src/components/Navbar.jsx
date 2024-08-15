import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  return (
    <>
      <NavArea />
    </>
  );
};

const NavArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logUser, setLogUser] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        setLogUser(decodedToken.role);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
    <>
      <div className="w-full fixed top-0 left-0 h-[65px] backdrop-blur-3xl bg-white/60 border-b-2 flex flex-row justify-between items-center z-10">
        <LogoArea />
        <MenuIcon toggleMenu={toggleMenu} />
        <NavMenus isOpen={isOpen} user={logUser} />
      </div>
    </>
  );
};

const LogoArea = () => {
  return <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-36 text-2xl font-semibold">Job<span className=" font-extrabold">Hub</span></div>;
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

const NavMenus = ({ isOpen, user }) => {

  const guestLinks = [
    { path: "/", label: "Home" },
    { path: "/jobs", label: "Jobs" },
  ];

  const loggedInCandidateLinks = [
    ...guestLinks,
    { path: "/dashboard", label: "Dashboard" },
    { path: "/notification", label: "Notification" },
    { path: "/userprofile", label: "Profile" },
  ];

  const loggedInEmployerLinks = [
    ...guestLinks,
    { path: "/dashboard", label: "Dashboard" },
    { path: "/notification", label: "Notification" },
    { path: "/userprofile", label: "Profile" },
    { path: "/companyprofile", label: "Company" },
  ];

  const renderLinks = user
    ? user === "Candidate"
      ? loggedInCandidateLinks
      : loggedInEmployerLinks
    : guestLinks;

  return (
    <ul
      className={`flex-col sm:flex-row sm:flex sm:mr-8 md:mr-12 lg:mr-24 items-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {renderLinks.map((link, index) => (
        <li
          key={index}
          className="hover:bg-[#e7f0fa] font-semibold px-2 h-8 rounded-md cursor-pointer flex justify-center items-center"
        >
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
      {!user && (
        <>
          <Link
            to="/login"
            className="bg-[#0a65cc] text-white font-semibold w-20 h-8 rounded-md shadow hover:shadow-xl cursor-pointer flex justify-center items-center ml-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#0a65cc] text-white font-semibold w-20 h-8 rounded-md shadow hover:shadow-xl cursor-pointer flex justify-center items-center ml-2"
          >
            Sign up
          </Link>
        </>
      )}
    </ul>
  );
};

export default Navbar;
