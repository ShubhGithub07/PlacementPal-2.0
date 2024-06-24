import { Link } from "react-router-dom";
import JobCard from "./JobCard";

const FeaturedJob = () => {
  return (
    <>
      <div className="h-auto py-20">
        <div className="h-1/5 flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            Featured Jobs
          </div>
          <Link
            to="/jobs"
            className="mt-10 font-semibold text-lg h-10 w-32 rounded-md border-2 border-[#0a65cc] flex justify-center items-center cursor-pointer hover:bg-[#0a65cc] hover:text-white"
          >
            view all -K
          </Link>
        </div>
        <div className="h-auto mx-8 mt-10 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default FeaturedJob;
