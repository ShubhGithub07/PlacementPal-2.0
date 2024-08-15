import Navbar from "../components/Navbar";


import { HeroArea } from "../components/HeroArea";
import WorkingArea from "../components/WorkingArea";
import PopularCategory from "../components/PopularCategory";
import FeaturedJob from "../components/FeaturedJob";
import TopCompanies from "../components/TopCompanies";
import Testimonial from "../components/Testimonial";
import ChooiseArea from "../components/ChooiseArea";
import Footer from "../components/Footer";

export const Notification = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen flex justify-center items-center">
        <span className=" text-4xl font-semibold">No new notification</span>
      </div>
      <Footer />
    </>
  );
};


