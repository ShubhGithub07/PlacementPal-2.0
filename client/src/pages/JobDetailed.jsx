import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobDetails from "../components/JobDetails.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export const JobDetailed = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/404", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Navbar />
      <div className=" w-full h-[200vh] bg-[#f7f7f8]">
        <JobDetails />
        <Footer />
      </div>
    </>
  );
};
