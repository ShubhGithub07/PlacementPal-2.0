import Navbar from "../components/Navbar";
import { HeroArea } from "../components/HeroArea";
import WorkingArea from "../components/WorkingArea";
import PopularCategory from "../components/PopularCategory";
import FeaturedJob from "../components/FeaturedJob";
import TopCompanies from "../components/TopCompanies";
import Testimonial from "../components/Testimonial";
import ChooiseArea from "../components/ChooiseArea";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroArea />
      <WorkingArea />
      <PopularCategory />
      <FeaturedJob username="Featured Jobs" />
      <TopCompanies />
      <Testimonial />
      <ChooiseArea />
      <Footer />
    </>
  );
};
