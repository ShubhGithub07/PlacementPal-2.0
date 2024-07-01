import Navbar from "../components/Navbar";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export const CompanyProfile = () => {
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
      <CompanyInfo />
      <Footer />
    </>
  );
};
