import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

import JobCard from "./JobCard";

const FeaturedJob = ({ username }) => {
  return (
    <>
      <div className="h-auto py-20">
        <div className="h-1/5 flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            {username}
          </div>
          <Link
            to="/jobs"
            className="mt-10 font-semibold text-lg h-10 w-32 rounded-md border-2 border-[#0a65cc] flex justify-center items-center cursor-pointer hover:bg-[#0a65cc] hover:text-white"
          >
            view all
            <IoMdArrowRoundForward />
          </Link>
        </div>
        <div className="h-auto mx-8 mt-10 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b466f",
              jobTitle: "Full-stack Developer",
              jobType: "Internship",
              companyName: "Google Inc.",
              address: "Govandi, Mumbai",
              salary: 10000,
              logo: "https://logo.clearbit.com/google.com",
              lastDate: 9,
            }}
          />
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b4670",
              jobTitle: "Software Engineer",
              jobType: "Full-time",
              companyName: "Microsoft",
              address: "Bangalore, India",
              salary: 120000,
              logo: "https://logo.clearbit.com/microsoft.com",
              lastDate: 10,
            }}
          />
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b4671",
              jobTitle: "Backend Developer",
              jobType: "Part-time",
              companyName: "Facebook",
              address: "San Francisco, USA",
              salary: 80000,
              logo: "https://logo.clearbit.com/facebook.com",
              lastDate: 15,
            }}
          />
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b4672",
              jobTitle: "Frontend Developer",
              jobType: "Contract",
              companyName: "Apple",
              address: "New York, USA",
              salary: 95000,
              logo: "https://logo.clearbit.com/apple.com",
              lastDate: 20,
            }}
          />
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b4673",
              jobTitle: "DevOps Engineer",
              jobType: "Internship",
              companyName: "Amazon",
              address: "London, UK",
              salary: 110000,
              logo: "https://logo.clearbit.com/amazon.com",
              lastDate: 25,
            }}
          />
          <JobCard
            job={{
              _id: "667e9b04a2354a408f5b4674",
              jobTitle: "Data Scientist",
              jobType: "Full-time",
              companyName: "Netflix",
              address: "Sydney, Australia",
              salary: 130000,
              logo: "https://logo.clearbit.com/netflix.com",
              lastDate: 30,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedJob;
