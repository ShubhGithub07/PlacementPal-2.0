import Navbar from "../components/Navbar.jsx";
import JobDetails from "../components/JobDetails.jsx";
import Footer from "../components/Footer.jsx";

export const JobDetailed = () => {
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
