import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobDetails from "../components/JobDetails.jsx";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
  // const navigate = useNavigate();
};

export const CompanyDetails = () => {
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <>
      <Navbar />
      <JobDetails />
      <Footer />
    </>
  );
};
