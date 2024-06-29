import CandidateDashboard from "../components/CandidateDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const token = isAuthenticated();

  useEffect(() => {
    if (!token) {
      navigate("/404", { replace: true });
    } else {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;

      if (role == "Candidate") {
        navigate("/cdashboard", { replace: true });
      } else {
        navigate("/edashboard", { replace: true });
      }
    }
  }, [token, navigate]);

  return <></>;
};

const IfCanLogged = () => {
  return (
    <>
      <Navbar />
      <CandidateDashboard />
      <Footer />
    </>
  );
};

const IfEmpLogged = () => {
  return (
    <>
      <Navbar />
      <EmployeeDashboard />
      <Footer />
    </>
  );
};

export { Dashboard, IfCanLogged, IfEmpLogged };
