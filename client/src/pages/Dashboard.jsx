import CandidateDashboard from "../components/CandidateDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* <CandidateDashboard /> */}
      <EmployeeDashboard />
      <Footer />
    </>
  );
};
